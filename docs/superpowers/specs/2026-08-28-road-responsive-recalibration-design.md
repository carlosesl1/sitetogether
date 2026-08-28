# Recalibração responsiva da página de Gestão de Rodovias

## Objetivo

Melhorar leitura, densidade e distribuição dos componentes entre 320px e 1920px sem alterar a identidade visual aprovada da TOGETHER nem a composição consolidada do desktop.

## Direção aprovada

- Manter cores, imagens, cantos arredondados, grid decorativo e narrativa visual atuais.
- Tornar o CTA principal da hero amarelo, usando a variante primária já existente nos demais botões.
- Remover a observação textual abaixo dos quatro indicadores institucionais.
- Reduzir títulos e espaçamentos verticais em telas pequenas.
- Evitar divisões em duas colunas antes de haver largura útil para leitura confortável.
- Criar estágios intermediários para grades densas em tablets e notebooks menores.
- Preservar a composição atual a partir dos desktops largos.

## Comportamento por faixa

### 320px a 479px

- Títulos de seção entre aproximadamente 32px e 43px, conforme a função na hierarquia.
- Seções com respiro menor, sem comprometer a separação entre narrativas.
- Botões em largura total e sem corte de texto.
- Microtextos com mínimo visual de 11px.
- Controles interativos com pelo menos 44px de altura.

### 480px a 767px

- Manter fluxo em uma coluna.
- Escalonar títulos e paddings gradualmente, evitando saltos abruptos.
- Preservar cards e imagens sem compressão lateral.

### 768px a 1023px

- Evitar o split prematuro das seções de contexto e Free Flow.
- Manter conteúdo em uma coluna quando a divisão reduzir excessivamente a largura dos títulos.
- Reduzir o padding vertical que atualmente cresce antes das mudanças de layout.

### 1024px a 1279px

- Ciclo do projeto em três colunas, passando para cinco apenas em telas maiores.
- Grade de capacidades em uma coluna dentro do split externo.
- Público dos treinamentos em uma coluna dentro do card lateral.
- Linha conectora do ciclo apenas quando os cinco estágios estiverem na mesma linha.

### 1280px a 1920px

- Preservar a composição desktop aprovada.
- Manter as grades completas e os alinhamentos atuais.

## Acessibilidade e legibilidade

- Seletor de idioma com altura mínima de 44px.
- Perguntas do FAQ com entrelinha explícita de 1.3.
- Pills e rótulos de contato com tamanho mínimo de 11px.
- Nenhum texto, botão, card ou imagem pode gerar overflow horizontal.

## Critérios de aceite

1. CTA da hero aparece amarelo e conserva o mesmo destino e rastreamento.
2. A observação abaixo dos indicadores não é renderizada.
3. Não há overflow horizontal em 320, 390, 768, 1024, 1440 e 1920px.
4. Seções de contexto e Free Flow permanecem em uma coluna no tablet.
5. O ciclo usa três colunas em 1024px e cinco em 1280px ou mais.
6. A composição desktop permanece visualmente equivalente à versão aprovada.
7. FAQ, seletor de idioma e microtextos atendem aos ajustes de legibilidade definidos.
