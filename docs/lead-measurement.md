# Lead measurement — 19 October 2026

Scope: LGPD/DPO and contact-form measurement; no Privacy Tools changes, no bidding or budget changes in this release.

## Attribution contract

The global client initializer preserves a tagged landing visit in sessionStorage for at most 24 hours. Only gclid, gbraid, wbraid, six standard UTMs, landing pathname and capture timestamp are retained. Query strings, arbitrary parameters and form data are not stored there. A new tagged visit replaces the whole previous touch. Explicit ad_storage denial clears this record on the next capture/submission. Storage failures do not prevent submitting a contact. This is session attribution, not cross-device or long-term tracking.

Every submitContact call includes this attribution. WordPress validates an allowlist and saves it in private contact metadata and the existing notification. Browser-supplied identifiers must be reviewed before offline import: they do not prove lead quality or ad attribution by themselves. No public lead-reading endpoint is added.

## Confirmed events

generate_lead remains conditional on a successful API response and an empty honeypot. Service/contact forms include transaction_id=together-{leadId}; the same confirmed ID is emitted only once per page runtime. GTM must map this transaction_id to the Google Ads transaction ID and use only the generate_lead trigger, removing the old click trigger from the form conversion tag. Existing industry-form events keep their current path.

Enhanced matching uses a separate together_ads_user_data event with a normalized SHA-256 email, only after explicit global ad_user_data=granted. No grant is invented when consent is unknown; no Privacy Tools integration is included. The scoped data-layer key together_ads_user_data is cleared immediately after the event and must never be mapped into GA4 event parameters. Hashes remain personal data and are not anonymous. The old Elementor user-data tag must read this variable and this event instead of DOM fields/clicks; the old plaintext cookie tag should be paused.

## Commercial feedback

Use the existing lead workbook: one row per actual contact; record qualified/proposal dates and the WordPress contact ID. Attach the captured GCLID to the technical import sheet only after matching the contact. Do not import the historical 2 October lead without attributable identifiers. Neither browsing events nor tests are qualified leads. Keep both commercial conversion actions secondary until actual imports and quality have been verified.

Current APIs use Data Manager for offline imports. Existing Ads OAuth authorization does not include its datamanager scope; a prepared CSV upload is the no-new-authorization path. Do not silently add OAuth permissions or send fictional events. Bidding changes require verified conversion receipt; lack of new contacts is not solved by measurement alone.
