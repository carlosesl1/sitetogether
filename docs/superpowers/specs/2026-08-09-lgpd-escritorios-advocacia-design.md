# Página LGPD para Escritórios de Advocacia — Especificação de Design

**Data:** 9 de agosto de 2026

**Status:** direção e estrutura aprovadas pelo usuário

**Rota proposta:** `/solucoes/escritorios-de-advocacia`

**Modo da superfície:** Persuade

## 1. Resumo

Criar uma landing page da TOGETHER voltada a escritórios de advocacia que recebem demandas de LGPD, mas não possuem toda a capacidade técnica e operacional necessária para executá-las. A página apresenta um modelo de **coentrega transparente**: o escritório permanece responsável pela estratégia jurídica, pelos pareceres e pela relação com o cliente; a TOGETHER complementa a entrega com diagnóstico, data mapping, processos, tecnologia, evidências, treinamento, DPO e operação de privacidade.

A conversão principal será **agendar uma conversa de parceria**. A página não oferecerá cadastro automático, comissão por indicação, white-label ou promessa de exclusividade.

## 2. Público e situação de chegada

### Público primário

- Sócios e advogados de escritórios pequenos e médios que receberam uma demanda de LGPD e não possuem um núcleo especializado.
- Sócios, heads e profissionais de escritórios maiores que já atuam em privacidade, mas precisam ampliar capacidade técnica, operacional ou de execução.

### Situação de chegada

O visitante chegou porque existe uma oportunidade ou responsabilidade concreta: adequação à LGPD, incidente de segurança, auditoria, due diligence, contrato B2B, atuação de DPO, demanda de titular ou implantação de processos e ferramentas. Sua principal insegurança não é “não conhecer a lei”, mas **assumir risco técnico e operacional fora da capacidade atual do escritório**.

### Resultado esperado

Em poucos segundos, o visitante deve entender:

1. a TOGETHER não substitui nem diminui o papel do escritório;
2. a divisão de responsabilidades é clara;
3. existe capacidade multidisciplinar real para executar a parte técnica e operacional;
4. a conversa inicial ocorre sob confidencialidade;
5. o próximo passo é agendar uma conversa de parceria.

## 3. Base factual e regulatória

A comunicação deve partir de obrigações concretas da LGPD, não de alarmismo. A lei envolve direitos de titulares, registro de operações, medidas técnicas e administrativas de segurança, atuação do encarregado e eventual produção de relatório de impacto. A regulamentação de incidentes também exige avaliação, documentação e coordenação em prazos curtos.

Fontes oficiais de referência:

- [Lei nº 13.709/2018 — LGPD](https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm)
- [ANPD — Comunicação de Incidente de Segurança](https://www.gov.br/anpd/pt-br/canais_atendimento/agente-de-tratamento/comunicado-de-incidente-de-seguranca-cis)
- [ANPD — Atuação do Encarregado](https://www.gov.br/anpd/pt-br/assuntos/noticias/anpd-lanca-guia-sobre-atuacao-do-encarregado)
- [OAB — Provimento nº 205/2021](https://www.oab.org.br/leisnormas/legislacao/provimentos/205-2021)

A página não afirmará que “advogados não entendem LGPD”. A formulação aprovada é que algumas demandas ultrapassam a interpretação jurídica e exigem competências complementares de implementação, tecnologia e operação.

## 4. Posicionamento e mensagem

### Tese central

> Seu escritório conduz o jurídico. A TOGETHER sustenta a execução da LGPD.

### Proposta de valor

Quando a demanda exige diagnóstico, processos, tecnologia e operação, uma equipe especializada trabalha ao lado do escritório, com responsabilidades claras e confidencialidade.

### Princípios de linguagem

- Tratar o advogado como líder jurídico, nunca como profissional despreparado.
- Falar em complementaridade, coentrega, capacidade e execução.
- Explicar limites antes de apresentar vantagens.
- Evitar medo genérico de multa, urgência artificial ou promessa de resultado.
- Não afirmar proteção comercial, não abordagem do cliente ou exclusividade; somente confidencialidade foi confirmada.
- Não inventar cases de escritórios, números, certificações, prazos ou garantias.
- Usar apenas provas já presentes no repositório e publicadas pela TOGETHER.

## 5. Arquitetura narrativa da página

### 5.1 Navegação existente

Reutilizar o `Navbar` atual sem alterar a navegação global. A landing page deve parecer parte nativa do site, não uma campanha externa.

### 5.2 Hero — a divisão de responsabilidades já no primeiro viewport

**Badge:** `Parceria para escritórios de advocacia`

**Headline:**

> Seu escritório conduz o jurídico.
>
> A TOGETHER sustenta a execução da LGPD.

**Texto:**

> Quando a demanda exige diagnóstico, processos, tecnologia e operação, uma equipe especializada trabalha ao lado do seu escritório — com responsabilidades claras e confidencialidade.

**CTA primário:** `Agendar conversa de parceria` → `/contato`

**CTA secundário:** `Entender a coentrega` → `#coentrega`

O lado visual do hero será um **mapa da demanda**: um caso de LGPD entra no topo e se divide em duas trilhas coordenadas, “Escritório” e “TOGETHER”. Essa é a assinatura original da página e deve ser legível sem depender de animação.

### 5.3 Cenário — a demanda pode exigir uma operação inteira

Apresentar quatro situações reconhecíveis:

1. **Adequação LGPD:** mapeamento, políticas, controles, responsáveis e implantação.
2. **Incidente de dados:** avaliação, evidências, comunicação e coordenação da resposta.
3. **Auditoria ou contrato:** questionários, documentos e comprovação operacional.
4. **DPO e titulares:** canal, rotina, registros e acompanhamento contínuo.

Mensagem da seção:

> Algumas demandas começam como uma questão jurídica e evoluem para um projeto que conecta pessoas, processos e tecnologia.

### 5.4 Coentrega — duas competências, uma entrega coordenada

Esta é a seção dominante da página.

**Escritório:**

- estratégia e interpretação jurídica;
- pareceres, contratos e instrumentos legais;
- relação com o cliente;
- aprovação das decisões jurídicas.

**TOGETHER:**

- diagnóstico e data mapping;
- processos, controles e evidências;
- ferramentas e rotinas de privacidade;
- DPO, treinamento e suporte operacional.

A composição deve mostrar conexão e complementaridade, sem criar hierarquia entre as equipes. No mobile, as duas trilhas tornam-se blocos sequenciais conectados por um elemento visual simples e acessível.

### 5.5 Escopo de apoio da TOGETHER

Apresentar de quatro a seis frentes usando os conteúdos existentes:

- diagnóstico e adequação;
- mapeamento de dados;
- políticas, processos e evidências;
- ferramentas de privacidade;
- DPO e demandas de titulares;
- treinamento, auditoria e suporte operacional.

Esta seção deve mostrar capacidade sem duplicar integralmente as páginas de Consultoria ou DPO as a Service. Links contextuais podem levar aos serviços existentes quando ajudarem o visitante a aprofundar o tema.

### 5.6 Para quem — dois níveis de capacidade

**Escritórios pequenos e médios**

> Atenda a demanda sem montar um núcleo interno.

Especialistas entram quando a execução ultrapassa o escopo jurídico habitual.

**Estruturas maiores**

> Amplie capacidade sem sobrecarregar sua equipe.

Apoio para projetos simultâneos, frentes técnicas e continuidade operacional.

### 5.7 Como a parceria começa

1. **Conversa inicial:** entender perfil, demandas e forma de atuação do escritório.
2. **Definição de papéis:** estabelecer escopo, responsáveis, comunicação e entregáveis.
3. **Coentrega:** equipes atuam de forma coordenada conforme a necessidade do projeto.

Não apresentar ativação automática, preço, prazo fechado ou promessa de aceite.

### 5.8 Provas existentes

Usar apenas as credenciais já presentes no site:

- mais de cinco anos de atuação apresentada em LGPD;
- mais de 200 atividades e entregáveis;
- equipe multidisciplinar;
- experiência com plataformas de privacidade;
- logos de clientes já exibidos na home, se a mesma prova puder ser reutilizada sem sugerir parceria jurídica específica.

Não criar case fictício de escritório. Não associar os logos existentes à oferta para escritórios de forma que implique relação não comprovada.

### 5.9 Confidencialidade

Criar uma faixa de destaque próxima ao fechamento:

> Informações tratadas com discrição desde a primeira conversa.

O texto pode mencionar confidencialidade e formalização adequada ao projeto. Não mencionar exclusividade, titularidade comercial, não solicitação ou proibição de contato com o cliente.

### 5.10 FAQ

Perguntas previstas:

1. A TOGETHER substitui a atuação jurídica do escritório?
2. Quais demandas podem ser atendidas em conjunto?
3. A parceria pode atender um projeto pontual e também demandas recorrentes?
4. Como são definidas as responsabilidades de cada equipe?
5. Como funciona a confidencialidade das informações?

As respostas devem ser objetivas e informativas. Quando algo depender do projeto, dizer explicitamente que será definido na conversa e no escopo, sem criar regra comercial inexistente.

### 5.11 CTA final

**Headline:**

> Amplie sua capacidade em LGPD com responsabilidades claras.

**Texto:**

> Converse com nosso time sobre o perfil e as demandas do seu escritório.

**CTA:** `Agendar conversa de parceria` → `/contato`

Reutilizar a seção final e o `Footer` existentes, adaptando somente a mensagem necessária para esta rota.

## 6. Direção visual

### Regra principal

Esta página é uma **extensão do site atual**, não um redesign e não uma nova identidade.

### Elementos que devem permanecer

- `Plus Jakarta Sans` e hierarquia tipográfica existente;
- amarelo `brand-400`, preto `#0a0a0a`, branco e neutros atuais;
- `Navbar`, botões, pills, bordas, sombras e footer existentes;
- geometria, raios e espaçamento do design system atual;
- contraste entre seções claras, escuras e CTA amarelo;
- Framer Motion e o mesmo caráter de movimento já usado no site;
- pixel decor, grids e demais elementos proprietários somente quando já fizerem parte da gramática vigente.

### Originalidade específica da rota

A originalidade virá da **composição do mapa de demanda e das trilhas de coentrega**, não de uma nova paleta, nova fonte ou linguagem visual jurídica genérica. Evitar balança da justiça, martelo, colunas clássicas, papel timbrado, aperto de mãos, cadeados genéricos e fotografias de banco de imagem de advogados.

O mapa deve parecer um artefato operacional da TOGETHER: claro, técnico e vivo. Linhas podem conectar responsabilidades e ganhar ênfase durante o scroll, mas todo conteúdo precisa permanecer visível e compreensível com JavaScript, animação reduzida ou efeitos desativados.

### Ritmo da página

- Hero expressivo com prova visual imediata.
- Seção de cenário mais objetiva e modular.
- Coentrega como maior momento explicativo.
- Alternância de densidade entre escopo, públicos e processo.
- Provas em faixa compacta.
- Confidencialidade como pausa clara antes do CTA final.

## 7. Responsividade e acessibilidade

- Desktop e mobile devem preservar a leitura “demanda → responsabilidades → entrega”.
- No mobile, evitar linhas conectoras que cruzem conteúdo ou dependam de coordenadas frágeis.
- Alvos interativos com dimensão adequada e foco visível.
- Contraste mínimo compatível com WCAG AA.
- Respeitar `prefers-reduced-motion`.
- Não esconder conteúdo essencial atrás de hover, tooltip ou animação.
- Usar headings semânticos, listas e landmarks apropriados.
- Ícones são apoio; os rótulos textuais carregam o significado.

## 8. Arquitetura de implementação proposta

- `src/app/solucoes/escritorios-de-advocacia/page.tsx`: composição da página e conteúdo da rota.
- `src/app/solucoes/escritorios-de-advocacia/layout.tsx`: metadata específica.
- Componentes exclusivos da página devem ser pequenos e extraídos apenas se a legibilidade justificar, preferencialmente em `src/components/legal-partners/`.
- Reutilizar `Navbar`, `Footer`, CTA, botões, utilitários e padrões de movimento já existentes.
- Não forçar a página dentro de `ServicePageShell` se isso enfraquecer o mapa de coentrega; compartilhar os primitivos visuais sem transformar a rota em uma cópia estrutural das páginas de serviço.
- A página é estática e não adiciona chamadas de API ou estado remoto.
- O CTA reutiliza `/contato`; qualquer pré-preenchimento futuro exige suporte explícito do formulário e fica fora deste escopo.

## 9. SEO

**Title:** `LGPD para Escritórios de Advocacia | Parceria TOGETHER`

**Description:** `Apoio técnico e operacional em LGPD para escritórios de advocacia. Seu escritório conduz a estratégia jurídica e a TOGETHER complementa a execução com equipe especializada.`

Termos importantes devem aparecer naturalmente, sem repetição artificial: LGPD para escritórios de advocacia, parceria em LGPD, apoio técnico em proteção de dados, DPO, adequação e privacidade.

## 10. Estados e comportamento

A rota não possui carregamento ou dados remotos próprios. Os estados materiais são:

- viewport desktop e mobile;
- navegação por teclado;
- foco e hover dos CTAs;
- animação normal e movimento reduzido;
- navegação para `/contato`;
- conteúdo visível mesmo se as animações não inicializarem.

## 11. Critérios de aceitação

1. A página se parece inequivocamente com a TOGETHER atual.
2. Nenhuma página existente, token global ou interação compartilhada muda sem necessidade direta.
3. O primeiro viewport explica oferta, divisão de papéis e ação principal.
4. O visitante não interpreta que a TOGETHER substitui o advogado.
5. A página não diminui a competência do escritório nem usa medo regulatório genérico.
6. Somente provas existentes e verificáveis são exibidas.
7. Confidencialidade é afirmada sem prometer exclusividade ou não abordagem.
8. Desktop e mobile preservam hierarquia, leitura e conversão.
9. A rota passa por lint, build estático, detector Impeccable e inspeção visual em desktop e mobile.
10. O HTML gerado em `out/` contém metadata, headings, CTAs e conteúdo principal esperados.

## 12. Verificação planejada

- Testes focados para metadata, conteúdo estrutural e links da nova rota.
- `npm run lint` após a implementação.
- `npm run build`, considerando que o build também sincroniza conteúdo WordPress e gera redirects.
- Servir `out/` localmente para QA do export estático.
- Captura em desktop e mobile em uma rodada conjunta; correções em lote e uma confirmação final.
- Detector Impeccable sobre os arquivos alterados.
- Verificação de `prefers-reduced-motion`, overflow, contraste e navegação por teclado.

## 13. Fora de escopo

- Alteração da identidade visual global.
- Novo formulário ou backend de leads.
- Programa formal de parceiros, cadastro ou portal.
- White-label, exclusividade ou política de não solicitação.
- Preços, comissão por indicação ou divisão de honorários.
- Case fictício ou depoimento não comprovado.
- Publicação em produção nesta etapa.
