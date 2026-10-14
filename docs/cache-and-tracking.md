# Cache and marketing initialization

The production Cloudflare Google Tag Gateway injects the GTM container through `/h8ny/`. The frontend initializes `dataLayer` immediately and emits one `gtm.js` start event, preserving any events already queued. It reuses that injected script instead of downloading the same container from Google again. Without the injected loader, on a load error, or after eight seconds without a loaded container, it keeps the direct Google loader available. `generate_lead` still comes only from confirmed form submissions. Leadster retains its existing interaction/fallback scheduling.

If the Gateway endpoint or container changes, update `src/lib/google-tag-manager.ts` and the noscript fallback in the root layout together with the Cloudflare configuration. Do not remove or defer conversion tags merely to improve a performance score.

The `.htaccess` static cache policy requires HTML, RSC text payloads and static data files to revalidate on every request (`max-age=0, must-revalidate`). Files with content hashes keep one year of immutable caching. Browsers/CDN can use conditional requests against Last-Modified/ETag. This avoids relying on a Cloudflare API token or a manual purge for each new deployment.

The prepared Cloudflare Cache Rules are in `cloudflare-cache-rules.json`. They respect origin headers, and bypass caching for writes, the contact API, WordPress administration/PHP, tracking paths and authenticated previews. They replace the legacy catch-all Page Rule that forced 24 days of browser cache and disabled Origin Cache Control; keep that old rule disabled, not alongside the replacement rules.

Run `node scripts/verify-public-cache.mjs https://togetherprivacy.tech` to verify representative public pages, hashed CSS/JS and read-only contact API behavior. The Hostinger deployment workflow runs this check after upload. It uses only GET/HEAD and never creates contacts. An initial purge is needed when switching away from the old policy; already cached copies in users' browsers can require one hard refresh.

References: [Google Tag Gateway](https://developers.cloudflare.com/google-tag-gateway/), [Origin Cache Control](https://developers.cloudflare.com/cache/concepts/cache-control/).
