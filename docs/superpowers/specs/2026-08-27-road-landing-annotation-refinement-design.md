# Refinamento da landing page de gestão de rodovias

## Objetivo

Aplicar os cinco ajustes anotados na página `/solucoes/privacidade-gestao-de-rodovias` sem redesenhar a landing page inteira. O refinamento deve tornar a jornada mais compreensível, melhorar a apresentação de treinamentos, ilustrar a atuação internacional e fortalecer a conversão no CTA final.

## Direção visual

A página deve transmitir infraestrutura regulada com precisão operacional. O sistema atual da TOGETHER será preservado: Plus Jakarta Sans, superfícies brancas e grafite, cantos entre 24 e 32 pixels, linhas discretas e amarelo `#FFD637` apenas em pontos de atenção.

A assinatura nova será uma ilustração transparente que conecte infraestrutura rodoviária e circulação internacional de dados. Ela deve acrescentar contexto sem competir com o texto.

Tokens que permanecem como referência:

- Amarelo de marca: `#FFD637`, para ícones e pequenos destaques.
- Grafite principal: `#0A0A0A`, para seções de autoridade.
- Texto principal: `#212529`.
- Superfície neutra: aproximadamente `#F5F5F3`.
- Branco: `#FFFFFF`.

Não serão introduzidos grandes cards amarelos, uma nova família tipográfica ou uma linguagem visual paralela.

## Alterações aprovadas

### 1. Jornada do projeto

Os cinco marcadores geométricos serão substituídos por ícones semânticos da biblioteca Lucide já usada no projeto:

- Viabilidade: `Search`.
- Contratação: `FileSignature`.
- Implantação: `Settings2`.
- Entrada em operação: `BadgeCheck`.
- Rotina: `RefreshCw`.

Os ícones ficarão em recipientes brancos arredondados, com borda discreta, traço grafite e um pequeno quadrado amarelo no canto inferior direito. A linha que conecta as etapas continuará indicando sequência. Não haverá numeração decorativa.

### 2. Remoção do bloco redundante

O bloco “O que sai da primeira fase” será removido integralmente, incluindo título, lista e espaçamento associado. Os dados não utilizados também serão retirados do conteúdo tipado para evitar uma segunda narrativa de entregáveis logo após a jornada.

### 3. Treinamentos e workshops

A coluna simples de texto e linhas será transformada em um módulo de capacitação dentro da seção escura:

- Cabeçalho com ícone `GraduationCap`, tag, título e descrição.
- Quatro públicos organizados em uma grade compacta de duas colunas no desktop.
- Uma coluna em telas pequenas.
- Fundo grafite levemente elevado, borda branca translúcida e cantos arredondados.
- Amarelo restrito ao ícone e aos pequenos marcadores.

O módulo continuará ao lado da rotina operacional, mas passará a parecer uma oferta estruturada, não uma lista complementar.

### 4. Atuação internacional

A seção será reorganizada em duas áreas: conteúdo textual e ilustração. No desktop, o texto ficará à esquerda e a imagem à direita; no mobile, a imagem aparecerá abaixo do texto.

O novo ativo será salvo em `public/images/industries/roads/international-data-routes.png`, como PNG quadrado de 1254 × 1254 pixels com transparência real. Direção do ativo:

- Globo ou hemisfério reconhecível.
- Rodovia, ponte ou túnel integrados à composição.
- Rotas de dados atravessando fronteiras.
- Acabamento editorial técnico, com preto, grafite, branco e amarelo TOGETHER.
- Sem texto, logotipo, interface, mapa político detalhado ou marca d’água.
- Silhueta limpa para funcionar sobre a superfície neutra da seção.

A imagem será carregada com o componente de mídia já usado pelo projeto, terá dimensões reservadas para evitar deslocamento de layout e texto alternativo útil.

### 5. CTA final

O card lateral será ampliado para seguir o padrão das páginas mais completas do site. Ele conterá:

- Título “Contato” e uma frase curta de orientação.
- Botão principal “Agende uma Conversa”.
- Próximo passo da conversa inicial.
- Dois links de WhatsApp: `(11) 5178-3235` e `(11) 92642-0123`.
- Link de e-mail: `contato@togetherprivacy.com`.

Os canais terão ícones Lucide, estados de foco visíveis, alvos de toque adequados e quebra segura de texto. O card será branco opaco para manter contraste sobre o fundo amarelo.

## Responsividade

- A jornada continuará em cinco colunas apenas quando houver largura suficiente; nos demais viewports, as etapas serão empilhadas sem sobreposição.
- O módulo de treinamentos mudará de duas para uma coluna no mobile.
- A ilustração internacional terá largura máxima controlada e nunca causará rolagem horizontal.
- O CTA final ficará em uma coluna no mobile, com botão e canais ocupando toda a largura disponível.
- Títulos, contatos e CTAs deverão permanecer contidos a partir de 320 pixels.

## Interação e acessibilidade

Não será adicionada uma nova família de animações. Permanecem apenas as transições já usadas pelo site. Ícones decorativos serão ocultados de tecnologias assistivas; links de contato terão nomes acessíveis e foco visível. A ilustração não substituirá nenhuma informação textual necessária.

## Verificação

Antes da entrega:

1. Criar testes de regressão para os ícones semânticos, a remoção do bloco, o ativo internacional e os canais de contato.
2. Executar o teste focado da página.
3. Executar a suíte completa, TypeScript e build estático.
4. Restaurar somente os arquivos gerados pelo build que não pertencem ao escopo.
5. Conferir a página no navegador em desktop, tablet e mobile, incluindo contenção de texto, foco, contraste e ausência de rolagem horizontal.

## Fora do escopo

- Alterar hero, FAQ, prova de capacidade ou copy principal.
- Modificar a home ou a landing page para escritórios de advocacia.
- Publicar em produção sem uma solicitação explícita.
