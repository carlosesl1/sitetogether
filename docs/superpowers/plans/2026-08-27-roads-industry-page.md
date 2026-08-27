# Gestão de Rodovias Industry Page Implementation Plan

> **For agentic workers:** Execute directly by default. Use subagents only for independent bounded lanes that satisfy the global harness policy. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build and locally validate the Gestão de Rodovias landing page plus the smallest shared industry-page foundations needed for the remaining five sectors.

**Architecture:** Keep the route thin and the approved copy in a typed content module. Use focused industry components for the reusable hero, proof strip, attributed CTA, FAQ and final CTA, while keeping road-specific narrative sections explicit instead of forcing a premature universal renderer. The page remains compatible with Next.js static export and reuses the current TOGETHER Navbar, Footer, SectionPill, ActionLink and PixelDecor.

**Tech Stack:** Next.js 16 App Router, React 19, TypeScript, Tailwind CSS 4, Framer Motion, Lucide React, Node test runner, Sharp 0.35.4, static export.

---

## Execution boundary

This plan implements only the shared foundations and `/solucoes/privacidade-gestao-de-rodovias`. Do not create the five remaining routes in this batch. Their final copy and hero assets must be validated after the pilot proves the shell, responsive behavior and conversion contract.

The current checkout contains unrelated dirty files, including generated sitemap and blog data. Before implementation, use an isolated worktree based on commit `202da91` only after the user approves that execution workflow. Never stage or restore unrelated files from the current dirty checkout.

## File structure

### Create

- `src/components/industry/industry-page-types.ts` — shared content and CTA types plus the road-page contract.
- `src/content/industries/roads.ts` — source of truth for the approved road-sector copy, anchors and metadata.
- `src/lib/industry-attribution.ts` — pure allowlist, URL-building and event-name helpers.
- `src/components/industry/industry-contact-link.tsx` — progressively enhanced CTA and safe `dataLayer` dispatch.
- `src/components/industry/industry-proof-strip.tsx` — stats-only institutional proof without client logos.
- `src/components/industry/industry-faq-section.tsx` — configurable, accessible FAQ in the visual language of the home.
- `src/components/industry/industry-hero.tsx` — art-directed desktop/mobile hero.
- `src/components/industry/industry-technology-rail.tsx` — reusable privacy-platform proof rail.
- `src/components/industry/industry-final-cta.tsx` — configurable final yellow conversion section.
- `src/components/industry/industry-section-heading.tsx` — shared section heading using the current pill and typography system.
- `src/components/industry/roads/roads-context-sections.tsx` — operational map, lifecycle and free-flow story.
- `src/components/industry/roads/roads-capability-sections.tsx` — capability mosaic, privacy by design, continuity, training, international and method sections.
- `src/components/industry/roads-industry-page.tsx` — page composition.
- `src/content/privacy-platforms.ts` — shared platform-logo data.
- `src/app/solucoes/privacidade-gestao-de-rodovias/page.tsx` — thin route.
- `src/app/solucoes/privacidade-gestao-de-rodovias/layout.tsx` — route metadata and canonical.
- `scripts/optimize-industry-hero.mjs` — reproducible AVIF/WebP/PNG generation.
- `scripts/industry-roads-page.test.mjs` — focused regression suite.
- `public/images/industries/roads/hero-desktop.avif`
- `public/images/industries/roads/hero-desktop.webp`
- `public/images/industries/roads/hero-desktop.png`
- `public/images/industries/roads/hero-mobile.avif`
- `public/images/industries/roads/hero-mobile.webp`
- `public/images/industries/roads/hero-mobile.png`

### Modify

- `src/components/ui/site-primitives.tsx` — allow `ActionLink` to receive a normal anchor click handler.
- `src/components/ui/tech-integration.tsx` — read vendor logos from the shared data module without changing its rendered output.
- `scripts/sync-wordpress-posts.mjs` — preserve the new canonical route in generated sitemaps.
- `public/sitemap.xml` — include the canonical route in the checked-in sitemap.
- `package.json` and `package-lock.json` — add Sharp as a reproducible asset-build dependency.

## Task 1: Establish the typed content source

**Files:**

- Create: `scripts/industry-roads-page.test.mjs`
- Create: `src/components/industry/industry-page-types.ts`
- Create: `src/content/industries/roads.ts`

- [ ] **Step 1: Write the failing content tests**

Create `scripts/industry-roads-page.test.mjs` with:

```js
import assert from "node:assert/strict";
import { readFile, stat } from "node:fs/promises";
import test from "node:test";

async function readOptional(relativePath) {
  try {
    return await readFile(new URL(relativePath, import.meta.url), "utf8");
  } catch {
    return "";
  }
}

const typesSource = await readOptional(
  "../src/components/industry/industry-page-types.ts",
);
const contentSource = await readOptional(
  "../src/content/industries/roads.ts",
);

test("road content declares the approved sector promise and CTA", () => {
  assert.match(
    contentSource,
    /Privacidade incorporada à operação rodoviária, do projeto ao free flow\./,
  );
  assert.match(contentSource, /Agende uma Conversa/);
  assert.match(contentSource, /Ainda não temos experiência nem case específico/);
  assert.doesNotMatch(contentSource, /case comprovado no setor/i);
  assert.doesNotMatch(contentSource, /garantia de conformidade/i);
  assert.doesNotMatch(contentSource, /aprovado pela ANPD/i);
});

test("road content declares six unique campaign anchors", () => {
  const anchors = [
    "free-flow",
    "privacy-by-design",
    "fornecedores",
    "dpo",
    "incidentes",
    "internacional",
  ];

  for (const anchor of anchors) {
    assert.match(contentSource, new RegExp(`id: "${anchor}"`));
  }

  assert.match(typesSource, /campaignAnchors/);
  assert.match(typesSource, /sectionKey/);
  assert.match(contentSource, /reviewedAt: "2026-08-27"/);
  assert.match(contentSource, /gov\.br\/antt/);
  assert.match(contentSource, /eur-lex\.europa\.eu/);
});
```

- [ ] **Step 2: Run the test and verify the red state**

Run:

```powershell
node --test scripts/industry-roads-page.test.mjs
```

Expected: FAIL because the content and type files do not exist, so the assertions receive empty strings.

- [ ] **Step 3: Create the complete content types**

Create `src/components/industry/industry-page-types.ts`:

```ts
export type IndustryCtaPosition = "hero" | "capabilities" | "final";

export type IndustryTone = "light" | "dark" | "brand-compact";

export type IndustryProofItem = {
  readonly value: string;
  readonly label: string;
};

export type IndustryFaqItem = {
  readonly question: string;
  readonly answer: string;
};

export type IndustryCampaignAnchor = {
  readonly id:
    | "free-flow"
    | "privacy-by-design"
    | "fornecedores"
    | "dpo"
    | "incidentes"
    | "internacional";
  readonly sectionKey:
    | "freeFlow"
    | "privacyByDesign"
    | "operations"
    | "international";
};

export type IndustryContentSource = {
  readonly claim: string;
  readonly url: string;
  readonly reviewedAt: "2026-08-27";
};

export type IndustryHeroContent = {
  readonly pill: string;
  readonly title: string;
  readonly description: string;
  readonly cta: string;
  readonly image: {
    readonly desktop: {
      readonly avif: string;
      readonly webp: string;
      readonly png: string;
      readonly width: 1717;
      readonly height: 916;
    };
    readonly mobile: {
      readonly avif: string;
      readonly webp: string;
      readonly png: string;
      readonly width: 941;
      readonly height: 1672;
    };
  };
};

export type IndustryTextItem = {
  readonly label: string;
  readonly title: string;
  readonly description: string;
};

export type IndustryCapability = {
  readonly title: string;
  readonly description: string;
  readonly tone: IndustryTone;
};

export type RoadsIndustryContent = {
  readonly sector: "gestao-de-rodovias";
  readonly metadata: {
    readonly title: string;
    readonly description: string;
    readonly canonical: "/solucoes/privacidade-gestao-de-rodovias";
  };
  readonly hero: IndustryHeroContent;
  readonly proof: readonly IndustryProofItem[];
  readonly context: {
    readonly pill: string;
    readonly title: string;
    readonly description: string;
    readonly nodes: readonly IndustryTextItem[];
  };
  readonly lifecycle: {
    readonly pill: string;
    readonly title: string;
    readonly description: string;
    readonly stages: readonly IndustryTextItem[];
  };
  readonly freeFlow: {
    readonly pill: string;
    readonly title: string;
    readonly description: string;
    readonly controls: readonly IndustryTextItem[];
  };
  readonly capabilities: {
    readonly pill: string;
    readonly title: string;
    readonly description: string;
    readonly items: readonly IndustryCapability[];
    readonly ctaTitle: string;
    readonly ctaText: string;
    readonly cta: string;
  };
  readonly privacyByDesign: {
    readonly pill: string;
    readonly title: string;
    readonly description: string;
    readonly steps: readonly IndustryTextItem[];
  };
  readonly operations: {
    readonly pill: string;
    readonly title: string;
    readonly description: string;
    readonly routines: readonly IndustryTextItem[];
  };
  readonly training: {
    readonly pill: string;
    readonly title: string;
    readonly description: string;
    readonly audiences: readonly string[];
  };
  readonly international: {
    readonly pill: string;
    readonly title: string;
    readonly description: string;
  };
  readonly method: {
    readonly pill: string;
    readonly title: string;
    readonly description: string;
    readonly stages: readonly IndustryTextItem[];
  };
  readonly faq: {
    readonly pill: string;
    readonly title: string;
    readonly accent: string;
    readonly description: string;
    readonly items: readonly IndustryFaqItem[];
  };
  readonly finalCta: {
    readonly pill: string;
    readonly title: string;
    readonly description: string;
    readonly cta: string;
    readonly nextStep: string;
  };
  readonly sources: readonly IndustryContentSource[];
  readonly campaignAnchors: readonly IndustryCampaignAnchor[];
};
```

- [ ] **Step 4: Create the approved road-sector content**

Create `src/content/industries/roads.ts`:

```ts
import type { RoadsIndustryContent } from "@/components/industry/industry-page-types";

const imageBase = "/images/industries/roads";

export const roadsIndustryContent = {
  sector: "gestao-de-rodovias",
  metadata: {
    title: "Privacidade e LGPD para Gestão de Rodovias | TOGETHER",
    description:
      "Privacidade para concessionárias e operadoras rodoviárias: projetos, free flow, fornecedores, DPO, incidentes, tecnologia e treinamentos.",
    canonical: "/solucoes/privacidade-gestao-de-rodovias",
  },
  hero: {
    pill: "Privacidade para gestão de rodovias",
    title:
      "Privacidade incorporada à operação rodoviária, do projeto ao free flow.",
    description:
      "A TOGETHER estrutura privacidade ao longo do ciclo da operação — projetos, sistemas, pórticos, fornecedores, equipes e atendimento — com processos, tecnologia e evidências adequados ao contexto da organização.",
    cta: "Agende uma Conversa",
    image: {
      desktop: {
        avif: `${imageBase}/hero-desktop.avif`,
        webp: `${imageBase}/hero-desktop.webp`,
        png: `${imageBase}/hero-desktop.png`,
        width: 1717,
        height: 916,
      },
      mobile: {
        avif: `${imageBase}/hero-mobile.avif`,
        webp: `${imageBase}/hero-mobile.webp`,
        png: `${imageBase}/hero-mobile.png`,
        width: 941,
        height: 1672,
      },
    },
  },
  proof: [
    { value: "+5 anos", label: "de atuação em privacidade e LGPD" },
    { value: "+200", label: "atividades e entregáveis no catálogo" },
    { value: "Equipe multidisciplinar", label: "privacidade, tecnologia e operação" },
    { value: "Tecnologia", label: "experiência prática com plataformas de privacidade" },
  ],
  context: {
    pill: "Dados em movimento",
    title: "A operação conecta pessoas, veículos, sistemas e parceiros.",
    description:
      "Privacidade atravessa a jornada do usuário e também os bastidores da concessão. O primeiro passo é entender onde os dados entram, circulam e sustentam decisões.",
    nodes: [
      { label: "Entrada", title: "Usuários, contas e veículos", description: "Cadastros, placas, TAGs, aplicativos e atendimento." },
      { label: "Identificação", title: "Pórticos e sistemas", description: "Imagens, OCR/ANPR, sensores, classificação e logs." },
      { label: "Transação", title: "Pagamento e contestação", description: "Meios de pagamento, conciliação, cobrança e correção de erros." },
      { label: "Ecossistema", title: "Fornecedores e integrações", description: "Operadores, nuvem, suporte, subcontratados e acessos." },
      { label: "Operação", title: "Equipes e titulares", description: "Colaboradores, canais, solicitações e evidências." },
    ],
  },
  lifecycle: {
    pill: "Ciclo do ativo",
    title: "Privacidade começa antes do go-live e continua na rotina.",
    description:
      "Requisitos definidos cedo reduzem retrabalho e ajudam cada área a assumir sua responsabilidade.",
    stages: [
      { label: "Viabilidade", title: "Entender o uso dos dados", description: "Finalidades, atores, riscos e premissas do projeto." },
      { label: "Contratação", title: "Levar requisitos aos fornecedores", description: "Escopo, papéis, acessos, segurança e evidências." },
      { label: "Implantação", title: "Configurar processos e controles", description: "Arquitetura, retenção, perfis e testes." },
      { label: "Go-live", title: "Validar antes da entrada em produção", description: "Avisos, canais, responsáveis e runbooks." },
      { label: "Operação", title: "Acompanhar e evoluir", description: "Titulares, incidentes, terceiros e planos de ação." },
    ],
  },
  freeFlow: {
    pill: "Free flow e identificação automática",
    title: "A tecnologia precisa operar com regras claras para os dados.",
    description:
      "A TOGETHER ajuda a organizar as decisões e os controles que envolvem placas, imagens, pagamentos, integrações e atendimento.",
    controls: [
      { label: "Finalidade", title: "Definir por que cada dado é necessário", description: "Relacionar o tratamento ao serviço e ao fluxo real." },
      { label: "Acesso", title: "Controlar quem consulta e altera", description: "Perfis, logs, segregação e rastreabilidade." },
      { label: "Retenção", title: "Aplicar prazos compatíveis", description: "Regras operacionais, legais e de contestação documentadas." },
      { label: "Titulares", title: "Tratar erros e solicitações", description: "Canais, registros, responsáveis e resposta coordenada." },
    ],
  },
  capabilities: {
    pill: "Capacidade TOGETHER",
    title: "Especialistas para transformar requisitos em operação.",
    description:
      "A atuação é dimensionada conforme o momento do projeto, os sistemas envolvidos e a capacidade necessária.",
    items: [
      { title: "Diagnóstico e priorização", description: "Cenário atual, lacunas, riscos e plano de ação.", tone: "light" },
      { title: "Mapeamento de dados e agentes", description: "Fluxos, finalidades, papéis, sistemas e compartilhamentos.", tone: "light" },
      { title: "Privacy by design", description: "Requisitos incorporados ao projeto e ao go-live.", tone: "brand-compact" },
      { title: "Processos, controles e evidências", description: "Rotinas verificáveis e responsáveis definidos.", tone: "dark" },
      { title: "Governança de fornecedores", description: "Due diligence, contratos, acessos e subprocessadores.", tone: "light" },
      { title: "Tecnologia de privacidade", description: "Configuração e operação de plataformas e ferramentas.", tone: "light" },
      { title: "DPO e titulares", description: "Canal, registros, acompanhamento e apoio ao encarregado.", tone: "light" },
      { title: "Incidentes e continuidade", description: "Runbooks, escalonamento, simulações e planos de ação.", tone: "light" },
    ],
    ctaTitle: "Quer avaliar uma frente da operação?",
    ctaText: "Uma conversa inicial ajuda a dimensionar o contexto e o próximo passo.",
    cta: "Agende uma Conversa",
  },
  privacyByDesign: {
    pill: "Privacidade desde o projeto",
    title: "Decisões melhores antes da operação entrar no ar.",
    description:
      "Engenharia, tecnologia, compras e jurídico recebem critérios objetivos para contratar, configurar, testar e aprovar.",
    steps: [
      { label: "Requisitos", title: "RFPs e contratos", description: "Papéis, medidas, evidências e obrigações definidos no escopo." },
      { label: "Arquitetura", title: "Sistemas e integrações", description: "Dados, acessos, retenção, localização e subprocessadores." },
      { label: "Validação", title: "Testes antes do go-live", description: "Controles, avisos, canais, logs e responsáveis verificados." },
    ],
  },
  operations: {
    pill: "Operação contínua",
    title: "Privacidade precisa continuar funcionando depois da implantação.",
    description:
      "A rotina reúne atendimento, incidentes, terceiros, acessos e evolução do programa em uma cadência acompanhada.",
    routines: [
      { label: "DPO e titulares", title: "Canal e registros", description: "Triagem, responsáveis, prazos e histórico das solicitações." },
      { label: "Incidentes", title: "Resposta coordenada", description: "Escalonamento, evidências, avaliação e ações registradas." },
      { label: "Terceiros", title: "Revisão recorrente", description: "Acessos, contratos, subprocessadores e planos de ação." },
      { label: "Programa", title: "Evolução acompanhada", description: "Indicadores, pendências, decisões e continuidade." },
    ],
  },
  training: {
    pill: "Treinamentos e workshops",
    title: "Cada equipe entende o que precisa fazer na prática.",
    description:
      "Conteúdo adaptado às funções, com registro de participação e evidências de conclusão.",
    audiences: [
      "Engenharia e projetos",
      "Pórticos e CCO",
      "Tecnologia e segurança",
      "RH e compras",
      "Fornecedores",
      "Atendimento e incidentes",
      "Lideranças",
    ],
  },
  international: {
    pill: "Brasil e atuação internacional",
    title: "O fluxo real define quais requisitos entram no escopo.",
    description:
      "Analisamos LGPD, GDPR quando aplicável, nuvem, suporte estrangeiro, fornecedores e transferências internacionais a partir dos contratos, pessoas afetadas e localização dos dados.",
  },
  method: {
    pill: "Como começamos",
    title: "Da prioridade à execução, com responsabilidades visíveis.",
    description:
      "A TOGETHER pode entrar em uma frente específica ou acompanhar a operação continuamente.",
    stages: [
      { label: "Entender", title: "Mapear o contexto", description: "Operação, prioridade, sistemas, atores e restrições." },
      { label: "Definir", title: "Dimensionar o trabalho", description: "Escopo, responsáveis, entregáveis e aprovações." },
      { label: "Implantar", title: "Executar e acompanhar", description: "Processos, tecnologia, evidências e planos de ação." },
      { label: "Sustentar", title: "Transferir e evoluir", description: "Treinamento, rotina, indicadores e continuidade." },
    ],
  },
  faq: {
    pill: "Perguntas frequentes",
    title: "Privacidade na operação",
    accent: "rodoviária.",
    description: "Respostas para avaliar o primeiro passo com clareza.",
    items: [
      { question: "Onde a LGPD aparece na operação de uma rodovia?", answer: "Em cadastros, placas, imagens, pagamentos, aplicativos, atendimento, colaboradores, fornecedores, sistemas e integrações. O escopo concreto depende dos fluxos e papéis existentes em cada operação." },
      { question: "Como a TOGETHER apoia projetos de free flow e pedágio digital?", answer: "Apoiamos o mapeamento de dados e agentes, a definição de finalidades, acessos, retenção, transparência, logs, fornecedores, atendimento e evidências necessárias ao projeto." },
      { question: "A atuação pode começar ainda na fase de projeto ou contratação?", answer: "Sim. Requisitos de privacidade podem entrar em RFPs, contratos, arquitetura, integrações, testes e critérios de go-live, reduzindo retrabalho posterior." },
      { question: "A TOGETHER pode apoiar DPO, titulares e incidentes depois do go-live?", answer: "Sim. A atuação pode incluir canais, registros, rotinas do encarregado, triagem de solicitações, runbooks, simulações e acompanhamento das ações definidas." },
      { question: "Como são tratados fornecedores e transferências internacionais?", answer: "Mapeamos papéis, acessos, localização dos dados, subprocessadores e mecanismos aplicáveis. A conclusão depende do contrato e do fluxo real, não de uma regra genérica." },
      { question: "A TOGETHER já possui um case específico no setor rodoviário?", answer: "Ainda não temos experiência nem case específico no setor rodoviário. Nossa experiência está na estruturação e operação de programas de privacidade, processos, tecnologia e evidências. Aplicamos essa metodologia ao contexto real da concessionária, com escopo definido a partir dos contratos, sistemas, fornecedores e fluxos de dados envolvidos." },
    ],
  },
  finalCta: {
    pill: "Privacidade para gestão de rodovias",
    title: "Leve privacidade para dentro da operação rodoviária.",
    description:
      "Em uma conversa inicial, entendemos o momento da operação, os sistemas e a prioridade para definir onde a TOGETHER pode apoiar.",
    cta: "Agende uma Conversa",
    nextStep: "Uma conversa inicial sobre a operação, a prioridade e o escopo possível.",
  },
  sources: [
    {
      claim: "Ciclo de concessões, operação, manutenção e expansão",
      url: "https://www.gov.br/antt/pt-br/assuntos/rodovias/informacoes-gerais",
      reviewedAt: "2026-08-27",
    },
    {
      claim: "Estruturação e viabilidade de novos projetos rodoviários",
      url: "https://www.gov.br/antt/pt-br/assuntos/rodovias/novos-projetos-em-rodovias",
      reviewedAt: "2026-08-27",
    },
    {
      claim: "Funcionamento institucional do free flow",
      url: "https://www.gov.br/antt/pt-br/free-flow/o-que-e-o-free-flow",
      reviewedAt: "2026-08-27",
    },
    {
      claim: "Identificação automática, imagem, OCR e retenção aplicável",
      url: "https://www.gov.br/transportes/pt-br/assuntos/transito/conteudo-contran/resolucoes/Resolucao10132024.pdf/@@download/file",
      reviewedAt: "2026-08-27",
    },
    {
      claim: "Comunicação de incidente de segurança",
      url: "https://www.gov.br/anpd/pt-br/canais_atendimento/agente-de-tratamento/comunicado-de-incidente-de-seguranca-cis",
      reviewedAt: "2026-08-27",
    },
    {
      claim: "Transferência internacional de dados",
      url: "https://www.gov.br/anpd/pt-br/assuntos/assuntos-internacionais/transferencia-internacional-de-dados",
      reviewedAt: "2026-08-27",
    },
    {
      claim: "Aplicação da LGPD",
      url: "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709compilado.htm",
      reviewedAt: "2026-08-27",
    },
    {
      claim: "Aplicação territorial do GDPR",
      url: "https://eur-lex.europa.eu/legal-content/PT/TXT/?uri=CELEX:32016R0679",
      reviewedAt: "2026-08-27",
    },
  ],
  campaignAnchors: [
    { id: "free-flow", sectionKey: "freeFlow" },
    { id: "privacy-by-design", sectionKey: "privacyByDesign" },
    { id: "fornecedores", sectionKey: "privacyByDesign" },
    { id: "dpo", sectionKey: "operations" },
    { id: "incidentes", sectionKey: "operations" },
    { id: "internacional", sectionKey: "international" },
  ],
} as const satisfies RoadsIndustryContent;
```

- [ ] **Step 5: Run the focused tests**

Run:

```powershell
node --test scripts/industry-roads-page.test.mjs
```

Expected: 2 tests pass.

- [ ] **Step 6: Commit the content boundary**

```powershell
git add -- scripts/industry-roads-page.test.mjs src/components/industry/industry-page-types.ts src/content/industries/roads.ts
git commit -m "feat: add road industry content model"
```

## Task 2: Add attributed, resilient CTAs

**Files:**

- Modify: `scripts/industry-roads-page.test.mjs`
- Create: `src/lib/industry-attribution.ts`
- Modify: `src/components/ui/site-primitives.tsx`
- Create: `src/components/industry/industry-contact-link.tsx`

- [ ] **Step 1: Add behavior and source-contract tests**

Append to `scripts/industry-roads-page.test.mjs`:

```js
const attributionModule = await import(
  new URL("../src/lib/industry-attribution.ts", import.meta.url)
);
const actionLinkSource = await readOptional(
  "../src/components/ui/site-primitives.tsx",
);
const contactLinkSource = await readOptional(
  "../src/components/industry/industry-contact-link.tsx",
);

test("industry contact href preserves only approved campaign data", () => {
  const entryUrl = new URL(
    "https://togetherprivacy.tech/solucoes/privacidade-gestao-de-rodovias?utm_source=google&utm_campaign=free-flow&gclid=abc&unsafe=value#free-flow",
  );
  const href = attributionModule.buildIndustryContactHref({
    sector: "gestao-de-rodovias",
    position: "hero",
    entryUrl,
    allowedAnchors: ["free-flow", "privacy-by-design"],
  });

  assert.equal(
    href,
    "/contato?sector=gestao-de-rodovias&cta_position=hero&entry_anchor=free-flow&utm_source=google&utm_campaign=free-flow&gclid=abc",
  );
  assert.doesNotMatch(href, /unsafe/);
});

test("industry contact href keeps a useful no-JavaScript fallback", () => {
  assert.equal(
    attributionModule.buildIndustryContactHref({
      sector: "gestao-de-rodovias",
      position: "final",
      allowedAnchors: ["free-flow"],
    }),
    "/contato?sector=gestao-de-rodovias&cta_position=final",
  );
});

test("malformed hashes cannot break the contact link", () => {
  assert.doesNotThrow(() =>
    attributionModule.buildIndustryContactHref({
      sector: "gestao-de-rodovias",
      position: "hero",
      entryUrl: new URL("https://togetherprivacy.tech/solucoes#%E0%A4%A"),
      allowedAnchors: ["free-flow"],
    }),
  );
});

test("industry CTA maps positions to the three approved events", () => {
  assert.equal(attributionModule.getIndustryCtaEvent("hero"), "cta_hero");
  assert.equal(
    attributionModule.getIndustryCtaEvent("capabilities"),
    "cta_midpage",
  );
  assert.equal(attributionModule.getIndustryCtaEvent("final"), "cta_final");
});

test("industry contact link enhances ActionLink without blocking navigation", () => {
  assert.match(actionLinkSource, /onClick\?: MouseEventHandler/);
  assert.match(contactLinkSource, /dataLayer\?\.push/);
  assert.match(contactLinkSource, /buildIndustryContactHref/);
  assert.match(contactLinkSource, /useSyncExternalStore/);
  assert.doesNotMatch(contactLinkSource, /preventDefault/);
});
```

- [ ] **Step 2: Run the test and verify the red state**

Run:

```powershell
node --test scripts/industry-roads-page.test.mjs
```

Expected: FAIL because `src/lib/industry-attribution.ts` does not exist.

- [ ] **Step 3: Implement the pure attribution contract**

Create `src/lib/industry-attribution.ts`:

```ts
import type { IndustryCtaPosition } from "@/components/industry/industry-page-types";

const CAMPAIGN_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "gclid",
  "gbraid",
  "wbraid",
] as const;

const CTA_EVENTS: Record<IndustryCtaPosition, string> = {
  hero: "cta_hero",
  capabilities: "cta_midpage",
  final: "cta_final",
};

type BuildIndustryContactHrefInput = {
  sector: string;
  position: IndustryCtaPosition;
  entryUrl?: URL;
  allowedAnchors: readonly string[];
};

export function getIndustryCtaEvent(position: IndustryCtaPosition) {
  return CTA_EVENTS[position];
}

export function readIndustryEntryAttribution(
  entryUrl: URL,
  allowedAnchors: readonly string[],
) {
  let hash = "";
  try {
    hash = decodeURIComponent(entryUrl.hash.replace(/^#/, ""));
  } catch {
    hash = "";
  }
  const entryAnchor = allowedAnchors.includes(hash) ? hash : undefined;
  const campaign: Record<string, string> = {};

  for (const key of CAMPAIGN_KEYS) {
    const value = entryUrl.searchParams.get(key);
    if (value) campaign[key] = value;
  }

  return { entryAnchor, campaign };
}

export function buildIndustryContactHref({
  sector,
  position,
  entryUrl,
  allowedAnchors,
}: BuildIndustryContactHrefInput) {
  const params = new URLSearchParams({
    sector,
    cta_position: position,
  });

  if (entryUrl) {
    const { entryAnchor, campaign } = readIndustryEntryAttribution(
      entryUrl,
      allowedAnchors,
    );

    if (entryAnchor) params.set("entry_anchor", entryAnchor);
    for (const [key, value] of Object.entries(campaign)) {
      params.set(key, value);
    }
  }

  return `/contato?${params.toString()}`;
}
```

- [ ] **Step 4: Extend ActionLink with a normal click handler**

In `src/components/ui/site-primitives.tsx`, change the React type import and `ActionLinkProps` to:

```ts
import type { MouseEventHandler, ReactNode } from "react";

export type ActionLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "dark" | "light" | "muted";
  size?: "sm" | "md" | "lg" | "xl";
  fullWidth?: boolean;
  className?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
};
```

Add `onClick` to the function destructuring and pass it to `<Link>`:

```tsx
export function ActionLink({
  href,
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  className,
  onClick,
}: ActionLinkProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "group inline-flex max-w-full items-center justify-center gap-3 whitespace-normal text-center font-bold uppercase leading-tight tracking-[0.14em] transition-all duration-200 active:scale-[0.98] sm:whitespace-nowrap sm:tracking-[0.16em]",
        fullWidth && "w-full",
        size === "sm" && "min-h-11 rounded-xl px-5 py-3 text-[11px] sm:px-6 sm:text-xs",
        size === "md" && "min-h-12 rounded-xl px-5 py-3 text-[11px] sm:px-7 sm:text-xs",
        size === "lg" && "min-h-14 rounded-2xl px-6 py-3 text-xs sm:px-8",
        size === "xl" && "min-h-16 rounded-2xl px-6 py-4 text-xs sm:px-10 sm:text-sm",
        variant === "primary" &&
          "bg-brand-400 text-neutral-900 shadow-lg shadow-brand-400/25 hover:-translate-y-0.5 hover:bg-brand-500",
        variant === "dark" &&
          "bg-neutral-950 text-white shadow-xl shadow-neutral-950/15 hover:-translate-y-0.5 hover:bg-neutral-800",
        variant === "light" &&
          "bg-white text-neutral-950 shadow-xl shadow-white/5 hover:-translate-y-0.5 hover:bg-brand-400",
        variant === "muted" &&
          "bg-neutral-100 text-neutral-900 hover:-translate-y-0.5 hover:bg-neutral-200",
        className,
      )}
    >
      <span className="min-w-0 break-words">{children}</span>
      <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" />
    </Link>
  );
}
```

- [ ] **Step 5: Implement the progressively enhanced industry CTA**

Create `src/components/industry/industry-contact-link.tsx`:

```tsx
"use client";

import { useSyncExternalStore } from "react";
import type { ReactNode } from "react";
import type { IndustryCtaPosition } from "@/components/industry/industry-page-types";
import { ActionLink } from "@/components/ui/site-primitives";
import {
  buildIndustryContactHref,
  getIndustryCtaEvent,
  readIndustryEntryAttribution,
} from "@/lib/industry-attribution";

type MarketingWindow = Window & {
  dataLayer?: Array<Record<string, unknown>>;
};

type IndustryContactLinkProps = {
  sector: string;
  position: IndustryCtaPosition;
  allowedAnchors: readonly string[];
  children: ReactNode;
  variant?: "primary" | "dark" | "light" | "muted";
  size?: "sm" | "md" | "lg" | "xl";
  fullWidth?: boolean;
  className?: string;
};

function subscribeToLocation(callback: () => void) {
  window.addEventListener("popstate", callback);
  window.addEventListener("hashchange", callback);
  return () => {
    window.removeEventListener("popstate", callback);
    window.removeEventListener("hashchange", callback);
  };
}

function getLocationSnapshot() {
  return window.location.href;
}

function getServerLocationSnapshot() {
  return "";
}

export function IndustryContactLink({
  sector,
  position,
  allowedAnchors,
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  className,
}: IndustryContactLinkProps) {
  const locationHref = useSyncExternalStore(
    subscribeToLocation,
    getLocationSnapshot,
    getServerLocationSnapshot,
  );
  const entryUrl = locationHref ? new URL(locationHref) : undefined;
  const attribution = entryUrl
    ? readIndustryEntryAttribution(entryUrl, allowedAnchors)
    : { entryAnchor: undefined, campaign: {} };
  const href = buildIndustryContactHref({
    sector,
    position,
    entryUrl,
    allowedAnchors,
  });
  const eventPayload = {
    event: getIndustryCtaEvent(position),
    sector,
    cta_position: position,
    ...(attribution.entryAnchor
      ? { entry_anchor: attribution.entryAnchor }
      : {}),
    ...attribution.campaign,
  };

  const handleClick = () => {
    try {
      (window as MarketingWindow).dataLayer?.push(eventPayload);
    } catch {
      return;
    }
  };

  return (
    <ActionLink
      href={href}
      onClick={handleClick}
      variant={variant}
      size={size}
      fullWidth={fullWidth}
      className={className}
    >
      {children}
    </ActionLink>
  );
}
```

- [ ] **Step 6: Run focused and existing primitive tests**

Run:

```powershell
node --test scripts/industry-roads-page.test.mjs scripts/law-firm-lgpd-page.test.mjs
```

Expected: the new attribution tests pass and the existing law-firm tests remain green.

- [ ] **Step 7: Commit the CTA contract**

```powershell
git add -- scripts/industry-roads-page.test.mjs src/lib/industry-attribution.ts src/components/industry/industry-contact-link.tsx src/components/ui/site-primitives.tsx
git commit -m "feat: add attributed industry contact links"
```

## Task 3: Add truthful institutional proof and the platform rail

**Files:**

- Modify: `scripts/industry-roads-page.test.mjs`
- Create: `src/content/privacy-platforms.ts`
- Modify: `src/components/ui/tech-integration.tsx`
- Create: `src/components/industry/industry-proof-strip.tsx`
- Create: `src/components/industry/industry-technology-rail.tsx`

- [ ] **Step 1: Add failing proof-component tests**

Append to `scripts/industry-roads-page.test.mjs`:

```js
const proofSource = await readOptional(
  "../src/components/industry/industry-proof-strip.tsx",
);
const technologyRailSource = await readOptional(
  "../src/components/industry/industry-technology-rail.tsx",
);
const privacyPlatformsSource = await readOptional(
  "../src/content/privacy-platforms.ts",
);
const techIntegrationSource = await readOptional(
  "../src/components/ui/tech-integration.tsx",
);

test("industry proof is stats-only and cannot imply road-sector clients", () => {
  assert.match(proofSource, /<dl/);
  assert.match(proofSource, /rounded-t-\[40px\]/);
  assert.doesNotMatch(proofSource, /LogoMarquee/);
  assert.doesNotMatch(proofSource, /Clientes que confiam/);
});

test("privacy platform data is shared without changing the home section", () => {
  for (const label of [
    "OneTrust",
    "TrustWorks",
    "Securiti",
    "Privacy Tools",
    "DPONet",
    "BeCompliance",
    "Privally",
  ]) {
    assert.match(privacyPlatformsSource, new RegExp(label.replace(" ", "\\s*"), "i"));
  }
  assert.match(techIntegrationSource, /privacyPlatforms/);
  assert.match(technologyRailSource, /privacyPlatforms/);
});
```

- [ ] **Step 2: Run the test and verify the red state**

Run:

```powershell
node --test scripts/industry-roads-page.test.mjs
```

Expected: FAIL because the proof, rail and shared data files do not exist.

- [ ] **Step 3: Extract the existing platform data without changing the home output**

Create `src/content/privacy-platforms.ts`:

```ts
export const privacyPlatforms = [
  { id: "OneTrust", label: "OneTrust", src: "/logos/onetrust.svg" },
  { id: "TrustWorks", label: "TrustWorks", src: "/logos/trustworks.png" },
  { id: "Securiti", label: "Securiti", src: "/logos/securiti.svg" },
  { id: "Privacy Tools", label: "Privacy Tools", src: "/logos/privacy-tools.svg" },
  { id: "DPONet", label: "DPONet", src: "/logos/dponet.svg" },
  { id: "BeCompliance", label: "BeCompliance", src: "/logos/becompliance.svg" },
  { id: "Privally", label: "Privally", src: "/logos/privally.png" },
] as const;
```

In `src/components/ui/tech-integration.tsx`, remove the local `vendors` constant, import the shared data and replace `vendors.map` with `privacyPlatforms.map`:

```tsx
import { privacyPlatforms } from "@/content/privacy-platforms";
```

The rendered labels, paths and order must remain unchanged.

- [ ] **Step 4: Create the stats-only proof strip**

Create `src/components/industry/industry-proof-strip.tsx`:

```tsx
import type { IndustryProofItem } from "@/components/industry/industry-page-types";

type IndustryProofStripProps = {
  items: readonly IndustryProofItem[];
};

export function IndustryProofStrip({ items }: IndustryProofStripProps) {
  return (
    <div className="relative z-20 -mt-10 w-full px-4 md:px-6">
      <section
        aria-label="Capacidade institucional da TOGETHER"
        className="container relative rounded-t-[40px] border border-neutral-100 bg-white px-5 pb-8 pt-8 shadow-[0_-20px_40px_rgba(0,0,0,0.03)] sm:px-8 lg:px-12"
      >
        <dl className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div
              key={`${item.value}-${item.label}`}
              className="relative min-w-0 rounded-[24px] border border-neutral-100 bg-neutral-50/70 p-5 sm:p-6"
            >
              <span
                className="mb-5 block h-3 w-3 rounded-[3px] bg-brand-400"
                aria-hidden="true"
              />
              <dt className="break-words text-lg font-bold tracking-tight text-neutral-900 sm:text-xl">
                {item.value}
              </dt>
              <dd className="mt-2 text-sm font-medium leading-relaxed text-neutral-500">
                {item.label}
              </dd>
            </div>
          ))}
        </dl>
      </section>
    </div>
  );
}
```

- [ ] **Step 5: Create the reusable technology rail**

Create `src/components/industry/industry-technology-rail.tsx`:

```tsx
import Image from "next/image";
import { privacyPlatforms } from "@/content/privacy-platforms";

export function IndustryTechnologyRail() {
  return (
    <div className="border-t border-white/10 pt-10">
      <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-neutral-500">
        Experiência prática com plataformas de privacidade
      </p>
      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-7">
        {privacyPlatforms.map((platform) => (
          <div
            key={platform.id}
            className="flex min-h-20 items-center justify-center rounded-[20px] border border-white/10 bg-white/[0.035] px-4"
          >
            <Image
              src={platform.src}
              alt={platform.label}
              width={160}
              height={48}
              className="max-h-8 w-auto max-w-full object-contain grayscale opacity-65"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
```

- [ ] **Step 6: Run focused and home-regression tests**

Run:

```powershell
npm test
```

Expected: the complete existing Node test suite passes and the home platform section keeps its existing labels and assets.

- [ ] **Step 7: Commit proof and shared platform data**

```powershell
git add -- scripts/industry-roads-page.test.mjs src/content/privacy-platforms.ts src/components/ui/tech-integration.tsx src/components/industry/industry-proof-strip.tsx src/components/industry/industry-technology-rail.tsx
git commit -m "feat: add industry proof components"
```

## Task 4: Build the configurable accessible FAQ

**Files:**

- Modify: `scripts/industry-roads-page.test.mjs`
- Create: `src/components/industry/industry-faq-section.tsx`

- [ ] **Step 1: Add failing FAQ semantic tests**

Append to `scripts/industry-roads-page.test.mjs`:

```js
const faqSource = await readOptional(
  "../src/components/industry/industry-faq-section.tsx",
);

test("industry FAQ is configurable and exposes accordion semantics", () => {
  assert.match(faqSource, /items: readonly IndustryFaqItem\[\]/);
  assert.match(faqSource, /aria-expanded=\{isOpen\}/);
  assert.match(faqSource, /aria-controls=\{panelId\}/);
  assert.match(faqSource, /aria-labelledby=\{buttonId\}/);
  assert.match(faqSource, /role="region"/);
  assert.match(faqSource, /type="button"/);
  assert.match(faqSource, /useReducedMotion/);
  assert.doesNotMatch(faqSource, /Agendar Call Técnica/);
  assert.doesNotMatch(faqSource, /<ActionLink/);
});
```

- [ ] **Step 2: Run the test and verify the red state**

Run:

```powershell
node --test scripts/industry-roads-page.test.mjs
```

Expected: FAIL because `industry-faq-section.tsx` does not exist.

- [ ] **Step 3: Implement the complete accessible FAQ**

Create `src/components/industry/industry-faq-section.tsx`:

```tsx
"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import type { IndustryFaqItem } from "@/components/industry/industry-page-types";
import { PixelDecor } from "@/components/ui/backgrounds/pixel-decor";
import { SectionPill } from "@/components/ui/site-primitives";

type IndustryFaqSectionProps = {
  pill: string;
  title: string;
  accent: string;
  description: string;
  items: readonly IndustryFaqItem[];
};

function IndustryFaqRow({
  item,
  defaultOpen,
}: {
  item: IndustryFaqItem;
  defaultOpen: boolean;
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const id = useId().replaceAll(":", "");
  const buttonId = `industry-faq-button-${id}`;
  const panelId = `industry-faq-panel-${id}`;
  const reduceMotion = useReducedMotion();

  return (
    <div
      className={`group relative border-b border-neutral-100 transition-all ${isOpen ? "mb-8 pb-8" : "pb-6"}`}
    >
      <button
        id={buttonId}
        type="button"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={() => setIsOpen((current) => !current)}
        className="flex min-h-16 w-full items-center justify-between gap-5 py-2 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-4"
      >
        <span
          className={`min-w-0 break-words text-xl font-bold tracking-tight transition-colors md:text-3xl ${isOpen ? "text-neutral-900" : "text-neutral-500 group-hover:text-neutral-800"}`}
        >
          {item.question}
        </span>
        <span
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full border transition-all ${isOpen ? "rotate-180 border-neutral-900 bg-neutral-900 text-white" : "border-neutral-200 text-neutral-500 group-hover:border-neutral-400"}`}
          aria-hidden="true"
        >
          <ChevronDown className="h-6 w-6" />
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen ? (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
            initial={reduceMotion ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.35 }}
            className="overflow-hidden"
          >
            <p className="ml-1 mt-6 max-w-3xl border-l-2 border-brand-400 pl-7 text-base font-medium leading-relaxed text-neutral-500 sm:text-lg">
              {item.answer}
            </p>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

export function IndustryFaqSection({
  pill,
  title,
  accent,
  description,
  items,
}: IndustryFaqSectionProps) {
  return (
    <section id="faq" className="relative overflow-hidden bg-white py-24 md:py-40">
      <PixelDecor placement="topRight" mask="topRight" opacity={0.12} />
      <PixelDecor placement="bottomLeft" mask="bottomLeft" opacity={0.12} />
      <div className="container relative z-10 mx-auto px-6">
        <div className="flex flex-col items-start gap-14 lg:flex-row lg:gap-32">
          <div className="pt-2 lg:sticky lg:top-24 lg:w-1/3">
            <SectionPill>{pill}</SectionPill>
            <h2 className="mt-8 break-words text-[clamp(2.25rem,10vw,2.75rem)] font-bold leading-[0.94] tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl">
              {title}{" "}
              <span className="font-light italic text-brand-500">{accent}</span>
            </h2>
            <p className="mt-8 max-w-sm text-lg font-medium leading-relaxed text-neutral-500 sm:text-xl">
              {description}
            </p>
          </div>
          <div className="w-full min-w-0 lg:w-2/3">
            {items.map((item, index) => (
              <IndustryFaqRow
                key={item.question}
                item={item}
                defaultOpen={index === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 4: Run the focused tests**

Run:

```powershell
node --test scripts/industry-roads-page.test.mjs
```

Expected: FAQ semantic test and all earlier tests pass.

- [ ] **Step 5: Commit the FAQ component**

```powershell
git add -- scripts/industry-roads-page.test.mjs src/components/industry/industry-faq-section.tsx
git commit -m "feat: add accessible industry FAQ"
```

## Task 5: Generate responsive hero assets and build the art-directed hero

**Files:**

- Modify: `scripts/industry-roads-page.test.mjs`
- Modify: `package.json`
- Modify: `package-lock.json`
- Create: `scripts/optimize-industry-hero.mjs`
- Create: `public/images/industries/roads/hero-desktop.avif`
- Create: `public/images/industries/roads/hero-desktop.webp`
- Create: `public/images/industries/roads/hero-desktop.png`
- Create: `public/images/industries/roads/hero-mobile.avif`
- Create: `public/images/industries/roads/hero-mobile.webp`
- Create: `public/images/industries/roads/hero-mobile.png`
- Create: `src/components/industry/industry-hero.tsx`

- [ ] **Step 1: Add failing asset and hero-contract tests**

Append to `scripts/industry-roads-page.test.mjs`:

```js
const heroSource = await readOptional(
  "../src/components/industry/industry-hero.tsx",
);

test("road hero uses static art direction and a decorative image", () => {
  assert.match(heroSource, /<picture/);
  assert.match(heroSource, /max-width: 767px/);
  assert.match(heroSource, /image\.mobile\.avif/);
  assert.match(heroSource, /image\.desktop\.avif/);
  assert.match(heroSource, /width=\{image\.desktop\.width\}/);
  assert.match(heroSource, /height=\{image\.desktop\.height\}/);
  assert.match(heroSource, /alt=""/);
  assert.match(heroSource, /fetchPriority="high"/);
});

test("optimized AVIF and WebP hero assets stay within budget", async () => {
  const budgets = new Map([
    ["hero-desktop.avif", 350_000],
    ["hero-desktop.webp", 500_000],
    ["hero-mobile.avif", 250_000],
    ["hero-mobile.webp", 350_000],
  ]);

  for (const [filename, maxBytes] of budgets) {
    const file = new URL(
      `../public/images/industries/roads/${filename}`,
      import.meta.url,
    );
    const fileStat = await stat(file);
    assert.ok(
      fileStat.size <= maxBytes,
      `${filename} is ${fileStat.size} bytes; maximum is ${maxBytes}`,
    );
  }

  for (const filename of ["hero-desktop.png", "hero-mobile.png"]) {
    await stat(
      new URL(
        `../public/images/industries/roads/${filename}`,
        import.meta.url,
      ),
    );
  }
});
```

- [ ] **Step 2: Run the test and verify the red state**

Run:

```powershell
node --test scripts/industry-roads-page.test.mjs
```

Expected: FAIL because the hero component and optimized public assets do not exist.

- [ ] **Step 3: Install the reproducible image dependency**

Run:

```powershell
npm install --save-dev sharp@0.35.4
```

Expected: `package.json` and `package-lock.json` record Sharp 0.35.4 and `npm ls sharp --depth=0` reports it without errors.

- [ ] **Step 4: Create the reusable optimization script**

Create `scripts/optimize-industry-hero.mjs`:

```js
import path from "node:path";
import process from "node:process";
import { mkdir } from "node:fs/promises";
import sharp from "sharp";

function readArgument(name) {
  const index = process.argv.indexOf(name);
  const value = index >= 0 ? process.argv[index + 1] : undefined;
  if (!value) throw new Error(`Missing required argument ${name}`);
  return path.resolve(value);
}

const desktopSource = readArgument("--desktop");
const mobileSource = readArgument("--mobile");
const outputDir = readArgument("--output");

await mkdir(outputDir, { recursive: true });

async function generate(source, name) {
  const image = sharp(source).rotate();
  await Promise.all([
    image
      .clone()
      .avif({ quality: 55, effort: 6 })
      .toFile(path.join(outputDir, `${name}.avif`)),
    image
      .clone()
      .webp({ quality: 78, effort: 6 })
      .toFile(path.join(outputDir, `${name}.webp`)),
    image
      .clone()
      .png({ compressionLevel: 9, adaptiveFiltering: true })
      .toFile(path.join(outputDir, `${name}.png`)),
  ]);
}

await Promise.all([
  generate(desktopSource, "hero-desktop"),
  generate(mobileSource, "hero-mobile"),
]);

console.log(`Generated road hero assets in ${outputDir}`);
```

- [ ] **Step 5: Generate the six public files from the approved assets**

Run from the repository root:

```powershell
node scripts/optimize-industry-hero.mjs --desktop "C:\Users\Carlos\.gemini\antigravity\scratch\SITE 2 TOGETHER\together-design-system\.superpowers\brainstorm\20260827-roads-architecture\content\roads-hero-desktop-v2.png" --mobile "C:\Users\Carlos\.gemini\antigravity\scratch\SITE 2 TOGETHER\together-design-system\.superpowers\brainstorm\20260827-roads-architecture\content\roads-hero-mobile-v2.png" --output "public/images/industries/roads"
```

Expected: six files are created. If an AVIF or WebP exceeds its test budget, lower only that format's quality in increments of 3 and rerun; do not resize or crop the approved compositions.

- [ ] **Step 6: Implement the complete art-directed hero**

Create `src/components/industry/industry-hero.tsx`:

```tsx
/* eslint-disable @next/next/no-img-element */
import type { IndustryHeroContent } from "@/components/industry/industry-page-types";
import { IndustryContactLink } from "@/components/industry/industry-contact-link";
import { PixelDecor } from "@/components/ui/backgrounds/pixel-decor";
import { SectionPill } from "@/components/ui/site-primitives";

type IndustryHeroProps = {
  sector: string;
  content: IndustryHeroContent;
  allowedAnchors: readonly string[];
};

export function IndustryHero({
  sector,
  content,
  allowedAnchors,
}: IndustryHeroProps) {
  const { image } = content;

  return (
    <section className="relative min-h-[760px] overflow-hidden bg-[#fffdf8] sm:min-h-[720px] lg:min-h-[760px]">
      <picture className="absolute inset-0 block h-full w-full" aria-hidden="true">
        <source
          media="(max-width: 767px)"
          srcSet={image.mobile.avif}
          type="image/avif"
        />
        <source
          media="(max-width: 767px)"
          srcSet={image.mobile.webp}
          type="image/webp"
        />
        <source
          media="(max-width: 767px)"
          srcSet={image.mobile.png}
          type="image/png"
        />
        <source srcSet={image.desktop.avif} type="image/avif" />
        <source srcSet={image.desktop.webp} type="image/webp" />
        <img
          src={image.desktop.png}
          alt=""
          width={image.desktop.width}
          height={image.desktop.height}
          fetchPriority="high"
          decoding="async"
          className="h-full w-full object-cover object-[58%_bottom] sm:object-[62%_center] lg:object-center"
        />
      </picture>

      <div className="absolute inset-0 bg-gradient-to-b from-white via-white/90 to-white/5 sm:bg-gradient-to-r sm:from-white sm:via-white/90 sm:to-transparent" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:40px_40px] opacity-35" />
      <PixelDecor placement="topRight" mask="topRight" opacity={0.12} />

      <div className="container relative z-10 mx-auto flex min-h-[760px] items-start px-6 pb-28 pt-20 sm:min-h-[720px] sm:items-center sm:py-24 lg:min-h-[760px]">
        <div className="max-w-3xl">
          <SectionPill>{content.pill}</SectionPill>
          <h1 className="mt-8 max-w-3xl break-words text-[clamp(2.55rem,11vw,3.5rem)] font-bold leading-[0.94] tracking-tight text-neutral-950 sm:text-6xl lg:text-7xl">
            {content.title}
          </h1>
          <p className="mt-8 max-w-2xl text-base font-medium leading-relaxed text-neutral-700 sm:text-lg lg:text-xl">
            {content.description}
          </p>
          <div className="mt-10 w-full sm:w-auto">
            <IndustryContactLink
              sector={sector}
              position="hero"
              allowedAnchors={allowedAnchors}
              variant="dark"
              size="lg"
              fullWidth
              className="sm:w-auto"
            >
              {content.cta}
            </IndustryContactLink>
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 7: Run asset, focused and lint checks**

Run:

```powershell
node --test scripts/industry-roads-page.test.mjs
npx eslint scripts/optimize-industry-hero.mjs src/components/industry/industry-hero.tsx
```

Expected: all focused tests pass; ESLint reports no errors.

- [ ] **Step 8: Commit the asset pipeline and hero**

```powershell
git add -- package.json package-lock.json scripts/optimize-industry-hero.mjs scripts/industry-roads-page.test.mjs src/components/industry/industry-hero.tsx public/images/industries/roads/hero-desktop.avif public/images/industries/roads/hero-desktop.webp public/images/industries/roads/hero-desktop.png public/images/industries/roads/hero-mobile.avif public/images/industries/roads/hero-mobile.webp public/images/industries/roads/hero-mobile.png
git commit -m "feat: add responsive road industry hero"
```

## Task 6: Build the operational context, lifecycle and free-flow story

**Files:**

- Modify: `scripts/industry-roads-page.test.mjs`
- Create: `src/components/industry/industry-section-heading.tsx`
- Create: `src/components/industry/roads/roads-context-sections.tsx`

- [ ] **Step 1: Add failing narrative and visual-rule tests**

Append to `scripts/industry-roads-page.test.mjs`:

```js
const roadsContextSource = await readOptional(
  "../src/components/industry/roads/roads-context-sections.tsx",
);

test("road context renders the required campaign destination and varied layouts", () => {
  assert.match(roadsContextSource, /id="free-flow"/);
  assert.match(roadsContextSource, /RoadsOperationalContextSection/);
  assert.match(roadsContextSource, /RoadsLifecycleSection/);
  assert.match(roadsContextSource, /RoadsFreeFlowSection/);
  assert.match(roadsContextSource, /lg:grid-cols-5/);
  assert.match(roadsContextSource, /md:grid-cols-\[0\.9fr_1\.1fr\]/);
});

test("road context uses small yellow signals, not yellow section backgrounds", () => {
  assert.match(roadsContextSource, /h-3 w-3 rounded-\[3px\] bg-brand-400/);
  assert.doesNotMatch(
    roadsContextSource,
    /<section[^>]*className="[^"]*bg-brand-(?:100|200|300|400)/,
  );
});
```

- [ ] **Step 2: Run the test and verify the red state**

Run:

```powershell
node --test scripts/industry-roads-page.test.mjs
```

Expected: FAIL because the road context component does not exist.

- [ ] **Step 3: Create the shared section heading**

Create `src/components/industry/industry-section-heading.tsx`:

```tsx
import { SectionPill } from "@/components/ui/site-primitives";
import { cn } from "@/lib/utils";

type IndustrySectionHeadingProps = {
  pill: string;
  title: string;
  description: string;
  inverse?: boolean;
  className?: string;
};

export function IndustrySectionHeading({
  pill,
  title,
  description,
  inverse = false,
  className,
}: IndustrySectionHeadingProps) {
  return (
    <div className={cn("max-w-4xl", className)}>
      <SectionPill tone={inverse ? "dark" : "light"}>{pill}</SectionPill>
      <h2
        className={cn(
          "mt-8 break-words text-[clamp(2.35rem,9vw,3rem)] font-bold leading-[0.96] tracking-tight sm:text-5xl lg:text-6xl",
          inverse ? "text-white" : "text-neutral-900",
        )}
      >
        {title}
      </h2>
      <p
        className={cn(
          "mt-7 max-w-3xl text-lg font-medium leading-relaxed",
          inverse ? "text-neutral-400" : "text-neutral-500",
        )}
      >
        {description}
      </p>
    </div>
  );
}
```

- [ ] **Step 4: Implement the three complete road-context sections**

Create `src/components/industry/roads/roads-context-sections.tsx`:

```tsx
import {
  CarFront,
  Cloud,
  CreditCard,
  ScanLine,
  Users,
} from "lucide-react";
import type { RoadsIndustryContent } from "@/components/industry/industry-page-types";
import { IndustrySectionHeading } from "@/components/industry/industry-section-heading";
import { PixelDecor } from "@/components/ui/backgrounds/pixel-decor";

type ContextProps = {
  content: RoadsIndustryContent["context"];
};

type LifecycleProps = {
  content: RoadsIndustryContent["lifecycle"];
};

type FreeFlowProps = {
  content: RoadsIndustryContent["freeFlow"];
};

const contextIcons = [CarFront, ScanLine, CreditCard, Cloud, Users] as const;

export function RoadsOperationalContextSection({ content }: ContextProps) {
  return (
    <section
      data-section="roads-context"
      className="relative overflow-hidden bg-white py-24 md:py-36"
    >
      <PixelDecor placement="topRight" mask="topRight" opacity={0.1} />
      <div className="container relative z-10 mx-auto grid items-start gap-14 px-6 md:grid-cols-[0.9fr_1.1fr] lg:gap-24">
        <IndustrySectionHeading
          pill={content.pill}
          title={content.title}
          description={content.description}
          className="md:sticky md:top-28"
        />

        <div className="relative overflow-hidden rounded-[32px] border border-neutral-200 bg-neutral-50/70 p-5 shadow-xl shadow-neutral-200/35 sm:p-8">
          <div
            className="absolute bottom-10 left-[42px] top-10 w-px bg-gradient-to-b from-brand-400 via-neutral-300 to-transparent sm:left-[58px]"
            aria-hidden="true"
          />
          <ol className="relative space-y-4">
            {content.nodes.map((node, index) => {
              const Icon = contextIcons[index];
              return (
                <li
                  key={node.title}
                  className="grid min-w-0 grid-cols-[48px_1fr] gap-4 rounded-[24px] border border-neutral-100 bg-white p-4 sm:grid-cols-[64px_1fr] sm:gap-5 sm:p-5"
                >
                  <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-[16px] border border-neutral-200 bg-white text-neutral-900 shadow-sm sm:h-16 sm:w-16 sm:rounded-[20px]">
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
                  </span>
                  <span className="min-w-0 self-center">
                    <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-brand-600">
                      {node.label}
                    </span>
                    <strong className="mt-2 block break-words text-lg tracking-tight text-neutral-900">
                      {node.title}
                    </strong>
                    <span className="mt-2 block text-sm font-medium leading-relaxed text-neutral-500">
                      {node.description}
                    </span>
                  </span>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}

export function RoadsLifecycleSection({ content }: LifecycleProps) {
  return (
    <section className="relative overflow-hidden bg-neutral-50 py-24 md:py-36">
      <div className="container mx-auto px-6">
        <IndustrySectionHeading
          pill={content.pill}
          title={content.title}
          description={content.description}
        />
        <div className="relative mt-14">
          <div
            className="absolute left-6 top-6 hidden h-px w-[calc(100%-3rem)] bg-neutral-300 lg:block"
            aria-hidden="true"
          />
          <ol className="relative grid gap-8 lg:grid-cols-5 lg:gap-5">
            {content.stages.map((stage) => (
              <li key={stage.title} className="relative grid grid-cols-[48px_1fr] gap-5 lg:block">
                <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-[16px] border border-neutral-200 bg-white shadow-sm">
                  <span className="h-3 w-3 rounded-[3px] bg-brand-400" aria-hidden="true" />
                </span>
                <div className="min-w-0 lg:mt-8">
                  <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-brand-600">
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
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export function RoadsFreeFlowSection({ content }: FreeFlowProps) {
  return (
    <section id="free-flow" className="relative overflow-hidden bg-[#0a0a0a] py-24 text-white md:py-36">
      <PixelDecor placement="bottomLeft" mask="bottomLeft" opacity={0.14} />
      <div className="container relative z-10 mx-auto px-6">
        <div className="grid items-start gap-14 md:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <div>
            <span className="mb-7 flex h-14 w-14 items-center justify-center rounded-[18px] bg-brand-400 text-neutral-950">
              <ScanLine className="h-7 w-7" aria-hidden="true" />
            </span>
            <IndustrySectionHeading
              pill={content.pill}
              title={content.title}
              description={content.description}
              inverse
            />
          </div>
          <div className="border-t border-white/15">
            {content.controls.map((control) => (
              <article
                key={control.title}
                className="grid gap-3 border-b border-white/10 py-7 sm:grid-cols-[130px_1fr] sm:gap-8"
              >
                <span className="flex items-start gap-3 text-[9px] font-bold uppercase tracking-[0.2em] text-brand-400">
                  <span className="mt-0.5 h-3 w-3 shrink-0 rounded-[3px] bg-brand-400" aria-hidden="true" />
                  {control.label}
                </span>
                <div>
                  <h3 className="text-xl font-bold tracking-tight text-white">
                    {control.title}
                  </h3>
                  <p className="mt-3 text-sm font-medium leading-relaxed text-neutral-400">
                    {control.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 5: Run the focused tests and lint the new files**

Run:

```powershell
node --test scripts/industry-roads-page.test.mjs
npx eslint src/components/industry/industry-section-heading.tsx src/components/industry/roads/roads-context-sections.tsx
```

Expected: all focused tests pass and ESLint reports no errors.

- [ ] **Step 6: Commit the road-context story**

```powershell
git add -- scripts/industry-roads-page.test.mjs src/components/industry/industry-section-heading.tsx src/components/industry/roads/roads-context-sections.tsx
git commit -m "feat: add road privacy context sections"
```

## Task 7: Build capabilities, privacy by design and continuous operation

**Files:**

- Modify: `scripts/industry-roads-page.test.mjs`
- Create: `src/components/industry/roads/roads-capability-sections.tsx`

- [ ] **Step 1: Add failing capability and anchor tests**

Append to `scripts/industry-roads-page.test.mjs`:

```js
const roadsCapabilitySource = await readOptional(
  "../src/components/industry/roads/roads-capability-sections.tsx",
);

test("road capability story renders every declared campaign destination", () => {
  for (const id of [
    "privacy-by-design",
    "fornecedores",
    "dpo",
    "incidentes",
    "internacional",
  ]) {
    assert.match(roadsCapabilitySource, new RegExp(`id="${id}"`));
  }
});

test("capability mosaic keeps the yellow card compact", () => {
  assert.match(roadsCapabilitySource, /max-w-\[280px\]/);
  assert.match(roadsCapabilitySource, /tone === "brand-compact"/);
  assert.match(roadsCapabilitySource, /position="capabilities"/);
  assert.doesNotMatch(
    roadsCapabilitySource,
    /<section[^>]*className="[^"]*bg-brand-(?:100|200|300|400)/,
  );
});

test("continuous operation carries training and technology proof", () => {
  assert.match(roadsCapabilitySource, /IndustryTechnologyRail/);
  assert.match(roadsCapabilitySource, /content\.training\.audiences/);
  assert.match(roadsCapabilitySource, /RoadsOperationsSection/);
  assert.match(roadsCapabilitySource, /RoadsInternationalMethodSection/);
});
```

- [ ] **Step 2: Run the test and verify the red state**

Run:

```powershell
node --test scripts/industry-roads-page.test.mjs
```

Expected: FAIL because `roads-capability-sections.tsx` does not exist.

- [ ] **Step 3: Implement the complete capability and operations file**

Create `src/components/industry/roads/roads-capability-sections.tsx`:

```tsx
import {
  Blocks,
  BookOpenCheck,
  CloudCog,
  FileCheck2,
  Network,
  ScanSearch,
  ShieldAlert,
  UserCheck,
  Workflow,
} from "lucide-react";
import type { RoadsIndustryContent } from "@/components/industry/industry-page-types";
import { IndustryContactLink } from "@/components/industry/industry-contact-link";
import { IndustrySectionHeading } from "@/components/industry/industry-section-heading";
import { IndustryTechnologyRail } from "@/components/industry/industry-technology-rail";
import { PixelDecor } from "@/components/ui/backgrounds/pixel-decor";
import { SectionPill } from "@/components/ui/site-primitives";
import { cn } from "@/lib/utils";

type CapabilityProps = {
  sector: string;
  allowedAnchors: readonly string[];
  content: RoadsIndustryContent["capabilities"];
};

type PrivacyByDesignProps = {
  content: RoadsIndustryContent["privacyByDesign"];
};

type OperationsProps = {
  content: RoadsIndustryContent["operations"];
  training: RoadsIndustryContent["training"];
};

type InternationalMethodProps = {
  international: RoadsIndustryContent["international"];
  method: RoadsIndustryContent["method"];
};

const capabilityIcons = [
  ScanSearch,
  Network,
  Blocks,
  FileCheck2,
  Workflow,
  CloudCog,
  UserCheck,
  ShieldAlert,
] as const;

const capabilitySpans = [
  "lg:col-span-5",
  "lg:col-span-4",
  "lg:col-span-3",
  "lg:col-span-3",
  "lg:col-span-4",
  "lg:col-span-5",
  "lg:col-span-7",
  "lg:col-span-5",
] as const;

export function RoadsCapabilitiesSection({
  sector,
  allowedAnchors,
  content,
}: CapabilityProps) {
  return (
    <section className="relative overflow-hidden bg-white py-24 md:py-36">
      <PixelDecor placement="topRight" mask="topRight" opacity={0.1} />
      <div className="container relative z-10 mx-auto px-6">
        <IndustrySectionHeading
          pill={content.pill}
          title={content.title}
          description={content.description}
        />

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-12">
          {content.items.map((item, index) => {
            const Icon = capabilityIcons[index];
            return (
              <article
                key={item.title}
                className={cn(
                  "min-w-0 rounded-[28px] border p-6 sm:p-8",
                  capabilitySpans[index],
                  item.tone === "light" &&
                    "border-neutral-200 bg-neutral-50/60 text-neutral-900",
                  item.tone === "dark" &&
                    "border-neutral-900 bg-[#0a0a0a] text-white",
                  item.tone === "brand-compact" &&
                    "w-full max-w-[280px] justify-self-start border-brand-500 bg-brand-400 text-neutral-950 lg:max-w-none",
                )}
              >
                <span
                  className={cn(
                    "flex h-11 w-11 items-center justify-center rounded-[14px]",
                    item.tone === "dark"
                      ? "bg-brand-400 text-neutral-950"
                      : "bg-white text-neutral-900 shadow-sm",
                  )}
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-8 break-words text-xl font-bold tracking-tight">
                  {item.title}
                </h3>
                <p
                  className={cn(
                    "mt-4 text-sm font-medium leading-relaxed",
                    item.tone === "dark" ? "text-neutral-400" : "text-neutral-600",
                  )}
                >
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>

        <div className="mt-6 flex flex-col items-start gap-7 rounded-[28px] bg-neutral-950 p-7 text-white sm:flex-row sm:items-center sm:justify-between sm:p-9">
          <div>
            <h3 className="text-2xl font-bold tracking-tight text-white">
              {content.ctaTitle}
            </h3>
            <p className="mt-2 max-w-2xl text-sm font-medium leading-relaxed text-neutral-400">
              {content.ctaText}
            </p>
          </div>
          <IndustryContactLink
            sector={sector}
            position="capabilities"
            allowedAnchors={allowedAnchors}
            variant="light"
            size="md"
            fullWidth
            className="sm:w-auto"
          >
            {content.cta}
          </IndustryContactLink>
        </div>
      </div>
    </section>
  );
}

export function RoadsPrivacyByDesignSection({ content }: PrivacyByDesignProps) {
  return (
    <section
      id="privacy-by-design"
      className="relative overflow-hidden bg-neutral-50 py-24 md:py-36"
    >
      <div className="container mx-auto grid items-start gap-14 px-6 md:grid-cols-[0.9fr_1.1fr] lg:gap-24">
        <IndustrySectionHeading
          pill={content.pill}
          title={content.title}
          description={content.description}
          className="md:sticky md:top-28"
        />
        <div
          id="fornecedores"
          className="scroll-mt-28 overflow-hidden rounded-[32px] border border-neutral-200 bg-white"
        >
          {content.steps.map((step, index) => (
            <article
              key={step.title}
              className="grid gap-5 border-b border-neutral-100 p-6 last:border-b-0 sm:grid-cols-[84px_1fr] sm:p-8"
            >
              <span
                className={cn(
                  "flex h-14 w-14 items-center justify-center rounded-[18px] text-sm font-black",
                  index === 1
                    ? "bg-brand-400 text-neutral-950"
                    : "border border-neutral-200 bg-neutral-50 text-neutral-900",
                )}
              >
                {step.label.slice(0, 2).toUpperCase()}
              </span>
              <div>
                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-brand-600">
                  {step.label}
                </span>
                <h3 className="mt-3 text-2xl font-bold tracking-tight text-neutral-900">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm font-medium leading-relaxed text-neutral-500">
                  {step.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function RoadsOperationsSection({ content, training }: OperationsProps) {
  return (
    <section className="relative overflow-hidden bg-[#0a0a0a] py-24 text-white md:py-36">
      <PixelDecor placement="bottomLeft" mask="bottomLeft" opacity={0.14} />
      <div className="container relative z-10 mx-auto px-6">
        <IndustrySectionHeading
          pill={content.pill}
          title={content.title}
          description={content.description}
          inverse
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-[30px] border border-white/10 bg-white/10 md:grid-cols-2">
          {content.routines.map((routine, index) => (
            <article
              id={index === 0 ? "dpo" : index === 1 ? "incidentes" : undefined}
              key={routine.title}
              className="scroll-mt-28 bg-[#0a0a0a] p-7 sm:p-9"
            >
              <span className="flex items-center gap-3 text-[9px] font-bold uppercase tracking-[0.2em] text-brand-400">
                <span className="h-3 w-3 rounded-[3px] bg-brand-400" aria-hidden="true" />
                {routine.label}
              </span>
              <h3 className="mt-7 text-2xl font-bold tracking-tight text-white">
                {routine.title}
              </h3>
              <p className="mt-4 text-sm font-medium leading-relaxed text-neutral-400">
                {routine.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-14 grid gap-10 border-t border-white/10 pt-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionPill tone="dark">{training.pill}</SectionPill>
            <h3 className="mt-7 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {training.title}
            </h3>
            <p className="mt-5 text-base font-medium leading-relaxed text-neutral-400">
              {training.description}
            </p>
          </div>
          <div className="flex flex-wrap content-start gap-3">
            {training.audiences.map((audience) => (
              <span
                key={audience}
                className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-3 text-xs font-bold text-neutral-300"
              >
                {audience}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-14">
          <IndustryTechnologyRail />
        </div>
      </div>
    </section>
  );
}

export function RoadsInternationalMethodSection({
  international,
  method,
}: InternationalMethodProps) {
  return (
    <section className="relative overflow-hidden bg-white py-24 md:py-36">
      <div className="container mx-auto px-6">
        <div
          id="internacional"
          className="scroll-mt-28 rounded-[32px] border border-neutral-200 bg-neutral-50/70 p-7 sm:p-10 lg:grid lg:grid-cols-[0.75fr_1.25fr] lg:gap-20"
        >
          <SectionPill>{international.pill}</SectionPill>
          <div className="mt-8 lg:mt-0">
            <h2 className="text-[clamp(2.2rem,8vw,3rem)] font-bold leading-[0.98] tracking-tight text-neutral-900 lg:text-5xl">
              {international.title}
            </h2>
            <p className="mt-6 text-lg font-medium leading-relaxed text-neutral-500">
              {international.description}
            </p>
          </div>
        </div>

        <div className="mt-20">
          <IndustrySectionHeading
            pill={method.pill}
            title={method.title}
            description={method.description}
          />
          <ol aria-label="Fluxo de trabalho" className="mt-12 grid gap-8 lg:grid-cols-4">
            {method.stages.map((stage, index) => (
              <li key={stage.title} className="relative min-w-0 border-t border-neutral-300 pt-8">
                <span
                  className={cn(
                    "mb-6 flex h-11 w-11 items-center justify-center rounded-[14px] text-sm font-black",
                    index === method.stages.length - 1
                      ? "bg-neutral-950 text-brand-400"
                      : "bg-brand-400 text-neutral-950",
                  )}
                >
                  {stage.label.slice(0, 1)}
                </span>
                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-brand-600">
                  {stage.label}
                </span>
                <h3 className="mt-3 text-xl font-bold tracking-tight text-neutral-900">
                  {stage.title}
                </h3>
                <p className="mt-3 text-sm font-medium leading-relaxed text-neutral-500">
                  {stage.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 4: Run focused tests and lint**

Run:

```powershell
node --test scripts/industry-roads-page.test.mjs
npx eslint src/components/industry/roads/roads-capability-sections.tsx
```

Expected: all focused tests pass and ESLint reports no errors.

- [ ] **Step 5: Commit the capability and continuity story**

```powershell
git add -- scripts/industry-roads-page.test.mjs src/components/industry/roads/roads-capability-sections.tsx
git commit -m "feat: add road privacy capability sections"
```

## Task 8: Compose the complete road page and final CTA

**Files:**

- Modify: `scripts/industry-roads-page.test.mjs`
- Create: `src/components/industry/industry-final-cta.tsx`
- Create: `src/components/industry/roads-industry-page.tsx`

- [ ] **Step 1: Add failing composition and CTA-count tests**

Append to `scripts/industry-roads-page.test.mjs`:

```js
const finalCtaSource = await readOptional(
  "../src/components/industry/industry-final-cta.tsx",
);
const pageSource = await readOptional(
  "../src/components/industry/roads-industry-page.tsx",
);

test("road page composes the complete approved narrative", () => {
  const requiredComponents = [
    "Navbar",
    "IndustryHero",
    "IndustryProofStrip",
    "RoadsOperationalContextSection",
    "RoadsLifecycleSection",
    "RoadsFreeFlowSection",
    "RoadsCapabilitiesSection",
    "RoadsPrivacyByDesignSection",
    "RoadsOperationsSection",
    "RoadsInternationalMethodSection",
    "IndustryFaqSection",
    "IndustryFinalCta",
    "Footer",
  ];

  for (const component of requiredComponents) {
    assert.match(pageSource, new RegExp(`<${component}`));
  }
});

test("road page has exactly the three approved CTA positions", () => {
  const combinedSource = `${pageSource}\n${heroSource}\n${roadsCapabilitySource}\n${finalCtaSource}`;
  assert.equal((combinedSource.match(/position="hero"/g) ?? []).length, 1);
  assert.equal(
    (combinedSource.match(/position="capabilities"/g) ?? []).length,
    1,
  );
  assert.equal((combinedSource.match(/position="final"/g) ?? []).length, 1);
});

test("only the final CTA uses a full yellow section", () => {
  assert.match(finalCtaSource, /<section[^>]*bg-brand-400/);
  assert.doesNotMatch(pageSource, /bg-brand-100/);
  assert.doesNotMatch(pageSource, /bg-brand-200/);
  assert.doesNotMatch(pageSource, /overflow-x-(?:hidden|clip)/);
});
```

- [ ] **Step 2: Run the test and verify the red state**

Run:

```powershell
node --test scripts/industry-roads-page.test.mjs
```

Expected: FAIL because the final CTA and page composition do not exist.

- [ ] **Step 3: Implement the configurable final CTA**

Create `src/components/industry/industry-final-cta.tsx`:

```tsx
import type { RoadsIndustryContent } from "@/components/industry/industry-page-types";
import { IndustryContactLink } from "@/components/industry/industry-contact-link";
import { SectionPill } from "@/components/ui/site-primitives";

type IndustryFinalCtaProps = {
  sector: string;
  content: RoadsIndustryContent["finalCta"];
  allowedAnchors: readonly string[];
};

export function IndustryFinalCta({
  sector,
  content,
  allowedAnchors,
}: IndustryFinalCtaProps) {
  return (
    <section
      id="cta"
      className="relative overflow-hidden bg-brand-400 py-24 text-neutral-950 md:py-36"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-white/30 blur-[120px]" />
      <div className="container relative z-10 mx-auto px-6">
        <SectionPill tone="brand">{content.pill}</SectionPill>
        <div className="mt-8 grid items-end gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24">
          <div>
            <h2 className="max-w-4xl break-words text-[clamp(2.7rem,10vw,3.5rem)] font-bold leading-[0.94] tracking-tight sm:text-6xl lg:text-7xl">
              {content.title}
            </h2>
            <p className="mt-8 max-w-2xl text-lg font-medium leading-relaxed text-neutral-800">
              {content.description}
            </p>
          </div>
          <div className="min-w-0 rounded-[28px] border border-black/10 bg-white/30 p-6 backdrop-blur-sm sm:p-8">
            <IndustryContactLink
              sector={sector}
              position="final"
              allowedAnchors={allowedAnchors}
              variant="dark"
              size="xl"
              fullWidth
            >
              {content.cta}
            </IndustryContactLink>
            <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-700">
              Próximo passo
            </p>
            <p className="mt-3 text-base font-bold leading-relaxed text-neutral-900">
              {content.nextStep}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 4: Compose the complete pilot page**

Create `src/components/industry/roads-industry-page.tsx`:

```tsx
import { IndustryFaqSection } from "@/components/industry/industry-faq-section";
import { IndustryFinalCta } from "@/components/industry/industry-final-cta";
import { IndustryHero } from "@/components/industry/industry-hero";
import { IndustryProofStrip } from "@/components/industry/industry-proof-strip";
import {
  RoadsCapabilitiesSection,
  RoadsInternationalMethodSection,
  RoadsOperationsSection,
  RoadsPrivacyByDesignSection,
} from "@/components/industry/roads/roads-capability-sections";
import {
  RoadsFreeFlowSection,
  RoadsLifecycleSection,
  RoadsOperationalContextSection,
} from "@/components/industry/roads/roads-context-sections";
import { Footer } from "@/components/ui/footer";
import { Navbar } from "@/components/ui/navbar";
import { roadsIndustryContent as content } from "@/content/industries/roads";

const roadAnchorIds = content.campaignAnchors.map((anchor) => anchor.id);

export function RoadsIndustryPage() {
  return (
    <div className="min-w-0 bg-white text-neutral-900">
      <Navbar showCtaArrow />
      <main>
        <IndustryHero
          sector={content.sector}
          content={content.hero}
          allowedAnchors={roadAnchorIds}
        />
        <IndustryProofStrip items={content.proof} />
        <RoadsOperationalContextSection content={content.context} />
        <RoadsLifecycleSection content={content.lifecycle} />
        <RoadsFreeFlowSection content={content.freeFlow} />
        <RoadsCapabilitiesSection
          sector={content.sector}
          allowedAnchors={roadAnchorIds}
          content={content.capabilities}
        />
        <RoadsPrivacyByDesignSection content={content.privacyByDesign} />
        <RoadsOperationsSection
          content={content.operations}
          training={content.training}
        />
        <RoadsInternationalMethodSection
          international={content.international}
          method={content.method}
        />
        <IndustryFaqSection {...content.faq} />
        <IndustryFinalCta
          sector={content.sector}
          content={content.finalCta}
          allowedAnchors={roadAnchorIds}
        />
      </main>
      <Footer />
    </div>
  );
}
```

- [ ] **Step 5: Run focused tests, typecheck and lint**

Run:

```powershell
node --test scripts/industry-roads-page.test.mjs
npx tsc --noEmit
npx eslint src/components/industry/industry-final-cta.tsx src/components/industry/roads-industry-page.tsx
```

Expected: focused tests pass, TypeScript exits 0 and ESLint reports no errors.

- [ ] **Step 6: Commit the complete page composition**

```powershell
git add -- scripts/industry-roads-page.test.mjs src/components/industry/industry-final-cta.tsx src/components/industry/roads-industry-page.tsx
git commit -m "feat: compose road industry landing page"
```

## Task 9: Publish the route contract, metadata and sitemap entry

**Files:**

- Modify: `scripts/industry-roads-page.test.mjs`
- Create: `src/app/solucoes/privacidade-gestao-de-rodovias/page.tsx`
- Create: `src/app/solucoes/privacidade-gestao-de-rodovias/layout.tsx`
- Modify: `scripts/sync-wordpress-posts.mjs`
- Modify: `public/sitemap.xml`

- [ ] **Step 1: Add failing route, metadata and sitemap tests**

Append to `scripts/industry-roads-page.test.mjs`:

```js
const routeSource = await readOptional(
  "../src/app/solucoes/privacidade-gestao-de-rodovias/page.tsx",
);
const layoutSource = await readOptional(
  "../src/app/solucoes/privacidade-gestao-de-rodovias/layout.tsx",
);
const sitemapSource = await readOptional("../public/sitemap.xml");
const sitemapGeneratorSource = await readOptional("./sync-wordpress-posts.mjs");

test("road solution route delegates to the road page", () => {
  assert.match(routeSource, /RoadsIndustryPage/);
});

test("road solution metadata declares title, canonical and Open Graph", () => {
  assert.match(layoutSource, /roadsIndustryContent\.metadata/);
  assert.match(layoutSource, /alternates/);
  assert.match(layoutSource, /canonical/);
  assert.match(layoutSource, /openGraph/);
  assert.match(layoutSource, /pt_BR/);
});

test("sitemap source and generator preserve the road route", () => {
  const route = "/solucoes/privacidade-gestao-de-rodovias";
  assert.match(sitemapGeneratorSource, new RegExp(`"${route}"`));
  assert.match(
    sitemapSource,
    /https:\/\/togetherprivacy\.tech\/solucoes\/privacidade-gestao-de-rodovias/,
  );
});

test("every declared campaign anchor has one rendered target", () => {
  const renderedSources = `${roadsContextSource}\n${roadsCapabilitySource}`;
  for (const anchor of [
    "free-flow",
    "privacy-by-design",
    "fornecedores",
    "dpo",
    "incidentes",
    "internacional",
  ]) {
    const matches = renderedSources.match(new RegExp(`id="${anchor}"`, "g")) ?? [];
    assert.equal(matches.length, 1, `${anchor} must render exactly once`);
  }
});
```

- [ ] **Step 2: Run the test and verify the red state**

Run:

```powershell
node --test scripts/industry-roads-page.test.mjs
```

Expected: FAIL because the route, layout and sitemap entry do not exist.

- [ ] **Step 3: Create the thin route**

Create `src/app/solucoes/privacidade-gestao-de-rodovias/page.tsx`:

```tsx
import { RoadsIndustryPage } from "@/components/industry/roads-industry-page";

export default function PrivacidadeGestaoDeRodoviasPage() {
  return <RoadsIndustryPage />;
}
```

- [ ] **Step 4: Create route metadata from the content source**

Create `src/app/solucoes/privacidade-gestao-de-rodovias/layout.tsx`:

```tsx
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { roadsIndustryContent } from "@/content/industries/roads";

const { title, description, canonical } = roadsIndustryContent.metadata;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: canonical,
    title,
    description,
    images: [
      {
        url: roadsIndustryContent.hero.image.desktop.png,
        width: roadsIndustryContent.hero.image.desktop.width,
        height: roadsIndustryContent.hero.image.desktop.height,
        alt: "Operação rodoviária e pórtico de identificação automática",
      },
    ],
  },
};

export default function PrivacidadeGestaoDeRodoviasLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return children;
}
```

- [ ] **Step 5: Preserve the route in sitemap generation**

In `scripts/sync-wordpress-posts.mjs`, add the new route immediately after the law-firm route:

```js
const staticRoutes = [
  "",
  "/eca-digital",
  "/blog",
  "/contato",
  "/solucoes/escritorios-de-advocacia",
  "/solucoes/privacidade-gestao-de-rodovias",
  "/servicos/dpo-as-a-service",
  "/servicos/consultoria-adequacao",
  "/servicos/mentoria-e-cultura",
];
```

In `public/sitemap.xml`, add this entry after `/solucoes/escritorios-de-advocacia` without changing unrelated URLs or timestamps:

```xml
  <url>
    <loc>https://togetherprivacy.tech/solucoes/privacidade-gestao-de-rodovias</loc>
    <lastmod>2026-08-27T00:00:00.000Z</lastmod>
  </url>
```

- [ ] **Step 6: Run route, sitemap and type checks**

Run:

```powershell
node --test scripts/industry-roads-page.test.mjs
npx tsc --noEmit
npx eslint src/app/solucoes/privacidade-gestao-de-rodovias/page.tsx src/app/solucoes/privacidade-gestao-de-rodovias/layout.tsx scripts/sync-wordpress-posts.mjs
```

Expected: all focused tests pass, TypeScript exits 0 and ESLint reports no errors.

- [ ] **Step 7: Commit the route contract**

```powershell
git add -- scripts/industry-roads-page.test.mjs src/app/solucoes/privacidade-gestao-de-rodovias/page.tsx src/app/solucoes/privacidade-gestao-de-rodovias/layout.tsx scripts/sync-wordpress-posts.mjs public/sitemap.xml
git commit -m "feat: add road privacy solution route"
```

## Task 10: Run integration, responsive and accessibility verification

**Files:**

- Verify: all files committed in Tasks 1–9.
- Inspect generated: `out/solucoes/privacidade-gestao-de-rodovias.html`
- Inspect generated: `out/sitemap.xml`

- [ ] **Step 1: Run the focused regression suite**

Run:

```powershell
node --test scripts/industry-roads-page.test.mjs scripts/law-firm-lgpd-page.test.mjs scripts/google-tag-manager.test.mjs
```

Expected: all tests pass with zero failures.

- [ ] **Step 2: Run static analysis on the exact feature surface**

Run:

```powershell
npx tsc --noEmit
npx eslint src/components/industry src/content/industries/roads.ts src/content/privacy-platforms.ts src/lib/industry-attribution.ts src/app/solucoes/privacidade-gestao-de-rodovias scripts/industry-roads-page.test.mjs scripts/optimize-industry-hero.mjs
```

Expected: TypeScript and ESLint exit 0.

- [ ] **Step 3: Build the static export without synchronizing unrelated WordPress data**

Run:

```powershell
npx next build
```

Expected: Next.js exits 0 and creates `out/solucoes/privacidade-gestao-de-rodovias.html`.

- [ ] **Step 4: Inspect the exported HTML and sitemap**

Run:

```powershell
rg -n "Privacidade incorporada|canonical|hero-mobile\.avif|hero-desktop\.avif|Agende uma Conversa|free-flow|privacy-by-design" out/solucoes/privacidade-gestao-de-rodovias.html
rg -n "privacidade-gestao-de-rodovias" out/sitemap.xml
```

Expected: the page HTML contains the H1, canonical, both art-directed assets, CTA and campaign anchors; the exported sitemap contains the route once.

- [ ] **Step 5: Serve the export locally**

Run in a long-lived terminal:

```powershell
python -m http.server 4173 --directory out
```

Verify from another terminal:

```powershell
Invoke-WebRequest -UseBasicParsing http://localhost:4173/solucoes/privacidade-gestao-de-rodovias.html | Select-Object StatusCode
```

Expected: `StatusCode` is 200.

- [ ] **Step 6: Verify all approved viewports in the collaborative browser**

Open `http://localhost:4173/solucoes/privacidade-gestao-de-rodovias.html` and inspect 360×800, 390×844, 768×1024, 1024×768, 1280×800 and 1440×900.

For every viewport, record these checks:

- `document.documentElement.scrollWidth === document.documentElement.clientWidth`.
- H1, body copy and all three CTAs are fully visible and not clipped.
- Mobile uses `hero-mobile` and 768 px uses `hero-desktop`.
- Capability cards collapse to one or two columns without fixed-height clipping.
- The compact yellow capability remains visually smaller than the primary cards.
- Lifecycle becomes vertical below desktop.
- FAQ questions wrap and the chevron stays inside its control.
- Footer phone and email wrap without horizontal overflow.

Expected: every check passes at every viewport.

- [ ] **Step 7: Verify keyboard, ARIA and reduced motion**

In the collaborative browser:

1. Press Tab from the addressable page content through hero CTA, mid CTA, FAQ controls and final CTA.
2. Open and close each FAQ with Enter and Space.
3. Confirm the active button changes `aria-expanded` and controls a matching region.
4. Emulate `prefers-reduced-motion: reduce` and repeat one FAQ interaction.
5. Disable JavaScript and confirm the page copy plus these fallback links remain available: `/contato?sector=gestao-de-rodovias&cta_position=hero`, `/contato?sector=gestao-de-rodovias&cta_position=capabilities` and `/contato?sector=gestao-de-rodovias&cta_position=final`.

Expected: focus is visible, controls are operable, ARIA state matches visibility, reduced motion removes height animation, and no-JavaScript navigation still works.

- [ ] **Step 8: Verify campaign attribution without blocking navigation**

Navigate to:

```text
http://localhost:4173/solucoes/privacidade-gestao-de-rodovias.html?utm_source=google&utm_campaign=free-flow&gclid=test123&unsafe=drop#free-flow
```

Inspect the hero CTA after hydration. Expected destination:

```text
/contato?sector=gestao-de-rodovias&cta_position=hero&entry_anchor=free-flow&utm_source=google&utm_campaign=free-flow&gclid=test123
```

Click once with `window.dataLayer` undefined and once after setting `window.dataLayer = []`. Expected: both clicks navigate; the second pushes `cta_hero` with the approved payload; `unsafe` never propagates.

- [ ] **Step 9: Check the final diff and commit only verification fixes**

Run:

```powershell
git status --short
git diff --check
git log --oneline -10
```

Expected: no generated or unrelated files are staged. If browser verification required a source fix, stage only the exact feature files and commit:

```powershell
git commit -m "fix: harden road page responsive behavior"
```

If no source fix was required, do not create an empty commit.

## Task 11: Prepare pilot approval without publishing

**Files:**

- No file changes expected.

- [ ] **Step 1: Reconfirm the two numerical proof points**

Ask the TOGETHER content owner to confirm that `+5 anos` and `+200 atividades e entregáveis` remain current. Record the confirmation date in the handoff message. If either value changed, update `roads.ts`, its focused assertions and any rendered copy before presenting the pilot.

- [ ] **Step 2: Provide the local review URL and evidence summary**

Report:

- Exact localhost URL.
- Focused test count and result.
- TypeScript, ESLint and build result.
- Viewports tested.
- CTA attribution and accessibility result.
- Any limitation that remains manual or production-only.

- [ ] **Step 3: Stop before production publication**

Do not push, merge, publish or replicate the other five sector pages. Wait for explicit approval of the Gestão de Rodovias pilot.

- [ ] **Step 4: After pilot approval, write the next sector plan**

The next plan must select one of the five remaining sectors, finalize its copy and two hero assets, and reuse only the components proven by this pilot. It must not re-open settled road-page decisions unless new browser evidence shows a shared defect.
