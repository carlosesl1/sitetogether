type MarketingWindow = Window & {
  dataLayer?: Array<Record<string, unknown>>;
};

type AnalyticsParameter = string | number | boolean | undefined;

const EMPTY_EVENT_PARAMETERS = {
  page_sector: undefined,
  cta_location: undefined,
  cta_text: undefined,
  destination_path: undefined,
  contact_method: undefined,
  form_id: undefined,
  form_name: undefined,
  form_source: undefined,
  error_type: undefined,
  field_name: undefined,
  page_path: undefined,
} satisfies Record<string, undefined>;

export type LeadConversionEvent = {
  readonly formId: string;
  readonly formName: string;
  readonly formSource: string;
};

export type FormErrorEvent = LeadConversionEvent & {
  readonly errorType: "validation" | "submission_failed";
  readonly fieldName?: string;
};

export function pushAnalyticsEvent(
  event: string,
  parameters: Record<string, AnalyticsParameter>,
) {
  if (typeof window === "undefined") {
    return;
  }

  const marketingWindow = window as MarketingWindow;
  marketingWindow.dataLayer = marketingWindow.dataLayer ?? [];
  marketingWindow.dataLayer.push({
    ...EMPTY_EVENT_PARAMETERS,
    event,
    ...parameters,
  });
}

export function pushLeadConversionEvent({
  formId,
  formName,
  formSource,
}: LeadConversionEvent) {
  const marketingWindow = window as MarketingWindow;
  marketingWindow.dataLayer = marketingWindow.dataLayer ?? [];
  marketingWindow.dataLayer.push({
    event: "generate_lead",
    form_id: formId,
    form_name: formName,
    form_source: formSource,
    page_path: window.location.pathname,
  });
}

export function pushFormErrorEvent({
  formId,
  formName,
  formSource,
  errorType,
  fieldName,
}: FormErrorEvent) {
  pushAnalyticsEvent("form_error", {
    form_id: formId,
    form_name: formName,
    form_source: formSource,
    error_type: errorType,
    field_name: fieldName,
    page_path: window.location.pathname,
  });
}
