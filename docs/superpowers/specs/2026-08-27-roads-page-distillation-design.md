# Gestão de Rodovias — Distilação da Landing Page

## Status

Direção aprovada em 27 de agosto de 2026 pela escolha “Enxugar e reorganizar a página — recomendado”. Este documento registra o recorte aplicado ao piloto setorial sem alterar seu posicionamento, identidade visual ou afirmações comerciais.

## Objetivo

Reduzir a extensão e a repetição da landing page de Gestão de Rodovias para que um visitante vindo do Google Ads compreenda rapidamente:

1. onde a privacidade aparece na operação rodoviária;
2. como a TOGETHER apoia o projeto e a rotina;
3. qual capacidade concreta está disponível;
4. como iniciar uma conversa.

O CTA principal continua sendo **Agende uma Conversa**.

## Princípios da edição

- Preservar a hero, a identidade TOGETHER e a linguagem específica do setor.
- Manter free flow como principal aprofundamento editorial.
- Exibir apenas um fluxo de trabalho, do projeto à operação.
- Não repetir privacy by design, método e operação contínua em seções independentes.
- Manter treinamentos, tecnologia, DPO, titulares, incidentes, fornecedores e atuação internacional, mas de forma compacta.
- Não sugerir experiência rodoviária ou case setorial inexistente.
- Preservar as âncoras usadas pelas campanhas.

## Arquitetura final

1. **Hero setorial** — mensagem e CTA atuais.
2. **Prova institucional** — indicadores da experiência geral da TOGETHER em privacidade, acompanhados por uma nota que distingue capacidade institucional de experiência setorial.
3. **Onde os dados circulam** — mapa operacional atual.
4. **Do projeto à operação** — único ciclo da página, incorporando contratação, privacy by design, implantação e rotina. Ao final, uma faixa curta apresenta os entregáveis da primeira fase.
5. **Free flow e pedágio digital** — aprofundamento setorial principal.
6. **Estrutura TOGETHER** — uma seção única reúne capacidades, operação contínua, treinamentos, tecnologia e CTA intermediário. A composição usa listas editoriais e divisórias em vez de uma sequência de cards iguais.
7. **Brasil e atuação internacional** — faixa editorial compacta, sem um segundo método de trabalho.
8. **FAQ** — conteúdo setorial e transparência sobre a inexistência de case.
9. **CTA final** — próximo passo e contato.

## Conteúdo removido ou consolidado

- A seção independente **Privacidade desde o projeto** é incorporada ao ciclo “Do projeto à operação”.
- A seção independente **Depois da implantação** é incorporada à Estrutura TOGETHER.
- **Treinamentos e workshops** passam a integrar a mesma seção de capacidade.
- **Como o trabalho começa** é removida porque repete o ciclo principal e o próximo passo do CTA.
- As oito capacidades são reduzidas para seis grupos claros, sem perder os serviços essenciais.
- As listas de públicos de treinamento são agrupadas por função para reduzir volume.

## Copy e confiança

A prova institucional deve usar a formulação:

> Indicadores da atuação da TOGETHER em privacidade. A aplicação ao setor rodoviário começa pelo entendimento da operação e não representa um case setorial já realizado.

O ciclo principal recebe a faixa **O que sai da primeira fase**, com quatro resultados suportados pelo escopo existente:

- mapa dos principais fluxos de dados;
- prioridades e plano de ação;
- fornecedores, acessos e controles críticos;
- responsáveis e próximos passos definidos.

Nenhum resultado, prazo, certificação ou cliente será inventado.

## Composição visual

- Preservar Plus Jakarta Sans, amarelo TOGETHER, preto, branco, pills e raios arredondados existentes.
- Substituir o mosaico de oito cards por uma lista editorial em duas colunas, com ícones pequenos e divisórias.
- Usar uma única superfície escura para capacidades, operação e treinamentos.
- Não criar grandes cards amarelos.
- Manter a faixa internacional clara e curta antes do FAQ.
- Elevar microtextos funcionais de 9–10px para pelo menos 11px nos componentes tocados.

## Responsividade

- O fluxo horizontal permanece vertical no mobile.
- A lista de capacidades usa uma coluna no mobile e duas no desktop.
- A faixa de entregáveis usa uma coluna no mobile, duas no tablet e quatro no desktop.
- CTAs permanecem full-width em telas pequenas.
- As âncoras `free-flow`, `privacy-by-design`, `fornecedores`, `dpo`, `incidentes` e `internacional` continuam apontando para conteúdo visível.
- A página não pode apresentar overflow horizontal entre 360px e 1440px.

## Critérios de aceite

- A página renderiza nove blocos principais, em vez de onze.
- Existe somente um fluxo de trabalho visível.
- Operação contínua, treinamentos e tecnologia permanecem presentes.
- A nota de experiência institucional aparece antes do contexto operacional.
- As seis âncoras de campanha continuam válidas.
- Testes, TypeScript, ESLint e export estático passam.
- A altura total e a contagem de palavras caem de forma mensurável, com meta de redução aproximada de 25% sem perda dos temas essenciais.
