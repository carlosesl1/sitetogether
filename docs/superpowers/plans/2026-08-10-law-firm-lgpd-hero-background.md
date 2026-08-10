# Law Firm LGPD Hero Background Implementation Plan

> **For agentic workers:** Execute directly by default. Use subagents only for independent bounded lanes that satisfy the global harness policy. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Gerar no ChatGPT uma fotografia editorial realista e aplicá-la como background integral e responsivo do hero da página de parceria LGPD.

**Architecture:** O ChatGPT web gera uma única imagem 16:9 com espaço negativo à esquerda. O ativo aprovado é convertido para WebP e salvo em `public/images`; o hero passa de uma grade com imagem lateral para uma composição full-bleed com `next/image`, gradientes de contraste e conteúdo em uma única coluna.

**Tech Stack:** ChatGPT web ImageGen, Chrome browser control, Next.js 16, `next/image`, Tailwind CSS 4, Sharp, Node Test Runner.

---

## Estrutura de arquivos

- Create: `public/images/law-firm-lgpd-hero.webp` — background final otimizado.
- Modify: `src/components/legal-partners/law-firm-lgpd-content.ts` — caminho e alt decorativo do ativo.
- Modify: `src/components/legal-partners/law-firm-lgpd-page.tsx` — hero full-bleed e overlays responsivos.
- Modify: `scripts/law-firm-lgpd-page.test.mjs` — contrato estrutural do novo hero.

## Task 1: Gerar e preparar o ativo no ChatGPT

**Files:**
- Create: `public/images/law-firm-lgpd-hero.webp`

- [ ] **Step 1: Conectar ao Chrome e inspecionar a conversa aberta**

Usar o controle do Chrome, localizar a aba já aberta em `chatgpt.com` e inspecionar a conversa atual sem recarregar ou navegar para outra conversa.

- [ ] **Step 2: Selecionar obrigatoriamente a ferramenta Criar imagem**

No composer da conversa:

1. Clicar em `Adicionar arquivos e mais` (`+`).
2. Clicar em `Criar imagem`.
3. Confirmar que o chip `Criar imagem` está visível no composer antes de inserir o prompt.

- [ ] **Step 3: Enviar o prompt aprovado**

```text
Usando OBRIGATORIAMENTE a ferramenta selecionada “Criar imagem”, gere uma única imagem fotográfica realista em formato horizontal 16:9 para o background completo do hero de um site premium sobre parceria LGPD para escritórios de advocacia.

Cena editorial sofisticada em um escritório contemporâneo, claro e sóbrio. Um advogado e uma especialista em privacidade trabalham juntos de forma natural em uma mesa, analisando documentos e um notebook. Eles não olham para a câmera e não apertam as mãos. A interação deve transmitir colaboração profissional, confiança, método e capacidade de execução.

Concentre as duas pessoas, a mesa e os principais elementos na metade direita da imagem. Preserve a metade esquerda com bastante espaço negativo claro, calmo e uniforme para receber título, parágrafos e botões em preto. Use branco, cinza claro, preto e pequenos detalhes amarelos discretos próximos ao amarelo da marca TOGETHER. Iluminação natural suave, contraste controlado, fotografia editorial premium, aparência autêntica e contemporânea.

Não inclua texto legível, logos, marcas, interface detalhada, balança da justiça, martelo, aperto de mãos, poses corporativas, hologramas, escudos flutuantes, cadeados gigantes ou clichês de cibersegurança. Não crie colagem, grade, mockup, SVG, código, canvas, ZIP ou placeholder. Entregue uma única imagem real gerada pela ferramenta Criar imagem.
```

- [ ] **Step 4: Validar a resposta**

Aceitar somente se a resposta finalizada contiver um card real `Imagem gerada`, com:

- orientação horizontal;
- duas pessoas colaborando na metade direita;
- espaço negativo claro à esquerda;
- ausência de texto, logos, aperto de mãos e clichês jurídicos;
- anatomia e objetos principais visualmente coerentes.

Se houver grade, código, ZIP ou arte não fotográfica, selecionar novamente `Criar imagem` e repetir o mesmo prompt com a frase final `FOTOGRAFIA REAL, UMA ÚNICA IMAGEM HORIZONTAL; GRADE OU COLAGEM NÃO CONTA`.

- [ ] **Step 5: Baixar a imagem aprovada**

Abrir o card aprovado e usar o controle de download do ChatGPT. Registrar o arquivo baixado mais recente como fonte da conversão sem alterar outros downloads do usuário.

- [ ] **Step 6: Converter a imagem para WebP**

Criar `public/images`, localizar somente o download de imagem mais recente dos últimos 15 minutos e executar:

```powershell
New-Item -ItemType Directory -Force -Path public/images | Out-Null
$downloadedImage = Get-ChildItem 'C:\Users\Carlos\Downloads' -File |
  Where-Object { $_.Extension -in '.png', '.jpg', '.jpeg', '.webp' } |
  Sort-Object LastWriteTime -Descending |
  Select-Object -First 1
if (-not $downloadedImage -or $downloadedImage.LastWriteTime -lt (Get-Date).AddMinutes(-15)) {
  throw 'Nenhum download recente de imagem do ChatGPT foi encontrado.'
}
node -e "const sharp=require('sharp'); sharp(process.argv[1]).resize(2400,1350,{fit:'cover',position:'centre'}).webp({quality:84}).toFile(process.argv[2])" $downloadedImage.FullName "public/images/law-firm-lgpd-hero.webp"
```

Expected: arquivo WebP de `2400 × 1350`, sem modificar o original baixado.

- [ ] **Step 7: Inspecionar o ativo local**

Abrir `public/images/law-firm-lgpd-hero.webp` e confirmar novamente enquadramento, espaço negativo, ausência de texto e qualidade do recorte após a conversão.

## Task 2: Definir o contrato do hero full-bleed

**Files:**
- Modify: `scripts/law-firm-lgpd-page.test.mjs`

- [ ] **Step 1: Substituir o teste da imagem lateral**

Trocar o teste `hero uses configurable media and no longer contains the responsibility map` por:

```js
test("hero uses a full-bleed decorative background", () => {
  const heroStart = pageSource.indexOf("content.hero");
  const heroEnd = pageSource.indexOf("</section>", heroStart);
  const heroSource = pageSource.slice(0, heroEnd);

  assert.match(contentSource, /\/images\/law-firm-lgpd-hero\.webp/);
  assert.match(heroSource, /content\.hero\.image/);
  assert.match(heroSource, /absolute inset-0/);
  assert.match(heroSource, /sizes="100vw"/);
  assert.match(heroSource, /alt=""/);
  assert.match(heroSource, /bg-gradient-to-r/);
  assert.match(heroSource, /object-\[68%_center\]/);
  assert.doesNotMatch(heroSource, /xl:grid-cols/);
  assert.doesNotMatch(heroSource, /<CoDeliveryMap/);
});
```

- [ ] **Step 2: Rodar o teste e confirmar a falha esperada**

Run:

```powershell
node --test --test-name-pattern="full-bleed decorative background" scripts/law-firm-lgpd-page.test.mjs
```

Expected: FAIL porque o hero ainda usa `/dpo_hub.png` e a grade de duas colunas.

## Task 3: Aplicar o background integral

**Files:**
- Modify: `src/components/legal-partners/law-firm-lgpd-content.ts`
- Modify: `src/components/legal-partners/law-firm-lgpd-page.tsx`
- Test: `scripts/law-firm-lgpd-page.test.mjs`

- [ ] **Step 1: Atualizar a configuração da imagem**

Em `law-firm-lgpd-content.ts`, usar:

```ts
image: {
  src: "/images/law-firm-lgpd-hero.webp",
},
```

- [ ] **Step 2: Substituir a estrutura de duas colunas do hero**

O hero deve iniciar com:

```tsx
<section className="relative isolate flex min-h-[760px] items-center overflow-hidden bg-white pb-24 pt-16 sm:min-h-[800px] sm:pt-24 md:pb-28 xl:min-h-[840px]">
  <div className="absolute inset-0 -z-20">
    <Image
      src={content.hero.image.src}
      alt=""
      fill
      priority
      sizes="100vw"
      className="object-cover object-[68%_center] sm:object-[72%_center] lg:object-right"
    />
  </div>
  <div className="absolute inset-0 -z-10 bg-white/55 sm:bg-white/35" />
  <div className="absolute inset-0 -z-10 bg-gradient-to-r from-white via-white/95 to-white/35 sm:via-white/90 sm:to-white/15 lg:via-white/80 lg:to-transparent" />
  <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-white to-transparent" />
  <PixelDecor placement="topRight" mask="topRight" opacity={0.12} />

  <div className="container relative z-10 mx-auto px-4 md:px-6">
    <div className="max-w-3xl">
      <motion.div {...fadeUp} className="mb-5 sm:mb-8">
        <SectionPill>
          <span className="sm:hidden">{content.hero.pillShort}</span>
          <span className="hidden sm:inline">{content.hero.pill}</span>
        </SectionPill>
      </motion.div>
      <motion.h1
        {...fadeUp}
        className="max-w-4xl text-[2.55rem] font-bold leading-[0.98] tracking-tight text-neutral-900 sm:text-5xl md:text-6xl xl:text-[4rem]"
      >
        {content.hero.title}{" "}
        <span className="font-light italic text-brand-500">
          {content.hero.accent}
        </span>
      </motion.h1>
      <motion.div
        {...fadeUp}
        className="mt-7 max-w-2xl space-y-4 text-base font-medium leading-relaxed text-neutral-600 sm:text-lg md:text-xl"
      >
        {content.hero.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </motion.div>
      <motion.div
        {...fadeUp}
        className="mt-6 grid max-w-2xl gap-3 sm:grid-cols-2 sm:gap-4"
      >
        <ActionLink
          href={content.hero.primary.href}
          size="xl"
          className="min-h-14 w-full min-w-0 sm:min-h-16 sm:whitespace-normal"
        >
          {content.hero.primary.label}
        </ActionLink>
        <ActionLink
          href={content.hero.secondary.href}
          variant="dark"
          size="xl"
          className="min-h-14 w-full min-w-0 sm:min-h-16 sm:whitespace-normal"
        >
          {content.hero.secondary.label}
        </ActionLink>
      </motion.div>
    </div>
  </div>
</section>
```

Mover o conteúdo já existente para o `div.max-w-3xl` e remover integralmente o antigo `motion.div` que continha a imagem lateral. Não alterar copy, CTAs, animação `fadeUp` ou a ordem das seções seguintes.

- [ ] **Step 3: Rodar os testes focados**

Run:

```powershell
node --test scripts/law-firm-lgpd-page.test.mjs
```

Expected: 24 testes aprovados.

- [ ] **Step 4: Rodar lint focado**

Run:

```powershell
npx eslint src/components/legal-partners/law-firm-lgpd-page.tsx src/components/legal-partners/law-firm-lgpd-content.ts scripts/law-firm-lgpd-page.test.mjs
```

Expected: exit code 0.

## Task 4: Verificar o resultado final

**Files:**
- Verify: `public/images/law-firm-lgpd-hero.webp`
- Verify: `src/components/legal-partners/law-firm-lgpd-page.tsx`

- [ ] **Step 1: Gerar o build estático**

Run:

```powershell
npm run build
```

Expected: build concluído e rota `/solucoes/escritorios-de-advocacia` gerada.

- [ ] **Step 2: Verificar desktop**

Viewport: `1440 × 900`.

Confirmar:

- fotografia ocupa toda a área do hero;
- não existe contêiner quadrado à direita;
- duas pessoas continuam reconhecíveis à direita;
- copy e CTAs têm contraste suficiente;
- transição para o carrossel de clientes permanece limpa;
- largura do documento é igual à viewport.

- [ ] **Step 3: Verificar mobile**

Viewport: `390 × 844`.

Confirmar:

- a imagem funciona como atmosfera atrás da copy;
- título, parágrafos e CTAs permanecem legíveis;
- o rosto das pessoas não fica posicionado diretamente atrás do título;
- não há rolagem horizontal;
- o hero não cria altura vazia excessiva.

- [ ] **Step 4: Revisar e registrar somente os arquivos da feature**

```powershell
git diff --check
git add -- public/images/law-firm-lgpd-hero.webp src/components/legal-partners/law-firm-lgpd-content.ts src/components/legal-partners/law-firm-lgpd-page.tsx scripts/law-firm-lgpd-page.test.mjs
git diff --cached --check
git commit -m "feat: add full-bleed partner hero background"
```

Não incluir arquivos gerados pelo sincronismo WordPress nem alterações não relacionadas do workspace.
