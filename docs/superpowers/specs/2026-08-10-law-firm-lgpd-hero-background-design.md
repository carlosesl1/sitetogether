# Background do hero — Parceria LGPD

## Objetivo

Substituir a imagem quadrada atual por uma fotografia editorial que ocupe todo o hero da página de parceria LGPD. A imagem deve comunicar colaboração real entre um escritório de advocacia e uma especialista em privacidade, sem parecer fotografia corporativa genérica.

## Direção visual aprovada

- Fotografia editorial realista e sofisticada.
- Um advogado e uma especialista em privacidade trabalhando juntos em uma mesa.
- Interação natural: analisando documentos e um notebook, sem aperto de mãos ou pose para a câmera.
- Ambiente de escritório contemporâneo, claro e sóbrio.
- Pessoas e elementos principais concentrados na metade direita.
- Metade esquerda com espaço negativo suficiente para o título, os parágrafos e os CTAs.
- Paleta baseada em branco, cinza claro, preto e pequenos detalhes amarelos próximos ao amarelo da TOGETHER.
- Iluminação natural suave, contraste controlado e acabamento premium.
- Documentos, notebook e materiais de trabalho podem aparecer, mas sem texto legível, interfaces detalhadas ou marcas inventadas.
- Sem balança da justiça, martelo, aperto de mãos, hologramas, escudos flutuantes ou clichês visuais de cibersegurança.
- Sem logos ou texto gerado dentro da imagem.

## Composição

- Orientação horizontal ampla, preferencialmente 16:9.
- Enquadramento pensado para `cover` em desktop.
- Foco humano no terço direito.
- Área esquerda clara, visualmente calma e com pouca informação.
- Profundidade de campo discreta; o ambiente continua reconhecível.
- A cena deve sugerir parceria e trabalho aplicado, não atendimento comercial encenado.

## Prompt-base para o ChatGPT

> Usando obrigatoriamente a ferramenta selecionada “Criar imagem”, gere uma única imagem fotográfica realista em formato horizontal 16:9 para o background completo do hero de um site premium sobre parceria LGPD para escritórios de advocacia.
>
> Cena editorial sofisticada em um escritório contemporâneo, claro e sóbrio. Um advogado e uma especialista em privacidade trabalham juntos de forma natural em uma mesa, analisando documentos e um notebook. Eles não olham para a câmera e não apertam as mãos. A interação deve transmitir colaboração profissional, confiança, método e capacidade de execução.
>
> Concentre as duas pessoas, a mesa e os principais elementos na metade direita da imagem. Preserve a metade esquerda com bastante espaço negativo claro, calmo e uniforme para receber título, parágrafos e botões em preto. Use branco, cinza claro, preto e pequenos detalhes amarelos discretos próximos ao amarelo da marca TOGETHER. Iluminação natural suave, contraste controlado, fotografia editorial premium, aparência autêntica e contemporânea.
>
> Não inclua texto legível, logos, marcas, interface detalhada, balança da justiça, martelo, aperto de mãos, poses corporativas, hologramas, escudos flutuantes, cadeados gigantes ou clichês de cibersegurança. Não crie colagem, grade, mockup, SVG, código, canvas ou placeholder. Entregue uma imagem real gerada pela ferramenta Criar imagem.

## Critérios de aceitação da geração

- O ChatGPT exibe um card real de imagem gerada.
- A imagem é horizontal e adequada a um recorte largo.
- A metade esquerda permanece utilizável para a copy.
- A cena contém exatamente uma colaboração profissional, sem reunião lotada.
- Não há texto, logo ou anatomia visualmente problemática em áreas de destaque.
- O resultado combina com o branco, preto e amarelo já utilizados pela página.

## Integração no hero

- Salvar o ativo aprovado em `public/images/law-firm-lgpd-hero.webp`.
- A imagem será posicionada de forma absoluta atrás de todo o conteúdo do hero.
- O hero deixa de usar a grade de duas colunas e o contêiner quadrado atual.
- A copy permanece alinhada à esquerda dentro do mesmo `container` do site.
- Aplicar um gradiente branco da esquerda para a direita para preservar contraste e integrar a fotografia ao fundo da página.
- Adicionar um véu branco leve em toda a imagem, mais forte no mobile.
- Desktop: usar `object-position: center right` e altura ampla suficiente para mostrar a colaboração.
- Mobile: usar recorte deslocado para a direita, reduzir a presença das pessoas atrás da copy e aumentar o gradiente branco.
- O texto deve manter contraste AA e continuar legível quando a imagem ainda não tiver carregado.
- Manter o `priority` no `next/image`, `sizes="100vw"` e texto alternativo vazio, pois a fotografia é decorativa e a mensagem já existe na copy.

## Verificação

- Desktop em 1440 × 900: copy totalmente legível, pessoas visíveis à direita e ausência de contêiner quadrado.
- Mobile em 390 × 844: sem rolagem horizontal, CTAs legíveis e imagem funcionando como atmosfera, não como concorrência visual.
- Confirmar que o background não altera a altura do conteúdo nem encobre navegação, anúncio ou carrossel de clientes.
- Confirmar que o build estático inclui o novo ativo otimizado.
