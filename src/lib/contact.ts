export type ContactPayload = {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  phone?: string;
  message?: string;
  website?: string;
  pageUrl?: string;
  source?: string;
};

export type ContactResponse = {
  ok: boolean;
  id?: number;
  leadId?: number;
  message?: string;
};

export type ContactConversion = {
  formId: string;
  formName: string;
  formSource: string;
};

const DEFAULT_CONTACT_ENDPOINT =
  "https://togetherprivacy.tech/wp-json/together/v1/contact";

function getContactEndpoint() {
  return (
    process.env.NEXT_PUBLIC_WORDPRESS_CONTACT_ENDPOINT ||
    DEFAULT_CONTACT_ENDPOINT
  );
}

export async function submitContact(
  payload: ContactPayload,
  conversion?: ContactConversion,
): Promise<ContactResponse> {
  const response = await fetch(getContactEndpoint(), {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const contentType = response.headers.get("content-type") || "";
  if (!contentType.includes("application/json")) {
    throw new Error(
      "O endpoint do WordPress nao respondeu como API. Verifique a regra do .htaccess para /wp-json.",
    );
  }

  let data: ContactResponse | null = null;
  try {
    data = (await response.json()) as ContactResponse;
  } catch {
    data = null;
  }

  if (!response.ok || data?.ok === false) {
    throw new Error(
      data?.message ||
      "Nao foi possivel enviar sua solicitacao. Tente novamente em alguns instantes.",
    );
  }

  // Existing forms keep their own tracking unless they explicitly opt in here.
  if (conversion && data?.ok === true && !payload.website?.trim() && typeof window !== "undefined") {
    try {
      const analyticsWindow = window as Window & {
        dataLayer?: Array<Record<string, unknown>>;
      };
      analyticsWindow.dataLayer ??= [];
      analyticsWindow.dataLayer.push({
        event: "generate_lead",
        form_id: conversion.formId,
        form_name: conversion.formName,
        form_source: conversion.formSource,
        page_path: window.location.pathname,
      });
    } catch {
      // Analytics must not turn an accepted contact into a failed submission.
    }
  }

  return data ?? { ok: true };
}
