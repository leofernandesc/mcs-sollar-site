const NAVIGATION_FALLBACK_MS = 1500;

export function deferQuoteNavigation(
  event,
  anchor,
  trackQuoteClick,
  {
    navigate,
    setTimeoutFn,
    clearTimeoutFn,
    timeoutMs = NAVIGATION_FALLBACK_MS,
  },
) {
  if (
    event.defaultPrevented ||
    event.button !== 0 ||
    event.metaKey ||
    event.ctrlKey ||
    event.shiftKey ||
    event.altKey ||
    (anchor.target && anchor.target.toLowerCase() !== "_self")
  ) {
    return false;
  }

  event.preventDefault();

  let navigationStarted = false;
  let timeoutId;
  const continueNavigation = () => {
    if (navigationStarted) return;
    navigationStarted = true;
    if (timeoutId !== undefined) clearTimeoutFn(timeoutId);
    navigate(anchor.href);
  };

  timeoutId = setTimeoutFn(continueNavigation, timeoutMs);
  if (!trackQuoteClick(continueNavigation)) continueNavigation();

  return true;
}
