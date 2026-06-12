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

  return data ?? { ok: true };
}
