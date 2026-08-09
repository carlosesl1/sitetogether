# LGPD para Escritórios de Advocacia Implementation Plan

> **For agentic workers:** Execute directly by default. Use subagents only for independent bounded lanes that satisfy the global harness policy. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Construir uma landing page estática da TOGETHER para escritórios de advocacia, apresentando a coentrega de LGPD com divisão clara entre liderança jurídica e execução técnico-operacional.

**Architecture:** Criar uma rota isolada em `src/app/solucoes/escritorios-de-advocacia`, com metadata própria e um componente de página em `src/components/legal-partners/`. O conteúdo factual ficará separado da composição visual; o mapa de coentrega será um componente dedicado. A página herdará os primitivos, tokens, navegação, footer e padrões de movimento existentes, sem modificar o design global.

**Tech Stack:** Next.js 16 App Router, React 19, TypeScript, Tailwind CSS 4, Framer Motion, Lucide React, Radix Accordion, Node Test Runner, Impeccable detector e export estático do Next.js.

---

## File Structure

### Arquivos novos

- `src/app/solucoes/escritorios-de-advocacia/layout.tsx` — metadata, canonical e Open Graph da rota.
- `src/app/solucoes/escritorios-de-advocacia/page.tsx` — entrypoint server da rota.
- `src/components/legal-partners/law-firm-lgpd-content.ts` — conteúdo aprovado, provas permitidas e limites da oferta.
- `src/components/legal-partners/co-delivery-map.tsx` — visual original “demanda → escritório + TOGETHER”.
- `src/components/legal-partners/law-firm-lgpd-page.tsx` — composição das seções da landing page.
- `scripts/law-firm-lgpd-page.test.mjs` — contratos de conteúdo, metadata, limites de linguagem, links e sitemap.

### Arquivos modificados

- `public/sitemap.xml` — inclusão da nova URL pública.

### Arquivos deliberadamente preservados

- `src/app/globals.css` — nenhum token ou regra global nova.
- `src/components/ui/service-page-shell.tsx` — não será expandido para comportar uma composição que só existe nesta rota.
- `src/components/ui/navbar.tsx`, `src/components/ui/footer.tsx`, `src/components/ui/site-primitives.tsx` — reutilizados sem mudança.
- `src/components/ui/cta-section.tsx` — não usado, pois sua mensagem fixa não corresponde ao CTA de parceria.

---

### Task 1: Criar o contrato de conteúdo e a rota base

**Files:**
- Create: `scripts/law-firm-lgpd-page.test.mjs`
- Create: `src/app/solucoes/escritorios-de-advocacia/layout.tsx`
- Create: `src/app/solucoes/escritorios-de-advocacia/page.tsx`
- Create: `src/components/legal-partners/law-firm-lgpd-content.ts`

- [ ] **Step 1: Escrever o teste inicial que falha**

Criar `scripts/law-firm-lgpd-page.test.mjs` com o contrato inicial:

```js
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function readOptional(relativePath) {
  try {
    return await readFile(new URL(relativePath, import.meta.url), "utf8");
  } catch {
    return "";
  }
}

const layoutSource = await readOptional(
  "../src/app/solucoes/escritorios-de-advocacia/layout.tsx",
);
const routeSource = await readOptional(
  "../src/app/solucoes/escritorios-de-advocacia/page.tsx",
);
const contentSource = await readOptional(
  "../src/components/legal-partners/law-firm-lgpd-content.ts",
);

test("law-firm LGPD route declares focused metadata and canonical", () => {
  assert.match(layoutSource, /LGPD para Escritórios de Advocacia/);
  assert.match(layoutSource, /Parceria TOGETHER/);
  assert.match(layoutSource, /solucoes\/escritorios-de-advocacia/);
});

test("law-firm LGPD route delegates rendering to its page component", () => {
  assert.match(routeSource, /LawFirmLgpdPage/);
});

test("content preserves the approved role boundary", () => {
  assert.match(contentSource, /Seu escritório conduz o jurídico/);
  assert.match(contentSource, /A TOGETHER sustenta a execução da LGPD/);
  assert.match(contentSource, /estratégia e interpretação jurídica/i);
  assert.match(contentSource, /diagnóstico e data mapping/i);
  assert.match(contentSource, /confidencialidade/i);
});
```

- [ ] **Step 2: Executar o teste e confirmar a falha**

Run:

```powershell
node --test scripts/law-firm-lgpd-page.test.mjs
```

Expected: `FAIL` nas três verificações porque os arquivos da rota ainda não existem.

- [ ] **Step 3: Criar a metadata da rota**

Criar `src/app/solucoes/escritorios-de-advocacia/layout.tsx`:

```tsx
import type { Metadata } from "next";
import type { ReactNode } from "react";

const title = "LGPD para Escritórios de Advocacia | Parceria TOGETHER";
const description =
  "Apoio técnico e operacional em LGPD para escritórios de advocacia. Seu escritório conduz a estratégia jurídica e a TOGETHER complementa a execução com equipe especializada.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/solucoes/escritorios-de-advocacia",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/solucoes/escritorios-de-advocacia",
    title,
    description,
  },
};

export default function EscritoriosDeAdvocaciaLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return children;
}
```

- [ ] **Step 4: Criar o conteúdo aprovado como fonte única da rota**

Criar `src/components/legal-partners/law-firm-lgpd-content.ts`:

```tsx
import {
  BadgeCheck,
  Building2,
  ClipboardCheck,
  Database,
  FileCheck2,
  GraduationCap,
  MessagesSquare,
  Settings2,
  ShieldAlert,
  Split,
  UserCheck,
  Users,
  Workflow,
} from "lucide-react";

export const lawFirmLgpdContent = {
  hero: {
    pill: "Parceria para escritórios de advocacia",
    title: "Seu escritório conduz o jurídico.",
    accent: "A TOGETHER sustenta a execução da LGPD.",
    text: "Quando a demanda exige diagnóstico, processos, tecnologia e operação, uma equipe especializada trabalha ao lado do seu escritório — com responsabilidades claras e confidencialidade.",
    primary: { href: "/contato", label: "Agendar conversa de parceria" },
    secondary: { href: "#coentrega", label: "Entender a coentrega" },
  },
  scenarios: [
    {
      icon: FileCheck2,
      title: "Adequação LGPD",
      text: "Mapeamento, políticas, controles, responsáveis e implantação.",
    },
    {
      icon: ShieldAlert,
      title: "Incidente de dados",
      text: "Avaliação, evidências, comunicação e coordenação da resposta.",
    },
    {
      icon: ClipboardCheck,
      title: "Auditoria ou contrato",
      text: "Questionários, documentos e comprovação operacional.",
    },
    {
      icon: UserCheck,
      title: "DPO e titulares",
      text: "Canal, rotina, registros e acompanhamento contínuo.",
    },
  ],
  roles: {
    office: {
      label: "Liderança jurídica",
      title: "O escritório permanece no comando.",
      items: [
        "Estratégia e interpretação jurídica",
        "Pareceres, contratos e instrumentos legais",
        "Relação com o cliente",
        "Aprovação das decisões jurídicas",
      ],
    },
    together: {
      label: "Execução especializada",
      title: "A TOGETHER transforma decisões em operação.",
      items: [
        "Diagnóstico e data mapping",
        "Processos, controles e evidências",
        "Ferramentas e rotinas de privacidade",
        "DPO, treinamento e suporte operacional",
      ],
    },
  },
  capabilities: [
    {
      icon: BadgeCheck,
      title: "Diagnóstico e adequação",
      text: "Levantamos maturidade, riscos, prioridades e o plano de execução do projeto.",
    },
    {
      icon: Database,
      title: "Mapeamento de dados",
      text: "Organizamos fluxos, agentes, finalidades e pontos de risco da operação.",
    },
    {
      icon: Workflow,
      title: "Processos e evidências",
      text: "Transformamos decisões em rotinas, controles, registros e entregáveis verificáveis.",
    },
    {
      icon: Settings2,
      title: "Tecnologia de privacidade",
      text: "Configuramos e operamos plataformas, canais e ferramentas usadas no programa.",
    },
    {
      icon: Users,
      title: "DPO e titulares",
      text: "Apoiamos o encarregado, os canais e o acompanhamento das demandas do dia a dia.",
    },
    {
      icon: GraduationCap,
      title: "Treinamento e continuidade",
      text: "Preparamos equipes e responsáveis para manter os processos funcionando.",
    },
  ],
  audiences: [
    {
      icon: Building2,
      label: "Escritórios pequenos e médios",
      title: "Atenda a demanda sem montar um núcleo interno.",
      text: "Especialistas entram quando a execução ultrapassa o escopo jurídico habitual.",
    },
    {
      icon: Users,
      label: "Estruturas maiores",
      title: "Amplie capacidade sem sobrecarregar sua equipe.",
      text: "Apoio para projetos simultâneos, frentes técnicas e continuidade operacional.",
    },
  ],
  process: [
    {
      icon: MessagesSquare,
      label: "01 / Conversa inicial",
      title: "Entender o contexto",
      text: "Conhecemos o perfil, as demandas e a forma de atuação do escritório.",
    },
    {
      icon: Split,
      label: "02 / Definição de papéis",
      title: "Organizar a coentrega",
      text: "Escopo, responsáveis, comunicação e entregáveis ficam claros antes do início.",
    },
    {
      icon: Users,
      label: "03 / Coentrega",
      title: "Executar em conjunto",
      text: "As equipes atuam de forma coordenada conforme a necessidade do projeto.",
    },
  ],
  proofs: [
    { value: "+5 anos", label: "de atuação apresentada em LGPD" },
    { value: "+200", label: "atividades e entregáveis" },
    { value: "Equipe", label: "jurídico, privacidade, tecnologia e operação" },
    { value: "Plataformas", label: "experiência operacional já exibida no site" },
  ],
  faqs: [
    {
      question: "A TOGETHER substitui a atuação jurídica do escritório?",
      answer: "Não. O escritório permanece responsável pela estratégia, interpretação jurídica, pareceres e relação com o cliente. A TOGETHER complementa a entrega com a frente técnica e operacional definida no projeto.",
    },
    {
      question: "Quais demandas podem ser atendidas em conjunto?",
      answer: "Projetos de adequação, data mapping, incidentes, auditorias, due diligence, operação de DPO, demandas de titulares, implantação de processos, tecnologia e treinamentos.",
    },
    {
      question: "A parceria atende projetos pontuais e demandas recorrentes?",
      answer: "Sim. O formato pode atender um projeto específico ou uma necessidade contínua de capacidade, sempre com escopo e responsabilidades definidos antes do início.",
    },
    {
      question: "Como são definidas as responsabilidades de cada equipe?",
      answer: "A conversa inicial identifica o contexto da demanda. Em seguida, o escopo registra responsáveis, entregáveis, comunicação e pontos de aprovação de cada equipe.",
    },
    {
      question: "Como funciona a confidencialidade das informações?",
      answer: "As informações compartilhadas são tratadas de forma confidencial, com a formalização adequada ao projeto e às partes envolvidas.",
    },
  ],
} as const;
```

- [ ] **Step 5: Criar o entrypoint da rota**

Criar `src/app/solucoes/escritorios-de-advocacia/page.tsx`:

```tsx
import { LawFirmLgpdPage } from "@/components/legal-partners/law-firm-lgpd-page";

export default function EscritoriosDeAdvocaciaPage() {
  return <LawFirmLgpdPage />;
}
```

Neste ponto o import ainda não existe; o teste de metadata e conteúdo deve passar, enquanto o TypeScript continuará incompleto até a Task 3.

- [ ] **Step 6: Executar o teste de contrato**

Run:

```powershell
node --test scripts/law-firm-lgpd-page.test.mjs
```

Expected: `3 tests passed`.

- [ ] **Step 7: Não criar commit ainda**

Manter esta etapa sem commit porque o entrypoint ainda aponta para um componente inexistente. O primeiro commit ocorrerá quando a rota compilar na Task 3.

---

### Task 2: Construir o mapa original de coentrega

**Files:**
- Modify: `scripts/law-firm-lgpd-page.test.mjs`
- Create: `src/components/legal-partners/co-delivery-map.tsx`

- [ ] **Step 1: Acrescentar o teste que descreve o mapa**

Adicionar ao final de `scripts/law-firm-lgpd-page.test.mjs`:

```js
const mapSource = await readOptional(
  "../src/components/legal-partners/co-delivery-map.tsx",
);

test("co-delivery map exposes both responsibilities without motion dependency", () => {
  assert.match(mapSource, /Mapa da demanda/);
  assert.match(mapSource, /Escritório/);
  assert.match(mapSource, /TOGETHER/);
  assert.match(mapSource, /useReducedMotion/);
  assert.match(mapSource, /aria-label="Mapa da demanda de LGPD"/);
});
```

- [ ] **Step 2: Executar o teste e confirmar a nova falha**

Run:

```powershell
node --test scripts/law-firm-lgpd-page.test.mjs
```

Expected: `3 tests passed, 1 failed` porque `co-delivery-map.tsx` ainda não existe.

- [ ] **Step 3: Implementar o mapa de coentrega**

Criar `src/components/legal-partners/co-delivery-map.tsx`:

```tsx
"use client";

import { motion, useReducedMotion } from "framer-motion";
import { CheckCircle2, FileText, ShieldCheck } from "lucide-react";

type CoDeliveryMapProps = {
  officeItems: readonly string[];
  togetherItems: readonly string[];
};

const laneMotion = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
} as const;

export function CoDeliveryMap({
  officeItems,
  togetherItems,
}: CoDeliveryMapProps) {
  const reduceMotion = useReducedMotion();

  return (
    <div
      aria-label="Mapa da demanda de LGPD"
      className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0a0a0a] p-5 text-white shadow-2xl shadow-neutral-950/20 sm:p-7"
    >
      <div className="flex flex-col gap-3 border-b border-white/10 pb-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-[10px] font-black uppercase tracking-[0.24em] text-brand-400">
            Mapa da demanda
          </p>
          <p className="mt-2 text-lg font-bold">Projeto de LGPD do cliente</p>
        </div>
        <span className="w-fit rounded-full border border-brand-400/25 bg-brand-400/10 px-3 py-1 text-[9px] font-black uppercase tracking-[0.2em] text-brand-400">
          Coentrega coordenada
        </span>
      </div>

      <div className="relative mt-5 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 text-brand-400">
            <FileText className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm font-bold text-white">Demanda recebida pelo escritório</p>
            <p className="mt-1 text-xs font-medium text-neutral-400">
              Estratégia jurídica e execução multidisciplinar
            </p>
          </div>
        </div>
      </div>

      <motion.div
        aria-hidden="true"
        initial={reduceMotion ? false : { scaleY: 0 }}
        whileInView={reduceMotion ? undefined : { scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto h-8 w-px origin-top bg-brand-400/60"
      />

      <div className="grid gap-3 md:grid-cols-2">
        <motion.section
          {...laneMotion}
          className="rounded-2xl border border-neutral-100 bg-white p-5 text-neutral-900"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-100 text-neutral-900">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <p className="text-[9px] font-black uppercase tracking-[0.2em] text-neutral-400">
                Escritório
              </p>
              <h3 className="mt-1 text-lg font-bold">Liderança jurídica</h3>
            </div>
          </div>
          <ul className="mt-5 space-y-3">
            {officeItems.map((item) => (
              <li key={item} className="flex gap-3 text-sm font-medium text-neutral-600">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-neutral-900" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.section>

        <motion.section
          {...laneMotion}
          transition={{ ...laneMotion.transition, delay: 0.08 }}
          className="rounded-2xl bg-brand-400 p-5 text-neutral-950"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-950 text-brand-400">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <p className="text-[9px] font-black uppercase tracking-[0.2em] text-neutral-700">
                TOGETHER
              </p>
              <h3 className="mt-1 text-lg font-bold">Execução especializada</h3>
            </div>
          </div>
          <ul className="mt-5 space-y-3">
            {togetherItems.map((item) => (
              <li key={item} className="flex gap-3 text-sm font-semibold text-neutral-800">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-neutral-950" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.section>
      </div>
    </div>
  );
}
```

- [ ] **Step 4: Executar o teste do mapa**

Run:

```powershell
node --test scripts/law-firm-lgpd-page.test.mjs
```

Expected: `4 tests passed`.

- [ ] **Step 5: Manter a mudança sem commit até a página compilar**

O mapa será integrado imediatamente na Task 3; não criar um commit que ainda deixe o import do entrypoint quebrado.

---

### Task 3: Implementar a landing page completa dentro do estilo atual

**Files:**
- Modify: `scripts/law-firm-lgpd-page.test.mjs`
- Create: `src/components/legal-partners/law-firm-lgpd-page.tsx`

- [ ] **Step 1: Acrescentar o contrato estrutural da página**

Adicionar ao final de `scripts/law-firm-lgpd-page.test.mjs`:

```js
const pageSource = await readOptional(
  "../src/components/legal-partners/law-firm-lgpd-page.tsx",
);

test("landing page renders the approved narrative and conversion path", () => {
  assert.match(pageSource, /<Navbar/);
  assert.match(pageSource, /<CoDeliveryMap/);
  assert.match(pageSource, /id="coentrega"/);
  assert.match(pageSource, /lawFirmLgpdContent\.capabilities/);
  assert.match(pageSource, /lawFirmLgpdContent\.audiences/);
  assert.match(pageSource, /lawFirmLgpdContent\.process/);
  assert.match(pageSource, /lawFirmLgpdContent\.proofs/);
  assert.match(pageSource, /lawFirmLgpdContent\.faqs/);
  assert.match(pageSource, /Agendar conversa de parceria/);
  assert.match(pageSource, /href="\/contato"/);
  assert.match(pageSource, /<Footer/);
});

test("landing page reuses the incumbent TOGETHER visual primitives", () => {
  assert.match(pageSource, /SectionPill/);
  assert.match(pageSource, /ActionLink/);
  assert.match(pageSource, /PixelDecor/);
  assert.match(pageSource, /bg-\[#0a0a0a\]/);
  assert.match(pageSource, /brand-400/);
  assert.doesNotMatch(pageSource, /font-family/);

  const rawColors = pageSource.match(/#[0-9a-fA-F]{6,8}/g) ?? [];
  const approvedRawColors = new Set(["#0a0a0a", "#0000000a"]);
  assert.deepEqual(
    [...new Set(rawColors.map((color) => color.toLowerCase()))].sort(),
    [...approvedRawColors].sort(),
  );
});
```

- [ ] **Step 2: Executar o teste e confirmar as falhas estruturais**

Run:

```powershell
node --test scripts/law-firm-lgpd-page.test.mjs
```

Expected: `4 tests passed, 2 failed` porque `law-firm-lgpd-page.tsx` ainda não existe.

- [ ] **Step 3: Criar a composição completa da página**

Criar `src/components/legal-partners/law-firm-lgpd-page.tsx`:

```tsx
"use client";

import { motion } from "framer-motion";
import { LockKeyhole } from "lucide-react";
import { CoDeliveryMap } from "@/components/legal-partners/co-delivery-map";
import { lawFirmLgpdContent } from "@/components/legal-partners/law-firm-lgpd-content";
import { PixelDecor } from "@/components/ui/backgrounds/pixel-decor";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Footer } from "@/components/ui/footer";
import { Navbar } from "@/components/ui/navbar";
import { ActionLink, SectionPill } from "@/components/ui/site-primitives";

const fadeUp = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
} as const;

type SectionHeadingProps = {
  pill: string;
  title: string;
  accent: string;
  text: string;
  tone?: "light" | "dark";
  centered?: boolean;
};

function SectionHeading({
  pill,
  title,
  accent,
  text,
  tone = "light",
  centered = false,
}: SectionHeadingProps) {
  const dark = tone === "dark";

  return (
    <div className={centered ? "mx-auto max-w-4xl text-center" : "max-w-4xl"}>
      <motion.div {...fadeUp} className="mb-8">
        <SectionPill tone={dark ? "dark" : "light"}>{pill}</SectionPill>
      </motion.div>
      <motion.h2
        {...fadeUp}
        className={`text-[2.55rem] font-bold leading-[1.02] tracking-normal sm:text-5xl md:text-6xl ${
          dark ? "text-white" : "text-neutral-900"
        }`}
      >
        {title} <span className="font-light italic text-brand-500">{accent}</span>
      </motion.h2>
      <motion.p
        {...fadeUp}
        className={`mt-7 max-w-2xl text-base font-medium leading-relaxed md:text-lg ${
          centered ? "mx-auto" : ""
        } ${dark ? "text-neutral-400" : "text-neutral-500"}`}
      >
        {text}
      </motion.p>
    </div>
  );
}

export function LawFirmLgpdPage() {
  const content = lawFirmLgpdContent;

  return (
    <>
      <Navbar showCtaArrow />
      <main className="min-h-screen overflow-x-hidden bg-white selection:bg-brand-400/30">
        <section className="relative overflow-hidden bg-white pb-24 pt-20 md:pb-32 md:pt-28">
          <PixelDecor placement="topRight" mask="topRight" opacity={0.2} />
          <PixelDecor placement="bottomLeft" mask="bottomLeft" opacity={0.1} />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_14%,rgba(245,192,0,0.14),transparent_28%),radial-gradient(circle_at_80%_18%,rgba(0,0,0,0.035),transparent_24%)]" />
          <div className="container relative z-10 mx-auto grid gap-12 px-6 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.86fr)] lg:items-center xl:gap-16">
            <div className="min-w-0">
              <motion.div {...fadeUp} className="mb-8">
                <SectionPill>{content.hero.pill}</SectionPill>
              </motion.div>
              <motion.h1
                {...fadeUp}
                className="max-w-4xl text-[2.75rem] font-bold leading-[0.98] tracking-normal text-neutral-900 sm:text-6xl xl:text-[4rem]"
              >
                {content.hero.title}{" "}
                <span className="font-light italic text-brand-500">
                  {content.hero.accent}
                </span>
              </motion.h1>
              <motion.p
                {...fadeUp}
                className="mt-8 max-w-2xl text-lg font-medium leading-relaxed text-neutral-500 sm:text-xl"
              >
                {content.hero.text}
              </motion.p>
              <motion.div {...fadeUp} className="mt-10 flex flex-col gap-4 sm:flex-row">
                <ActionLink href={content.hero.primary.href} size="xl">
                  {content.hero.primary.label}
                </ActionLink>
                <ActionLink href={content.hero.secondary.href} variant="dark" size="xl">
                  {content.hero.secondary.label}
                </ActionLink>
              </motion.div>
            </div>
            <CoDeliveryMap
              officeItems={content.roles.office.items}
              togetherItems={content.roles.together.items}
            />
          </div>
        </section>

        <section className="relative overflow-hidden border-t border-neutral-100 bg-white py-24 md:py-36">
          <div className="container relative z-10 mx-auto px-6">
            <SectionHeading
              pill="Quando a demanda chega"
              title="A questão jurídica pode exigir"
              accent="uma operação inteira."
              text="Algumas demandas começam na interpretação da lei e avançam para processos, controles, tecnologia e evidências que precisam funcionar na prática."
            />
            <div className="mt-16 grid gap-px overflow-hidden rounded-[2rem] border border-neutral-200 bg-neutral-200 md:grid-cols-2 xl:grid-cols-4">
              {content.scenarios.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.article
                    key={item.title}
                    {...fadeUp}
                    transition={{ ...fadeUp.transition, delay: index * 0.05 }}
                    className="bg-white p-7 transition-colors hover:bg-neutral-50"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-neutral-950 text-brand-400">
                      <Icon className="h-5 w-5" />
                    </div>
                    <p className="mt-8 text-[10px] font-black uppercase tracking-[0.22em] text-brand-600">
                      {String(index + 1).padStart(2, "0")} / Demanda
                    </p>
                    <h3 className="mt-4 text-xl font-bold text-neutral-900">{item.title}</h3>
                    <p className="mt-4 text-sm font-medium leading-relaxed text-neutral-500">
                      {item.text}
                    </p>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="coentrega" className="relative overflow-hidden bg-[#0a0a0a] py-24 text-white md:py-40">
          <PixelDecor placement="topRight" mask="topRight" opacity={0.14} />
          <div className="container relative z-10 mx-auto px-6">
            <SectionHeading
              pill="Papéis claros"
              title="Duas competências."
              accent="Uma entrega coordenada."
              text="O escritório preserva a liderança jurídica. A TOGETHER assume a frente técnica e operacional acordada para transformar decisões em execução."
              tone="dark"
            />
            <div className="mt-16 grid gap-6 lg:grid-cols-2">
              {[content.roles.office, content.roles.together].map((role, index) => (
                <motion.article
                  key={role.label}
                  {...fadeUp}
                  className={
                    index === 0
                      ? "rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 md:p-10"
                      : "rounded-[2rem] bg-brand-400 p-7 text-neutral-950 md:p-10"
                  }
                >
                  <p className={`text-[10px] font-black uppercase tracking-[0.22em] ${index === 0 ? "text-brand-400" : "text-neutral-700"}`}>
                    {role.label}
                  </p>
                  <h3 className="mt-5 text-3xl font-bold leading-tight">{role.title}</h3>
                  <ul className="mt-8 space-y-4">
                    {role.items.map((item) => (
                      <li key={item} className={`border-b pb-4 text-sm font-medium ${index === 0 ? "border-white/10 text-neutral-300" : "border-black/10 text-neutral-800"}`}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-white py-24 md:py-36">
          <PixelDecor placement="left" mask="left" opacity={0.08} />
          <div className="container relative z-10 mx-auto px-6">
            <SectionHeading
              pill="Capacidade especializada"
              title="Apoio técnico e operacional"
              accent="para a demanda real."
              text="O escopo é definido conforme o projeto, sem duplicar o papel jurídico do escritório."
              centered
            />
            <div className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {content.capabilities.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.article
                    key={item.title}
                    {...fadeUp}
                    transition={{ ...fadeUp.transition, delay: index * 0.04 }}
                    className="rounded-[2rem] border border-neutral-100 bg-white p-7 shadow-sm shadow-neutral-200/60 transition-all hover:border-brand-400/40 hover:shadow-2xl hover:shadow-brand-400/10"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-neutral-950 text-brand-400">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-7 text-xl font-bold text-neutral-900">{item.title}</h3>
                    <p className="mt-4 text-sm font-medium leading-relaxed text-neutral-500">{item.text}</p>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden border-y border-neutral-100 bg-neutral-50 py-24 md:py-32">
          <div className="container mx-auto px-6">
            <SectionHeading
              pill="Para escritórios de diferentes portes"
              title="Capacidade adequada"
              accent="ao tamanho da demanda."
              text="Do primeiro projeto de LGPD ao reforço de uma área de privacidade já estruturada."
              centered
            />
            <div className="mt-14 grid gap-5 lg:grid-cols-2">
              {content.audiences.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.article key={item.label} {...fadeUp} className="rounded-[2rem] border border-neutral-100 bg-white p-7 md:p-10">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-400 text-neutral-950">
                      <Icon className="h-5 w-5" />
                    </div>
                    <p className="mt-7 text-[10px] font-black uppercase tracking-[0.22em] text-brand-600">{item.label}</p>
                    <h3 className="mt-4 text-2xl font-bold text-neutral-900">{item.title}</h3>
                    <p className="mt-5 text-sm font-medium leading-relaxed text-neutral-500">{item.text}</p>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-white py-24 md:py-36">
          <div className="container mx-auto px-6">
            <SectionHeading
              pill="Como a parceria começa"
              title="Uma entrada consultiva,"
              accent="com papéis definidos."
              text="A conversa inicial organiza contexto, responsabilidades e forma de trabalho antes de qualquer entrega."
            />
            <div className="relative mt-16 grid gap-8 lg:grid-cols-3">
              <div className="absolute left-0 right-0 top-10 hidden h-px bg-neutral-100 lg:block" />
              {content.process.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.article key={item.label} {...fadeUp} transition={{ ...fadeUp.transition, delay: index * 0.08 }} className="relative rounded-[2rem] border border-neutral-100 bg-white p-7 lg:border-transparent">
                    <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-[1.6rem] border border-neutral-100 bg-white text-neutral-500 shadow-xl shadow-neutral-900/5">
                      <Icon className="h-6 w-6" />
                    </div>
                    <p className="mt-8 text-[10px] font-black uppercase tracking-[0.22em] text-brand-600">{item.label}</p>
                    <h3 className="mt-4 text-2xl font-bold text-neutral-900">{item.title}</h3>
                    <p className="mt-5 text-sm font-medium leading-relaxed text-neutral-500">{item.text}</p>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#0a0a0a] py-24 text-white md:py-32">
          <div className="container mx-auto px-6">
            <SectionHeading
              pill="Capacidade TOGETHER"
              title="Experiência que sustenta"
              accent="a execução."
              text="As provas abaixo reproduzem apenas credenciais que já fazem parte da comunicação atual da TOGETHER."
              tone="dark"
            />
            <div className="mt-14 grid gap-px overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 sm:grid-cols-2 xl:grid-cols-4">
              {content.proofs.map((proof) => (
                <div key={proof.value} className="bg-[#0a0a0a] p-7">
                  <p className="text-3xl font-bold text-brand-400">{proof.value}</p>
                  <p className="mt-3 text-sm font-medium leading-relaxed text-neutral-400">{proof.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-16 md:py-24">
          <div className="container mx-auto px-6">
            <motion.div {...fadeUp} className="flex flex-col gap-8 rounded-[2rem] bg-brand-400 p-7 text-neutral-950 md:flex-row md:items-center md:justify-between md:p-10">
              <div className="flex max-w-3xl flex-col gap-5 md:flex-row md:items-center">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-neutral-950 text-brand-400">
                  <LockKeyhole className="h-7 w-7" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.22em] text-neutral-700">Confidencialidade</p>
                  <h2 className="mt-3 text-2xl font-bold">Informações tratadas com discrição desde a primeira conversa.</h2>
                  <p className="mt-3 text-sm font-medium leading-relaxed text-neutral-800">A formalização é adequada ao projeto e às partes envolvidas.</p>
                </div>
              </div>
              <ActionLink href="/contato" variant="dark" size="lg" className="w-full md:w-auto">
                Agendar conversa
              </ActionLink>
            </motion.div>
          </div>
        </section>

        <section className="border-t border-neutral-100 bg-white py-24 md:py-32">
          <div className="container mx-auto grid gap-14 px-6 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1fr)]">
            <SectionHeading
              pill="Perguntas frequentes"
              title="Clareza antes"
              accent="da primeira entrega."
              text="Respostas objetivas sobre o papel de cada equipe e o início da parceria."
            />
            <Accordion type="single" collapsible className="w-full">
              {content.faqs.map((item, index) => (
                <AccordionItem key={item.question} value={`faq-${index + 1}`}>
                  <AccordionTrigger>{item.question}</AccordionTrigger>
                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section className="relative overflow-hidden bg-brand-400 py-24 text-neutral-950 md:py-36">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] bg-[size:40px_40px]" />
          <div className="container relative z-10 mx-auto px-6 text-center">
            <SectionPill tone="brand">Parceria TOGETHER</SectionPill>
            <h2 className="mx-auto mt-8 max-w-4xl text-[2.75rem] font-bold leading-[0.98] tracking-normal sm:text-6xl">
              Amplie sua capacidade em LGPD com responsabilidades claras.
            </h2>
            <p className="mx-auto mt-7 max-w-2xl text-base font-medium leading-relaxed text-neutral-800 md:text-lg">
              Converse com nosso time sobre o perfil e as demandas do seu escritório.
            </p>
            <div className="mt-10">
              <ActionLink href="/contato" variant="dark" size="xl">
                Agendar conversa de parceria
              </ActionLink>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
```

- [ ] **Step 4: Executar os testes focados**

Run:

```powershell
node --test scripts/law-firm-lgpd-page.test.mjs
```

Expected: `6 tests passed`.

- [ ] **Step 5: Executar lint nos arquivos da rota**

Run:

```powershell
npx eslint "src/app/solucoes/escritorios-de-advocacia/**/*.tsx" "src/components/legal-partners/**/*.tsx"
```

Expected: exit code `0`, sem erros.

- [ ] **Step 6: Criar o primeiro commit funcional**

```powershell
git add -- "scripts/law-firm-lgpd-page.test.mjs" "src/app/solucoes/escritorios-de-advocacia" "src/components/legal-partners"
git diff --cached --check
git commit -m "feat: add LGPD partnership page for law firms"
```

Não incluir `.agents/`, `.codex/`, `.superpowers/` ou `Group 633208 (10).svg`.

---

### Task 4: Adicionar descoberta SEO e guardrails de linguagem

**Files:**
- Modify: `scripts/law-firm-lgpd-page.test.mjs`
- Modify: `public/sitemap.xml`

- [ ] **Step 1: Acrescentar testes de sitemap e linguagem proibida**

Adicionar ao final de `scripts/law-firm-lgpd-page.test.mjs`:

```js
const sitemapSource = await readOptional("../public/sitemap.xml");
const approvedCopy = `${contentSource}\n${pageSource}`;

test("sitemap publishes the law-firm LGPD route", () => {
  assert.match(
    sitemapSource,
    /https:\/\/togetherprivacy\.tech\/solucoes\/escritorios-de-advocacia/,
  );
});

test("public copy avoids unapproved commercial promises", () => {
  assert.doesNotMatch(approvedCopy, /white-label/i);
  assert.doesNotMatch(approvedCopy, /exclusividade/i);
  assert.doesNotMatch(approvedCopy, /não abordamos o cliente/i);
  assert.doesNotMatch(approvedCopy, /advogado não (entende|domina)/i);
  assert.doesNotMatch(approvedCopy, /garantia de resultado/i);
});
```

- [ ] **Step 2: Executar o teste e confirmar a falha do sitemap**

Run:

```powershell
node --test scripts/law-firm-lgpd-page.test.mjs
```

Expected: `7 tests passed, 1 failed`, apenas na URL ausente do sitemap.

- [ ] **Step 3: Adicionar a URL ao sitemap**

Inserir após a entrada de `/contato` em `public/sitemap.xml`:

```xml
  <url>
    <loc>https://togetherprivacy.tech/solucoes/escritorios-de-advocacia</loc>
    <lastmod>2026-08-09T00:00:00.000Z</lastmod>
  </url>
```

- [ ] **Step 4: Executar o teste completo do contrato**

Run:

```powershell
node --test scripts/law-firm-lgpd-page.test.mjs
```

Expected: `8 tests passed`.

- [ ] **Step 5: Executar a suíte do projeto**

Run:

```powershell
npm test
```

Expected: todos os testes passam, incluindo os 8 novos contratos.

- [ ] **Step 6: Commitar sitemap e guardrails**

```powershell
git add -- "public/sitemap.xml" "scripts/law-firm-lgpd-page.test.mjs"
git diff --cached --check
git commit -m "test: guard LGPD partnership page claims and discovery"
```

---

### Task 5: Verificar o export estático e o HTML produzido

**Files:**
- Verify: `out/solucoes/escritorios-de-advocacia.html`
- Verify: `out/sitemap.xml`

- [ ] **Step 1: Registrar o status antes do build**

Run:

```powershell
git status --short
```

Expected: somente mudanças preexistentes ou artefatos deliberadamente não rastreados; nenhum arquivo da feature pendente.

- [ ] **Step 2: Executar lint global**

Run:

```powershell
npm run lint
```

Expected: exit code `0`. Avisos preexistentes podem ser relatados, mas nenhum erro novo é aceito.

- [ ] **Step 3: Executar o build de exportação**

Run:

```powershell
npm run build
```

Expected: build concluído e nova rota listada como página estática. O comando também executa `sync:wordpress` e `redirects:blog`; inspecionar o status depois e não incorporar mudanças incidentais sem relação com a feature.

- [ ] **Step 4: Verificar os artefatos gerados**

Run:

```powershell
$pageHtml = Get-Content -LiteralPath "out\solucoes\escritorios-de-advocacia.html" -Raw
$sitemapHtml = Get-Content -LiteralPath "out\sitemap.xml" -Raw
if (-not $pageHtml.Contains("Seu escritório conduz o jurídico")) { throw "Headline ausente no export" }
if (-not $pageHtml.Contains("Agendar conversa de parceria")) { throw "CTA ausente no export" }
if (-not $pageHtml.Contains("canonical")) { throw "Canonical ausente no export" }
if (-not $sitemapHtml.Contains("/solucoes/escritorios-de-advocacia")) { throw "Rota ausente no sitemap exportado" }
Write-Output "STATIC_EXPORT_OK"
```

Expected: `STATIC_EXPORT_OK`.

- [ ] **Step 5: Verificar que o build não alterou arquivos fora do escopo**

Run:

```powershell
git status --short
```

Expected: sem mudanças rastreadas inesperadas. Preservar e relatar qualquer alteração produzida pelo sync em vez de adicioná-la ao commit da página.

---

### Task 6: Executar QA visual, detector e fechamento Impeccable

**Files:**
- Inspect: `src/app/solucoes/escritorios-de-advocacia/page.tsx`
- Inspect: `src/components/legal-partners/law-firm-lgpd-page.tsx`
- Inspect: `src/components/legal-partners/co-delivery-map.tsx`
- Capture: `outputs/lgpd-law-firms-desktop.png`
- Capture: `outputs/lgpd-law-firms-mobile.png`

- [ ] **Step 1: Servir o export estático**

Usar um servidor estático, não `next start`:

```powershell
npx --yes serve out -l 4173
```

Expected: servidor disponível em `http://localhost:4173`.

- [ ] **Step 2: Abrir a rota pelo preview colaborativo**

Navegar para:

```text
http://localhost:4173/solucoes/escritorios-de-advocacia.html
```

Validar em uma rodada conjunta:

- desktop `1440 × 900`;
- mobile `390 × 844`;
- headline e CTA visíveis no primeiro viewport;
- mapa legível e sem sobreposição;
- ordem “demanda → papéis → capacidades → públicos → processo → prova → confidencialidade → FAQ → CTA”;
- Navbar e Footer idênticos ao restante do site;
- nenhum overflow horizontal;
- conteúdo essencial visível sem hover;
- mobile com trilhas sequenciais e conectores simples;
- contraste, foco e tamanho dos alvos interativos.

Salvar as capturas nos dois caminhos definidos acima.

- [ ] **Step 3: Corrigir todos os problemas visuais materiais em um único lote**

Editar apenas:

```text
src/components/legal-partners/law-firm-lgpd-page.tsx
src/components/legal-partners/co-delivery-map.tsx
```

Não modificar tokens globais, Navbar, Footer ou páginas existentes para corrigir um problema exclusivo desta rota.

- [ ] **Step 4: Repetir uma única rodada de confirmação**

Rebuildar somente se os arquivos mudaram, servir novamente `out/` e recapturar os mesmos viewports. Esta é a segunda e última rodada visual antes da revisão final.

- [ ] **Step 5: Executar o detector Impeccable uma vez**

Run:

```powershell
node ".agents\skills\impeccable\scripts\detect.mjs" --json "src/app/solucoes/escritorios-de-advocacia" "src/components/legal-partners"
```

Expected: saída JSON sem achados mecânicos bloqueantes. Corrigir em um único lote qualquer problema de contraste, overflow, imagem quebrada, texto gradiente, glow excessivo ou desvio do design system.

- [ ] **Step 6: Executar a revisão final Impeccable**

Usar uma única revisão read-only `impeccable_finish_reviewer`, sem histórico herdado, fornecendo:

- pedido original e decisões confirmadas;
- `docs/superpowers/specs/2026-08-09-lgpd-escritorios-advocacia-design.md`;
- arquivos da rota;
- capturas desktop e mobile;
- saída do detector;
- `DESIGN_SYSTEM.md` como autoridade visual;
- restrição explícita de preservar a originalidade e o estilo atual.

Aplicar achados materiais em um lote, recapturar os mesmos viewports e pedir um único verdict follow-up ao mesmo reviewer. Não abrir revisões paralelas.

- [ ] **Step 7: Rodar a verificação final após a última mudança**

Run:

```powershell
node --test scripts/law-firm-lgpd-page.test.mjs
npm test
npm run lint
npm run build
```

Expected: testes, lint e build passam após a última alteração relevante.

- [ ] **Step 8: Commitar somente as correções finais, se existirem**

```powershell
git add -- "src/app/solucoes/escritorios-de-advocacia" "src/components/legal-partners" "scripts/law-firm-lgpd-page.test.mjs" "public/sitemap.xml"
git diff --cached --check
git commit -m "fix: polish LGPD partnership page across viewports"
```

Se não houver correções após os commits anteriores, não criar commit vazio.

---

## Completion Checklist

- [ ] Nova rota estática criada e incluída no sitemap.
- [ ] Metadata, canonical e Open Graph específicos presentes.
- [ ] Hero demonstra a divisão de papéis no primeiro viewport.
- [ ] Escritório permanece explicitamente na liderança jurídica.
- [ ] TOGETHER aparece como capacidade técnico-operacional complementar.
- [ ] Confidencialidade é afirmada sem exclusividade ou não abordagem.
- [ ] Nenhum case ou resultado não comprovado foi inventado.
- [ ] Estilo, componentes e movimento atuais foram preservados.
- [ ] Desktop e mobile foram comparados visualmente.
- [ ] Testes, lint, detector e build passaram após a última mudança.
- [ ] HTML e sitemap do `out/` foram inspecionados.
- [ ] Arquivos preexistentes e não relacionados permaneceram fora dos commits.
