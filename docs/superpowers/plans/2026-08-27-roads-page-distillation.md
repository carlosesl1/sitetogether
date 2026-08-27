# Roads Landing Page Distillation Implementation Plan

> **For agentic workers:** Execute directly by default. Use subagents only for independent bounded lanes that satisfy the global harness policy. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Reduce the road-industry landing page to one clear operating narrative while preserving sector relevance, TOGETHER capability, campaign anchors and the three approved CTA positions.

**Architecture:** Keep the existing hero, proof, context, lifecycle, free-flow, FAQ and final CTA primitives. Extend lifecycle with first-phase outputs, merge capabilities/continuous operation/training/technology into one `RoadsDeliverySection`, and replace the international-plus-method component with one compact `RoadsInternationalSection`. Remove the standalone privacy-by-design and method content contracts.

**Tech Stack:** Next.js 15 static export, React 19, TypeScript, Tailwind CSS, Node test runner.

---

### Task 1: Lock the distilled narrative in the focused regression test

**Files:**
- Modify: `scripts/industry-roads-page.test.mjs`

- [ ] **Step 1: Replace the old component assertions**

Require the final composition to contain `RoadsDeliverySection` and `RoadsInternationalSection`, and explicitly reject `RoadsPrivacyByDesignSection`, `RoadsOperationsSection` and `RoadsInternationalMethodSection`.

```js
for (const component of [
  "IndustryHero",
  "IndustryProofStrip",
  "RoadsOperationalContextSection",
  "RoadsLifecycleSection",
  "RoadsFreeFlowSection",
  "RoadsDeliverySection",
  "RoadsInternationalSection",
  "IndustryFaqSection",
  "IndustryFinalCta",
]) {
  assert.match(pageSource, new RegExp(`<${component}`));
}

for (const removed of [
  "RoadsPrivacyByDesignSection",
  "RoadsOperationsSection",
  "RoadsInternationalMethodSection",
]) {
  assert.doesNotMatch(pageSource, new RegExp(`<${removed}`));
}
```

- [ ] **Step 2: Add assertions for retained information and simplified presentation**

```js
assert.match(contentSource, /proofNote:/);
assert.match(contentSource, /outcomes:/);
assert.match(contentSource, /O que sai da primeira fase/);
assert.equal((contentSource.match(/tone:/g) ?? []).length, 0);
assert.doesNotMatch(contentSource, /privacyByDesign:/);
assert.doesNotMatch(contentSource, /method:/);
assert.match(roadsCapabilitySource, /RoadsDeliverySection/);
assert.match(roadsCapabilitySource, /RoadsInternationalSection/);
assert.doesNotMatch(roadsCapabilitySource, /max-w-\[280px\]/);
```

- [ ] **Step 3: Run the focused test and confirm it fails for the old implementation**

Run: `node --test scripts/industry-roads-page.test.mjs`

Expected: FAIL on the new component/content assertions.

### Task 2: Simplify the content and type contracts

**Files:**
- Modify: `src/components/industry/industry-page-types.ts`
- Modify: `src/content/industries/roads.ts`
- Modify: `src/components/industry/industry-proof-strip.tsx`

- [ ] **Step 1: Update the shared road content type**

Add `proofNote`, add `lifecycle.outcomes`, remove `IndustryTone`, remove the capability `tone`, remove `privacyByDesign` and `method`, and map campaign section keys to `lifecycle`, `capabilities`, `freeFlow` or `international`.

```ts
export type IndustryCapability = {
  readonly title: string;
  readonly description: string;
};

readonly proofNote: string;
readonly lifecycle: {
  readonly pill: string;
  readonly title: string;
  readonly description: string;
  readonly stages: readonly IndustryTextItem[];
  readonly outcomes: readonly string[];
};
```

- [ ] **Step 2: Cut and consolidate the road copy**

Keep six capability groups, three continuous-operation routines and four training audiences. Remove standalone `privacyByDesign` and `method` objects. Add the institutional proof note and four first-phase outputs exactly as approved in the design spec.

- [ ] **Step 3: Let the proof strip render an optional clarification note**

```tsx
type IndustryProofStripProps = {
  items: readonly IndustryProofItem[];
  note?: string;
};

{note ? (
  <p className="mt-5 max-w-4xl text-xs font-medium leading-relaxed text-neutral-500 sm:text-sm">
    {note}
  </p>
) : null}
```

- [ ] **Step 4: Run the focused test**

Run: `node --test scripts/industry-roads-page.test.mjs`

Expected: content/type assertions pass; component-composition assertions remain failing until Task 3.

### Task 3: Consolidate the UI into nine primary blocks

**Files:**
- Modify: `src/components/industry/roads/roads-context-sections.tsx`
- Modify: `src/components/industry/roads/roads-capability-sections.tsx`
- Modify: `src/components/industry/roads-industry-page.tsx`

- [ ] **Step 1: Turn lifecycle into the single process section**

Set `id="privacy-by-design"` on the lifecycle section, set `id="fornecedores"` on the contracting stage, raise touched labels from `text-[9px]` to `text-[11px]`, and append a responsive outcomes strip headed “O que sai da primeira fase”.

- [ ] **Step 2: Replace three capability components with two**

Create:

```ts
export function RoadsDeliverySection({
  sector,
  allowedAnchors,
  capabilities,
  operations,
  training,
}: DeliveryProps) {}

export function RoadsInternationalSection({
  content,
}: InternationalProps) {}
```

`RoadsDeliverySection` renders a dark section with a two-column editorial capability list, the three routine items carrying `dpo` and `incidentes`, four compact training audience chips, the existing technology rail and the mid-page CTA. It must not render the old compact yellow card or another numbered flow.

`RoadsInternationalSection` renders only the existing international title and description inside a rounded light editorial band with `id="internacional"`.

- [ ] **Step 3: Compose only the distilled sections**

```tsx
<IndustryHero />
<IndustryProofStrip items={content.proof} note={content.proofNote} />
<RoadsOperationalContextSection />
<RoadsLifecycleSection />
<RoadsFreeFlowSection />
<RoadsDeliverySection />
<RoadsInternationalSection />
<IndustryFaqSection />
<IndustryFinalCta />
```

- [ ] **Step 4: Run the focused test**

Run: `node --test scripts/industry-roads-page.test.mjs`

Expected: PASS.

### Task 4: Verify the complete page and responsive result

**Files:**
- Verify: `src/components/industry/**`
- Verify: `src/content/industries/roads.ts`
- Verify: static route `/solucoes/privacidade-gestao-de-rodovias.html`

- [ ] **Step 1: Run code verification**

Run: `npm test && npx tsc --noEmit && npm run lint`

Expected: all tests pass, TypeScript exits 0 and ESLint has no errors.

- [ ] **Step 2: Run the static export once after the final code change**

Run: `npm run build`

Expected: the road route is exported successfully.

- [ ] **Step 3: Inspect the built route at representative viewports**

Serve `out/` and inspect 360×800, 390×844, 768×1024, 1280×800 and 1440×900. Confirm no horizontal overflow, no clipped CTA, all six campaign anchors resolve, and the mobile page is materially shorter than the pre-change ~19,000px baseline.

- [ ] **Step 4: Record the final reduction**

Measure rendered main-text word count and document height at 390px and 1280px. Compare them with the baselines of 1,105 words, 19,034px mobile height and 11,790px desktop height.

- [ ] **Step 5: Commit the coherent implementation**

```bash
git add scripts/industry-roads-page.test.mjs \
  src/components/industry/industry-page-types.ts \
  src/content/industries/roads.ts \
  src/components/industry/industry-proof-strip.tsx \
  src/components/industry/roads/roads-context-sections.tsx \
  src/components/industry/roads/roads-capability-sections.tsx \
  src/components/industry/roads-industry-page.tsx \
  docs/superpowers/plans/2026-08-27-roads-page-distillation.md
git commit -m "refactor: distill road industry landing page"
```
