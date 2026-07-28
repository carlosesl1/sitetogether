"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const PAUSABLE_ANIMATION_SELECTOR = "[data-pause-offscreen-animation]";

export function AnimationVisibilityProvider() {
  const pathname = usePathname();

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;

    const animatedElements = Array.from(
      document.querySelectorAll<HTMLElement>(PAUSABLE_ANIMATION_SELECTOR),
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.removeAttribute("data-animation-paused");
          } else {
            entry.target.setAttribute("data-animation-paused", "");
          }
        });
      },
      { threshold: 0.01 },
    );

    animatedElements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
