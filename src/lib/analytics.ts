type MarketingWindow = Window & {
  dataLayer?: Array<Record<string, unknown>>;
};

export type LeadConversionEvent = {
  readonly formId: string;
  readonly formName: string;
  readonly formSource: string;
};

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
