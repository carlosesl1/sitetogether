# Efeitos visuais nas seções de parceria LGPD

## Objetivo

Adicionar mais presença da identidade TOGETHER às seções **Papéis definidos**, **Capacidade sob demanda** e **Da oportunidade ao projeto**, reduzindo a sensação de uma sequência totalmente branca sem alterar copy, hierarquia ou conteúdo.

## Direção aprovada

Aplicar a direção **B — Três cenas, uma identidade**. Cada seção terá uma assinatura visual própria, mas todas reutilizarão o mesmo sistema: amarelo TOGETHER, preto neutro, halos suaves, PixelDecor, cantos arredondados e contraste controlado.

## Tratamento por seção

### Papéis definidos

- Manter a base branca para preservar a clareza da divisão de responsabilidades.
- Acrescentar um halo amarelo difuso no canto superior direito e PixelDecor com baixa opacidade.
- Reforçar visualmente a conexão entre escritório e TOGETHER com um eixo amarelo central.
- Preservar a leitura atual dos dois papéis e o resumo do resultado.

### Capacidade sob demanda

- Usar uma superfície amarelo-pálida, próxima de `brand-50`, em vez do cinza quase branco atual.
- Diferenciar os três modelos com acentos coordenados: branco, amarelo TOGETHER e neutro escuro.
- Manter os cartões arredondados e o comportamento responsivo de duas colunas no tablet e três no desktop.
- Usar contraste escuro apenas como destaque, sem transformar toda a seção em fundo preto.

### Da oportunidade ao projeto

- Transformar a linha do fluxo em uma trilha visual amarelo-pálida com eixo amarelo mais definido.
- Manter os três passos em cartões claros, diferenciando os nós e ícones por estado visual.
- No desktop, a trilha será horizontal; no mobile, vertical.
- Integrar o bloco de confidencialidade à cena com um fundo amarelo muito suave.

## Movimento e interação

- Reutilizar apenas o `fadeUp` já existente e os hovers atuais.
- Não adicionar animação infinita, parallax ou canvas.
- Os efeitos decorativos serão `pointer-events-none` e respeitarão `prefers-reduced-motion` por não dependerem de movimento.

## Responsividade e acessibilidade

- Conter halos, pixels e trilhas dentro de cada seção com `overflow-hidden`.
- Evitar larguras fixas que possam criar overflow em 320 px ou 378 px.
- Preservar contraste de texto e ícones conforme o fundo de cada cartão.
- Manter a ordem semântica, os títulos e o `aria-label` do fluxo.

## Escopo técnico

- Priorizar mudanças em `src/components/legal-partners/law-firm-lgpd-page.tsx`.
- Alterar `co-delivery-map.tsx` somente se o eixo entre papéis exigir um ponto de extensão local.
- Atualizar `scripts/law-firm-lgpd-page.test.mjs` com marcadores das novas assinaturas visuais.
- Não alterar conteúdo, metadados, contatos ou outras páginas.

## Verificação

- Executar o teste focado da landing page, ESLint e build de produção.
- Inspecionar a rota em 320 px, 378 px, 768 px e 1440 px.
- Confirmar ausência de overflow, legibilidade, contraste e comportamento reduzido de movimento.

## Rollback

As alterações visuais serão mantidas em um conjunto isolado de arquivos. Se o resultado não funcionar, o passe pode ser revertido sem remover a landing page, sua copy ou os ajustes responsivos já aprovados.
