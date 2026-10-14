const GTM_CONTAINER_ID = "GTM-NRXBFNQN";
const GATEWAY_PATH = "/h8ny";
const GATEWAY_FALLBACK_MS = 8_000;

type MarketingWindow = Window & {
  dataLayer?: Array<Record<string, unknown>>;
  google_tag_manager?: Record<string, unknown>;
};

export function initializeGoogleTagManager() {
  const marketingWindow = window as MarketingWindow;
  const dataLayer = (marketingWindow.dataLayer ??= []);

  // The Gateway loads the container; our immediate start event still fires its tags.
  // Preserve events queued by forms before initialization and on React remounts.
  if (!dataLayer.some((entry) => entry?.event === "gtm.js")) {
    dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });
  }

  const containerIsLoaded = () =>
    Boolean(marketingWindow.google_tag_manager?.[GTM_CONTAINER_ID]);

  function loadDirectly() {
    if (containerIsLoaded() || document.getElementById("google-tag-manager")) return;
    const script = document.createElement("script");
    script.id = "google-tag-manager";
    script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_CONTAINER_ID}`;
    script.async = true;
    document.head.appendChild(script);
  }

  const gateway = Array.from(document.scripts).find((script) => {
    if (!script.src) return false;
    const url = new URL(script.src, window.location.origin);
    return url.origin === window.location.origin &&
      url.pathname.replace(/\/$/, "") === GATEWAY_PATH;
  });

  if (!gateway) {
    loadDirectly();
    return () => {};
  }

  // Keep the existing direct path available if the injected loader fails.
  gateway.addEventListener("error", loadDirectly, { once: true });
  const fallbackTimer = window.setTimeout(loadDirectly, GATEWAY_FALLBACK_MS);
  return () => {
    gateway.removeEventListener("error", loadDirectly);
    window.clearTimeout(fallbackTimer);
  };
}
