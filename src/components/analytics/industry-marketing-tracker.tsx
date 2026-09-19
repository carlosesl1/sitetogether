"use client";

import { useEffect } from "react";
import { pushAnalyticsEvent } from "@/lib/analytics";

const TRACKED_ROUTES: Record<string, string> = {
  "/solucoes/privacidade-saas": "saas",
  "/solucoes/privacidade-escolas-particulares": "escolas_particulares",
  "/solucoes/privacidade-ensino-superior": "ensino_superior",
  "/solucoes/privacidade-transporte-fracionado": "transporte_fracionado",
  "/solucoes/privacidade-transporte-lotacao": "transporte_lotacao",
  "/solucoes/privacidade-gestao-de-rodovias": "gestao_de_rodovias",
  "/eca-digital": "eca_digital",
};

function normalizePathname(pathname: string) {
  return pathname.length > 1 ? pathname.replace(/\/$/, "") : pathname;
}

function getPageContext() {
  const pagePath = normalizePathname(window.location.pathname);
  const pageSector = TRACKED_ROUTES[pagePath];
  if (!pageSector) return null;

  return { page_path: pagePath, page_sector: pageSector };
}

function getElement(target: EventTarget | null) {
  return target instanceof Element ? target : null;
}

function getCtaLocation(element: Element, url?: URL) {
  const explicitLocation =
    element.getAttribute("data-analytics-location") ||
    element
      .closest("[data-analytics-location]")
      ?.getAttribute("data-analytics-location");

  if (explicitLocation) return explicitLocation;

  const queryLocation = url?.searchParams.get("cta_position");
  if (queryLocation) return queryLocation;
  if (element.closest("header")) return "header";
  if (element.closest("footer")) return "footer";

  return element.closest("section[id]")?.id || "unknown";
}

function getCtaText(element: Element) {
  return (element.getAttribute("aria-label") || element.textContent || "CTA sem texto")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 120);
}

function getContactMethod(url: URL) {
  if (url.protocol === "tel:") return "phone";
  if (url.protocol === "mailto:") return "email";

  const hostname = url.hostname.toLowerCase();
  if (hostname === "wa.me" || hostname === "api.whatsapp.com") return "whatsapp";
  if (hostname === "calendly.com") return "calendar";

  return null;
}

function getFormMetadata(form: HTMLFormElement) {
  const formId = form.dataset.analyticsFormId;
  const formName = form.dataset.analyticsFormName;
  const formSource = form.dataset.analyticsFormSource;
  if (!formId || !formName || !formSource) return null;

  return {
    form_id: formId,
    form_name: formName,
    form_source: formSource,
  };
}

export function IndustryMarketingTracker() {
  useEffect(() => {
    const startedForms = new WeakSet<HTMLFormElement>();

    function handleClick(event: MouseEvent) {
      const pageContext = getPageContext();
      const target = getElement(event.target);
      const link = target?.closest<HTMLAnchorElement>("a[href]");
      if (!pageContext || !link) return;

      const url = new URL(link.href, window.location.href);
      const contactMethod = getContactMethod(url);
      const ctaLocation = getCtaLocation(link, url);

      if (contactMethod) {
        pushAnalyticsEvent("contact_click", {
          ...pageContext,
          contact_method: contactMethod,
          cta_location: ctaLocation,
        });
        return;
      }

      const isContactCta =
        url.origin === window.location.origin &&
        (link.hasAttribute("data-analytics-cta") ||
          normalizePathname(url.pathname) === "/contato" ||
          url.hash === "#contato" ||
          url.hash.startsWith("#contato-") ||
          url.hash === "#cta");
      if (!isContactCta) return;

      pushAnalyticsEvent("cta_click", {
        ...pageContext,
        cta_location: ctaLocation,
        cta_text: getCtaText(link),
        destination_path: `${normalizePathname(url.pathname)}${url.hash}`,
      });
    }

    function handleFocus(event: FocusEvent) {
      const pageContext = getPageContext();
      const target = getElement(event.target);
      const form = target?.closest<HTMLFormElement>("form[data-analytics-form-id]");
      if (!pageContext || !form || startedForms.has(form)) return;

      const formMetadata = getFormMetadata(form);
      if (!formMetadata) return;

      startedForms.add(form);
      pushAnalyticsEvent("form_start", { ...pageContext, ...formMetadata });
    }

    function handleInvalid(event: Event) {
      const pageContext = getPageContext();
      const target = getElement(event.target);
      const form = target?.closest<HTMLFormElement>("form[data-analytics-form-id]");
      if (!pageContext || !target || !form) return;

      const formMetadata = getFormMetadata(form);
      if (!formMetadata) return;

      pushAnalyticsEvent("form_error", {
        ...pageContext,
        ...formMetadata,
        error_type: "validation",
        field_name: target.getAttribute("name") || target.getAttribute("id") || "unknown",
      });
    }

    document.addEventListener("click", handleClick);
    document.addEventListener("focusin", handleFocus);
    document.addEventListener("invalid", handleInvalid, true);

    return () => {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("focusin", handleFocus);
      document.removeEventListener("invalid", handleInvalid, true);
    };
  }, []);

  return null;
}
