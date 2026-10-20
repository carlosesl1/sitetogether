const STORAGE_KEY = 'together_lead_attribution_v1';
const MAX_AGE_MS = 24 * 60 * 60 * 1000;
const CLICK_KEYS = ['gclid', 'gbraid', 'wbraid'] as const;
const CAMPAIGN_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_id', 'utm_term', 'utm_content'] as const;

export type LeadAttribution = Partial<Record<typeof CLICK_KEYS[number] | typeof CAMPAIGN_KEYS[number], string>> & {
  landing_path: string;
  captured_at: string;
};

// Read explicit consent commands without creating or overriding consent choices.
export function advertisingConsent(key: 'ad_storage' | 'ad_user_data'): 'granted' | 'denied' | undefined {
  if (typeof window === 'undefined') return;
  const layer = (window as Window & { dataLayer?: unknown[] }).dataLayer ?? [];
  let result: 'granted' | 'denied' | undefined;
  for (const entry of layer) {
    if (!entry || typeof entry !== 'object') continue;
    const command = entry as Record<number, unknown>;
    if (command[0] !== 'consent' || !['default', 'update'].includes(String(command[1]))) continue;
    const settings = command[2] as Record<string, unknown> | undefined;
    if (!settings || settings.region) continue; // Region-specific choices need a CMP integration.
    if (settings[key] === 'denied' || settings[key] === 'granted') result = settings[key];
  }
  return result;
}

function cleanAttribution(value: unknown): LeadAttribution | undefined {
  if (!value || typeof value !== 'object') return;
  const input = value as Record<string, unknown>;
  const timestamp = Date.parse(String(input.captured_at ?? ''));
  if (!Number.isFinite(timestamp) || timestamp > Date.now() + 60_000 || Date.now() - timestamp > MAX_AGE_MS) return;
  const result: LeadAttribution = {
    landing_path: typeof input.landing_path === 'string' && /^\/(?!\/)/.test(input.landing_path) ? input.landing_path.split(/[?#]/)[0].slice(0, 500) : '/',
    captured_at: new Date(timestamp).toISOString(),
  };
  for (const key of CLICK_KEYS) {
    const item = input[key];
    if (typeof item === 'string' && /^[A-Za-z0-9_-]{1,512}$/.test(item)) result[key] = item;
  }
  for (const key of CAMPAIGN_KEYS) {
    const item = input[key];
    if (typeof item === 'string' && item.length <= 200 && !/[<>@\r\n]/.test(item)) result[key] = item.trim();
  }
  return [...CLICK_KEYS, ...CAMPAIGN_KEYS].some(key => result[key]) ? result : undefined;
}

let inMemory: LeadAttribution | undefined;

export function captureLeadAttribution(): LeadAttribution | undefined {
  if (typeof window === 'undefined') return;
  if (advertisingConsent('ad_storage') === 'denied') {
    inMemory = undefined;
    try { window.sessionStorage.removeItem(STORAGE_KEY); } catch { /* Storage may be blocked. */ }
    return;
  }
  try {
    const url = new URL(window.location.href);
    const current = cleanAttribution({
      ...Object.fromEntries([...CLICK_KEYS, ...CAMPAIGN_KEYS].map(key => [key, url.searchParams.get(key)])),
      landing_path: url.pathname,
      captured_at: new Date().toISOString(),
    });
    let stored = cleanAttribution(inMemory);
    if (!stored) {
      try { stored = cleanAttribution(JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) ?? 'null')); } catch { /* No stored attribution. */ }
    }
    // A new tagged visit replaces the whole touch; never mix old click IDs with a new campaign.
    inMemory = current ?? stored;
    try {
      if (inMemory) window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(inMemory));
      else window.sessionStorage.removeItem(STORAGE_KEY);
    } catch { /* Keep an in-memory fallback for this page. */ }
    return inMemory;
  } catch { return undefined; }
}

export async function enhancedLeadData(email: string): Promise<{ sha256_email_address: string } | undefined> {
  // Privacy Tools integration is intentionally separate. Unknown is never treated as granted.
  if (advertisingConsent('ad_user_data') !== 'granted' || typeof crypto === 'undefined' || !crypto.subtle) return;
  let normalized = email.trim().toLowerCase().replace(/\s/g, '');
  if (!/^[^@]+@[^@]+\.[^@]+$/.test(normalized)) return;
  const [local, domain] = normalized.split('@');
  if (domain === 'gmail.com' || domain === 'googlemail.com') normalized = `${local.replace(/\./g, '')}@${domain}`;
  try {
    const digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(normalized));
    if (advertisingConsent('ad_user_data') !== 'granted') return;
    return { sha256_email_address: Array.from(new Uint8Array(digest), byte => byte.toString(16).padStart(2, '0')).join('') };
  } catch { return undefined; }
}
