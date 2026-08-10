# Law Firm LGPD Copy Refresh Implementation Plan

> **For agentic workers:** Execute directly by default. Use subagents only for independent bounded lanes that satisfy the global harness policy. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Reestruturar a página de parceria LGPD para apresentar a Adequação TOGETHER como uma nova linha de serviços para escritórios, provar a capacidade da TOGETHER sem repetição e adotar o FAQ visual da home.

**Architecture:** Manter `law-firm-lgpd-content.ts` como fonte única da copy e transformar `law-firm-lgpd-page.tsx` em orquestrador de seções com ritmos distintos. Extrair a oferta comercial, a prova de capacidade e o FAQ para componentes focados; mover o mapa de responsabilidades para fora do hero e deixar a imagem do hero configurável em um único campo de conteúdo.

**Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS 4, Framer Motion, Lucide React, Node Test Runner.

---

## Estrutura de arquivos

- Modify: `src/components/legal-partners/law-firm-lgpd-content.ts` — fonte da copy, dados da oferta, cenários, provas, modelos, processo, FAQ e CTA.
- Modify: `src/components/legal-partners/law-firm-lgpd-page.tsx` — composição da página, hero com imagem e ordem narrativa.
- Modify: `src/components/legal-partners/co-delivery-map.tsx` — mapa de responsabilidades reutilizado na seção própria, fora do hero.
- Create: `src/components/legal-partners/partner-portfolio-offer.tsx` — fluxo “portfólio → solução → selo → entrega”.
- Create: `src/components/legal-partners/partner-capacity-section.tsx` — métricas, credenciais e plataformas em uma seção escura.
- Create: `src/components/legal-partners/partner-faq-section.tsx` — FAQ específico da parceria seguindo o padrão da home.
- Modify: `scripts/law-firm-lgpd-page.test.mjs` — contrato de conteúdo, estrutura, acessibilidade e prevenção de regressões.

## Task 1: Atualizar o contrato de testes para a narrativa aprovada

**Files:**
- Modify: `scripts/law-firm-lgpd-page.test.mjs`

- [ ] **Step 1: Adicionar leituras dos novos componentes**

Depois das leituras atuais, adicionar:

```js
const portfolioOfferSource = await readOptional(
  "../src/components/legal-partners/partner-portfolio-offer.tsx",
);
const capacitySource = await readOptional(
  "../src/components/legal-partners/partner-capacity-section.tsx",
);
const partnerFaqSource = await readOptional(
  "../src/components/legal-partners/partner-faq-section.tsx",
);
```

- [ ] **Step 2: Substituir os testes presos à arquitetura antiga**

Remover expectativas por `content.capabilities`, `content.audiences`, cards de FAQ Radix e `CoDeliveryMap` dentro do hero. Adicionar estes testes:

```js
test("landing page leads with the partner revenue opportunity", () => {
  assert.match(contentSource, /Amplie os serviços do seu escritório/);
  assert.match(contentSource, /Adequação TOGETHER/);
  assert.match(contentSource, /Escritório Parceiro TOGETHER/);
  assert.match(contentSource, /nova frente de faturamento/);
  assert.doesNotMatch(contentSource, /garantia de faturamento/i);
});

test("hero uses configurable media and no longer contains the responsibility map", () => {
  const heroEnd = pageSource.indexOf("</section>", pageSource.indexOf("content.hero"));
  const heroSource = pageSource.slice(0, heroEnd);

  assert.match(heroSource, /content\.hero\.image/);
  assert.match(heroSource, /<Image/);
  assert.doesNotMatch(heroSource, /<CoDeliveryMap/);
  assert.ok(pageSource.indexOf("<CoDeliveryMap") > heroEnd);
});

test("page replaces repetitive service grids with distinct narrative sections", () => {
  assert.match(pageSource, /<PartnerPortfolioOffer/);
  assert.match(pageSource, /<PartnerCapacitySection/);
  assert.match(pageSource, /<PartnerFaqSection/);
  assert.match(pageSource, /content\.partnerModels/);
  assert.doesNotMatch(pageSource, /content\.capabilities/);
  assert.doesNotMatch(pageSource, /content\.audiences/);
});

test("capacity section reuses approved Home proof points", () => {
  assert.match(contentSource, /\+200/);
  assert.match(contentSource, /\+5 anos/);
  assert.match(contentSource, /certificações internacionais/i);
  assert.match(contentSource, /GDPR/);
  assert.match(contentSource, /PDPL/);
  assert.match(capacitySource, /onetrust\.svg/);
  assert.match(capacitySource, /privacy-tools\.svg/);
});

test("partner FAQ follows the Home interaction pattern", () => {
  assert.match(partnerFaqSource, /index === 0/);
  assert.match(partnerFaqSource, /aria-expanded/);
  assert.match(partnerFaqSource, /border-b border-neutral-100/);
  assert.match(partnerFaqSource, /border-l-2 border-brand-400/);
  assert.match(partnerFaqSource, /rounded-full/);
  assert.match(partnerFaqSource, /Ainda com dúvidas/);
  assert.doesNotMatch(pageSource, /AccordionItem/);
});

test("public copy does not overuse the old execution vocabulary", () => {
  const diagnosisMentions = approvedCopy.match(/diagnóstico/gi) ?? [];
  const mappingMentions = approvedCopy.match(/mapeamento de dados/gi) ?? [];

  assert.ok(diagnosisMentions.length <= 3);
  assert.ok(mappingMentions.length <= 3);
  assert.doesNotMatch(approvedCopy, /diagnóstico e execução/gi);
});
```

- [ ] **Step 3: Atualizar o teste de conteúdo público**

Manter as proibições já existentes e acrescentar:

```js
assert.doesNotMatch(approvedCopy, /aumento garantido/i);
assert.doesNotMatch(approvedCopy, /faturamento garantido/i);
assert.doesNotMatch(approvedCopy, /sem risco/i);
```

- [ ] **Step 4: Rodar o teste e confirmar a falha esperada**

Run:

```powershell
node --test scripts/law-firm-lgpd-page.test.mjs
```

Expected: FAIL nos testes da nova oferta, dos novos componentes e do hero sem mapa.

- [ ] **Step 5: Commitar somente o teste**

```powershell
git add -- scripts/law-firm-lgpd-page.test.mjs
git commit -m "test: define partner LGPD narrative contract"
```

## Task 2: Substituir a copy repetitiva pela nova fonte de conteúdo

**Files:**
- Modify: `src/components/legal-partners/law-firm-lgpd-content.ts`
- Test: `scripts/law-firm-lgpd-page.test.mjs`

- [ ] **Step 1: Reduzir imports de ícones aos utilizados pela nova estrutura**

Usar:

```ts
import {
  BadgeCheck,
  BriefcaseBusiness,
  ClipboardCheck,
  FileCheck2,
  MessagesSquare,
  ShieldAlert,
  Split,
  UserCheck,
  Users,
} from "lucide-react";
```

- [ ] **Step 2: Substituir o objeto de conteúdo pelo modelo aprovado**

O objeto deve conter exatamente estas unidades e textos:

```ts
export const lawFirmLgpdContent = {
  hero: {
    pill: "Parceria LGPD para escritórios de advocacia",
    pillShort: "Parceria LGPD",
    title: "Amplie os serviços do seu escritório",
    accent: "com uma estrutura pronta para entregar LGPD.",
    paragraphs: [
      "Ofereça projetos de privacidade aos seus clientes com a metodologia e a capacidade especializada da TOGETHER.",
      "Seu escritório mantém a condução jurídica e o relacionamento comercial. A estrutura necessária para cada projeto já está pronta para ser acionada.",
    ],
    image: {
      src: "/dpo_hub.png",
      alt: "Ilustração de uma operação conectada de privacidade",
    },
    primary: { href: "/contato", label: "Conversar sobre uma parceria" },
    secondary: { href: "#modelo-de-parceria", label: "Entender como funciona" },
  },
  portfolioOffer: {
    pill: "Nova frente de negócios",
    title: "Inclua serviços de privacidade e LGPD no portfólio do seu escritório.",
    paragraphs: [
      "Com a parceria, seu escritório pode oferecer projetos de adequação à LGPD sem manter internamente toda a estrutura necessária para a entrega.",
      "A solução é apresentada como uma Adequação TOGETHER, acompanhada pelo selo de Escritório Parceiro TOGETHER.",
      "Seu escritório amplia o portfólio, mantém o relacionamento com o cliente e abre uma nova frente de faturamento. A TOGETHER disponibiliza a metodologia, os especialistas e a estrutura que sustentam a entrega.",
    ],
    flow: [
      "Portfólio do escritório",
      "Adequação TOGETHER",
      "Selo Escritório Parceiro TOGETHER",
      "Projeto entregue ao cliente",
    ],
    benefits: [
      "Uma solução de adequação pronta para oferecer",
      "Estrutura especializada disponível por projeto",
      "Novas oportunidades dentro da carteira de clientes",
      "Capacidade para atender projetos de maior complexidade",
    ],
  },
  scenariosIntro: {
    pill: "Demandas de LGPD",
    title: "Diferentes demandas podem se transformar em novos projetos para o escritório.",
    text: "A TOGETHER entra com a capacidade necessária para que cada oportunidade avance além da orientação jurídica.",
  },
  scenarios: [
    {
      icon: FileCheck2,
      label: "01 / Projeto",
      title: "Adequação à LGPD",
      outcome: "Conduzir um projeto completo",
      text: "Transformar a orientação jurídica em um programa estruturado, implantado e acompanhado.",
    },
    {
      icon: ShieldAlert,
      label: "02 / Urgência",
      title: "Incidente de dados",
      outcome: "Organizar a resposta",
      text: "Reunir informações, evidências e providências necessárias para o caso.",
    },
    {
      icon: ClipboardCheck,
      label: "03 / Exigência",
      title: "Auditoria e due diligence",
      outcome: "Preparar comprovações",
      text: "Organizar documentos, controles e evidências para responder à solicitação.",
    },
    {
      icon: UserCheck,
      label: "04 / Continuidade",
      title: "DPO e titulares",
      outcome: "Manter a privacidade funcionando",
      text: "Sustentar canais, registros, atendimentos e rotinas recorrentes.",
    },
  ],
  capacity: {
    pill: "Estrutura TOGETHER",
    title: "Uma estrutura pronta para entrar no projeto.",
    text: "Especialistas, tecnologia e um catálogo amplo de atividades para sustentar projetos de diferentes portes e níveis de complexidade.",
    proofs: [
      { value: "+200", label: "atividades e entregáveis no catálogo de serviços" },
      { value: "+5 anos", label: "de atuação em privacidade e LGPD" },
      { value: "Especialistas", label: "com certificações internacionais e experiência prática" },
      { value: "Plataformas", label: "domínio das principais tecnologias de privacidade" },
      { value: "Internacional", label: "experiência com GDPR e PDPL" },
      { value: "Entregas", label: "cronogramas claros e acompanhamento por atividade" },
    ],
  },
  roles: {
    office: {
      label: "Escritório",
      title: "Condução jurídica",
      summary: "Estratégia jurídica e relacionamento com o cliente.",
      items: [
        "Estratégia e interpretação jurídica",
        "Pareceres, contratos e documentos legais",
        "Relacionamento com o cliente",
        "Aprovação das decisões jurídicas",
      ],
    },
    together: {
      label: "TOGETHER",
      title: "Implementação e operação",
      summary: "Processos, tecnologia e operação de privacidade.",
      items: [
        "Diagnóstico e mapeamento de dados",
        "Implantação de processos e controles",
        "Organização de registros e evidências",
        "Tecnologia e ferramentas de privacidade",
        "DPO, titulares, treinamentos e suporte operacional",
      ],
    },
    result: "Uma atuação coordenada, com responsabilidades definidas antes do início do projeto.",
  },
  partnerModels: [
    {
      icon: BriefcaseBusiness,
      label: "Projeto pontual",
      title: "Uma demanda específica",
      text: "Escopo, entregáveis e período de atuação definidos para o projeto.",
    },
    {
      icon: Users,
      label: "Reforço especializado",
      title: "Mais capacidade para a equipe",
      text: "Especialistas para frentes específicas, projetos simultâneos ou períodos de maior volume.",
    },
    {
      icon: BadgeCheck,
      label: "Operação contínua",
      title: "Privacidade no dia a dia",
      text: "DPO, titulares, rotinas recorrentes e evolução do programa de privacidade.",
    },
  ],
  process: [
    {
      icon: MessagesSquare,
      label: "01 / Entendimento",
      title: "Conhecemos a oportunidade",
      text: "Entendemos o escritório, o cliente e a capacidade necessária para a entrega.",
    },
    {
      icon: Split,
      label: "02 / Definição",
      title: "Organizamos a parceria",
      text: "Definimos escopo, responsáveis, entregáveis, comunicação e pontos de aprovação.",
    },
    {
      icon: Users,
      label: "03 / Trabalho conjunto",
      title: "Começamos o projeto",
      text: "Cada equipe assume sua parte e atua de forma coordenada até a conclusão.",
    },
  ],
  confidentiality: {
    title: "Confidencialidade desde o primeiro contato.",
    text: "Informações, documentos e clientes são tratados de forma confidencial, com formalização adequada às partes e ao projeto.",
  },
  faqs: [
    {
      question: "Como a Adequação TOGETHER é apresentada ao cliente?",
      answer: "O serviço pode fazer parte do portfólio do escritório como uma Adequação TOGETHER, acompanhado pelo selo de Escritório Parceiro TOGETHER. O escritório permanece à frente da condução jurídica e do relacionamento comercial com o cliente.",
    },
    {
      question: "Quem permanece responsável pela atuação jurídica?",
      answer: "O escritório. A TOGETHER não substitui a atuação jurídica: ela assume as atividades técnicas e operacionais definidas para o projeto, enquanto estratégia, interpretação legal, documentos jurídicos e aprovações permanecem com o escritório.",
    },
    {
      question: "A parceria pode atender apenas um projeto?",
      answer: "Sim. A parceria pode começar com uma demanda pontual, reforçar uma equipe em um projeto específico ou evoluir para uma operação contínua, conforme a necessidade do escritório.",
    },
    {
      question: "Como são definidos escopo, comunicação e aprovações?",
      answer: "Antes do início, as equipes alinham atividades, responsáveis, entregáveis, forma de comunicação e pontos de aprovação. Essa definição evita sobreposição e deixa claro como o projeto será conduzido.",
    },
    {
      question: "Como a TOGETHER protege o cliente e as informações do escritório?",
      answer: "As informações compartilhadas são tratadas de forma confidencial desde o primeiro contato, com formalização adequada ao projeto, ao escritório e às partes envolvidas.",
    },
  ],
  finalCta: {
    pill: "Parceria TOGETHER",
    title: "Leve uma nova solução de LGPD para os seus clientes.",
    text: "Inclua a Adequação TOGETHER no portfólio do seu escritório e conte com uma estrutura especializada para sustentar cada projeto.",
    primary: { href: "/contato", label: "Conversar sobre uma parceria" },
    nextStep: "Uma conversa inicial para entender o escritório, as oportunidades atuais e o modelo de parceria mais adequado.",
  },
} as const;
```

- [ ] **Step 3: Rodar os testes focados**

Run:

```powershell
node --test scripts/law-firm-lgpd-page.test.mjs
```

Expected: os testes de conteúdo passam; os testes dos componentes novos continuam falhando.

- [ ] **Step 4: Commitar conteúdo e teste ajustado**

```powershell
git add -- src/components/legal-partners/law-firm-lgpd-content.ts scripts/law-firm-lgpd-page.test.mjs
git commit -m "feat: define partner LGPD commercial narrative"
```

## Task 3: Criar a seção de oferta comercial e o selo do parceiro

**Files:**
- Create: `src/components/legal-partners/partner-portfolio-offer.tsx`
- Test: `scripts/law-firm-lgpd-page.test.mjs`

- [ ] **Step 1: Criar o componente com fluxo comercial responsivo**

Implementar um componente com esta interface:

```tsx
import { BadgeCheck } from "lucide-react";
import { PixelDecor } from "@/components/ui/backgrounds/pixel-decor";
import { SectionPill } from "@/components/ui/site-primitives";

type PartnerPortfolioOfferProps = {
  content: {
    readonly pill: string;
    readonly title: string;
    readonly paragraphs: readonly string[];
    readonly flow: readonly string[];
    readonly benefits: readonly string[];
  };
};

export function PartnerPortfolioOffer({ content }: PartnerPortfolioOfferProps) {
  return (
    <section
      id="modelo-de-parceria"
      className="relative overflow-hidden border-t border-neutral-100 bg-white py-24 md:py-36"
    >
      <PixelDecor placement="topRight" mask="topRight" opacity={0.12} />
      <div className="container relative z-10 mx-auto px-6">
        <div className="grid gap-14 lg:grid-cols-[0.88fr_1.12fr] lg:gap-20">
          <div>
            <SectionPill>{content.pill}</SectionPill>
            <h2 className="mt-8 max-w-2xl text-[2.65rem] font-bold leading-[0.98] tracking-tighter text-neutral-900 md:text-6xl">
              {content.title}
            </h2>
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-neutral-500">
              {content.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </div>

          <div className="rounded-[28px] border border-neutral-200 bg-neutral-50 p-5 sm:p-8">
            <div className="grid gap-3 sm:grid-cols-2">
              {content.flow.map((step, index) => (
                <div key={step} className="relative min-h-32 rounded-2xl border border-neutral-200 bg-white p-5">
                  <span className="text-[10px] font-bold tracking-[0.18em] text-brand-600">0{index + 1}</span>
                  <p className="mt-6 font-bold text-neutral-900">{step}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 flex items-center justify-between rounded-2xl bg-brand-400 p-5">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.18em]">Selo</span>
                <p className="mt-1 font-bold">Escritório Parceiro TOGETHER</p>
              </div>
              <BadgeCheck className="h-9 w-9" aria-hidden="true" />
            </div>
          </div>
        </div>

        <ul className="mt-14 grid border border-neutral-200 sm:grid-cols-2 lg:grid-cols-4">
          {content.benefits.map((benefit) => (
            <li key={benefit} className="border-b border-neutral-200 p-6 text-sm font-semibold text-neutral-700 last:border-b-0 sm:border-r lg:border-b-0">
              {benefit}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
```

Importar `BadgeCheck`, `PixelDecor` e `SectionPill`. Preservar a paleta existente: branco, neutros e `brand-400`; não adicionar cores hexadecimais novas.

- [ ] **Step 2: Rodar o teste do componente**

Run:

```powershell
node --test --test-name-pattern="revenue opportunity|distinct narrative" scripts/law-firm-lgpd-page.test.mjs
```

Expected: o teste encontra a copy e o componente criado; a montagem na página ainda falha.

- [ ] **Step 3: Commitar o componente**

```powershell
git add -- src/components/legal-partners/partner-portfolio-offer.tsx
git commit -m "feat: add partner portfolio offer section"
```

## Task 4: Criar a prova de capacidade com tecnologia

**Files:**
- Create: `src/components/legal-partners/partner-capacity-section.tsx`
- Test: `scripts/law-firm-lgpd-page.test.mjs`

- [ ] **Step 1: Criar a seção escura de provas**

Usar os logos já existentes e a interface abaixo:

```tsx
const platforms = [
  { label: "OneTrust", src: "/logos/onetrust.svg" },
  { label: "TrustWorks", src: "/logos/trustworks.png" },
  { label: "Securiti", src: "/logos/securiti.svg" },
  { label: "Privacy Tools", src: "/logos/privacy-tools.svg" },
  { label: "DPONet", src: "/logos/dponet.svg" },
  { label: "BeCompliance", src: "/logos/becompliance.svg" },
  { label: "Privally", src: "/logos/privally.png" },
] as const;

type PartnerCapacitySectionProps = {
  content: {
    readonly pill: string;
    readonly title: string;
    readonly text: string;
    readonly proofs: readonly {
      readonly value: string;
      readonly label: string;
    }[];
  };
};
```

Importar `Image` de `next/image`, `PixelDecor` e `SectionPill`. Implementar o componente com o wrapper completo:

```tsx
export function PartnerCapacitySection({ content }: PartnerCapacitySectionProps) {
  return (
    <section className="relative overflow-hidden bg-[#0a0a0a] py-24 text-white md:py-36">
      <PixelDecor placement="topRight" mask="topRight" opacity={0.18} />
      <div className="container relative z-10 mx-auto px-6">
        <div className="max-w-3xl">
          <SectionPill tone="dark">{content.pill}</SectionPill>
          <h2 className="mt-8 text-[2.65rem] font-bold leading-[0.98] tracking-tighter md:text-6xl">{content.title}</h2>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-neutral-400">{content.text}</p>
        </div>
        <div className="mt-14 grid border border-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {content.proofs.map((proof) => (
            <article key={proof.value} className="min-h-40 border-b border-white/10 p-6 sm:border-r lg:p-8">
              <strong className="block text-3xl font-bold text-brand-400">{proof.value}</strong>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-neutral-400">{proof.label}</p>
            </article>
          ))}
        </div>
        <div className="mt-14 border-t border-white/10 pt-8">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-neutral-500">Experiência prática com plataformas de privacidade</p>
          <div className="mt-7 flex flex-wrap gap-3">
            {platforms.map((platform) => (
              <div key={platform.label} className="flex h-20 min-w-40 flex-1 items-center justify-center border border-white/10 bg-white/[0.03] px-5 sm:max-w-56">
                <Image src={platform.src} alt={platform.label} width={120} height={32} className="max-h-8 w-auto brightness-0 invert opacity-65" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verificar a prova de capacidade**

Run:

```powershell
node --test --test-name-pattern="capacity section" scripts/law-firm-lgpd-page.test.mjs
```

Expected: PASS.

- [ ] **Step 3: Commitar a seção**

```powershell
git add -- src/components/legal-partners/partner-capacity-section.tsx
git commit -m "feat: add partner capacity proof section"
```

## Task 5: Recriar o FAQ no padrão da home

**Files:**
- Create: `src/components/legal-partners/partner-faq-section.tsx`
- Test: `scripts/law-firm-lgpd-page.test.mjs`

- [ ] **Step 1: Criar `PartnerFaqItem` acessível**

Adaptar a composição de `src/components/ui/faq-section.tsx`, mantendo primeira pergunta aberta e adicionando atributos explícitos:

```tsx
type PartnerFaq = {
  readonly question: string;
  readonly answer: string;
};

type PartnerFaqItemProps = PartnerFaq & {
  index: number;
};

type PartnerFaqSectionProps = {
  faqs: readonly PartnerFaq[];
};

function PartnerFaqItem({ question, answer, index }: PartnerFaqItemProps) {
  const [isOpen, setIsOpen] = React.useState(index === 0);
  const contentId = `partner-faq-answer-${index}`;

  return (
    <motion.div
      initial={false}
      className={`group relative border-b border-neutral-100 transition-all duration-500 ${isOpen ? "mb-8 pb-8" : "pb-6"}`}
    >
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls={contentId}
        onClick={() => setIsOpen((current) => !current)}
        className="flex w-full items-center justify-between gap-5 py-2 text-left"
      >
        <h3 className={`text-xl font-bold tracking-tight transition-colors md:text-3xl ${isOpen ? "text-neutral-900" : "text-neutral-400 group-hover:text-neutral-700"}`}>
          {question}
        </h3>
        <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full border transition-all ${isOpen ? "rotate-180 border-neutral-900 bg-neutral-900 text-white" : "border-neutral-200 text-neutral-400"}`}>
          <ChevronDown className="h-6 w-6" aria-hidden="true" />
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={contentId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="ml-1 mt-6 max-w-3xl border-l-2 border-brand-400 pl-7 text-lg font-medium leading-relaxed text-neutral-500 md:text-xl">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
```

- [ ] **Step 2: Criar a composição de duas colunas da home**

O componente público recebe `faqs` e renderiza:

```tsx
export function PartnerFaqSection({ faqs }: PartnerFaqSectionProps) {
  return (
    <section id="faq" className="relative w-full overflow-hidden bg-white py-24 md:py-40">
      <PixelDecor placement="topRight" mask="topRight" opacity={0.14} />
      <PixelDecor placement="bottomLeft" mask="bottomLeft" opacity={0.16} />
      <div className="container relative z-10 mx-auto px-6">
        <div className="flex flex-col items-start gap-16 lg:flex-row lg:gap-36">
          <div className="pt-2 lg:sticky lg:top-24 lg:w-1/3">
            <SectionPill>Suporte & Consultoria</SectionPill>
            <h2 className="mt-8 text-[2.75rem] font-bold leading-[0.94] tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl">
              Perguntas <span className="font-light italic text-brand-500">frequentes.</span>
            </h2>
            <p className="mb-10 mt-8 max-w-sm text-xl font-medium leading-relaxed text-neutral-500">
              Respostas para estruturar a primeira parceria.
            </p>
            <div className="rounded-3xl border border-neutral-100 bg-neutral-50 p-8">
              <div className="mb-6 flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-neutral-100 bg-white">
                  <MessageSquare className="h-6 w-6 text-brand-500" aria-hidden="true" />
                </span>
                <strong>Ainda com dúvidas?</strong>
              </div>
              <ActionLink href="/contato" variant="dark" size="md" fullWidth>
                Conversar com nosso time
              </ActionLink>
            </div>
          </div>
          <div className="w-full lg:w-2/3">
            {faqs.map((faq, index) => (
              <PartnerFaqItem key={faq.question} index={index} {...faq} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Rodar o teste do FAQ**

Run:

```powershell
node --test --test-name-pattern="partner FAQ" scripts/law-firm-lgpd-page.test.mjs
```

Expected: PASS.

- [ ] **Step 4: Commitar o FAQ**

```powershell
git add -- src/components/legal-partners/partner-faq-section.tsx
git commit -m "feat: match partner FAQ to Home pattern"
```

## Task 6: Mover e simplificar o mapa de responsabilidades

**Files:**
- Modify: `src/components/legal-partners/co-delivery-map.tsx`
- Test: `scripts/law-firm-lgpd-page.test.mjs`

- [ ] **Step 1: Atualizar a interface do mapa**

Receber o objeto consolidado de responsabilidades:

```ts
type CoDeliveryMapProps = {
  roles: {
    readonly office: {
      readonly label: string;
      readonly title: string;
      readonly summary: string;
      readonly items: readonly string[];
    };
    readonly together: {
      readonly label: string;
      readonly title: string;
      readonly summary: string;
      readonly items: readonly string[];
    };
    readonly result: string;
  };
};
```

- [ ] **Step 2: Remover textos de contexto exclusivos do hero**

Eliminar “Projeto de LGPD do cliente”, “Trabalho conjunto”, “Solicitação recebida pelo escritório” e “Condução jurídica e execução especializada”. O componente deve iniciar diretamente com as duas responsabilidades e terminar com `roles.result`.

No mobile, renderizar `role.summary` antes de permitir a leitura da lista. No desktop, manter a composição conectada e os itens completos. Preservar `initial={false}` e não introduzir dependência de animação para visibilidade.

- [ ] **Step 3: Atualizar o teste do mapa**

Substituir as expectativas antigas por:

```js
test("responsibility map exposes the approved role boundary", () => {
  assert.match(mapSource, /roles\.office/);
  assert.match(mapSource, /roles\.together/);
  assert.match(mapSource, /roles\.result/);
  assert.match(mapSource, /summary/);
  assert.match(mapSource, /md:hidden/);
  assert.match(mapSource, /hidden[^"\n]*md:block/);
  assert.doesNotMatch(mapSource, /Solicitação recebida/);
  assert.match(mapSource, /initial=\{false\}/);
});
```

- [ ] **Step 4: Rodar o teste focado**

Run:

```powershell
node --test --test-name-pattern="responsibility map" scripts/law-firm-lgpd-page.test.mjs
```

Expected: PASS.

- [ ] **Step 5: Commitar mapa e teste**

```powershell
git add -- src/components/legal-partners/co-delivery-map.tsx scripts/law-firm-lgpd-page.test.mjs
git commit -m "refactor: move role map out of partner hero"
```

## Task 7: Recompor a página com ritmos visuais diferentes

**Files:**
- Modify: `src/components/legal-partners/law-firm-lgpd-page.tsx`
- Test: `scripts/law-firm-lgpd-page.test.mjs`

- [ ] **Step 1: Ajustar imports**

Adicionar:

```tsx
import Image from "next/image";
import { PartnerPortfolioOffer } from "@/components/legal-partners/partner-portfolio-offer";
import { PartnerCapacitySection } from "@/components/legal-partners/partner-capacity-section";
import { PartnerFaqSection } from "@/components/legal-partners/partner-faq-section";
import { ShieldCheck } from "lucide-react";
```

Remover imports de `Accordion`, `AccordionContent`, `AccordionItem` e `AccordionTrigger`.

- [ ] **Step 2: Substituir o mapa do hero pela imagem configurável**

Manter a grade e trocar o `<CoDeliveryMap>` por:

```tsx
<motion.div variants={fadeUp} className="relative min-h-[360px] overflow-hidden rounded-[28px] border border-neutral-100 bg-neutral-50 sm:min-h-[460px] xl:min-h-[560px]">
  <Image
    src={content.hero.image.src}
    alt={content.hero.image.alt}
    fill
    priority
    sizes="(max-width: 1279px) 100vw, 46vw"
    className="object-cover"
  />
  <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/[0.04]" />
</motion.div>
```

A origem fica em `content.hero.image.src`, permitindo que a imagem seja substituída depois em uma única linha.

- [ ] **Step 3: Montar a oferta depois da prova social**

Logo após `AuthorityStrip`, inserir:

```tsx
<PartnerPortfolioOffer content={content.portfolioOffer} />
```

- [ ] **Step 4: Transformar cenários em bento assimétrico**

Usar `content.scenariosIntro` como cabeçalho. Renderizar o primeiro item em um bloco amarelo ocupando duas linhas no desktop e os demais em blocos brancos com bordas. No mobile, todos voltam ao fluxo de uma coluna.

Classes estruturais obrigatórias:

```tsx
className="mt-14 grid gap-4 lg:grid-cols-[1.12fr_0.88fr] lg:grid-rows-3"
```

Para o primeiro item:

```tsx
className="bg-brand-400 lg:row-span-3"
```

Para os demais:

```tsx
className="border border-neutral-200 bg-white"
```

- [ ] **Step 5: Inserir a prova de capacidade e a seção de responsabilidades**

Depois dos cenários:

```tsx
<PartnerCapacitySection content={content.capacity} />

<section className="relative overflow-hidden bg-white py-24 md:py-36">
  <div className="container relative z-10 mx-auto px-6">
    <SectionHeading
      pill="Responsabilidades definidas"
      title="O jurídico continua com o escritório."
      accent="A implementação ganha uma equipe própria."
      text="As responsabilidades são definidas antes do início para preservar a atuação de cada equipe e a relação com o cliente."
    />
    <div className="mt-14">
      <CoDeliveryMap roles={content.roles} />
    </div>
  </div>
</section>
```

- [ ] **Step 6: Substituir capacidades e públicos pelos modelos de parceria**

Remover as seções que usam `content.capabilities` e `content.audiences`. Criar uma seção editorial com três colunas usando `content.partnerModels`:

```tsx
<section className="border-y border-neutral-100 bg-neutral-50 py-24 md:py-32">
  <div className="container mx-auto px-6">
    <SectionHeading
      pill="Modelos de parceria"
      pillShort="Modelos de parceria"
      title="Acione a TOGETHER"
      accent="do jeito que o projeto precisa."
      text="A parceria pode começar em uma oportunidade específica ou acompanhar o escritório continuamente."
    />
    <div className="mt-14 grid gap-10 md:grid-cols-3">
      {content.partnerModels.map((model, index) => (
        <article key={model.label} className="border-t-2 border-neutral-900 pt-6">
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-brand-600">0{index + 1} / {model.label}</span>
          <h3 className="mt-6 text-2xl font-bold tracking-tight">{model.title}</h3>
          <p className="mt-4 leading-relaxed text-neutral-500">{model.text}</p>
        </article>
      ))}
    </div>
  </div>
</section>
```

- [ ] **Step 7: Manter um único fluxo de início e integrar confidencialidade**

Reutilizar `content.process` em três etapas horizontais. Remover a seção isolada de confidencialidade e incluir, abaixo das etapas:

```tsx
<aside className="mt-12 grid gap-4 rounded-3xl border border-brand-500/30 bg-brand-400/15 p-7 sm:grid-cols-[auto_1fr] sm:items-center md:p-9">
  <ShieldCheck className="h-8 w-8 text-brand-600" aria-hidden="true" />
  <div>
    <h3 className="text-xl font-bold text-neutral-900">{content.confidentiality.title}</h3>
    <p className="mt-2 max-w-3xl leading-relaxed text-neutral-600">{content.confidentiality.text}</p>
  </div>
</aside>
```

- [ ] **Step 8: Substituir FAQ e atualizar CTA final**

Remover a seção Radix inteira e inserir:

```tsx
<PartnerFaqSection faqs={content.faqs} />
```

No CTA amarelo final, ler todos os textos de `content.finalCta` e preservar contatos, WhatsApp, e-mail, endereço, footer e os componentes institucionais existentes.

- [ ] **Step 9: Rodar testes da página**

Run:

```powershell
node --test scripts/law-firm-lgpd-page.test.mjs
```

Expected: todos os testes do arquivo passam.

- [ ] **Step 10: Commitar a recomposição**

```powershell
git add -- src/components/legal-partners/law-firm-lgpd-page.tsx scripts/law-firm-lgpd-page.test.mjs
git commit -m "feat: recompose partner LGPD landing page"
```

## Task 8: Verificação integrada e responsividade

**Files:**
- Verify: `src/components/legal-partners/*.tsx`
- Verify: `scripts/law-firm-lgpd-page.test.mjs`

- [ ] **Step 1: Rodar verificação de tipos e lint focado**

Run:

```powershell
npx eslint src/components/legal-partners/law-firm-lgpd-page.tsx src/components/legal-partners/law-firm-lgpd-content.ts src/components/legal-partners/co-delivery-map.tsx src/components/legal-partners/partner-portfolio-offer.tsx src/components/legal-partners/partner-capacity-section.tsx src/components/legal-partners/partner-faq-section.tsx scripts/law-firm-lgpd-page.test.mjs
```

Expected: exit code 0.

- [ ] **Step 2: Rodar todos os testes locais**

Run:

```powershell
npm test
```

Expected: todos os testes passam.

- [ ] **Step 3: Gerar o build estático final**

Run:

```powershell
npm run build
```

Expected: build Next.js concluído e rota `/solucoes/escritorios-de-advocacia` gerada. Como o script sincroniza conteúdo WordPress, revisar `git status` e não incluir alterações automáticas não relacionadas nos commits da feature.

- [ ] **Step 4: Iniciar ou reutilizar servidor local**

Run:

```powershell
npm run dev -- --port 3000
```

Expected: servidor acessível em `http://localhost:3000/solucoes/escritorios-de-advocacia`.

- [ ] **Step 5: Verificar desktop no navegador colaborativo**

Viewport: `1440 × 900`.

Confirmar:

- hero mostra imagem e nenhum mapa/tabela;
- selo aparece completo e legível;
- bento tem um bloco principal e três complementares;
- seção escura mostra seis provas e todos os logos sem corte;
- mapa de responsabilidades aparece depois da prova de capacidade;
- FAQ usa linhas, chevron circular e primeira resposta aberta;
- CTA e contatos permanecem completos.

- [ ] **Step 6: Verificar mobile no navegador colaborativo**

Viewport: `390 × 844`.

Confirmar:

- tag curta do hero aparece sem quebra indevida;
- imagem não cria rolagem horizontal;
- fluxo comercial e selo empilham sem texto truncado;
- cenários deixam de usar rowspan e seguem ordem 01–04;
- provas e logos cabem em uma coluna;
- resumos de responsabilidades aparecem antes das listas;
- perguntas do FAQ preservam área de toque de pelo menos 48 px;
- nenhuma seção repete o mesmo padrão de cartões da anterior.

- [ ] **Step 7: Verificar interação do FAQ e movimento reduzido**

Confirmar com cliques:

- primeira resposta começa aberta;
- abrir e fechar perguntas atualiza `aria-expanded`;
- conteúdo não desaparece com `prefers-reduced-motion: reduce`;
- links de contato e CTAs apontam para `/contato`, `mailto:` e WhatsApp corretos.

- [ ] **Step 8: Revisar diff e commit final de correções**

```powershell
git diff --check
git status --short
git diff -- src/components/legal-partners scripts/law-firm-lgpd-page.test.mjs
git add -- src/components/legal-partners/law-firm-lgpd-page.tsx src/components/legal-partners/law-firm-lgpd-content.ts src/components/legal-partners/co-delivery-map.tsx src/components/legal-partners/partner-portfolio-offer.tsx src/components/legal-partners/partner-capacity-section.tsx src/components/legal-partners/partner-faq-section.tsx scripts/law-firm-lgpd-page.test.mjs
git commit -m "fix: polish partner LGPD responsive experience"
```

Se não houver correções após a verificação, não criar commit vazio.

## Critérios de conclusão

- A oportunidade de portfólio e faturamento aparece antes da explicação operacional.
- “Adequação TOGETHER” e “Selo Escritório Parceiro TOGETHER” têm nomenclatura consistente.
- O hero contém imagem substituível e não contém tabela.
- A divisão de responsabilidades existe uma única vez em uma seção própria.
- Provas da home e plataformas estão concentradas na seção de capacidade.
- As seções de capacidades genéricas e portes de escritório foram removidas.
- O FAQ replica o padrão visual e interativo da home.
- Desktop e mobile não apresentam conteúdo invisível, truncamento ou rolagem horizontal.
- Testes, lint focado e build passam após a última alteração.
- Apenas arquivos explicitamente relacionados são incluídos nos commits.
