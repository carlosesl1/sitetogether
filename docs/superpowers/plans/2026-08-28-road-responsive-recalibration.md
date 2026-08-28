# Road Responsive Recalibration Implementation Plan

> **For agentic workers:** Execute directly by default. Use subagents only for independent bounded lanes that satisfy the global harness policy. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Recalibrate the road-management landing page from 320px to 1920px, use the yellow brand CTA in the hero, and remove the proof disclaimer requested in the preview.

**Architecture:** Keep the existing reusable industry components. Adjust Tailwind breakpoints and fluid type scales in place, keep road-specific content changes in `roads.ts`, and preserve desktop composition at `xl` and above.

**Tech Stack:** React, TypeScript, Tailwind CSS, Node test runner, Next.js static export, T3 collaborative browser.

---

### Task 1: Lock the responsive and content contracts

**Files:**
- Modify: `scripts/industry-roads-page.test.mjs`

- [ ] Assert the hero contact link uses `variant="primary"`.
- [ ] Assert road content and page composition no longer expose `proofNote`.
- [ ] Assert tablet splits move from `md` to `lg`.
- [ ] Assert the lifecycle uses three columns at `lg`, five at `xl`, and its connector starts at `xl`.
- [ ] Assert capability and training nested grids expand only at `xl`.
- [ ] Assert FAQ leading, language-selector touch target and minimum microtype.
- [ ] Run the focused tests and confirm they fail for the expected pre-change contracts.

### Task 2: Apply the responsive recalibration

**Files:**
- Modify: `src/components/industry/industry-hero.tsx`
- Modify: `src/components/industry/industry-page-types.ts`
- Modify: `src/content/industries/roads.ts`
- Modify: `src/components/industry/roads-industry-page.tsx`
- Modify: `src/components/industry/industry-section-heading.tsx`
- Modify: `src/components/industry/roads/roads-context-sections.tsx`
- Modify: `src/components/industry/roads/roads-capability-sections.tsx`
- Modify: `src/components/industry/industry-faq-section.tsx`
- Modify: `src/components/industry/industry-final-cta.tsx`
- Modify: `src/components/ui/site-primitives.tsx`
- Modify: `src/components/i18n/language-switcher.tsx`

- [ ] Switch the hero CTA to the existing primary brand variant.
- [ ] Remove the road proof-note field and prop while keeping the reusable proof component optional.
- [ ] Reduce mobile heading minima and repeated vertical padding.
- [ ] Move tablet splits and dense nested grids to safer breakpoints.
- [ ] Increase microtype and touch-target sizes.
- [ ] Run focused tests until the responsive contract passes.

### Task 3: Integration verification

**Files:**
- Verify all modified files.

- [ ] Run `npm test`.
- [ ] Run `npx tsc --noEmit`.
- [ ] Run `npm run lint` and require zero errors.
- [ ] Run `npm run build` and restore generated WordPress/sitemap churn.
- [ ] Validate 320, 390, 768, 1024, 1440 and 1920px in the T3 collaborative browser.
- [ ] Verify CTA color, removed note, no horizontal overflow, no clipped text and preserved desktop composition.
