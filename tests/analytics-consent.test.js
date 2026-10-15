import assert from "node:assert/strict";
import test from "node:test";
import {
  analyticsConsentConstants,
  createAnalyticsConsent,
} from "../src/utils/analytics-consent.js";

const fixedNow = 1_800_000_000_000;

function makeEnvironment({ savedChoice, now = fixedNow, failStorage = false } = {}) {
  const storedValues = new Map();
  const storage = {
    getItem(key) {
      if (failStorage) throw new Error("storage unavailable");
      return storedValues.get(key) ?? null;
    },
    setItem(key, value) {
      if (failStorage) throw new Error("storage unavailable");
      storedValues.set(key, value);
    },
    removeItem(key) {
      if (failStorage) throw new Error("storage unavailable");
      storedValues.delete(key);
    },
  };

  if (savedChoice) {
    storedValues.set(
      analyticsConsentConstants.storageKey,
      JSON.stringify(savedChoice),
    );
  }

  const scripts = [];
  const policies = [];
  const cookieWrites = [];
  const windowRef = {};
  const documentRef = {
    location: { hostname: "mcssollar.com.br" },
    head: {
      appendChild(element) {
        if (element.tagName === "script") scripts.push(element);
        else policies.push(element);
        return element;
      },
    },
    createElement(tagName) {
      return { tagName, dataset: {} };
    },
    cookie: "_ga=old; _ga_G-DN2JNCM7VC=old; unrelated=value",
  };
  Object.defineProperty(documentRef, "cookie", {
    get() {
      return "_ga=old; _ga_G-DN2JNCM7VC=old; unrelated=value";
    },
    set(value) {
      cookieWrites.push(value);
    },
  });

  const consent = createAnalyticsConsent({
    windowRef,
    documentRef,
    storage,
    now: () => now,
  });

  return {
    consent,
    cookieWrites,
    documentRef,
    policies,
    scripts,
    storage,
    storedValues,
    windowRef,
  };
}

function callsFrom(windowRef) {
  return windowRef.dataLayer.map((entry) => Array.from(entry));
}

function lastConsentUpdate(calls) {
  return calls.filter(
    (call) => call[0] === "consent" && call[1] === "update",
  ).at(-1)?.[2];
}

function assertAllDenied(consent) {
  assert.deepEqual(consent, {
    analytics_storage: "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
}

test("starts denied without loading Google or queuing measurement commands", () => {
  const environment = makeEnvironment();
  const initial = environment.consent.initialize();
  const calls = callsFrom(environment.windowRef);

  assert.equal(initial.hasSavedChoice, false);
  assert.equal(environment.scripts.length, 0);
  assertAllDenied(calls[0][2]);
  assert.deepEqual(calls[0].slice(0, 2), ["consent", "default"]);
  assert.equal(
    calls.some((call) => call[0] === "config" || call[0] === "event"),
    false,
  );
  assert.equal(
    environment.windowRef[`ga-disable-${analyticsConsentConstants.measurementId}`],
    true,
  );
  assert.equal(environment.consent.trackQuoteClick(), false);
});

test("refusal persists a denied choice and never loads or sends measurement", () => {
  const environment = makeEnvironment();
  environment.consent.initialize();
  environment.consent.setChoice("denied");

  const calls = callsFrom(environment.windowRef);
  const saved = JSON.parse(
    environment.storage.getItem(analyticsConsentConstants.storageKey),
  );

  assert.equal(saved.analytics, "denied");
  assert.equal(
    saved.expiresAt,
    fixedNow + analyticsConsentConstants.maxAgeDays * 86_400_000,
  );
  assertAllDenied(lastConsentUpdate(calls));
  assert.equal(environment.scripts.length, 0);
  assert.equal(calls.some((call) => call[0] === "event"), false);
  assert.equal(environment.consent.trackQuoteClick(), false);
});

test("acceptance loads one tag after consent and configures one automatic page view", () => {
  const environment = makeEnvironment();
  environment.consent.initialize();
  environment.consent.setChoice("granted");

  assert.equal(environment.scripts.length, 1);
  assert.equal(environment.scripts[0].async, true);
  assert.equal(
    environment.scripts[0].src,
    "https://www.googletagmanager.com/gtag/js?id=G-DN2JNCM7VC",
  );
  assert.equal(
    callsFrom(environment.windowRef).some((call) => call[0] === "config"),
    false,
  );

  environment.scripts[0].onload();

  const calls = callsFrom(environment.windowRef);
  const configCalls = calls.filter((call) => call[0] === "config");
  assert.equal(configCalls.length, 1);
  assert.deepEqual(configCalls[0][2], {
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
  });
  assert.equal(calls.filter((call) => call[0] === "event").length, 0);
  assert.equal(environment.windowRef[`ga-disable-${analyticsConsentConstants.measurementId}`], false);
  assert.deepEqual(lastConsentUpdate(calls), {
    analytics_storage: "granted",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });

  environment.consent.setChoice("granted");
  assert.equal(environment.scripts.length, 1);
  assert.equal(callsFrom(environment.windowRef).filter((call) => call[0] === "config").length, 1);
  assert.equal(environment.consent.trackQuoteClick(), true);
  assert.equal(
    callsFrom(environment.windowRef).filter(
      (call) => call[0] === "event" && call[1] === "whatsapp_quote_click",
    ).length,
    1,
  );
});

test("quote event provides a completion callback before same-page navigation", () => {
  const environment = makeEnvironment();
  environment.consent.initialize();
  environment.consent.setChoice("granted");
  environment.scripts[0].onload();
  let completed = 0;

  assert.equal(environment.consent.trackQuoteClick(() => completed++), true);

  const eventCall = callsFrom(environment.windowRef).find(
    (call) => call[0] === "event" && call[1] === "whatsapp_quote_click",
  );
  assert.equal(typeof eventCall[2].event_callback, "function");
  assert.equal(eventCall[2].event_timeout, 1000);
  assert.equal(completed, 0);
  eventCall[2].event_callback();
  assert.equal(completed, 1);
});

test("quote event clicked while the tag loads is flushed with its navigation callback", () => {
  const environment = makeEnvironment();
  environment.consent.initialize();
  environment.consent.setChoice("granted");
  let completed = 0;

  assert.equal(environment.consent.trackQuoteClick(() => completed++), true);
  assert.equal(
    callsFrom(environment.windowRef).some(
      (call) => call[0] === "event" && call[1] === "whatsapp_quote_click",
    ),
    false,
  );

  environment.scripts[0].onload();
  const eventCall = callsFrom(environment.windowRef).find(
    (call) => call[0] === "event" && call[1] === "whatsapp_quote_click",
  );
  assert.equal(typeof eventCall[2].event_callback, "function");
  eventCall[2].event_callback();
  assert.equal(completed, 1);
});

test("pending quote navigation continues if tag loading fails or consent is revoked", () => {
  const failed = makeEnvironment();
  failed.consent.initialize();
  failed.consent.setChoice("granted");
  let failedNavigation = 0;
  failed.consent.trackQuoteClick(() => failedNavigation++);
  failed.scripts[0].onerror();
  assert.equal(failedNavigation, 1);
  assert.equal(
    callsFrom(failed.windowRef).some((call) => call[0] === "event"),
    false,
  );

  const revoked = makeEnvironment();
  revoked.consent.initialize();
  revoked.consent.setChoice("granted");
  let revokedNavigation = 0;
  revoked.consent.trackQuoteClick(() => revokedNavigation++);
  revoked.consent.setChoice("denied");
  assert.equal(revokedNavigation, 1);
  assert.equal(
    callsFrom(revoked.windowRef).some(
      (call) => call[0] === "event" && call[1] === "whatsapp_quote_click",
    ),
    false,
  );
});

test("a saved acceptance sets defaults first and loads the tag once", () => {
  const environment = makeEnvironment({
    savedChoice: {
      version: 1,
      analytics: "granted",
      expiresAt: fixedNow + 1,
    },
  });
  const initial = environment.consent.initialize();
  const calls = callsFrom(environment.windowRef);

  assert.equal(initial.hasSavedChoice, true);
  assert.equal(initial.analytics, "granted");
  assert.equal(environment.scripts.length, 1);
  assert.deepEqual(calls[0].slice(0, 2), ["consent", "default"]);
  assert.deepEqual(lastConsentUpdate(calls).analytics_storage, "granted");
  environment.scripts[0].onload();
  assert.equal(callsFrom(environment.windowRef).filter((call) => call[0] === "config").length, 1);
});

test("expired choices are removed and cannot load the Google tag", () => {
  const environment = makeEnvironment({
    savedChoice: {
      version: 1,
      analytics: "granted",
      expiresAt: fixedNow,
    },
  });
  const initial = environment.consent.initialize();

  assert.equal(initial.hasSavedChoice, false);
  assert.equal(environment.storage.getItem(analyticsConsentConstants.storageKey), null);
  assert.equal(environment.scripts.length, 0);
  assert.equal(callsFrom(environment.windowRef).some((call) => call[0] === "config"), false);
});

test("revocation after tag load locks network access and stops custom events", () => {
  const environment = makeEnvironment();
  environment.consent.initialize();
  environment.consent.setChoice("granted");
  environment.scripts[0].onload();
  assert.equal(environment.consent.trackQuoteClick(), true);
  const eventCountBeforeRevocation = callsFrom(environment.windowRef).filter(
    (call) => call[0] === "event",
  ).length;

  const result = environment.consent.setChoice("denied");

  const calls = callsFrom(environment.windowRef);
  assert.equal(result.reloadRequired, true);
  assert.equal(environment.policies.length, 1);
  assert.equal(environment.policies[0].httpEquiv, "Content-Security-Policy");
  assert.equal(
    environment.policies[0].content,
    "connect-src 'self'; img-src 'self' data: blob:",
  );
  assert.equal(environment.windowRef[`ga-disable-${analyticsConsentConstants.measurementId}`], true);
  assertAllDenied(lastConsentUpdate(calls));
  assert.equal(environment.cookieWrites.some((cookie) => cookie.includes("Max-Age=0")), true);
  assert.equal(environment.consent.trackQuoteClick(), false);
  assert.equal(
    callsFrom(environment.windowRef).filter((call) => call[0] === "event").length,
    eventCountBeforeRevocation,
  );
  assert.equal(environment.consent.setChoice("granted").reloadRequired, true);
  assert.equal(environment.windowRef[`ga-disable-${analyticsConsentConstants.measurementId}`], true);
  assert.equal(environment.consent.trackQuoteClick(), false);
});

test("revocation while the tag is loading drops queued custom events", () => {
  const environment = makeEnvironment();
  environment.consent.initialize();
  environment.consent.setChoice("granted");
  assert.equal(environment.consent.trackQuoteClick(), true);

  const revoke = environment.consent.setChoice("denied");
  environment.scripts[0].onload();

  let calls = callsFrom(environment.windowRef);
  assert.equal(revoke.reloadRequired, true);
  assert.equal(environment.windowRef[`ga-disable-${analyticsConsentConstants.measurementId}`], true);
  assert.equal(environment.policies.length, 1);
  assert.equal(calls.filter((call) => call[0] === "config").length, 0);
  assert.equal(calls.filter((call) => call[0] === "event").length, 0);

  const regrant = environment.consent.setChoice("granted");
  calls = callsFrom(environment.windowRef);
  assert.equal(regrant.reloadRequired, true);
  assert.equal(environment.scripts.length, 1);
  assert.equal(calls.filter((call) => call[0] === "config").length, 0);
  assert.equal(calls.filter((call) => call[0] === "event").length, 0);
});

test("re-grant after a loaded revocation requires a fresh document", () => {
  const environment = makeEnvironment();
  environment.consent.initialize();
  environment.consent.setChoice("granted");
  environment.scripts[0].onload();
  environment.consent.setChoice("denied");
  const regrant = environment.consent.setChoice("granted");

  const calls = callsFrom(environment.windowRef);
  const saved = JSON.parse(
    environment.storage.getItem(analyticsConsentConstants.storageKey),
  );
  assert.equal(regrant.reloadRequired, true);
  assert.equal(saved.analytics, "granted");
  assert.equal(environment.scripts.length, 1);
  assert.equal(calls.filter((call) => call[0] === "config").length, 1);
  assert.equal(environment.consent.trackQuoteClick(), false);
});

test("tag-load failure can be retried without queueing duplicate configuration", () => {
  const environment = makeEnvironment();
  environment.consent.initialize();
  environment.consent.setChoice("granted");
  environment.scripts[0].onerror();

  environment.consent.setChoice("granted");
  assert.equal(environment.scripts.length, 2);
  environment.scripts[1].onload();
  assert.equal(callsFrom(environment.windowRef).filter((call) => call[0] === "config").length, 1);
});

test("storage failures do not grant consent on a later visit", () => {
  const environment = makeEnvironment({ failStorage: true });
  environment.consent.initialize();
  environment.consent.setChoice("granted");
  assert.equal(environment.scripts.length, 1);

  const nextVisit = makeEnvironment({ failStorage: true });
  assert.equal(nextVisit.consent.initialize().analytics, "denied");
  assert.equal(nextVisit.scripts.length, 0);
});
