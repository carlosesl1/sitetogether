# Hierarquia textual da CTA final de Gestão de Rodovias

## Objetivo

Reorganizar o bloco textual esquerdo da CTA final para que tag, título e descrição funcionem como uma única unidade visual, eliminando o grande vazio vertical exibido entre a tag e o título.

## Estrutura aprovada

- Mover a `SectionPill` para dentro da coluna esquerda do grid.
- Alinhar verticalmente a coluna textual ao centro do card de contato.
- Manter a ordem: tag, título e descrição.
- Usar 24px entre tag e título e 24px entre título e descrição.
- Limitar a descrição a aproximadamente 520px.
- Limitar o título a 64px no desktop, preservando a escala responsiva atual em telas menores.

## Elementos preservados

- Copy atual da tag, do título e da descrição.
- Fundo amarelo, grid decorativo e brilho branco da seção.
- Conteúdo, dimensões e interações do card de contato.
- CTA, próximo passo, telefones, e-mail, foco de teclado e links.

## Responsividade

- No mobile, o bloco textual permanece acima do card de contato e mantém a leitura natural.
- No desktop, o bloco textual fica centralizado verticalmente em relação ao card.
- O título deve continuar quebrando sem overflow e sem palavras cortadas.
- A mudança não deve criar deslocamento horizontal em nenhum viewport.

## Critérios de aceite

1. A tag não aparece mais isolada no topo da seção.
2. Tag, título e descrição formam um bloco compacto e claramente relacionado.
3. O título não ultrapassa 64px no desktop.
4. O card de contato permanece visual e funcionalmente inalterado.
5. A seção continua utilizável em desktop, tablet e mobile sem overflow horizontal.
