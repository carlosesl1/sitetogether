# TOGETHER — Design System Reference

> **Purpose:** This document is the single source of truth for AI agents (and humans) to replicate and extend the TOGETHER website's visual language with pixel-perfect fidelity. Every token, pattern, and component rule below was extracted directly from the production codebase.

---

## 1. Color Palette

### Brand (Gold/Yellow)
| Token | Hex | Usage |
|---|---|---|
| `brand-100` | `#FFFBE6` | Highlights, subtle text backgrounds |
| `brand-200` | `#FFF0B3` | Hover fills, light accents |
| `brand-300` | `#FFE375` | Secondary accent |
| `brand-400` | `#FFD637` | **Primary brand color** — buttons, CTAs, badges, icons, accent lines |
| `brand-500` | `#F5C000` | Hero accent text (`text-brand-500 italic font-light`) |
| `brand-600` | `#D9A800` | Small label text (e.g., section numbering) |
| `brand-700` | `#B38A00` | Rarely used, deep accent |

### Neutrals
| Token | Hex | Usage |
|---|---|---|
| `neutral-50` | `#F8F9FA` | Card backgrounds, pill backgrounds |
| `neutral-100` | `#E9ECEF` | Borders (`border-neutral-100`), subtle dividers |
| `neutral-200` | `#DEE2E6` | Card group borders, outline buttons, grid separators |
| `neutral-400` | *(Tailwind default)* | Accent heading text (`italic font-light`), body text secondary |
| `neutral-500` | *(Tailwind default)* | Body text, subtitles, descriptions |
| `neutral-800` | `#343A40` | Foreground in muted contexts |
| `neutral-900` | `#212529` | **Primary text color**, dark UI elements |
| `#0a0a0a` | — | **Dark section backgrounds** (NOT `neutral-950`, always use `bg-[#0a0a0a]`) |

### Semantic
| Token | Hex |
|---|---|
| `success` | `#10B981` |
| `error` | `#EF4444` |
| `warning` | `#F59E0B` |
| `info` | `#3B82F6` |

---

## 2. Typography

**Font Family:** `Plus Jakarta Sans` (loaded via Next.js `--font-jakarta`)

### Heading Hierarchy

| Element | Classes | Example |
|---|---|---|
| **H1** (Hero) | `text-5xl font-bold tracking-tight sm:text-6xl xl:text-7xl text-neutral-900 leading-[1]` | Page hero titles |
| **H2** (Section) | `text-5xl md:text-6xl font-bold tracking-tight text-neutral-900 leading-[1.1]` | Section headings |
| **H2** (Large Variant) | `text-5xl md:text-7xl font-bold text-neutral-900 tracking-tight leading-none` | Statement headings (Segmentation) |
| **H3** (Card Title) | `text-2xl font-bold text-neutral-900 tracking-tight` | Card headings |
| **H3** (Large Card) | `text-3xl font-bold text-white tracking-tight` | Dark section cards |

### Accent Text Pattern
Always pair the main heading with an accent line:
```tsx
<h2 className="text-5xl md:text-6xl font-bold tracking-tight text-neutral-900 leading-[1.1]">
    Main heading text <br />
    <span className="text-neutral-400 italic font-light">accent phrase.</span>
</h2>
```
**On dark backgrounds**, replace `text-neutral-400` with `text-brand-400`:
```tsx
<span className="text-brand-400 italic font-light">accent phrase.</span>
```

### Body Text
| Context | Classes |
|---|---|
| Hero subtitle | `text-xl text-neutral-500 leading-relaxed max-w-2xl font-medium` |
| Section subtitle | `text-xl text-neutral-500 max-w-xl font-medium` |
| Card body | `text-sm text-neutral-500 leading-relaxed font-medium` |
| Large card body | `text-lg text-neutral-400 font-medium leading-relaxed` |
| Dark section body | `text-lg text-neutral-400 max-w-xl font-medium leading-relaxed` |

### Label/Badge Text
| Context | Classes |
|---|---|
| Pill badge text | `text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500` |
| Section numbering | `text-[10px] font-black text-brand-600 uppercase tracking-widest` |
| Subtitle label | `text-[10px] font-bold uppercase tracking-widest` |
| Step timestamp | `text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-400` |

---

## 3. Spacing & Layout

### Container
```tsx
<div className="container px-4 md:px-6 mx-auto">  // Hero
<div className="container px-6 mx-auto">            // All other sections
```

### Section Padding
| Type | Class |
|---|---|
| Standard section | `py-32` |
| Large section | `py-40` |
| Extra large section | `py-48` |
| Hero | `pt-12 pb-32 lg:pt-20 lg:pb-40` |

### Heading Bottom Margin
Always `mb-8` after headings, `mb-24` for the entire header block before content.

### Content Header Block
```tsx
<div className="max-w-3xl mb-24">
    {/* Pill badge */}
    {/* H2 heading */}
    {/* Subtitle paragraph */}
</div>
```
**Centered variant:**
```tsx
<div className="max-w-3xl mb-24 flex flex-col items-center text-center mx-auto">
```

---

## 4. Component Patterns

### 4.1 Pill Badge (Section Label)
The consistent section identifier used across all pages:
```tsx
// Light background
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-50 border border-neutral-100 mb-8 shadow-sm">
    <div className="w-1.5 h-1.5 rounded-full bg-brand-400 shadow-[0_0_10px_rgba(255,214,55,0.8)]"></div>
    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500">Label Text</span>
</div>

// Dark background
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8 shadow-sm backdrop-blur-md">
    <div className="w-1.5 h-1.5 rounded-full bg-brand-400 shadow-[0_0_10px_rgba(255,214,55,0.8)]"></div>
    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400">Label Text</span>
</div>
```

### 4.2 Icon Containers
```tsx
// Standard (light bg)
<div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-neutral-100 text-neutral-500">

// Featured/Active (brand bg)
<div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-brand-400 text-neutral-900">

// Dark section
<div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-white/5 text-white border border-white/10">

// Large variant (methodology)
<div className="w-20 h-20 rounded-[30px] bg-brand-400 flex items-center justify-center text-white shadow-2xl">
```

### 4.3 Buttons

**Primary CTA (Button component):**
```tsx
<Button size="lg" className="h-16 px-12 text-lg font-bold shadow-2xl shadow-brand-400/30 rounded-2xl">
    Label <ArrowRight className="w-5 h-5" />
</Button>
```

**Primary CTA (custom, used in CTA section):**
```tsx
<button className="h-20 px-12 bg-neutral-950 text-white rounded-[24px] font-bold text-sm uppercase tracking-[0.2em] hover:bg-neutral-800 transition-all shadow-[0_20px_40px_rgba(0,0,0,0.15)] flex items-center justify-center gap-4 group active:scale-95">
```

**Brand CTA (dark section):**
```tsx
<button className="h-20 px-12 bg-brand-400 text-neutral-900 rounded-[24px] font-bold text-sm uppercase tracking-[0.2em] hover:bg-brand-500 transition-all shadow-[0_20px_40px_rgba(255,214,55,0.15)] flex items-center justify-center gap-4 group active:scale-95">
```

**Outline Button:**
```tsx
<Button size="lg" variant="outline" className="h-16 px-12 text-lg font-medium bg-white/50 backdrop-blur-md rounded-2xl border-neutral-200">
```

**Small Dark Button (sidebar):**
```tsx
<button className="w-full py-4 bg-neutral-900 text-white rounded-2xl font-bold text-xs uppercase tracking-[0.2em] hover:bg-brand-400 hover:text-neutral-900 transition-all active:scale-95 shadow-xl">
```

### 4.4 Card Containers

**Bento Grid (segmentation style):**
```tsx
<div className="grid grid-cols-1 md:grid-cols-12 gap-px bg-neutral-200 border border-neutral-200 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-neutral-200/50">
    <div className="md:col-span-7 bg-white p-12 group">
    <div className="md:col-span-5 bg-neutral-50 p-12 group">
</div>
```

**Offers Grid (3-columns):**
```tsx
<div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-neutral-100 rounded-[32px] overflow-hidden shadow-2xl shadow-neutral-200/50 bg-white">
    <div className="p-10 md:p-14 flex flex-col">
```

**Dark Card Container (gap-px):**
```tsx
<div className="flex flex-col gap-px bg-white/5 border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl">
    <div className="bg-[#0a0a0a] p-12 md:p-14">
```

**Featured Card Indicator:**
```tsx
{item.featured && (
    <>
        <div className="absolute top-0 left-0 right-0 h-1 bg-brand-400"></div>
        <div className="absolute top-8 right-8">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-400 text-neutral-900 text-[9px] font-bold uppercase tracking-widest shadow-sm">
                <span className="w-1 h-1 rounded-full bg-neutral-900 animate-pulse"></span>
                Label
            </span>
        </div>
    </>
)}
```

**Sticky Stacking Cards (DPO solutions):**
```tsx
<div className="flex flex-col relative mt-16 space-y-24 pb-12">
    <motion.div
        className="sticky bg-[#0a0a0a] border border-white/10 p-12 md:p-14 rounded-[2.5rem] shadow-[0_-20px_40px_rgba(0,0,0,0.4)]"
        style={{ top: `calc(120px + ${idx * 24}px)`, zIndex: idx + 10 }}
    >
```

### 4.5 Alert/Highlight Box (Methodology)
```tsx
<div className="relative overflow-hidden rounded-[40px] bg-neutral-900 p-1 md:p-1.5">
    <div className="bg-neutral-900 rounded-[38.5px] p-8 md:p-14 flex flex-col md:flex-row items-center gap-10 md:gap-20">
```

---

## 5. Background Patterns

### Dot Grid (Hero sections)
```tsx
<div className="absolute inset-0 opacity-[0.03]"
     style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
</div>
```

### Line Grid (Content sections)
```tsx
<div className="absolute inset-0 opacity-[0.03] -z-10"
     style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
</div>
```

### Ambient Glow (Blurred circles)
```tsx
// Top-right warm glow
<div className="absolute top-0 right-[-10%] w-[50%] h-[70%] bg-gradient-to-bl from-brand-100/30 to-transparent blur-[120px] rounded-full" />

// Bottom-left neutral glow
<div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-gradient-to-tr from-neutral-200/50 to-transparent blur-[100px] rounded-full" />

// Dark section brand glow
<div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-brand-400/5 blur-[120px] rounded-full pointer-events-none -translate-x-1/2" />
```

### Section Divider Line
```tsx
<div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-neutral-200 to-transparent"></div>
```

---

## 6. Animation Patterns (Framer Motion)

### Scroll-in Reveal (Standard)
```tsx
<motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: idx * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
>
```

### Pill Badge Reveal
```tsx
<motion.div
    initial={{ opacity: 0, y: -10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
>
```

### Sticky Stacking Reveal (DPO solutions)
```tsx
<motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
>
```

### Hero Parallax
```tsx
const heroRef = useRef<HTMLDivElement>(null);
const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
});
const y = useTransform(heroScroll, [0, 1], ["0%", "50%"]);
const opacity = useTransform(heroScroll, [0, 0.8], [1, 0]);

<motion.div style={{ y, opacity }}>
```

### Easing Functions
| Name | Value | Usage |
|---|---|---|
| Premium ease-out | `[0.16, 1, 0.3, 1]` | Standard reveals, FAQ, methodology |
| Smooth ease-out | `[0.33, 1, 0.68, 1]` | Stacking cards, large reveals |

---

## 7. Section Templates

### Light Section (Standard)
```tsx
<section className="w-full py-32 bg-white relative overflow-hidden">
    <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-neutral-200 to-transparent"></div>
    <div className="container px-6 relative z-10 mx-auto">
        <div className="max-w-3xl mb-24">
            {/* Pill Badge */}
            {/* H2 with accent span */}
            {/* Subtitle paragraph */}
        </div>
        {/* Section content */}
    </div>
</section>
```

### Dark Section
```tsx
<section className="w-full py-40 bg-[#0a0a0a] relative overflow-hidden">
    <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-brand-400/5 blur-[120px] rounded-full pointer-events-none -translate-x-1/2" />
    <div className="container px-6 relative z-10 mx-auto">
        <div className="max-w-3xl mb-24">
            {/* Dark Pill Badge */}
            {/* H2 with brand-400 accent */}
            {/* Subtitle in neutral-400 */}
        </div>
        {/* Section content */}
    </div>
</section>
```

### CTA Section (Brand Background)
```tsx
<section className="w-full pt-48 pb-20 bg-brand-400 relative overflow-hidden text-neutral-900">
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] bg-[size:40px_40px]"></div>
    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white opacity-20 rounded-full blur-[120px] -mr-40 -mt-40"></div>
</section>
```

---

## 8. Shared Components (Import Paths)

| Component | Path | Usage |
|---|---|---|
| `Navbar` | `@/components/ui/navbar` | Sticky top nav, always first |
| `Footer` | `@/components/ui/footer` | Page footer, always last |
| `CTASection` | `@/components/ui/cta-section` | Brand-yellow CTA block, always before Footer |
| `Button` | `@/components/ui/button` | Primary button component (variants: default, outline, secondary, ghost) |

### Page Skeleton
```tsx
<main className="min-h-screen bg-white selection:bg-brand-400/30">
    <Navbar />
    {/* Hero section */}
    {/* Content sections */}
    <CTASection />
    <Footer />
</main>
```

---

## 9. Border Radius Scale

| Token | Value | Usage |
|---|---|---|
| `rounded-lg` | `8px` | Small elements |
| `rounded-xl` | `12px` | Buttons, small cards |
| `rounded-2xl` | `16px` | Standard cards, icon containers, proposal cards |
| `rounded-3xl` | `24px` | Large cards, FAQ containers |
| `rounded-[24px]` | `24px` | CTA buttons |
| `rounded-[32px]` | `32px` | Offers grid container |
| `rounded-[2.5rem]` | `40px` | Bento grid containers, dark card groups |
| `rounded-[40px]` | `40px` | Alert boxes |
| `rounded-[48px]` | `48px` | Contact card (CTA section) |
| `rounded-full` | `9999px` | Pills, dot indicators |

---

## 10. Shadow Scale

| Name | Value | Usage |
|---|---|---|
| Standard card | `shadow-2xl shadow-neutral-200/50` | Light card containers |
| Dark card stack | `shadow-[0_-20px_40px_rgba(0,0,0,0.4)]` | Sticky stacking (dark bg) |
| Brand glow | `shadow-2xl shadow-brand-400/30` | Primary CTA buttons |
| Dark CTA | `shadow-[0_20px_40px_rgba(0,0,0,0.15)]` | Dark buttons |
| Brand dot glow | `shadow-[0_0_10px_rgba(255,214,55,0.8)]` | Pill badge indicator dot |
| Elevated card | `shadow-xl shadow-white/5` | Dark buttons on dark bg |
| Featured icon glow | `shadow-[0_0_20px_rgba(255,214,55,0.3)]` | Featured icon on dark bg |

---

## 11. Hover & Interaction States

### Card Hover (Light)
```tsx
className="group hover:bg-neutral-50 transition-colors"
// Icon inside:
className="bg-neutral-100 text-neutral-500 group-hover:bg-brand-400 group-hover:text-neutral-900 transition-all duration-500"
```

### Card Hover (Dark)
```tsx
className="group hover:bg-white/[0.02] transition-colors"
// or
className="group hover:border-brand-400/30 transition-all"
```

### Button Hover
```tsx
className="hover:bg-brand-500 active:scale-95"              // Brand button
className="hover:bg-neutral-800 active:scale-95"             // Dark button
className="hover:bg-brand-400 hover:text-neutral-900"        // Dark-to-brand transition
```

### Link/Text Hover
```tsx
className="text-neutral-900 font-bold hover:text-brand-600 transition-colors underline underline-offset-4 decoration-brand-400/30"
```

---

## 12. Key Rules for AI Replication

1. **NEVER use `bg-neutral-950` for dark sections** — always use `bg-[#0a0a0a]`.
2. **Heading accent is always `italic font-light`** on a `<span>` — use `text-neutral-400` on light and `text-brand-400` on dark.
3. **Pill badges are identical everywhere** — never deviate from the exact pattern above.
4. **Container consistency**: `container px-6 mx-auto` for content, `container px-4 md:px-6 mx-auto` for hero sections.
5. **The accent color is `brand-400` (#FFD637)** — never use raw yellow hex values inline.
6. **All icon containers are `rounded-2xl`** (16px), never `rounded-full` for feature icons.
7. **Card containers use `gap-px`** with a colored background showing through as 1px dividers.
8. **Animation easing**: use `[0.16, 1, 0.3, 1]` for standard reveals, `[0.33, 1, 0.68, 1]` for large/sticky reveals.
9. **Body text is always `font-medium`** — never regular weight for paragraphs.
10. **The `<Button>` component** should be used for primary actions. Custom `<button>` elements are reserved for large CTAs and specialty cases.
11. **Maximum content width**: headings use `max-w-3xl` or `max-w-4xl`, body text uses `max-w-2xl` or `max-w-xl`.
12. **Section numbering format**: `01 / Label` using `text-[10px] font-black text-brand-600 uppercase tracking-widest`.
