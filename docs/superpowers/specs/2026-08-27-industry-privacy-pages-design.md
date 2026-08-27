# Páginas setoriais de privacidade da TOGETHER

## Status

Design aprovado em 27 de agosto de 2026. Esta especificação consolida a família de seis páginas e detalha o piloto de Gestão de Rodovias. A implementação começa somente após a revisão e aprovação deste documento.

## Objetivo

Criar uma família de landing pages que mostre como a TOGETHER incorpora privacidade à operação de setores específicos. As páginas devem funcionar para Google Ads, SEO e navegação institucional, com uma narrativa própria por setor e uma arquitetura compartilhada.

A primeira página será o piloto de Gestão de Rodovias. Depois de validar conteúdo, responsividade e o funcionamento da conversão nessa rota, o mesmo sistema será aplicado a:

1. Transporte fracionado.
2. Transporte de lotação.
3. Escolas particulares.
4. Ensino superior.
5. SaaS.

## Resultado esperado

- O visitante reconhece sua operação antes de encontrar a lista de serviços.
- A atuação da TOGETHER aparece como capacidade prática para estruturar, implantar e manter privacidade, não como uma consultoria jurídica genérica.
- A página converte para uma conversa comercial por meio do CTA exato **Agende uma Conversa**.
- Cada rota responde a uma intenção de busca própria sem duplicar mecanicamente a mesma página.
- O conjunto continua visualmente reconhecível como TOGETHER.

## Escopo das rotas

| Setor | Slug canônico | Intenção principal |
| --- | --- | --- |
| Gestão de rodovias | `/solucoes/privacidade-gestao-de-rodovias` | Privacidade e LGPD para concessionárias e operadoras rodoviárias |
| Transporte fracionado | `/solucoes/privacidade-transporte-fracionado` | LGPD na operação de cargas fracionadas |
| Transporte de lotação | `/solucoes/privacidade-transporte-lotacao` | LGPD em transportadoras de carga lotação |
| Escolas particulares | `/solucoes/privacidade-escolas-particulares` | LGPD para escolas privadas |
| Ensino superior | `/solucoes/privacidade-ensino-superior` | LGPD para faculdades e instituições de ensino superior |
| SaaS | `/solucoes/privacidade-saas` | Privacidade e LGPD para empresas de software como serviço |

Os slugs serão canônicos e não devem depender de parâmetros de campanha. UTMs e a âncora de entrada serão preservadas apenas para atribuição e navegação.

## Público e contexto de compra

### Piloto: Gestão de Rodovias

Público primário:

- Concessionárias rodoviárias.
- Operadoras de infraestrutura e pedágio digital.
- Lideranças de privacidade, jurídico, tecnologia, segurança, riscos e compliance.
- Responsáveis por projetos, engenharia, CCO, fornecedores e operação.

Contexto geográfico:

- Operações no Brasil.
- Empresas brasileiras com atuação ou fornecedores internacionais.
- Referências a GDPR e outras regras somente quando o fluxo real justificar a análise.

### Decisão comercial

A página deve responder quatro perguntas em sequência:

1. **Essa página entende minha operação?**
2. **Onde a privacidade entra no ciclo do ativo?**
3. **A TOGETHER tem estrutura para executar?**
4. **Qual é o próximo passo?**

## Posicionamento

### Origem editorial

A copy-base do piloto foi produzida com o agente DOUG.EXE 8.0 durante este processo de design. As adaptações desta especificação reduzem blocos extensos, eliminam repetição e alinham a apresentação à linguagem da TOGETHER, sem mudar o posicionamento central nem adicionar alegações não suportadas.

### Mensagem central do piloto

> Privacidade incorporada à operação rodoviária, do projeto ao free flow.

A TOGETHER apoia a organização de processos, tecnologia, fornecedores, pessoas e evidências ao longo do ciclo da operação. O discurso deve conectar privacidade à viabilidade, contratação, implantação, comissionamento e rotina do ativo.

### Limite de credibilidade

A TOGETHER ainda não possui experiência setorial ou case público específico em gestão de rodovias. A página não pode sugerir o contrário.

A comunicação deve:

- Demonstrar experiência comprovável em privacidade, tecnologia e operação.
- Explicar como a metodologia se aplica ao contexto rodoviário.
- Usar entregáveis concretos como prova de capacidade.
- Responder diretamente à ausência de case setorial caso a pergunta apareça no FAQ ou na conversa comercial.

A comunicação não deve:

- Alegar experiência com concessionárias, free flow, pontes ou túneis sem prova.
- Prometer aprovação regulatória, financiamento, conformidade total ou ausência de incidentes.
- Usar expressões como “aprovado pela ANPD”, “certificado GDPR” ou “garantia de adequação”.
- Apresentar atuação internacional como domínio jurídico universal.
- Tratar toda imagem de placa ou vídeo como dado biométrico.

## Oferta da TOGETHER

Cada página pode combinar, conforme o setor e o escopo:

- Diagnóstico e plano de adequação.
- Inventário e mapeamento de dados.
- Processos, políticas, controles e evidências.
- Privacy by design em projetos, sistemas e fornecedores.
- Tecnologia e plataformas de privacidade.
- DPO e atendimento a titulares.
- Preparação e resposta a incidentes.
- Governança de terceiros e transferências internacionais.
- Treinamentos, workshops e continuidade operacional.

As listas nunca devem ser a primeira explicação da página. Primeiro aparece a operação do setor; depois, as capacidades correspondentes.

## Arquitetura narrativa compartilhada

O shell setorial terá blocos opcionais. A ordem-base é compartilhada, mas layouts e ênfases variam para evitar repetição visual.

1. Hero setorial full-bleed.
2. Prova institucional curta.
3. Contexto operacional do setor.
4. Mapa de dados, atores ou jornadas.
5. Ciclo do ativo ou momentos de risco.
6. Capacidades da TOGETHER ligadas ao contexto.
7. Bloco editorial de aprofundamento setorial.
8. Treinamentos e operação contínua.
9. Prova de capacidade TOGETHER.
10. Método de trabalho.
11. FAQ com a linguagem visual da home e conteúdo setorial configurável.
12. CTA final.

Uma página não precisa renderizar todos os blocos. O conteúdo determina a composição, e não o contrário.

## Piloto: conteúdo e composição de Gestão de Rodovias

### 1. Hero

**Tag:** Privacidade para gestão de rodovias

**H1:** Privacidade incorporada à operação rodoviária, do projeto ao free flow.

**Texto de apoio:** A TOGETHER estrutura privacidade ao longo do ciclo da operação — projetos, sistemas, pórticos, fornecedores, equipes e atendimento — com processos, tecnologia e evidências adequados ao contexto da organização.

**CTA:** Agende uma Conversa

Tratamento visual:

- Imagem ocupa toda a seção, sem moldura ou card.
- Versão desktop mantém aproximadamente 58% da área esquerda calma para a copy e concentra rodovia, pórtico e operação à direita.
- Versão mobile usa uma composição vertical própria, com área segura na parte superior e a infraestrutura na parte inferior.
- A imagem é editorial e fotográfica, sem texto, logos, dashboards inventados ou interface falsa.
- A copy deve manter contraste por meio de overlay localizado, nunca por um grande retângulo opaco.

Assets aprovados no estudo visual:

- `roads-hero-desktop-v2.png`
- `roads-hero-mobile-v2.png`

Na implementação, os arquivos serão movidos e derivados para:

- `public/images/industries/roads/hero-desktop.avif`
- `public/images/industries/roads/hero-desktop.webp`
- `public/images/industries/roads/hero-desktop.png`
- `public/images/industries/roads/hero-mobile.avif`
- `public/images/industries/roads/hero-mobile.webp`
- `public/images/industries/roads/hero-mobile.png`

Contrato do asset:

- Fonte desktop: 1717 × 916 px.
- Fonte mobile: 941 × 1672 px.
- Art direction troca para o asset mobile em `max-width: 767px`; a partir de 768 px usa o desktop.
- Renderização estática por `<picture>` e `<source>` com AVIF, WebP e PNG de fallback; não depender da otimização do Next.js, que está desabilitada no export estático.
- Os elementos declaram dimensões intrínsecas e o container mantém proporção ou altura mínima por breakpoint para impedir layout shift.
- Meta de peso: AVIF desktop até 350 KB, WebP desktop até 500 KB, AVIF mobile até 250 KB e WebP mobile até 350 KB. O PNG é apenas fallback e não deve ser a primeira fonte servida.
- O asset continua decorativo, usa `alt=""` e não recebe texto incorporado.

### 2. Prova institucional

Criar um `IndustryProofStrip` com a linguagem de superfície, ritmo e transição da `AuthorityStrip`, mas sem reutilizar seu marquee de logos. O componente comunica, de forma curta:

- +5 anos de atuação em privacidade e LGPD.
- +200 atividades e entregáveis no catálogo de serviços.
- Equipe multidisciplinar.
- Experiência prática com plataformas e ferramentas de privacidade.

Esses dados são institucionais e não podem ser apresentados como experiência rodoviária.

Fontes de verdade atuais:

- `src/components/legal-partners/law-firm-lgpd-content.ts` para `+5 anos` e `+200`.
- `src/components/ui/proposal-comparison.tsx` como segunda ocorrência pública dos mesmos indicadores.

Antes da publicação, Marketing/Comercial da TOGETHER deve reconfirmar os números. Logos de clientes não entram nesse strip, pois poderiam sugerir prova setorial rodoviária.

### 3. Onde a privacidade cruza a operação

Apresentar a operação antes da solução, conectando:

- Usuários, contas, placas, TAGs e meios de pagamento.
- Colaboradores, terceiros, fornecedores e subcontratados.
- Pórticos, CCO, câmeras, OCR/ANPR, sensores e logs.
- Aplicativos, portais, atendimento, contestação e titulares.
- Nuvem, suporte remoto e transferências internacionais quando aplicáveis.

Composição recomendada: diagrama editorial ou mapa de fluxos, e não uma sequência de cards iguais.

### 4. Do projeto à operação

Mostrar privacidade como disciplina transversal ao ciclo:

- Viabilidade e desenho do projeto.
- Contratação e requisitos de fornecedores.
- Construção, integração e comissionamento.
- Go-live de sistemas e pedágio digital.
- Operação, manutenção e evolução.

No desktop, o ciclo pode ser uma trilha horizontal. No mobile, torna-se sequência vertical. Nenhuma etapa terá altura fixa.

### 5. Free flow e identificação automática

Explicar de forma prática que a operação pode exigir:

- Definição de finalidade e papéis entre os agentes.
- Transparência e avisos adequados.
- Perfis de acesso, logs e rastreabilidade.
- Regras de retenção compatíveis com obrigações aplicáveis.
- Tratamento de erros, contestações e solicitações de titulares.
- Governança de imagens, placas, pagamentos e integrações.

O texto não deve confundir OCR de placa com reconhecimento facial nem sugerir que toda imagem é biometria.

### 6. Capacidade TOGETHER

Transformar as capacidades em uma composição editorial variada:

- Diagnóstico e priorização.
- Mapeamento de dados e agentes.
- Privacy by design.
- Governança de fornecedores.
- Processos, controles e evidências.
- Tecnologia de privacidade.
- DPO e titulares.
- Incidentes e continuidade.

Usar mosaico com cards de tamanhos diferentes, um bloco preto de contraste e pequenos cards amarelos para destaques pontuais. Não usar um grande card amarelo como superfície dominante.

Logo depois desse mosaico entra o CTA intermediário **Agende uma Conversa**, em uma faixa compacta neutra ou preta. Ele não cria uma seção amarela adicional.

### 7. Privacidade desde o projeto

Mensagem principal: integrar requisitos de privacidade no desenho, contratação e comissionamento reduz retrabalho posterior.

O bloco deve falar com projeto, engenharia, tecnologia, compras e jurídico, incluindo:

- Requisitos de dados em RFPs e contratos.
- Avaliação de fornecedores e subprocessadores.
- Revisão de arquitetura e acessos.
- Testes de controles antes do go-live.
- Organização das evidências de decisão.

Tratamento visual: seção de leitura editorial com apoio de imagem, esquema ou trilha; não repetir a grade da seção anterior.

### 8. Operação contínua

Conectar DPO, titulares, incidentes e evolução do programa à rotina da concessionária:

- Canal e registro de solicitações.
- Matriz de escalonamento.
- Runbook e preservação de evidências.
- Exercícios e simulações.
- Revisões periódicas de fornecedores, acessos e retenção.
- Acompanhamento de planos de ação.

### 9. Treinamentos e workshops

Apresentar formatos ligados às funções reais:

- Engenharia e projetos.
- Operação de pórticos e CCO.
- Tecnologia e segurança.
- RH, compras e gestão de fornecedores.
- Atendimento e resposta a incidentes.
- Lideranças e responsáveis pelo programa.

O benefício é preparar as equipes para executar suas responsabilidades e produzir evidências de participação e conclusão.

### 10. Brasil e atuação internacional

Mostrar capacidade de analisar operações que envolvam LGPD, GDPR, fornecedores internacionais, nuvem e suporte estrangeiro. O GDPR aparece apenas quando houver oferta de bens ou serviços a pessoas na União Europeia, monitoramento relevante ou transferência abrangida. Toda conclusão depende do contrato, das pessoas afetadas, da localização e do fluxo real dos dados.

PDPL e outras legislações estrangeiras não entram na copy do piloto sem jurisdição, fluxo e fonte oficial definidos.

### 11. Método de trabalho

Apresentar um fluxo curto, sem repetição numérica decorativa excessiva:

- Entender a operação e a prioridade.
- Definir escopo, entregáveis e responsáveis.
- Implantar, acompanhar e registrar evidências.
- Transferir conhecimento e sustentar a continuidade.

O bloco deve deixar claro que a TOGETHER pode entrar em um projeto específico ou acompanhar a operação continuamente.

### 12. FAQ

Criar um `IndustryFaqSection` configurável. Ele reutiliza a composição visual do FAQ atual da home — título editorial à esquerda e accordion arredondado à direita no desktop; uma única coluna no mobile — mas não reutiliza as perguntas nem o CTA lateral hardcoded da home.

Esta seção não adiciona um quarto CTA. Cada pergunta é um `<button>` nativo com `aria-expanded` e `aria-controls`; cada resposta tem `id` estável, associação com a pergunta e região identificável. O estado visual de foco deve ser visível e o comportamento deve funcionar por teclado. Uma pergunta pode iniciar aberta, desde que o estado ARIA corresponda ao conteúdo exibido.

Perguntas mínimas:

1. Onde a LGPD aparece na operação de uma rodovia?
2. Como a TOGETHER apoia projetos de free flow e pedágio digital?
3. A atuação pode começar ainda na fase de projeto ou contratação?
4. A TOGETHER pode apoiar DPO, titulares e incidentes depois do go-live?
5. Como são tratados fornecedores e transferências internacionais?
6. A TOGETHER já possui um case específico no setor rodoviário?

Resposta recomendada para a sexta pergunta:

> Ainda não temos experiência nem case específico no setor rodoviário. Nossa experiência está na estruturação e operação de programas de privacidade, processos, tecnologia e evidências. Aplicamos essa metodologia ao contexto real da concessionária, com escopo definido a partir dos contratos, sistemas, fornecedores e fluxos de dados envolvidos.

### 13. CTA final

**Título:** Leve privacidade para dentro da operação rodoviária.

**Texto:** Em uma conversa inicial, entendemos o momento da operação, os sistemas e a prioridade para definir onde a TOGETHER pode apoiar.

**CTA:** Agende uma Conversa

O CTA leva a `/contato` pelo contrato de navegação definido em **Conversão e mensuração**.

## Narrativa própria dos outros cinco setores

O shell será compartilhado, mas cada rota terá hero, mapa de dados, riscos, vocabulário, exemplos e seção editorial próprios.

### Transporte fracionado

- Hubs, coleta, triagem, etiquetas, roteirização e múltiplas entregas.
- Dados de remetentes, destinatários, motoristas, parceiros e comprovantes.
- Ênfase em cadeia de operadores, compartilhamento, rastreamento e atendimento.

### Transporte de lotação

- Viagens dedicadas, longas rotas, telemetria, motoristas e comprovação de entrega.
- Dados em torres de controle, gerenciadoras de risco, embarcadores e parceiros.
- Ênfase em papéis, acessos, integrações, retenção e incidentes.

### Escolas particulares

- Matrícula, responsáveis, alunos, plataformas educacionais, câmeras e comunicação.
- Atenção especial a crianças e adolescentes, acesso e compartilhamento.
- Ênfase em governança, transparência, fornecedores, treinamento e resposta a incidentes.

### Ensino superior

- Vestibular, matrícula, vida acadêmica, pesquisa, extensão, campus e portais.
- Relação entre instituição, estudantes, docentes, parceiros e sistemas.
- Ênfase em grande volume de dados, múltiplas finalidades, pesquisa, acesso e continuidade.

### SaaS

- Produto, onboarding, analytics, logs, suporte, billing, nuvem e subprocessadores.
- Ênfase em privacy by design, contratos, DPA, transferências, incidentes e evidências para vendas enterprise.
- Narrativa deve conectar privacidade a produto e crescimento, sem prometer certificações inexistentes.

Antes de implementar cada uma dessas rotas, a copy final será validada com o mesmo rigor setorial aplicado ao piloto.

## Sistema visual

### Elementos compartilhados

- Plus Jakarta Sans.
- H1 e H2 grandes, compactos e com tracking negativo.
- Frase secundária em amarelo, itálico e peso leve quando fizer sentido.
- `SectionPill`, `ActionLink`, `Navbar`, `Footer` e `PixelDecor` existentes.
- `IndustryProofStrip` novo, inspirado visualmente na transição da `AuthorityStrip`, sem logos ou marquee.
- Fundo principal branco ou off-white.
- Seções pretas como pausas editoriais estratégicas.
- Cards principais com raios entre 24 e 32 px, borda neutra e sombras difusas.
- CTA final amarelo no padrão institucional.

### Regra do amarelo

O amarelo orienta e destaca; não domina a página.

Permitido:

- Pixels pequenos e consistentes.
- Ícones, linhas, estados, palavras e bordas.
- Pequenos cards amarelos dentro de uma composição maior.
- CTA e fechamento institucional já previstos no sistema.

Evitar:

- Grandes cards amarelos que dominem uma seção.
- Fundos amarelos pálidos ocupando seções explicativas inteiras.
- Diferentes padrões de quadrados ou pixels na mesma página.
- Repetição de grades uniformes com todos os cards iguais.

### Dinamismo entre seções

A página alternará entre:

- Hero fotográfico full-bleed.
- Diagrama ou mapa de dados.
- Timeline responsiva.
- Mosaico editorial de capacidades.
- Bloco preto de prova e tecnologia.
- Split de texto e imagem.
- FAQ com o layout editorial e os raios da home, mas com perguntas setoriais configuráveis.
- CTA final amarelo.

O preto é uma pausa estratégica, não uma alternância automática. O amarelo de largura total fica reservado à conversão final existente no sistema.

## Arquitetura técnica

### Fronteira de componentes

Criar um domínio próprio para as páginas setoriais, separado dos componentes de parceria jurídica:

- `src/components/industry/industry-page.tsx`
- `src/components/industry/industry-page-types.ts`
- `src/components/industry/sections/`
- `src/content/industries/roads.ts`
- Um arquivo de conteúdo por setor adicional.

Cada rota será fina:

- `src/app/solucoes/<slug>/page.tsx` delega ao shell.
- `src/app/solucoes/<slug>/layout.tsx` define metadata, canonical e Open Graph específicos.

O conteúdo será tipado e separado da view. Ícones serão referenciados por chaves conhecidas, mapeadas dentro da camada visual, evitando armazenar componentes React nos arquivos de copy.

### Contrato de conteúdo

O contrato deve suportar:

- Identificador e slug.
- Metadata e descrição social.
- Hero com assets desktop e mobile.
- Provas institucionais.
- Seções opcionais com variante visual explícita.
- Mapas, fluxos, listas e mosaicos.
- Âncoras de campanha.
- FAQ.
- CTA e contexto de conversão.
- `campaignAnchors` associados a seções ou alvos internos obrigatórios.

As variantes serão limitadas a um conjunto fechado e documentado. O shell não aceitará classes Tailwind arbitrárias vindas do conteúdo.

### Relação com páginas existentes

- A página de escritórios de advocacia permanece especializada e não migra para o shell setorial.
- `CoDeliveryMap` e outros elementos de parceria jurídica não serão reutilizados fora daquele contexto.
- Componentes globais serão reutilizados diretamente quando o comportamento já corresponder à home.
- O `ServicePageShell` atual pode inspirar o contrato, mas não deve limitar a narrativa setorial a uma sequência fixa de serviço.

## SEO e Google Ads

### Metadata do piloto

- **Slug:** `/solucoes/privacidade-gestao-de-rodovias`
- **Title:** `Privacidade e LGPD para Gestão de Rodovias | TOGETHER`
- **H1:** `Privacidade incorporada à operação rodoviária, do projeto ao free flow.`
- **Canonical:** URL absoluta da rota em `https://togetherprivacy.tech`.

A description deve citar concessionárias, operação rodoviária e a atuação prática da TOGETHER sem exceder ou inflar credenciais.

### Âncoras de campanha

| Âncora | Destino obrigatório |
| --- | --- |
| `#free-flow` | Bloco de free flow e identificação automática |
| `#privacy-by-design` | Bloco de privacidade desde o projeto |
| `#fornecedores` | Alvo interno de fornecedores no bloco de privacidade desde o projeto |
| `#dpo` | Alvo interno de DPO e titulares no bloco de operação contínua |
| `#incidentes` | Alvo interno de incidentes no bloco de operação contínua |
| `#internacional` | Bloco Brasil e atuação internacional |

Cada anúncio deve levar à seção que corresponde à promessa e à palavra-chave. A página continua utilizável quando carregada sem hash.

O contrato de conteúdo declara `campaignAnchors` como pares de `id` e `sectionKey`. A validação exige `âncora declarada ⇒ elemento renderizado com id único`. Configuração com destino ausente ou ID duplicado falha no teste focado e não pode ser publicada.

### Conversão e mensuração

O CTA exato **Agende uma Conversa** aparece:

1. No hero.
2. Imediatamente depois do mosaico de Capacidade TOGETHER.
3. No fechamento.

Todos os CTAs são links normais e funcionam sem JavaScript. No HTML estático, o `href` já contém `sector` e `cta_position`. Um componente cliente pequeno, `IndustryContactLink`, enriquece esse `href` depois da hidratação usando o helper puro `buildIndustryContactHref`; se o JavaScript não carregar, a navegação básica continua válida.

O destino segue este schema:

- Caminho: `/contato`.
- `sector`: slug lógico do setor, por exemplo `gestao-de-rodovias`.
- `cta_position`: `hero`, `capabilities` ou `final`.
- `entry_anchor`: hash válido presente na primeira carga da página, sem `#`; vazio quando a entrada for direta.
- Parâmetros preservados por allowlist: `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_term`, `gclid`, `gbraid` e `wbraid`.

Parâmetros desconhecidos não são propagados. `entry_anchor` é capturado uma vez a partir do hash válido da primeira carga e representa a intenção de entrada da campanha, não a seção atualmente visível quando o CTA é clicado. O helper e a captura da entrada terão testes unitários independentes do browser.

Eventos enviados ao `dataLayer` quando disponível:

- `cta_hero`
- `cta_midpage`
- `cta_final`

Payload mínimo:

- `event`.
- `sector`.
- `cta_position`.
- `entry_anchor`.
- Campos UTM presentes na allowlist.

O clique não usa `preventDefault` para aguardar analytics. O envio é protegido contra ausência ou erro do `dataLayer`; a falha de mensuração nunca impede a navegação para contato.

Para o aceite do piloto, “validar conversão” significa provar o funcionamento dos três links, dos parâmetros e dos eventos em ambiente local/exportado. Taxa de conversão real depende de tráfego em produção, janela de mensuração e volume suficiente, portanto não bloqueia a implementação nem a publicação técnica.

## Responsividade

### Viewports de aceite

- 360 px.
- 390 px.
- 768 px.
- 1024 px.
- 1280 px.
- 1440 px.

### Regras

- Não pode existir overflow horizontal.
- Texto, botões, contato, cards e imagens não podem ser cortados.
- O hero troca de asset no mobile; não reutiliza apenas um crop agressivo da versão desktop.
- Grades de quatro ou três colunas passam para duas e depois uma.
- Timelines horizontais se tornam fluxos verticais.
- Setas ficam centralizadas entre etapas e não sobre o texto.
- Cards não usam altura fixa para alinhar conteúdo.
- CTA mobile ocupa a largura disponível, mantém o rótulo inteiro e área de toque mínima de 44 px.
- FAQ vira uma coluna e preserva o padrão visual da home.

## Acessibilidade

- Um único H1 por rota e hierarquia de headings sem saltos artificiais.
- Contraste mínimo AA para texto e controles.
- Foco visível em links, botões e accordion.
- Navegação completa por teclado.
- Ícones não substituem rótulos textuais.
- Imagens decorativas usam `alt=""`; imagens informativas recebem texto alternativo específico.
- `prefers-reduced-motion` remove movimentos não essenciais.
- A ordem do DOM permanece lógica quando o layout muda no mobile.

## Performance e resiliência

- Otimizar os dois assets do hero e declarar tamanhos para evitar layout shift.
- Não adicionar WebGL, canvas, parallax ou animação pesada acima da dobra.
- Reutilizar fonte, motion e componentes já presentes no projeto.
- O conteúdo e os CTAs permanecem disponíveis sem JavaScript de animação.
- Se a imagem do hero falhar, um fundo neutro preserva o contraste e a leitura.
- Se o tracking falhar, o CTA continua navegando normalmente.

## Fontes e precisão do conteúdo rodoviário

O conteúdo deve permanecer ancorado em fontes oficiais:

- [ANTT — informações gerais sobre concessões rodoviárias](https://www.gov.br/antt/pt-br/assuntos/rodovias/informacoes-gerais)
- [ANTT — novos projetos em rodovias](https://www.gov.br/antt/pt-br/assuntos/rodovias/novos-projetos-em-rodovias)
- [ANTT — free flow](https://www.gov.br/antt/pt-br/free-flow/o-que-e-o-free-flow)
- [Resolução CONTRAN nº 1.013/2024](https://www.gov.br/transportes/pt-br/assuntos/transito/conteudo-contran/resolucoes/Resolucao10132024.pdf/@@download/file)
- [ANPD — comunicado de incidente de segurança](https://www.gov.br/anpd/pt-br/canais_atendimento/agente-de-tratamento/comunicado-de-incidente-de-seguranca-cis)
- [ANPD — transferência internacional de dados](https://www.gov.br/anpd/pt-br/assuntos/assuntos-internacionais/transferencia-internacional-de-dados)
- [LGPD](https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709compilado.htm)
- [GDPR — aplicação territorial, artigo 3º](https://eur-lex.europa.eu/legal-content/PT/TXT/?uri=CELEX:32016R0679)
- [Comissão Europeia — transferências internacionais](https://commission.europa.eu/law/law-topic/data-protection/international-dimension-data-protection/rules-international-data-transfers_en)

As referências orientam a copy e não substituem análise jurídica do caso concreto. A ficha de conteúdo do piloto registra a URL oficial, a afirmação suportada e a data da última revisão; qualquer nova alegação regulatória exige uma fonte oficial correspondente.

## Testes e verificação

### Testes focados

Adicionar uma suíte para o sistema setorial cobrindo:

- Rota delega ao shell correto.
- Metadata, canonical, title e H1 específicos.
- CTA aponta para `/contato` e mantém o rótulo aprovado.
- Assets desktop e mobile estão presentes.
- O `<picture>` contém art direction em 767/768 px, formatos e dimensões previstos e respeita os limites de peso.
- Componentes globais são reutilizados.
- Âncoras de campanha existem e são únicas.
- Toda âncora declarada resolve para um elemento renderizado.
- Copy proibida e alegações de experiência setorial não aparecem.
- FAQ contém a resposta transparente sobre experiência no setor.
- FAQ expõe `aria-expanded`, `aria-controls`, IDs únicos e regiões associadas.
- Classes ou marcadores responsivos essenciais estão presentes.
- Sitemap inclui a rota.

### Verificação de integração

Depois do último ajuste relevante:

1. Executar os testes focados.
2. Executar lint ou verificação estática apenas nos arquivos alterados.
3. Executar o build de exportação estática.
4. Restaurar artefatos de blog ou sitemap que tenham sido alterados pelo build sem pertencer ao escopo.
5. Servir `out/` localmente.
6. Verificar a rota nos seis viewports de aceite.
7. Confirmar ausência de overflow, corte, erro de console e falha de assets.
8. Testar teclado, foco, semântica do accordion e `prefers-reduced-motion`.
9. Testar os três CTAs, a allowlist de parâmetros e os eventos sem bloquear navegação.
10. Inspecionar o HTML exportado, metadata, canonical, `<picture>` e âncoras.

## Publicação e expansão

### Fase 1 — Piloto

- Implementar somente Gestão de Rodovias.
- Validar localmente a página, SEO, responsividade e conversão.
- Submeter o piloto à aprovação visual do usuário.

### Fase 2 — Sistema

- Incorporar ao shell os aprendizados confirmados no piloto.
- Congelar variantes visuais e contrato de conteúdo.
- Não generalizar um componente antes de existir uma segunda necessidade real.

### Fase 3 — Cinco novas rotas

- Produzir a copy setorial final.
- Criar os assets de hero desktop e mobile.
- Implementar as rotas uma a uma sobre o shell validado.
- Verificar cada página individualmente e depois o conjunto.

### Fase 4 — Publicação controlada

- Preservar o worktree sujo e mudanças não relacionadas.
- Versionar apenas arquivos do sistema setorial e da rota aprovada.
- Publicar por lote aprovado, sem incluir alterações paralelas.
- Não tratar push ou build como prova de publicação.
- Confirmar workflow de deploy e rota pública normal e com cache-busting.

## Critérios de aceite

O piloto estará pronto para replicação quando:

- A narrativa reconhecer o setor antes de listar serviços.
- A página não alegar experiência rodoviária inexistente.
- O hero usar as composições desktop e mobile aprovadas.
- Cards amarelos forem apenas pequenos destaques dentro das seções.
- A página alternar formatos sem repetir grades numeradas.
- O FAQ seguir o padrão da home.
- Os três CTAs funcionarem e forem mensuráveis.
- Não houver overflow ou corte nos viewports definidos.
- Acessibilidade, build estático e HTML exportado forem verificados.
- A rota estiver aprovada pelo usuário antes da expansão para os outros setores.

## Fora de escopo

- Alterar a página de parceria com escritórios de advocacia.
- Reescrever páginas de serviço existentes.
- Criar cases, depoimentos ou certificações que não existam.
- Modificar campanhas ou contas de Google Ads.
- Publicar as seis rotas antes da aprovação do piloto.
- Redesenhar Navbar, Footer ou o sistema global da home.
