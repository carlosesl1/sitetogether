"use client";

import { useState, useSyncExternalStore } from "react";
import type { ReactNode } from "react";
import type { IndustryCtaPosition } from "@/components/industry/saas/saas-page-types";
import { ActionLink } from "@/components/ui/site-primitives";
import {
  buildIndustryContactHref,
  getIndustryCtaEvent,
  readIndustryEntryAttribution,
} from "@/components/industry/saas/saas-attribution";
import { createIndustryEntryLocationStore } from "@/components/industry/saas/saas-entry-location";

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

export function SaasContactLink({
  sector,
  position,
  allowedAnchors,
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  className,
}: IndustryContactLinkProps) {
  const [entryLocationStore] = useState(() =>
    createIndustryEntryLocationStore(() => window.location.href),
  );
  const locationHref = useSyncExternalStore(
    entryLocationStore.subscribe,
    entryLocationStore.getSnapshot,
    entryLocationStore.getServerSnapshot,
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
    localForm: true,
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
      className={["focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2", className].filter(Boolean).join(" ")}
    >
      {children}
    </ActionLink>
  );
}
