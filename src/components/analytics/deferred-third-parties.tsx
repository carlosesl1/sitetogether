"use client";

import { useEffect } from "react";
import { initializeGoogleTagManager } from "@/lib/google-tag-manager";

const LEADSTER_FALLBACK_DELAY_MS = 12_000;
const LEADSTER_STAGGER_DELAY_MS = 1_000;
const LEADSTER_ID = "SdTbxs4BtXBoE0Bl0XDU5cUcz";

type MarketingWindow = Window & {
  neuroleadId?: string;
};

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
    const stopWaitingForGoogleTagManager = initializeGoogleTagManager();

    let hasStartedLeadster = false;
    let leadsterTimer: number | null = null;
    const intentEvents = ["pointerdown", "touchstart", "keydown", "scroll"] as const;
    let fallbackTimer = 0;

    const removeIntentListeners = () => {
      intentEvents.forEach((eventName) => {
        window.removeEventListener(eventName, startLeadsterLoading);
      });
    };

    function startLeadsterLoading() {
      if (hasStartedLeadster) return;
      hasStartedLeadster = true;
      removeIntentListeners();
      window.clearTimeout(fallbackTimer);

      leadsterTimer = window.setTimeout(loadLeadster, LEADSTER_STAGGER_DELAY_MS);
    }

    intentEvents.forEach((eventName) => {
      window.addEventListener(eventName, startLeadsterLoading, {
        once: true,
        passive: true,
      });
    });

    fallbackTimer = window.setTimeout(
      startLeadsterLoading,
      LEADSTER_FALLBACK_DELAY_MS,
    );

    return () => {
      stopWaitingForGoogleTagManager();
      removeIntentListeners();
      window.clearTimeout(fallbackTimer);

      if (leadsterTimer !== null) {
        window.clearTimeout(leadsterTimer);
      }
    };
  }, []);

  return null;
}
