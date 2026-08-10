# Refinamento visual dos blocos da página de parceria LGPD

## Objetivo

Alinhar os blocos destacados da página para escritórios de advocacia ao vocabulário visual já usado na home da TOGETHER. O refinamento deve remover a aparência de tabela rígida, preservar a narrativa e manter o fundo escuro da seção de capacidade.

## Direção aprovada

A página continuará institucional, técnica e B2B. A composição será uma evolução do design existente, com mais agrupamento, cantos arredondados, profundidade sutil e hierarquia entre informações. Não serão criados novos efeitos, cores, padrões tipográficos ou sistemas de componentes paralelos.

## Referências internas

Os novos arranjos devem reutilizar estes padrões da home:

- `Offers`: containers externos arredondados, divisores internos discretos e sombra suave.
- `TechIntegration`: módulos escuros arredondados para indicadores e plataformas.
- `Methodology`: tiles arredondados para ícones e hierarquia clara entre rótulo, título e descrição.
- `SectionPill`, `PixelDecor` e tokens `brand-*` existentes: manter sem variações locais.

## Alterações por bloco

### Hero

- Manter imagem, overlays, conteúdo e responsividade atuais.
- Manter `40.8px` no mobile.
- Usar `56px` a partir do breakpoint `sm`, sem voltar aos `64px` anteriores.

### Faixa de benefícios

- Substituir a moldura retangular rígida por um container único com raio equivalente aos módulos da home.
- Representar cada número em um marcador circular amarelo.
- Usar divisores internos discretos somente em desktop; no mobile, empilhar os itens com separação por espaço e fundo.
- Preservar exatamente os quatro benefícios e a ordem atual.

### Capacidade TOGETHER

- Preservar o fundo escuro, a introdução e os elementos de marca.
- Trocar a grade tabular por um bento arredondado com espaçamento entre módulos.
- Dar maior escala visual a `+200` e `+5 anos`.
- Exibir os quatro indicadores complementares em módulos menores, com tiles de ícones do mesmo repertório usado na home.
- Manter contraste AA e evitar bordas contínuas que reconstruam uma tabela.

### Plataformas de privacidade

- Reutilizar o tratamento visual de `TechIntegration`: cards arredondados, fundo `neutral-900/40`, borda branca discreta e hover amarelo sutil.
- Manter os sete logos e seus textos alternativos.
- Usar distribuição flexível e responsiva, sem forçar sete células retangulares iguais.

### Modelos de parceria

- Agrupar os três modelos em um container externo arredondado semelhante ao bloco principal de `Offers`.
- Usar um tile de ícone, rótulo numerado, título e descrição em cada painel.
- Aplicar divisores internos leves no desktop e empilhamento no mobile.
- Não destacar um modelo como recomendado, pois os três representam necessidades diferentes e equivalentes.

## Responsividade e acessibilidade

- Nenhum conteúdo pode provocar overflow horizontal em `390px`.
- Os módulos devem empilhar sem perder ordem ou hierarquia.
- Textos, logos e ícones devem permanecer legíveis nos dois temas de seção.
- Hover deve ser complementar; toda informação precisa estar disponível sem ponteiro.
- A implementação deve manter a preferência de movimento reduzido já aplicada à página.

## Escopo técnico

Arquivos previstos:

- `src/components/legal-partners/law-firm-lgpd-page.tsx`
- `src/components/legal-partners/partner-portfolio-offer.tsx`
- `src/components/legal-partners/partner-capacity-section.tsx`
- `scripts/law-firm-lgpd-page.test.mjs`

O conteúdo comercial, a rota, o FAQ, a imagem do hero, a navegação e as demais seções ficam fora deste refinamento.

## Verificação

- Teste focado da página de parceria.
- ESLint dos arquivos alterados.
- Build estático completo.
- Inspeção visual em `1440x900` e `390x844`.
- Verificação de `scrollWidth === innerWidth` nos dois tamanhos.

