# Minimal Road International Illustration Implementation Plan

> **For agentic workers:** Execute directly by default. Use subagents only for independent bounded lanes that satisfy the global harness policy. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the detailed international-road globe with a light, minimal TOGETHER illustration that remains legible on the section's light background.

**Architecture:** Generate one new transparent raster asset and version it as `international-data-routes-v3.png`. Keep the current `RoadsInternationalSection` layout unchanged; update only the content/type references, then remove the superseded v2 asset after proving it has no active references.

**Tech Stack:** Built-in image generation tool, Next.js 16 static export, React, TypeScript, Node test runner, T3 collaborative browser.

---

### Task 1: Lock the new asset contract with a failing test

**Files:**
- Modify: `scripts/industry-roads-page.test.mjs:355-367`
- Test: `scripts/industry-roads-page.test.mjs`

- [ ] **Step 1: Point the international illustration test at v3**

Replace the existing test body with:

```js
test("international section renders a transparent project-owned illustration", async () => {
  const asset = await readOptionalBinary(
    "../public/images/industries/roads/international-data-routes-v3.png",
  );

  assert.ok(asset.length > 10_000, "illustration must not be an empty placeholder");
  assert.equal(asset.subarray(1, 4).toString("ascii"), "PNG");
  assert.ok([4, 6].includes(asset[25]), "PNG must preserve an alpha channel");
  assert.match(roadsCapabilitySource, /import Image from "next\/image"/);
  assert.match(roadsCapabilitySource, /content\.illustration/);
  assert.match(contentSource, /international-data-routes-v3\.png/);
  assert.doesNotMatch(contentSource, /international-data-routes-v2\.png/);
  assert.match(typesSource, /readonly illustration:/);
});
```

- [ ] **Step 2: Run the focused test and confirm the expected failure**

Run:

```powershell
node --test --test-name-pattern="international section renders" scripts/industry-roads-page.test.mjs
```

Expected: FAIL because `international-data-routes-v3.png` does not exist and the content still references v2.

---

### Task 2: Generate and integrate the minimal illustration

**Files:**
- Create: `public/images/industries/roads/international-data-routes-v3.png`
- Modify: `src/content/industries/roads.ts:225-230`
- Modify: `src/components/industry/industry-page-types.ts:121-125`
- Test: `scripts/industry-roads-page.test.mjs`

- [ ] **Step 1: Generate the transparent asset with the built-in image tool**

Use this exact prompt:

```text
Use case: stylized-concept
Asset type: transparent editorial illustration for a corporate privacy and technology landing page
Primary request: create a light, minimal illustration representing international road infrastructure and connected data, recognizably aligned with the TOGETHER visual identity
Subject: one simplified curved roadway, a modern bridge segment, one tunnel entrance, and no more than two tiny road vehicles; three or four data nodes connected by one thin route line
Style/medium: refined editorial 3D illustration with simplified geometry, low visual density, clean edges, matte surfaces, and generous negative space
Composition/framing: compact centered silhouette with clear transparent margins on every side; a subtle technical semicircle behind the road elements suggests international reach without a detailed globe or world map
Lighting/mood: bright soft studio lighting, precise and calm
Color palette: warm white, light gray and matte silver structures; medium graphite road and outlines; TOGETHER yellow #FFD637 only for nodes, connection line and tiny signals
Constraints: genuinely transparent background with preserved alpha; the light subject must remain distinct from a light gray webpage through graphite outlines and a soft contained shadow; road, bridge and tunnel must be immediately recognizable; no text, logos or UI
Avoid: black globe, detailed map, forests, rocks, dense scenery, more than two vehicles, trains, railways, airplanes, photorealistic clutter, yellow background, opaque rectangle, checkerboard, external rings, hard shadows, clipping, red/cyan/magenta fringe, watermark
```

Inspect the generated result with `view_image`. Reject it if the background is opaque, the scene resembles a detailed diorama, or the light structures disappear against a light-gray surround.

- [ ] **Step 2: Copy the accepted output into the project**

Copy the selected built-in output from its `$CODEX_HOME/generated_images/...` path to:

```text
public/images/industries/roads/international-data-routes-v3.png
```

Do not overwrite v2 during this step.

- [ ] **Step 3: Update the content reference and accessible description**

In `src/content/industries/roads.ts`, use:

```ts
illustration: {
  src: `${imageBase}/international-data-routes-v3.png`,
  width: 1254,
  height: 1254,
  alt: "Ilustração minimalista de rodovia, ponte e túnel conectados por pontos de dados internacionais",
},
```

- [ ] **Step 4: Update the literal image type**

In `src/components/industry/industry-page-types.ts`, use:

```ts
readonly illustration: {
  readonly src: "/images/industries/roads/international-data-routes-v3.png";
  readonly width: 1254;
  readonly height: 1254;
  readonly alt: string;
};
```

- [ ] **Step 5: Validate alpha, dimensions and safe margins**

Use `System.Drawing.Bitmap` to verify:

```text
Width: 1254
Height: 1254
PixelFormat: Format32bppArgb
Alpha: at least one fully transparent pixel and at least one visible pixel
Bounds: visible content does not touch any canvas edge
```

Reject and regenerate if any condition fails.

- [ ] **Step 6: Run the focused test and confirm it passes**

Run:

```powershell
node --test --test-name-pattern="international section renders" scripts/industry-roads-page.test.mjs
```

Expected: PASS.

- [ ] **Step 7: Commit the generated asset and references**

```powershell
git add -- public/images/industries/roads/international-data-routes-v3.png scripts/industry-roads-page.test.mjs src/content/industries/roads.ts src/components/industry/industry-page-types.ts
git commit -m "feat: simplify international road illustration"
```

---

### Task 3: Remove the superseded asset and verify the page

**Files:**
- Delete: `public/images/industries/roads/international-data-routes-v2.png`
- Verify: `src/components/industry/roads/roads-capability-sections.tsx`
- Verify: `src/content/industries/roads.ts`

- [ ] **Step 1: Prove v2 has no active references**

Run:

```powershell
rg -n "international-data-routes-v2" src scripts public docs
```

Expected: only historical design/plan documentation may mention v2; no source, test or runtime reference may remain.

- [ ] **Step 2: Resolve and remove only the old project asset**

Confirm the resolved path is inside `public/images/industries/roads/`, then remove exactly:

```text
public/images/industries/roads/international-data-routes-v2.png
```

The deleted binary remains recoverable from commit `0ab1c1b`.

- [ ] **Step 3: Run integrated verification**

Run:

```powershell
npm test
npx tsc --noEmit
npm run lint
npm run build
```

Expected: 84 or more tests pass; TypeScript exits 0; lint has zero errors; the static build includes `/solucoes/privacidade-gestao-de-rodovias`.

After the build, restore only build-generated WordPress and sitemap churn:

```powershell
git restore -- public/.htaccess public/data/blog-posts.json public/data/blog-sync.json public/sitemap.xml
```

- [ ] **Step 4: Verify the localhost output**

Serve the static export on port 4173 and verify HTTP 200 for:

```text
http://localhost:4173/solucoes/privacidade-gestao-de-rodovias
http://localhost:4173/images/industries/roads/international-data-routes-v3.png
```

Use the T3 collaborative browser to check the section at 1440×900, 768×1024 and 390×844. Confirm the image loads, remains clearly separated from the light card, stays contained in its 420px image region and creates no horizontal overflow.

- [ ] **Step 5: Commit cleanup**

```powershell
git add -- public/images/industries/roads/international-data-routes-v2.png
git commit -m "chore: remove superseded road illustration"
```

- [ ] **Step 6: Confirm the final worktree state**

Run:

```powershell
git status --short
```

Expected: only the pre-existing untracked `.impeccable/` directory remains.
