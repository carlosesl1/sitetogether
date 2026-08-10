# Rounded Partner Components Implementation Plan

> **For agentic workers:** Execute directly by default. Use subagents only for independent bounded lanes that satisfy the global harness policy. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the rigid, table-like blocks on the law-firm LGPD page with rounded compositions grounded in the existing TOGETHER home styles.

**Architecture:** Keep the current content objects and page order. Refactor only presentation classes and local icon mappings inside the existing partner components, borrowing the rounded outer surfaces from `Offers`, dark modules from `TechIntegration`, and icon tiles from `Methodology`.

**Tech Stack:** Next.js 16, React, TypeScript, Tailwind CSS, Framer Motion, Lucide React, Node test runner.

---

## File map

- Modify `src/components/legal-partners/law-firm-lgpd-page.tsx`: hero scale and partnership-model composition.
- Modify `src/components/legal-partners/partner-portfolio-offer.tsx`: rounded benefit modules.
- Modify `src/components/legal-partners/partner-capacity-section.tsx`: rounded capability bento and platform cards.
- Modify `scripts/law-firm-lgpd-page.test.mjs`: lock the approved scale and shared rounded patterns.

### Task 1: Lock the visual contract with failing tests

**Files:**
- Modify: `scripts/law-firm-lgpd-page.test.mjs`
- Test: `scripts/law-firm-lgpd-page.test.mjs`

- [ ] **Step 1: Extend the source fixtures**

Read the portfolio component once alongside the existing page and capacity fixtures:

```js
const portfolioSource = await readOptional(
  "../src/components/legal-partners/partner-portfolio-offer.tsx",
);
```

- [ ] **Step 2: Replace the old hero-scale assertion and add rounded-style assertions**

```js
test("annotated components reuse the Home rounded visual language", () => {
  const heroSource =
    pageSource.match(/<motion\.h1[\s\S]*?<\/motion\.h1>/)?.[0] ?? "";

  assert.match(heroSource, /sm:text-\[3\.5rem\]/);
  assert.doesNotMatch(heroSource, /sm:text-5xl/);

  assert.match(portfolioSource, /rounded-\[2rem\]/);
  assert.match(portfolioSource, /rounded-full/);
  assert.doesNotMatch(
    portfolioSource,
    /grid overflow-hidden border border-neutral-200/,
  );

  assert.match(capacitySource, /rounded-\[2rem\]/);
  assert.match(capacitySource, /rounded-\[24px\]/);
  assert.match(capacitySource, /flex flex-wrap/);
  assert.doesNotMatch(
    capacitySource,
    /grid overflow-hidden border border-white\/10/,
  );

  assert.match(pageSource, /rounded-\[2rem\][^"\n]*bg-neutral-100\/70/);
});
```

- [ ] **Step 3: Run the focused test and confirm the new contract fails**

Run:

```powershell
node --test scripts\law-firm-lgpd-page.test.mjs
```

Expected: the new rounded-style test fails because the current source still uses the rigid grids and `sm:text-5xl`.

### Task 2: Refine the hero and benefits strip

**Files:**
- Modify: `src/components/legal-partners/law-firm-lgpd-page.tsx`
- Modify: `src/components/legal-partners/partner-portfolio-offer.tsx`
- Test: `scripts/law-firm-lgpd-page.test.mjs`

- [ ] **Step 1: Apply the approved 56px hero scale**

Replace the hero heading class with:

```tsx
className="max-w-4xl text-[2.55rem] font-bold leading-[0.98] tracking-tight text-neutral-900 sm:text-[3.5rem]"
```

This preserves `40.8px` below `sm` and uses `56px` from `sm` upward.

- [ ] **Step 2: Replace the benefits table with a rounded grouped surface**

Use a rounded neutral outer surface and four independent white modules:

```tsx
<ul className="mt-14 grid gap-3 rounded-[2rem] border border-neutral-200 bg-neutral-50 p-3 shadow-xl shadow-neutral-200/40 sm:grid-cols-2 lg:grid-cols-4">
  {content.benefits.map((benefit, index) => (
    <li
      key={benefit}
      className="flex min-h-40 flex-col justify-between rounded-[1.35rem] bg-white p-6 text-sm font-semibold leading-relaxed text-neutral-700 transition-colors hover:bg-brand-400/10"
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-400 text-xs font-black text-neutral-950">
        0{index + 1}
      </span>
      <span className="mt-8 max-w-[16rem]">{benefit}</span>
    </li>
  ))}
</ul>
```

- [ ] **Step 3: Run the focused test**

Run:

```powershell
node --test scripts\law-firm-lgpd-page.test.mjs
```

Expected: hero and portfolio assertions pass; capacity and partnership-model assertions still fail.

### Task 3: Recompose the dark capacity section

**Files:**
- Modify: `src/components/legal-partners/partner-capacity-section.tsx`
- Test: `scripts/law-firm-lgpd-page.test.mjs`

- [ ] **Step 1: Add the existing Lucide icon vocabulary**

```tsx
import {
  BadgeCheck,
  ClipboardCheck,
  Clock3,
  Globe2,
  ListChecks,
  PanelsTopLeft,
} from "lucide-react";

const proofIcons = [
  ListChecks,
  Clock3,
  BadgeCheck,
  PanelsTopLeft,
  Globe2,
  ClipboardCheck,
] as const;
```

- [ ] **Step 2: Replace the six-cell table with a spaced rounded bento**

```tsx
<div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-12">
  {content.proofs.map((proof, index) => {
    const Icon = proofIcons[index];
    const featured = index < 2;

    return (
      <article
        key={proof.value}
        className={`group relative overflow-hidden rounded-[2rem] border border-white/10 bg-neutral-900/50 p-7 transition-all duration-300 hover:border-brand-400/30 hover:bg-neutral-900/70 ${
          featured
            ? "min-h-56 lg:col-span-6 lg:p-9"
            : "min-h-48 lg:col-span-3"
        }`}
      >
        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/[0.06] text-brand-400 transition-colors group-hover:bg-brand-400 group-hover:text-neutral-950">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <strong
          className={`mt-8 block font-bold tracking-tight text-brand-400 ${
            featured ? "text-5xl" : "text-2xl"
          }`}
        >
          {proof.value}
        </strong>
        <p className="mt-4 max-w-sm text-sm leading-relaxed text-neutral-400">
          {proof.label}
        </p>
      </article>
    );
  })}
</div>
```

- [ ] **Step 3: Replace the seven-cell logo row with the Home technology-card pattern**

```tsx
<div className="mt-7 flex flex-wrap gap-3">
  {platforms.map((platform) => (
    <div
      key={platform.label}
      className="group flex h-24 min-w-[150px] flex-1 items-center justify-center rounded-[24px] border border-white/5 bg-neutral-900/40 px-6 transition-all duration-300 hover:border-brand-400/30 hover:bg-neutral-900/60 sm:min-w-[210px]"
    >
      <Image
        src={platform.src}
        alt={platform.label}
        width={120}
        height={32}
        className="max-h-8 w-auto max-w-full object-contain brightness-0 invert opacity-60 transition-opacity group-hover:opacity-100"
      />
    </div>
  ))}
</div>
```

- [ ] **Step 4: Run the focused test**

Run:

```powershell
node --test scripts\law-firm-lgpd-page.test.mjs
```

Expected: capacity assertions pass; only the partnership-model assertion remains failing.

### Task 4: Recompose the partnership models

**Files:**
- Modify: `src/components/legal-partners/law-firm-lgpd-page.tsx`
- Test: `scripts/law-firm-lgpd-page.test.mjs`

- [ ] **Step 1: Replace the three exposed columns with a rounded grouped surface**

```tsx
<div className="mt-14 grid gap-4 rounded-[2rem] border border-neutral-200 bg-neutral-100/70 p-4 shadow-xl shadow-neutral-200/40 md:grid-cols-3">
  {content.partnerModels.map((model, index) => {
    const Icon = model.icon;
    return (
      <motion.article
        key={model.label}
        {...fadeUp}
        transition={{ ...fadeUp.transition, delay: index * 0.06 }}
        className="group rounded-[1.5rem] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-neutral-200/60"
      >
        <div className="flex items-center justify-between gap-4">
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-neutral-950 text-brand-400">
            <Icon className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-brand-600">
            0{index + 1}
          </span>
        </div>
        <p className="mt-8 text-[10px] font-black uppercase tracking-[0.22em] text-neutral-400">
          {model.label}
        </p>
        <h3 className="mt-3 text-2xl font-bold tracking-tight text-neutral-900">
          {model.title}
        </h3>
        <p className="mt-4 leading-relaxed text-neutral-500">{model.text}</p>
      </motion.article>
    );
  })}
</div>
```

- [ ] **Step 2: Run the focused test**

Run:

```powershell
node --test scripts\law-firm-lgpd-page.test.mjs
```

Expected: all tests pass.

### Task 5: Verify the complete page

**Files:**
- Verify: all modified source and test files.

- [ ] **Step 1: Run focused lint**

```powershell
npx eslint src\components\legal-partners\law-firm-lgpd-page.tsx src\components\legal-partners\partner-portfolio-offer.tsx src\components\legal-partners\partner-capacity-section.tsx scripts\law-firm-lgpd-page.test.mjs
```

Expected: exit code `0` with no errors.

- [ ] **Step 2: Stop the static server and build**

```powershell
npm run build
```

Expected: successful Next.js production build and static generation of the law-firm route.

- [ ] **Step 3: Serve the static export**

```powershell
npx --yes serve out -l 4173
```

Expected: `http://localhost:4173/solucoes/escritorios-de-advocacia` returns HTTP `200`.

- [ ] **Step 4: Inspect desktop and mobile**

Check `1440x900` and `390x844` for:

- hero computed font size of `56px` on desktop;
- rounded benefit, capability, platform, and partnership-model modules;
- no clipped text or logos;
- `document.documentElement.scrollWidth === innerWidth`;
- content order preserved on mobile.

- [ ] **Step 5: Commit only the intended files**

```powershell
git add -- scripts/law-firm-lgpd-page.test.mjs src/components/legal-partners/law-firm-lgpd-page.tsx src/components/legal-partners/partner-portfolio-offer.tsx src/components/legal-partners/partner-capacity-section.tsx
git diff --cached --check
git commit -m "refactor: align partner blocks with home styling"
```

Expected: unrelated WordPress sync output and user-owned files remain unstaged.

