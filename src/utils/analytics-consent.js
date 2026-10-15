const DEFAULT_MEASUREMENT_ID = "G-DN2JNCM7VC";
const CONSENT_STORAGE_KEY = "mcs-sollar-analytics-consent";
const CONSENT_MAX_AGE_DAYS = 180;
const GOOGLE_TAG_URL = "https://www.googletagmanager.com/gtag/js";
const REVOKED_ANALYTICS_CSP = "connect-src 'self'; img-src 'self' data: blob:";
const QUOTE_EVENT_CALLBACK_TIMEOUT_MS = 1000;

const DENIED_CONSENT = Object.freeze({
  analytics_storage: "denied",
  ad_storage: "denied",
  ad_user_data: "denied",
  ad_personalization: "denied",
});

function getStorage(windowRef) {
  try {
    return windowRef.localStorage;
  } catch {
    return undefined;
  }
}

function createGtagQueue(windowRef) {
  windowRef.dataLayer = windowRef.dataLayer || [];

  if (typeof windowRef.gtag !== "function") {
    windowRef.gtag = function gtag() {
      windowRef.dataLayer.push(arguments);
    };
  }

  return windowRef.gtag;
}

function isConsentChoice(value) {
  return value === "granted" || value === "denied";
}

function cookieNamesToClear(cookieHeader) {
  return cookieHeader
    .split(";")
    .map((cookie) => cookie.trim().split("=", 1)[0])
    .filter((name) => /^_ga(?:_|$)|^_gid$|^_gat(?:_|$)|^_gac(?:_|$)/.test(name));
}

function clearAnalyticsCookies(documentRef) {
  let cookieHeader = "";
  try {
    cookieHeader = documentRef.cookie || "";
  } catch {
    return;
  }

  const names = cookieNamesToClear(cookieHeader);
  const hostname = documentRef.location?.hostname;
  const rootDomain = hostname?.replace(/^www\./i, "");
  const domains = hostname
    ? [...new Set([undefined, hostname, `.${hostname}`, rootDomain, rootDomain && `.${rootDomain}`])]
    : [undefined];

  for (const name of names) {
    for (const domain of domains) {
      const domainAttribute = domain ? `; Domain=${domain}` : "";
      try {
        documentRef.cookie = `${name}=; Max-Age=0; Path=/; SameSite=Lax${domainAttribute}`;
      } catch {
        // Cookie access may be blocked by the browser.
      }
    }
  }
}

export function createAnalyticsConsent({
  windowRef = window,
  documentRef = document,
  storage = getStorage(windowRef),
  now = () => Date.now(),
  measurementId = DEFAULT_MEASUREMENT_ID,
} = {}) {
  const gtag = createGtagQueue(windowRef);
  let initialized = false;
  let tagState = "idle";
  let configurationQueued = false;
  let hasSavedChoice = false;
  let analyticsChoice = "denied";
  let pendingEvents = [];
  let analyticsNetworkLocked = false;

  function lockAnalyticsNetwork() {
    if (analyticsNetworkLocked) return true;

    try {
      const policy = documentRef.createElement("meta");
      policy.httpEquiv = "Content-Security-Policy";
      policy.content = REVOKED_ANALYTICS_CSP;
      policy.dataset.analyticsRevocationLock = "true";
      documentRef.head.appendChild(policy);
      analyticsNetworkLocked = true;
      return true;
    } catch {
      return false;
    }
  }

  function readSavedChoice() {
    const raw = (() => {
      try {
        return storage?.getItem(CONSENT_STORAGE_KEY);
      } catch {
        return null;
      }
    })();
    if (!raw) return null;

    try {
      const saved = JSON.parse(raw);
      if (
        saved?.version !== 1 ||
        !isConsentChoice(saved.analytics) ||
        !Number.isFinite(saved.expiresAt) ||
        saved.expiresAt <= now()
      ) {
        storage?.removeItem(CONSENT_STORAGE_KEY);
        clearAnalyticsCookies(documentRef);
        return null;
      }

      return saved.analytics;
    } catch {
      try {
        storage?.removeItem(CONSENT_STORAGE_KEY);
      } catch {
        // A blocked or unavailable storage does not grant analytics consent.
      }
      clearAnalyticsCookies(documentRef);
      return null;
    }
  }

  function saveChoice(choice) {
    try {
      storage?.setItem(
        CONSENT_STORAGE_KEY,
        JSON.stringify({
          version: 1,
          analytics: choice,
          expiresAt: now() + CONSENT_MAX_AGE_DAYS * 24 * 60 * 60 * 1000,
        }),
      );
    } catch {
      // The choice remains effective for this page view when storage is blocked.
    }
  }

  function configureOnce() {
    if (configurationQueued || analyticsChoice !== "granted") return;

    configurationQueued = true;
    gtag("js", new Date(now()));
    gtag("config", measurementId, {
      allow_google_signals: false,
      allow_ad_personalization_signals: false,
    });

    const queuedEvents = pendingEvents;
    pendingEvents = [];
    for (const { name, onComplete } of queuedEvents) {
      if (analyticsChoice !== "granted") {
        onComplete?.();
        continue;
      }
      dispatchEvent(name, onComplete);
    }
  }

  function dispatchEvent(eventName, onComplete) {
    if (typeof onComplete === "function") {
      gtag("event", eventName, {
        event_callback: onComplete,
        event_timeout: QUOTE_EVENT_CALLBACK_TIMEOUT_MS,
      });
    } else {
      gtag("event", eventName);
    }
  }

  function finishPendingEvents() {
    const queuedEvents = pendingEvents;
    pendingEvents = [];
    for (const { onComplete } of queuedEvents) onComplete?.();
  }

  function ensureTagLoaded() {
    if (analyticsChoice !== "granted") return;

    if (tagState === "loaded") {
      configureOnce();
      return;
    }
    if (tagState === "loading") return;

    tagState = "loading";
    const script = documentRef.createElement("script");
    script.async = true;
    script.src = `${GOOGLE_TAG_URL}?id=${encodeURIComponent(measurementId)}`;
    script.dataset.googleAnalytics = measurementId;
    script.onload = () => {
      tagState = "loaded";
      if (analyticsChoice === "granted") {
        windowRef[`ga-disable-${measurementId}`] = false;
        configureOnce();
      } else {
        finishPendingEvents();
        windowRef[`ga-disable-${measurementId}`] = true;
      }
    };
    script.onerror = () => {
      tagState = "failed";
      finishPendingEvents();
      windowRef[`ga-disable-${measurementId}`] = true;
    };
    documentRef.head.appendChild(script);
  }

  function applyChoice(choice, { persist = true } = {}) {
    analyticsChoice = choice;
    hasSavedChoice = persist || hasSavedChoice;
    let reloadRequired = false;

    if (persist) saveChoice(choice);

    if (choice === "granted" && analyticsNetworkLocked) {
      // A restrictive CSP cannot be loosened in the current document. Reload
      // from the saved choice before enabling analytics again.
      return { hasSavedChoice, analytics: analyticsChoice, reloadRequired: true };
    }

    const consent = {
      ...DENIED_CONSENT,
      analytics_storage: choice,
    };

    if (choice === "granted") {
      windowRef[`ga-disable-${measurementId}`] = false;
      gtag("consent", "update", consent);
      ensureTagLoaded();
    } else {
      windowRef[`ga-disable-${measurementId}`] = true;
      if (tagState === "loaded" || tagState === "loading") {
        // Google Tag can defer an outbound-click hit. A document policy blocks
        // that queued request after revocation, including beacon/fetch and
        // image transports. Reload to discard the loaded tag and its queues.
        lockAnalyticsNetwork();
        reloadRequired = true;
      }
      gtag("consent", "update", consent);
      clearAnalyticsCookies(documentRef);
      finishPendingEvents();
    }

    return { hasSavedChoice, analytics: analyticsChoice, reloadRequired };
  }

  function initialize() {
    if (initialized) {
      return { hasSavedChoice, analytics: analyticsChoice };
    }

    initialized = true;
    windowRef[`ga-disable-${measurementId}`] = true;
    gtag("consent", "default", { ...DENIED_CONSENT });

    const savedChoice = readSavedChoice();
    if (savedChoice) {
      hasSavedChoice = true;
      applyChoice(savedChoice, { persist: false });
    } else {
      clearAnalyticsCookies(documentRef);
    }

    return { hasSavedChoice, analytics: analyticsChoice };
  }

  function setChoice(choice) {
    if (!isConsentChoice(choice)) {
      throw new TypeError('Consent choice must be "granted" or "denied".');
    }

    if (!initialized) initialize();
    return applyChoice(choice);
  }

  function trackQuoteClick(onComplete) {
    if (analyticsChoice !== "granted" || analyticsNetworkLocked) return false;

    if (tagState === "loaded" && configurationQueued) {
      dispatchEvent("whatsapp_quote_click", onComplete);
      return true;
    }

    if (tagState === "loading") {
      pendingEvents.push({ name: "whatsapp_quote_click", onComplete });
      return true;
    }

    return false;
  }

  return {
    initialize,
    setChoice,
    trackQuoteClick,
    getChoice: () => analyticsChoice,
    hasSavedChoice: () => hasSavedChoice,
  };
}

export const analyticsConsentConstants = Object.freeze({
  storageKey: CONSENT_STORAGE_KEY,
  maxAgeDays: CONSENT_MAX_AGE_DAYS,
  measurementId: DEFAULT_MEASUREMENT_ID,
});
