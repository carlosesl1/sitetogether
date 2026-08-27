"use client";

import { useSyncExternalStore } from "react";
import type { ReactNode } from "react";
import type { IndustryCtaPosition } from "@/components/industry/industry-page-types";
import { ActionLink } from "@/components/ui/site-primitives";
import {
  buildIndustryContactHref,
  getIndustryCtaEvent,
  readIndustryEntryAttribution,
} from "@/lib/industry-attribution";

type MarketingWindow = Window & {
  dataLayer?: Array<Record<string, unknown>>;
};

type IndustryContactLinkProps = {
  sector: string;
  position: IndustryCtaPosition;
  allowedAnchors: readonly string[];
  children: ReactNode;
  variant?: "primary" | "dark" | "light" | "muted";
  size?: "sm" | "md" | "lg" | "xl";
  fullWidth?: boolean;
  className?: string;
};

function subscribeToLocation(callback: () => void) {
  window.addEventListener("popstate", callback);
  window.addEventListener("hashchange", callback);
  return () => {
    window.removeEventListener("popstate", callback);
    window.removeEventListener("hashchange", callback);
  };
}

function getLocationSnapshot() {
  return window.location.href;
}

function getServerLocationSnapshot() {
  return "";
}

export function IndustryContactLink({
  sector,
  position,
  allowedAnchors,
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  className,
}: IndustryContactLinkProps) {
  const locationHref = useSyncExternalStore(
    subscribeToLocation,
    getLocationSnapshot,
    getServerLocationSnapshot,
  );
  const entryUrl = locationHref ? new URL(locationHref) : undefined;
  const attribution = entryUrl
    ? readIndustryEntryAttribution(entryUrl, allowedAnchors)
    : { entryAnchor: undefined, campaign: {} };
  const href = buildIndustryContactHref({
    sector,
    position,
    entryUrl,
    allowedAnchors,
  });
  const eventPayload = {
    event: getIndustryCtaEvent(position),
    sector,
    cta_position: position,
    ...(attribution.entryAnchor
      ? { entry_anchor: attribution.entryAnchor }
      : {}),
    ...attribution.campaign,
  };

  const handleClick = () => {
    try {
      (window as MarketingWindow).dataLayer?.push(eventPayload);
    } catch {
      return;
    }
  };

  return (
    <ActionLink
      href={href}
      onClick={handleClick}
      variant={variant}
      size={size}
      fullWidth={fullWidth}
      className={className}
    >
      {children}
    </ActionLink>
  );
}
