import assert from "node:assert/strict";
import test from "node:test";
import { deferQuoteNavigation } from "../src/utils/quote-navigation.js";

function makeClickEvent(overrides = {}) {
  return {
    defaultPrevented: false,
    button: 0,
    metaKey: false,
    ctrlKey: false,
    shiftKey: false,
    altKey: false,
    preventDefault() {
      this.defaultPrevented = true;
    },
    ...overrides,
  };
}

function makeTimer() {
  const timers = [];
  return {
    clearTimeout(id) {
      const timer = timers.find((entry) => entry.id === id);
      if (timer) timer.cleared = true;
    },
    run(id) {
      const timer = timers.find((entry) => entry.id === id);
      if (timer && !timer.cleared) timer.callback();
    },
    setTimeout(callback, delay) {
      const id = timers.length + 1;
      timers.push({ id, callback, delay, cleared: false });
      return id;
    },
    timers,
  };
}

test("quote navigation waits for the analytics callback and runs only once", () => {
  const event = makeClickEvent();
  const timer = makeTimer();
  const navigations = [];
  let analyticsCallback;

  assert.equal(
    deferQuoteNavigation(
      event,
      { href: "https://wa.me/5592999960878", target: "" },
      (callback) => {
        analyticsCallback = callback;
        return true;
      },
      {
        navigate: (href) => navigations.push(href),
        setTimeoutFn: timer.setTimeout,
        clearTimeoutFn: timer.clearTimeout,
      },
    ),
    true,
  );

  assert.equal(event.defaultPrevented, true);
  assert.deepEqual(navigations, []);
  assert.equal(timer.timers[0].delay, 1500);

  analyticsCallback();
  timer.run(timer.timers[0].id);
  assert.deepEqual(navigations, ["https://wa.me/5592999960878"]);
  assert.equal(timer.timers[0].cleared, true);
});

test("quote navigation falls back if the analytics callback never arrives", () => {
  const timer = makeTimer();
  const navigations = [];
  const event = makeClickEvent();

  deferQuoteNavigation(
    event,
    { href: "https://wa.me/quote", target: "" },
    () => true,
    {
      navigate: (href) => navigations.push(href),
      setTimeoutFn: timer.setTimeout,
      clearTimeoutFn: timer.clearTimeout,
    },
  );

  timer.run(timer.timers[0].id);
  assert.deepEqual(navigations, ["https://wa.me/quote"]);
});

test("a refused or failed measurement does not block quote navigation", () => {
  const timer = makeTimer();
  const navigations = [];
  const event = makeClickEvent();

  deferQuoteNavigation(
    event,
    { href: "https://wa.me/quote", target: "" },
    () => false,
    {
      navigate: (href) => navigations.push(href),
      setTimeoutFn: timer.setTimeout,
      clearTimeoutFn: timer.clearTimeout,
    },
  );

  assert.equal(event.defaultPrevented, true);
  assert.deepEqual(navigations, ["https://wa.me/quote"]);
  assert.equal(timer.timers[0].cleared, true);
});

test("modified clicks and new-tab links keep native browser navigation", () => {
  const timer = makeTimer();
  const clicks = [makeClickEvent({ ctrlKey: true }), makeClickEvent({ button: 1 })];
  const navigations = [];
  let trackingCalls = 0;

  for (const event of clicks) {
    assert.equal(
      deferQuoteNavigation(
        event,
        { href: "https://wa.me/quote", target: "" },
        () => {
          trackingCalls++;
          return true;
        },
        {
          navigate: (href) => navigations.push(href),
          setTimeoutFn: timer.setTimeout,
          clearTimeoutFn: timer.clearTimeout,
        },
      ),
      false,
    );
    assert.equal(event.defaultPrevented, false);
  }

  const newTabEvent = makeClickEvent();
  assert.equal(
    deferQuoteNavigation(
      newTabEvent,
      { href: "https://wa.me/quote", target: "_blank" },
      () => {
        trackingCalls++;
        return true;
      },
      {
        navigate: (href) => navigations.push(href),
        setTimeoutFn: timer.setTimeout,
        clearTimeoutFn: timer.clearTimeout,
      },
    ),
    false,
  );
  assert.equal(newTabEvent.defaultPrevented, false);
  assert.equal(trackingCalls, 0);
  assert.deepEqual(navigations, []);
});
