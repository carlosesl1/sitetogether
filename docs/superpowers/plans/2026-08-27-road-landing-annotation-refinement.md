# Road Landing Annotation Refinement Implementation Plan

> **For agentic workers:** Execute directly by default. Use subagents only for independent bounded lanes that satisfy the global harness policy. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Apply the five approved annotation refinements to the road-management landing page while preserving the existing TOGETHER design system and responsive behavior.

**Architecture:** Keep the existing section composition and typed content contract. Refine the two road-specific section components, add one project-owned transparent illustration, and expand the shared industry final CTA with stable contact data. Source-level regression tests remain the primary seam, followed by browser checks against the static export.

**Tech Stack:** Next.js 16 static export, React 19, TypeScript, Tailwind CSS, Lucide React, Node test runner, built-in image generation.

---

## File structure

- Modify `src/components/industry/roads/roads-context-sections.tsx`: semantic lifecycle icons and removal of the redundant outcomes block.
- Modify `src/components/industry/roads/roads-capability-sections.tsx`: training module and international illustration layout.
- Modify `src/components/industry/industry-final-cta.tsx`: complete contact card.
- Modify `src/components/industry/industry-page-types.ts`: remove unused lifecycle outcomes and type the international illustration.
- Modify `src/content/industries/roads.ts`: remove outcomes data and declare the international asset.
- Create `public/images/industries/roads/international-data-routes-v2.png`: transparent international infrastructure illustration.
- Modify `scripts/industry-roads-page.test.mjs`: regression coverage for every approved annotation.

### Task 1: Replace lifecycle markers and remove the redundant outcomes block

**Files:**
- Modify: `scripts/industry-roads-page.test.mjs:34-43,268-289,435-443`
- Modify: `src/components/industry/roads/roads-context-sections.tsx:1-139`
- Modify: `src/components/industry/industry-page-types.ts:82-89`
- Modify: `src/content/industries/roads.ts:85-125`

- [ ] **Step 1: Write the failing lifecycle regression test**

Replace the lifecycle assertions with:

```js
test("lifecycle uses semantic stage icons and omits redundant outcomes", () => {
  for (const icon of [
    "Search",
    "FileSignature",
    "Settings2",
    "BadgeCheck",
    "RefreshCw",
  ]) {
    assert.match(roadsContextSource, new RegExp(`\\b${icon}\\b`));
  }

  assert.match(roadsContextSource, /lg:grid-cols-5/);
  assert.doesNotMatch(roadsContextSource, /content\.outcomes/);
  assert.doesNotMatch(contentSource, /outcomesTitle:|outcomes:/);
  assert.doesNotMatch(typesSource, /readonly outcomesTitle:|readonly outcomes:/);
});
```

Change the copy test assertion from the removed heading to:

```js
assert.doesNotMatch(contentSource, /O que sai da primeira fase/);
```

Remove the obsolete positive `outcomes` assertion from `road context renders the required campaign destination and varied layouts`, and replace the old type assertion in `road content removes the redundant standalone process contracts` with:

```js
assert.doesNotMatch(typesSource, /outcomes: readonly string\[\]/);
```

- [ ] **Step 2: Run the focused test and verify RED**

Run:

```powershell
node --test --test-name-pattern="lifecycle uses semantic|road copy stays clear|road context renders|redundant standalone" scripts/industry-roads-page.test.mjs
```

Expected: FAIL because the semantic icon imports are absent and `outcomes` still exists.

- [ ] **Step 3: Implement the semantic lifecycle icons**

Change the Lucide import and add the ordered icon map:

```tsx
import {
  BadgeCheck,
  CarFront,
  Cloud,
  CreditCard,
  FileSignature,
  RefreshCw,
  ScanLine,
  Search,
  Settings2,
  Users,
} from "lucide-react";

const contextIcons = [CarFront, ScanLine, CreditCard, Cloud, Users] as const;
const lifecycleIcons = [
  Search,
  FileSignature,
  Settings2,
  BadgeCheck,
  RefreshCw,
] as const;
```

Replace the lifecycle stage mapper with:

```tsx
{content.stages.map((stage, index) => {
  const Icon = lifecycleIcons[index];

  return (
    <li
      id={index === 1 ? "fornecedores" : undefined}
      key={stage.title}
      className="relative scroll-mt-28 grid grid-cols-[48px_1fr] gap-5 lg:block"
    >
      <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-[16px] border border-neutral-200 bg-white text-neutral-900 shadow-sm">
        <Icon className="h-5 w-5" aria-hidden="true" />
        <span
          className="absolute -bottom-1 -right-1 h-2.5 w-2.5 rounded-[3px] bg-brand-400 ring-2 ring-neutral-50"
          aria-hidden="true"
        />
      </span>
      <div className="min-w-0 lg:mt-8">
        <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-neutral-600">
          {stage.label}
        </span>
        <h3 className="mt-3 break-words text-xl font-bold tracking-tight text-neutral-900">
          {stage.title}
        </h3>
        <p className="mt-3 text-sm font-medium leading-relaxed text-neutral-500">
          {stage.description}
        </p>
      </div>
    </li>
  );
})}
```

Delete the complete `mt-14 border-t border-neutral-300 pt-9` outcomes block below the `<ol>`.

Delete these fields from `RoadsIndustryContent["lifecycle"]`:

```ts
readonly outcomesTitle: string;
readonly outcomes: readonly string[];
```

Delete `outcomesTitle` and `outcomes` from `roadsIndustryContent.lifecycle`.

- [ ] **Step 4: Run the focused test and verify GREEN**

Run the command from Step 2.

Expected: all selected tests PASS.

- [ ] **Step 5: Commit the lifecycle refinement**

```powershell
git add -- scripts/industry-roads-page.test.mjs src/components/industry/roads/roads-context-sections.tsx src/components/industry/industry-page-types.ts src/content/industries/roads.ts
git commit -m "refactor: clarify road project lifecycle"
```

### Task 2: Present training as a structured module

**Files:**
- Modify: `scripts/industry-roads-page.test.mjs:313-319`
- Modify: `src/components/industry/roads/roads-capability-sections.tsx:1-171`

- [ ] **Step 1: Write the failing training-module test**

Add:

```js
test("training is presented as a structured responsive module", () => {
  assert.match(roadsCapabilitySource, /GraduationCap/);
  assert.match(
    roadsCapabilitySource,
    /rounded-\[28px\] border border-white\/10 bg-white\/\[0\.04\]/,
  );
  assert.match(roadsCapabilitySource, /sm:grid-cols-2/);
  assert.match(roadsCapabilitySource, /training\.audiences\.map/);
});
```

- [ ] **Step 2: Run the focused test and verify RED**

```powershell
node --test --test-name-pattern="training is presented" scripts/industry-roads-page.test.mjs
```

Expected: FAIL because `GraduationCap` and the rounded module do not exist.

- [ ] **Step 3: Implement the training module**

Add `GraduationCap` to the Lucide import, then replace the current training column with:

```tsx
<aside className="rounded-[28px] border border-white/10 bg-white/[0.04] p-7 sm:p-9">
  <span className="flex h-14 w-14 items-center justify-center rounded-[18px] bg-brand-400 text-neutral-950">
    <GraduationCap className="h-7 w-7" aria-hidden="true" />
  </span>
  <div className="mt-7">
    <SectionPill tone="dark">{training.pill}</SectionPill>
    <h3 className="mt-7 text-3xl font-bold tracking-[-0.025em] text-white">
      {training.title}
    </h3>
    <p className="mt-5 text-base font-medium leading-relaxed text-neutral-400">
      {training.description}
    </p>
  </div>
  <ul className="mt-8 grid gap-3 sm:grid-cols-2">
    {training.audiences.map((audience) => (
      <li
        key={audience}
        className="flex min-h-24 items-start gap-3 rounded-[18px] border border-white/10 bg-black/20 p-4 text-sm font-bold leading-relaxed text-neutral-200"
      >
        <span
          className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-[3px] bg-brand-400"
          aria-hidden="true"
        />
        <span>{audience}</span>
      </li>
    ))}
  </ul>
</aside>
```

- [ ] **Step 4: Run the focused test and verify GREEN**

Run the command from Step 2.

Expected: PASS.

- [ ] **Step 5: Commit the training module**

```powershell
git add -- scripts/industry-roads-page.test.mjs src/components/industry/roads/roads-capability-sections.tsx
git commit -m "refactor: structure road privacy training module"
```

### Task 3: Generate and wire the transparent international illustration

**Files:**
- Create: `public/images/industries/roads/international-data-routes-v2.png`
- Modify: `scripts/industry-roads-page.test.mjs:291-319`
- Modify: `src/components/industry/roads/roads-capability-sections.tsx:1-197`
- Modify: `src/components/industry/industry-page-types.ts:119-123`
- Modify: `src/content/industries/roads.ts:227-232`

- [ ] **Step 1: Write the failing asset and rendering test**

Add:

```js
test("international section renders a transparent project-owned illustration", async () => {
  const assetUrl = new URL(
    "../public/images/industries/roads/international-data-routes-v2.png",
    import.meta.url,
  );
  const asset = await readFile(assetUrl);

  assert.ok(asset.length > 10_000, "illustration must not be an empty placeholder");
  assert.equal(asset.subarray(1, 4).toString("ascii"), "PNG");
  assert.ok([4, 6].includes(asset[25]), "PNG must preserve an alpha channel");
  assert.match(roadsCapabilitySource, /import Image from "next\/image"/);
  assert.match(roadsCapabilitySource, /content\.illustration/);
  assert.match(contentSource, /international-data-routes-v2\.png/);
  assert.match(typesSource, /readonly illustration:/);
});
```

- [ ] **Step 2: Run the focused test and verify RED**

```powershell
node --test --test-name-pattern="international section renders" scripts/industry-roads-page.test.mjs
```

Expected: FAIL with `ENOENT` because the illustration does not exist.

- [ ] **Step 3: Generate the illustration with the built-in image tool**

Use this prompt:

```text
Use case: stylized-concept
Asset type: transparent illustration for an international privacy section on a corporate landing page
Primary request: a recognizable globe or hemisphere integrated with a modern highway, bridge and tunnel, with subtle data routes crossing national borders
Scene/backdrop: genuinely transparent background
Subject: international road infrastructure and secure cross-border data movement
Style/medium: polished editorial 3D illustration, precise and restrained, realistic infrastructure forms with simplified technical details
Composition/framing: centered square composition, clean silhouette, generous transparent margins, readable at medium size
Lighting/mood: controlled studio lighting, confident and technical
Color palette: charcoal black, graphite gray, white and restrained TOGETHER yellow accents
Materials/textures: matte asphalt, dark metal, subtle glass and luminous data lines
Constraints: actual alpha transparency; no text; no logos; no watermark; no UI; no flags; no political labels; no floating cards; no oversized yellow planes
```

Inspect the generated result, preserve its alpha channel, and copy the selected file to:

```text
public/images/industries/roads/international-data-routes-v2.png
```

- [ ] **Step 4: Type and declare the illustration**

Extend the international type with:

```ts
readonly illustration: {
  readonly src: "/images/industries/roads/international-data-routes-v2.png";
  readonly width: 1254;
  readonly height: 1254;
  readonly alt: string;
};
```

Add this to `roadsIndustryContent.international`:

```ts
illustration: {
  src: `${imageBase}/international-data-routes-v2.png`,
  width: 1254,
  height: 1254,
  alt: "Globo conectado por infraestrutura rodoviária e rotas internacionais de dados",
},
```

- [ ] **Step 5: Render the illustration responsively**

Add:

```tsx
import Image from "next/image";
```

Replace the international section inner layout with:

```tsx
<div
  id="internacional"
  className="scroll-mt-28 overflow-hidden rounded-[28px] bg-neutral-100/80 p-7 sm:p-10 lg:grid lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-12"
>
  <div>
    <SectionPill>{content.pill}</SectionPill>
    <h2 className="mt-8 max-w-3xl text-[clamp(2.15rem,7vw,3.25rem)] font-bold leading-[0.98] tracking-[-0.03em] text-neutral-900">
      {content.title}
    </h2>
    <p className="mt-6 max-w-3xl text-base font-medium leading-relaxed text-neutral-500 sm:text-lg">
      {content.description}
    </p>
  </div>
  <div className="mx-auto mt-10 aspect-square w-full max-w-[420px] lg:mt-0">
    <Image
      src={content.illustration.src}
      alt={content.illustration.alt}
      width={content.illustration.width}
      height={content.illustration.height}
      className="h-full w-full object-contain"
    />
  </div>
</div>
```

- [ ] **Step 6: Run the focused test and verify GREEN**

Run the command from Step 2.

Expected: PASS, including PNG alpha verification.

- [ ] **Step 7: Commit the international illustration**

```powershell
git add -- public/images/industries/roads/international-data-routes-v2.png scripts/industry-roads-page.test.mjs src/components/industry/roads/roads-capability-sections.tsx src/components/industry/industry-page-types.ts src/content/industries/roads.ts
git commit -m "feat: illustrate international road data flows"
```

### Task 4: Complete the final contact card

**Files:**
- Modify: `scripts/industry-roads-page.test.mjs:321-372`
- Modify: `src/components/industry/industry-final-cta.tsx:1-55`

- [ ] **Step 1: Write the failing contact-card test**

Add:

```js
test("final industry CTA exposes complete direct contact options", () => {
  assert.match(finalCtaSource, /Contato/);
  assert.match(finalCtaSource, /\(11\) 5178-3235/);
  assert.match(finalCtaSource, /\(11\) 92642-0123/);
  assert.match(finalCtaSource, /contato@togetherprivacy\.com/);
  assert.match(finalCtaSource, /https:\/\/wa\.me\/551151783235/);
  assert.match(finalCtaSource, /https:\/\/wa\.me\/5511926420123/);
  assert.match(finalCtaSource, /mailto:contato@togetherprivacy\.com/);
  assert.match(finalCtaSource, /focus-visible:ring-2/);
});
```

- [ ] **Step 2: Run the focused test and verify RED**

```powershell
node --test --test-name-pattern="final industry CTA exposes" scripts/industry-roads-page.test.mjs
```

Expected: FAIL because the direct contact options are absent.

- [ ] **Step 3: Add stable industry contact data**

Add the icons and contact data:

```tsx
import { ArrowUpRight, Mail, Phone } from "lucide-react";

const industryContacts = [
  {
    label: "WhatsApp",
    value: "(11) 5178-3235",
    href: "https://wa.me/551151783235",
    icon: Phone,
  },
  {
    label: "WhatsApp",
    value: "(11) 92642-0123",
    href: "https://wa.me/5511926420123",
    icon: Phone,
  },
  {
    label: "E-mail",
    value: "contato@togetherprivacy.com",
    href: "mailto:contato@togetherprivacy.com",
    icon: Mail,
  },
] as const;
```

- [ ] **Step 4: Replace the compact CTA card**

Use this complete card body:

```tsx
<div className="min-w-0 rounded-[28px] border border-black/5 bg-white p-6 shadow-[0_32px_70px_rgba(0,0,0,0.08)] sm:p-8">
  <div>
    <h3 className="text-3xl font-bold tracking-tight text-neutral-900">
      Contato
    </h3>
    <p className="mt-2 text-sm font-medium leading-relaxed text-neutral-500">
      Fale diretamente com nosso time.
    </p>
  </div>
  <IndustryContactLink
    sector={sector}
    position="final"
    allowedAnchors={allowedAnchors}
    variant="dark"
    size="xl"
    fullWidth
    className="mt-7"
  >
    {content.cta}
  </IndustryContactLink>
  <div className="mt-6 border-t border-neutral-200 pt-5">
    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500">
      Próximo passo
    </p>
    <p className="mt-2 text-sm font-bold leading-relaxed text-neutral-900">
      {content.nextStep}
    </p>
  </div>
  <div className="mt-6 space-y-3">
    {industryContacts.map((item) => {
      const Icon = item.icon;
      return (
        <a
          key={item.href}
          href={item.href}
          aria-label={`${item.label}: ${item.value}`}
          className="group flex min-h-16 min-w-0 items-center gap-4 rounded-[18px] border border-neutral-200 bg-neutral-50 px-4 py-3 outline-none transition-colors hover:border-brand-400 focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2"
        >
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[12px] bg-brand-400 text-neutral-950">
            <Icon className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="min-w-0 flex-1">
            <span className="block text-[9px] font-bold uppercase tracking-[0.16em] text-neutral-400">
              {item.label}
            </span>
            <span className="mt-1 block break-words text-sm font-bold leading-tight text-neutral-900 sm:text-base">
              {item.value}
            </span>
          </span>
          <ArrowUpRight className="h-4 w-4 shrink-0 text-neutral-400" aria-hidden="true" />
        </a>
      );
    })}
  </div>
</div>
```

- [ ] **Step 5: Run the focused test and verify GREEN**

Run the command from Step 2.

Expected: PASS.

- [ ] **Step 6: Commit the complete CTA card**

```powershell
git add -- scripts/industry-roads-page.test.mjs src/components/industry/industry-final-cta.tsx
git commit -m "feat: complete industry contact CTA"
```

### Task 5: Integration and responsive verification

**Files:**
- Verify: `src/components/industry/roads/roads-context-sections.tsx`
- Verify: `src/components/industry/roads/roads-capability-sections.tsx`
- Verify: `src/components/industry/industry-final-cta.tsx`
- Verify: `public/images/industries/roads/international-data-routes-v2.png`

- [ ] **Step 1: Run automated verification**

```powershell
npm test
npx tsc --noEmit
npm run lint
npm run build
```

Expected:

- All Node tests pass.
- TypeScript exits with code 0.
- ESLint has no new errors; pre-existing warnings may remain documented.
- Static build generates `/solucoes/privacidade-gestao-de-rodovias` successfully.

- [ ] **Step 2: Restore build-only churn**

```powershell
git restore -- public/.htaccess public/data/blog-posts.json public/data/blog-sync.json public/sitemap.xml
git status --short
```

Expected: only the pre-existing untracked `.impeccable/` directory remains.

- [ ] **Step 3: Serve the static export**

```powershell
npx serve out -l 4173 --no-clipboard
```

Verify HTTP 200 at:

```text
http://localhost:4173/solucoes/privacidade-gestao-de-rodovias
```

- [ ] **Step 4: Inspect desktop, tablet and mobile in the collaborative browser**

Use these viewport targets:

```text
Desktop: 1440 × 900
Tablet: 768 × 1024
Mobile: 360 × 800
```

At each viewport confirm:

- Semantic stage icons are aligned with the connecting sequence.
- The outcomes block is absent with no leftover gap.
- The training module has no clipping or oversized yellow surface.
- The transparent international illustration is crisp and contained.
- The final contact links fit and remain tappable.
- `document.documentElement.scrollWidth === document.documentElement.clientWidth`.
- Keyboard focus is visible on the CTA and direct contact links.

- [ ] **Step 5: Review the final diff and working tree**

```powershell
git diff --check
git status --short
git log -5 --oneline
```

Expected: no whitespace errors, no generated-file churn, and no accidental staging of `.impeccable/`.
