"use client";

import { createContext, useContext, useEffect, type ReactNode } from "react";
import Lenis from "lenis";

export const smoothScrollOptions = {
  duration: 1.2,
  easing: (t: number) => Math.min(1, 1.001 - 2 ** (-10 * t)),
  smoothWheel: true,
  touchMultiplier: 2,
  wheelMultiplier: 1,
  lerp: 0.1,
  syncTouch: true,
  syncTouchLerp: 0.075,
} as const;

const mobileSmoothScrollOptions = {
  ...smoothScrollOptions,
  touchMultiplier: 1,
  syncTouch: false,
} as const;

function getSmoothScrollOptionsForViewport() {
  return window.matchMedia("(max-width: 767px)").matches ? mobileSmoothScrollOptions : smoothScrollOptions;
}

type SmoothScrollContextValue = {
  getLenis: () => Lenis | null;
  isManaged: boolean;
};

let activeLenis: Lenis | null = null;

function getActiveLenis() {
  return activeLenis;
}

const SmoothScrollContext = createContext<SmoothScrollContextValue>({
  getLenis: () => null,
  isManaged: false,
});

const managedSmoothScrollContext: SmoothScrollContextValue = {
  getLenis: getActiveLenis,
  isManaged: true,
};

export function useSmoothScroll() {
  return useContext(SmoothScrollContext);
}

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) return;

    const smoothScroll = new Lenis({
      ...getSmoothScrollOptionsForViewport(),
      anchors: true,
    });
    let frameId: number | null = null;

    const raf = (time: number) => {
      smoothScroll.raf(time);
      frameId = requestAnimationFrame(raf);
    };

    activeLenis = smoothScroll;
    frameId = requestAnimationFrame(raf);

    return () => {
      if (frameId !== null) {
        cancelAnimationFrame(frameId);
      }

      smoothScroll.destroy();
      activeLenis = null;
    };
  }, []);

  return (
    <SmoothScrollContext.Provider value={managedSmoothScrollContext}>
      {children}
    </SmoothScrollContext.Provider>
  );
}
