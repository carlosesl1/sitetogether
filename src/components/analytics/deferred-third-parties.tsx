"use client";

import { useEffect } from "react";

const THIRD_PARTY_FALLBACK_DELAY_MS = 12_000;
const LEADSTER_STAGGER_DELAY_MS = 1_000;
const GTM_CONTAINER_ID = "GTM-NRXBFNQN";
const LEADSTER_ID = "SdTbxs4BtXBoE0Bl0XDU5cUcz";

type MarketingWindow = Window & {
  dataLayer?: Array<Record<string, unknown>>;
  neuroleadId?: string;
};

function appendExternalScript(id: string, src: string) {
  if (document.getElementById(id)) return;

  const script = document.createElement("script");
  script.id = id;
  script.src = src;
  script.async = true;
  document.head.appendChild(script);
}

function loadGoogleTagManager() {
  const marketingWindow = window as MarketingWindow;
  marketingWindow.dataLayer = marketingWindow.dataLayer ?? [];
  marketingWindow.dataLayer.push({
    "gtm.start": Date.now(),
    event: "gtm.js",
  });

  appendExternalScript(
    "google-tag-manager",
    `https://www.googletagmanager.com/gtm.js?id=${GTM_CONTAINER_ID}`,
  );
}

function loadLeadster() {
  const marketingWindow = window as MarketingWindow;
  marketingWindow.neuroleadId = LEADSTER_ID;

  if (document.getElementById("leadster-neurolead")) return;

  const script = document.createElement("script");
  script.id = "leadster-neurolead";
  script.src = "https://cdn.leadster.com.br/neurolead/neurolead.min.js";
  script.charset = "UTF-8";
  script.defer = true;
  document.head.appendChild(script);
}

export function DeferredThirdParties() {
  useEffect(() => {
    let hasStarted = false;
    let leadsterTimer: number | null = null;
    const intentEvents = ["pointerdown", "touchstart", "keydown", "scroll"] as const;
    let fallbackTimer = 0;

    const removeIntentListeners = () => {
      intentEvents.forEach((eventName) => {
        window.removeEventListener(eventName, startLoading);
      });
    };

    function startLoading() {
      if (hasStarted) return;
      hasStarted = true;
      removeIntentListeners();
      window.clearTimeout(fallbackTimer);

      loadGoogleTagManager();
      leadsterTimer = window.setTimeout(loadLeadster, LEADSTER_STAGGER_DELAY_MS);
    }

    intentEvents.forEach((eventName) => {
      window.addEventListener(eventName, startLoading, {
        once: true,
        passive: true,
      });
    });

    fallbackTimer = window.setTimeout(
      startLoading,
      THIRD_PARTY_FALLBACK_DELAY_MS,
    );

    return () => {
      removeIntentListeners();
      window.clearTimeout(fallbackTimer);

      if (leadsterTimer !== null) {
        window.clearTimeout(leadsterTimer);
      }
    };
  }, []);

  return null;
}
