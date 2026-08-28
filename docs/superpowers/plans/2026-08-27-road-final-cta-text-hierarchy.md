# Road Final CTA Text Hierarchy Implementation Plan

> **For agentic workers:** Execute directly by default. Use subagents only for independent bounded lanes that satisfy the global harness policy. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Group the final CTA pill, title and description into one compact text block aligned vertically with the contact card.

**Architecture:** Keep the shared final CTA component and all content unchanged. Move the existing `SectionPill` into the left grid column, change the desktop grid alignment from bottom to center, and reduce only the desktop title ceiling and internal spacing.

**Tech Stack:** React, TypeScript, Tailwind CSS, Node test runner, Next.js static export, T3 collaborative browser.

---

### Task 1: Lock the approved hierarchy with a failing test

**Files:**
- Modify: `scripts/industry-roads-page.test.mjs:377-386`
- Test: `scripts/industry-roads-page.test.mjs`

- [ ] **Step 1: Add the hierarchy contract after the contact-options test**

```js
test("final CTA groups its pill and copy in a centered text block", () => {
  assert.match(finalCtaSource, /grid items-center gap-12/);
  assert.match(
    finalCtaSource,
    /<div className="min-w-0">[\s\S]*?<SectionPill tone="brand">[\s\S]*?<h2 className="mt-6[^"]*lg:text-\[4rem\][^"]*">[\s\S]*?<p className="mt-6 max-w-lg/,
  );
  assert.doesNotMatch(finalCtaSource, /items-end/);
  assert.doesNotMatch(finalCtaSource, /lg:text-7xl/);
});
```

- [ ] **Step 2: Run the focused test and confirm the expected failure**

Run:

```powershell
node --test --test-name-pattern="final CTA groups" scripts/industry-roads-page.test.mjs
```

Expected: FAIL because the pill is still outside the grid and the grid still uses `items-end`.

---

### Task 2: Reorganize the left text block

**Files:**
- Modify: `src/components/industry/industry-final-cta.tsx:45-56`
- Test: `scripts/industry-roads-page.test.mjs`

- [ ] **Step 1: Replace the section's container opening with the approved structure**

Use this exact JSX:

```tsx
<div className="container relative z-10 mx-auto px-6">
  <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24">
    <div className="min-w-0">
      <SectionPill tone="brand">{content.pill}</SectionPill>
      <h2 className="mt-6 max-w-4xl break-words text-[clamp(2.7rem,10vw,3.5rem)] font-bold leading-[0.94] tracking-tight sm:text-6xl lg:text-[4rem]">
        {content.title}
      </h2>
      <p className="mt-6 max-w-lg text-lg font-medium leading-relaxed text-neutral-800">
        {content.description}
      </p>
    </div>
```

Do not modify the card markup that follows this block.

- [ ] **Step 2: Run the focused test and confirm it passes**

Run:

```powershell
node --test --test-name-pattern="final CTA groups" scripts/industry-roads-page.test.mjs
```

Expected: PASS.

- [ ] **Step 3: Commit the hierarchy change**

```powershell
git add -- scripts/industry-roads-page.test.mjs src/components/industry/industry-final-cta.tsx
git commit -m "refactor: organize road CTA text hierarchy"
```

---

### Task 3: Verify responsive rendering

**Files:**
- Verify: `src/components/industry/industry-final-cta.tsx`

- [ ] **Step 1: Run integrated automated checks**

```powershell
npm test
npx tsc --noEmit
npm run lint
npm run build
```

Expected: all tests pass; TypeScript exits 0; lint reports zero errors; the build includes `/solucoes/privacidade-gestao-de-rodovias`.

Restore only generated WordPress and sitemap churn after the build:

```powershell
git restore -- public/.htaccess public/data/blog-posts.json public/data/blog-sync.json public/sitemap.xml
```

- [ ] **Step 2: Verify the built page in the collaborative browser**

Open:

```text
http://localhost:4173/solucoes/privacidade-gestao-de-rodovias
```

Check desktop, tablet and mobile. Confirm:

- the pill sits immediately above the title;
- the left text block is vertically centered with the contact card on desktop;
- the desktop title computes to no more than 64px;
- the description stays within approximately 520px;
- the card markup and links remain unchanged;
- no viewport has horizontal overflow or clipped text.

- [ ] **Step 3: Confirm the final worktree state**

```powershell
git status --short
```

Expected: only the pre-existing untracked `.impeccable/` directory remains.
