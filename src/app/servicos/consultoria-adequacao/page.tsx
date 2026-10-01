import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight, BadgeCheck, Check, ChevronDown, FileCheck2, FolderOpen, Layers3, MoveRight, ShieldCheck } from "lucide-react";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { AuthorityStrip } from "@/components/ui/authority-strip";
import { ActionLink, SectionPill } from "@/components/ui/site-primitives";
import { PixelDecor } from "@/components/ui/backgrounds/pixel-decor";
import styles from "./adequacao-service.module.css";

const deliverables = [
    { title: "Diagnóstico e plano de ação", description: "Clareza para decidir por onde começar.", work: "Avaliamos a maturidade da empresa, os processos existentes e as lacunas de privacidade. Com isso, organizamos as prioridades do projeto.", outputs: ["Diagnóstico da situação atual", "Plano de ação priorizado", "Etapas e responsáveis definidos"] },
    { title: "Mapeamento de dados pessoais", description: "Visibilidade sobre os dados e seus caminhos.", work: "Mapeamos como os dados entram, circulam, são compartilhados e armazenados. Analisamos finalidades, bases legais e os riscos identificados nos processos.", outputs: ["Inventário das operações de tratamento", "Registro de fluxos e compartilhamentos", "Pontos de atenção por processo"] },
    { title: "Documentos, políticas e contratos", description: "Documentação conectada à sua operação.", work: "Estruturamos ou revisamos os documentos necessários ao cenário da empresa, alinhando o que está escrito ao que as equipes fazem no dia a dia.", outputs: ["Políticas e avisos de privacidade", "Recomendações para cláusulas contratuais", "Registros e documentos do programa"] },
    { title: "Processos e governança", description: "Responsabilidades claras para a rotina funcionar.", work: "Definimos com suas áreas os fluxos de privacidade, o atendimento a titulares, a avaliação de fornecedores e a organização da resposta a incidentes, conforme o escopo.", outputs: ["Fluxos de atendimento e encaminhamento", "Papéis e responsabilidades", "Recomendações de controles e segurança"] },
    { title: "Treinamento e implementação", description: "Sua equipe preparada para colocar em prática.", work: "Orientamos os profissionais sobre os processos definidos e apoiamos a ativação das rotinas. As ações são alinhadas com os responsáveis internos pela implementação.", outputs: ["Treinamento das equipes envolvidas", "Orientações para os novos processos", "Registro das ações realizadas"] },
    { title: "Evidências e continuidade", description: "Uma base organizada para seguir evoluindo.", work: "Consolidamos as entregas, registramos as pendências e orientamos as próximas prioridades. Sua empresa recebe uma visão do que foi estruturado e do que precisa continuar.", outputs: ["Documentação e evidências organizadas", "Pendências e próximos passos", "Plano de continuidade do programa"] },
];

const situations = [
    { title: "Um cliente está cobrando adequação?", text: "Organizamos as prioridades e as evidências necessárias para apoiar questionários, auditorias e negociações." },
    { title: "A LGPD começou, mas não avançou?", text: "Avaliamos o que já existe e estruturamos um plano para tirar as ações do papel com responsáveis definidos." },
    { title: "Sua empresa precisa começar?", text: "Conduzimos o diagnóstico e a implementação das bases do programa, com orientação para as áreas envolvidas." },
];

const phases = [
    { title: "Entender", text: "Conhecemos a operação, os documentos e as exigências que motivaram a busca pela consultoria.", outcome: "Cenário e prioridades" },
    { title: "Planejar", text: "Mapeamos os dados e transformamos as lacunas identificadas em um plano de adequação.", outcome: "Escopo e plano de ação" },
    { title: "Implementar", text: "Estruturamos documentos e processos com as áreas responsáveis e orientamos a equipe.", outcome: "Entregas aplicadas à rotina" },
    { title: "Dar continuidade", text: "Consolidamos as evidências e alinhamos o que a empresa precisa manter e acompanhar.", outcome: "Próximos passos definidos" },
];

const platforms = [
    { name: "OneTrust", src: "/logos/onetrust.svg" },
    { name: "Securiti", src: "/logos/securiti.svg" },
    { name: "Privacy Tools", src: "/logos/privacy-tools.svg" },
    { name: "TrustWorks", src: "/logos/trustworks.png" },
    { name: "DPONet", src: "/logos/dponet.svg" },
    { name: "BeCompliance", src: "/logos/becompliance.svg", whiteLogo: true },
    { name: "Privally", src: "/logos/privally.png" },
];

const markets = [
    { title: "SaaS e tecnologia", path: "privacidade-saas" },
    { title: "Escolas particulares", path: "privacidade-escolas-particulares" },
    { title: "Ensino superior", path: "privacidade-ensino-superior" },
    { title: "Transporte e logística", path: "privacidade-transporte-fracionado" },
    { title: "Gestão de rodovias", path: "privacidade-gestao-de-rodovias" },
    { title: "Escritórios de advocacia", path: "escritorios-de-advocacia" },
];

const faqs = [
    { question: "O que é uma consultoria de adequação à LGPD?", answer: "É um projeto para avaliar como a empresa trata dados pessoais e organizar as medidas necessárias ao seu contexto. Envolve diagnóstico, mapeamento de dados, documentação, processos e orientação das equipes. Na TOGETHER, as frentes são conectadas em um plano de ação, com entregas e responsabilidades definidas." },
    { question: "Quanto custa adequar minha empresa à LGPD?", answer: "O investimento considera o porte e a complexidade da operação, os processos que tratam dados, o que já foi implementado e as entregas necessárias. A proposta da TOGETHER é construída a partir desse cenário. Uma exigência de cliente ou auditoria também pode ajudar a definir as prioridades do projeto." },
    { question: "Quanto tempo leva o projeto de adequação?", answer: "O cronograma depende do escopo, da quantidade de áreas e processos, da documentação disponível e da participação dos responsáveis internos. Alinhamos as etapas e os prazos na proposta. Se existe uma data de auditoria ou negociação, informe esse contexto para avaliarmos as entregas prioritárias e a viabilidade do prazo." },
    { question: "Minha empresa já tem documentos ou uma plataforma. Precisamos começar do zero?", answer: "Avaliamos a estrutura existente para identificar o que pode ser aproveitado, atualizado ou complementado. Isso inclui políticas, contratos, inventários e plataformas de privacidade. A necessidade de novas ferramentas e as condições de uso de licenças são alinhadas no escopo." },
    { question: "Quanto minha equipe precisa participar?", answer: "A empresa indica pontos de contato para compartilhar informações, participar de entrevistas, validar documentos e apoiar as mudanças nos processos. A TOGETHER organiza e conduz o trabalho contratado. A agenda e as responsabilidades são combinadas para que o projeto acompanhe a disponibilidade das áreas." },
    { question: "A consultoria ajuda com exigências de clientes e auditorias?", answer: "Sim. Podemos priorizar a organização dos documentos, registros e evidências relacionados às exigências apresentadas. Compartilhe os questionários ou requisitos na conversa inicial para definirmos o apoio necessário. A avaliação ou aprovação final continua sob os critérios do cliente ou auditor responsável." },
    { question: "A adequação inclui DPO as a Service?", answer: "São serviços complementares. A consultoria estrutura as bases do programa em um projeto com escopo definido. O DPO as a Service apoia a rotina contínua de privacidade depois da implantação ou em paralelo a ela. Podemos avaliar essa continuidade na proposta, conforme a necessidade da sua empresa." },
    { question: "Depois do projeto, a empresa está definitivamente adequada?", answer: "O projeto organiza a base de privacidade e as entregas previstas no escopo. A conformidade precisa acompanhar mudanças nos processos, nos sistemas e na legislação. Por isso, a continuidade inclui manter documentos, controles e orientações atualizados, além de acompanhar as ações pendentes." },
];

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Consultoria de adequação à LGPD",
    serviceType: "Consultoria de privacidade e proteção de dados pessoais",
    url: "https://togetherprivacy.tech/servicos/consultoria-adequacao",
    description: "Diagnóstico, mapeamento de dados, documentação, processos e treinamento para estruturar a adequação à LGPD da sua empresa.",
    provider: { "@type": "Organization", name: "TOGETHER Privacy & Tech", url: "https://togetherprivacy.tech" },
};

export default function ConsultoriaAdequacao() {
    return (
        <div className={styles.page}>
            <a href="#conteudo-adequacao" className={styles.skipLink}>Ir para o conteúdo</a>
            <Navbar />
            <main id="conteudo-adequacao">
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema).replace(/</g, "\\u003c") }} />
                <section className={styles.hero} aria-labelledby="adequacao-title">
                    <PixelDecor placement="right" mask="right" opacity={0.22} />
                    <PixelDecor placement="bottomLeft" mask="bottomLeft" opacity={0.12} />
                    <div className={styles.container}>
                        <nav className={styles.breadcrumb} aria-label="Navegação estrutural"><Link href="/">Início</Link><span aria-hidden="true">/</span><span aria-current="page">Consultoria de adequação LGPD</span></nav>
                        <div className={styles.heroGrid}>
                            <div className={styles.heroCopy}>
                                <SectionPill>Consultoria LGPD para empresas</SectionPill>
                                <h1 id="adequacao-title">Adequação à LGPD <span className={styles.accent}>do plano à prática.</span></h1>
                                <p className={styles.lead}>A TOGETHER conduz a adequação da sua empresa: diagnóstico, mapeamento de dados, documentos, processos e treinamento. Um projeto estruturado para transformar exigências de privacidade em ações na sua operação.</p>
                                <div className={styles.actions}><ActionLink href="/contato" size="xl">Solicitar proposta</ActionLink><a href="#escopo" className={styles.textLink}>Conhecer as entregas <ArrowDown size={17} aria-hidden="true" /></a></div>
                                <p className={styles.heroNote}>Escopo, etapas e responsabilidades definidos para o seu cenário.</p>
                            </div>
                            <aside className={styles.projectFolder} aria-label="Visão geral do projeto de adequação">
                                <div className={styles.folderTab}><FolderOpen size={17} aria-hidden="true" />Seu projeto de adequação</div>
                                <div className={styles.projectSheet}>
                                    <div className={styles.sheetHeading}><span className={styles.micro}>Uma base para sua privacidade</span><FileCheck2 size={26} aria-hidden="true" /></div>
                                    <h2>Da primeira análise <span>à operação.</span></h2>
                                    <ol className={styles.projectStages}>
                                        <li><span>01</span><div><strong>Entender o cenário</strong><p>Dados, processos e prioridades.</p></div></li>
                                        <li><span>02</span><div><strong>Construir a adequação</strong><p>Documentos, controles e responsáveis.</p></div></li>
                                        <li><span>03</span><div><strong>Preparar a continuidade</strong><p>Equipe orientada e próximos passos.</p></div></li>
                                    </ol>
                                    <div className={styles.projectResult}><Check size={20} aria-hidden="true" /><p><strong>Você sabe o que recebe.</strong><span>Entregas organizadas em cada etapa.</span></p></div>
                                </div>
                            </aside>
                        </div>
                    </div>
                </section>

                <div className={styles.clients}><AuthorityStrip title="Clientes que confiam na TOGETHER" /></div>
                <nav className={styles.sectionNav} aria-label="Nesta página"><div className={styles.container}><span>Conheça o projeto</span><a href="#escopo">O que você recebe</a><a href="#metodo">Como funciona</a><a href="#por-que-together">Por que TOGETHER</a><a href="#investimento">Prazo e investimento</a><a href="#duvidas">Dúvidas</a></div></nav>

                <section className={styles.section} aria-labelledby="cenario-title">
                    <div className={styles.container}>
                        <div className={styles.sectionHeader}><div><SectionPill>O ponto de partida é a sua empresa</SectionPill><h2 id="cenario-title">O que trouxe você <span className={styles.accent}>até aqui?</span></h2></div><p>Uma exigência comercial, um projeto parado ou o primeiro passo na LGPD. A consultoria começa pelo que sua empresa precisa resolver.</p></div>
                        <div className={styles.situations}>{situations.map((item) => <article key={item.title}><span className={styles.situationMark} aria-hidden="true"><ArrowUpRight size={23} /></span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
                    </div>
                </section>

                <section id="escopo" className={styles.section + " " + styles.dark} aria-labelledby="escopo-title">
                    <PixelDecor placement="topRight" mask="topRight" opacity={0.17} />
                    <div className={styles.container}>
                        <div className={styles.sectionHeader}><div><SectionPill tone="dark">O que você recebe</SectionPill><h2 id="escopo-title">Um projeto completo. <span className={styles.accent}>Entregas concretas.</span></h2></div><p>Conheça as frentes da consultoria e os materiais que ajudam sua empresa a colocar a adequação em prática.</p></div>
                        <div className={styles.scopeDossier}>
                            <div className={styles.dossierHeading}><span>As frentes do projeto</span><span>Explore as entregas <ArrowDown size={15} aria-hidden="true" /></span></div>
                            {deliverables.map((item, index) => <details key={item.title} className={styles.deliverable} open={index === 0}>
                                <summary><span className={styles.deliveryNumber} aria-hidden="true">0{index + 1}</span><span className={styles.deliveryTitle}><strong>{item.title}</strong><span>{item.description}</span></span><span className={styles.expandIcon}><ChevronDown size={22} aria-hidden="true" /></span></summary>
                                <div className={styles.deliveryBody}><div><span className={styles.micro}>Como trabalhamos</span><p>{item.work}</p></div><div className={styles.deliveryOutputs}><span className={styles.micro}>Na sua empresa</span><ul>{item.outputs.map((output) => <li key={output}><Check size={18} aria-hidden="true" />{output}</li>)}</ul></div></div>
                            </details>)}
                        </div>
                        <div className={styles.scopeFooter}><p>As entregas aplicáveis, os limites do escopo e as responsabilidades de cada parte são alinhados na proposta.</p><ActionLink href="/contato" size="lg">Solicitar proposta</ActionLink></div>
                    </div>
                </section>

                <section id="metodo" className={styles.section} aria-labelledby="metodo-title">
                    <div className={styles.container}>
                        <div className={styles.sectionHeader}><div><SectionPill>Como funciona</SectionPill><h2 id="metodo-title">Você acompanha o projeto. <span className={styles.accent}>A gente conduz o caminho.</span></h2></div><p>Um processo com etapas claras para conectar jurídico, tecnologia e as pessoas que fazem sua empresa funcionar.</p></div>
                        <ol className={styles.phases}>{phases.map((phase, index) => <li key={phase.title}><div className={styles.phaseTop}><span>0{index + 1}</span>{index < phases.length - 1 && <MoveRight size={29} aria-hidden="true" />}</div><h3>{phase.title}</h3><p>{phase.text}</p><div className={styles.phaseOutcome}><Check size={15} aria-hidden="true" />{phase.outcome}</div></li>)}</ol>
                        <div className={styles.teamAgreement}><div><span className={styles.micro}>Trabalho em conjunto</span><h3>Direção especializada.<br />Participação bem definida.</h3></div><dl><div><dt>A TOGETHER conduz</dt><dd>Diagnóstico, orientação, estruturação das entregas e acompanhamento do plano contratado.</dd></div><div><dt>Sua equipe participa</dt><dd>Compartilhando informações, validando decisões e implementando as mudanças sob sua responsabilidade.</dd></div></dl></div>
                    </div>
                </section>

                <section id="por-que-together" className={styles.section + " " + styles.soft} aria-labelledby="diferenciais-title">
                    <PixelDecor placement="bottomLeft" mask="bottomLeft" opacity={0.12} />
                    <div className={styles.container}>
                        <div className={styles.proofGrid}>
                            <div className={styles.proofCopy}><SectionPill>Por que escolher a TOGETHER</SectionPill><h2 id="diferenciais-title">Conhecimento técnico. <span className={styles.accent}>Aplicação prática.</span></h2><p>Uma consultoria que conecta as exigências da LGPD à realidade da sua empresa.</p><div className={styles.proofPoints}>
                                <article><BadgeCheck size={25} aria-hidden="true" /><div><h3>Especialistas certificados</h3><p>Equipe com certificações nas principais plataformas de privacidade do mercado para apoiar decisões e o uso das ferramentas.</p></div></article>
                                <article><Layers3 size={25} aria-hidden="true" /><div><h3>Uma solução validada</h3><p>Aplicamos uma solução já validada, reunindo jurídico, tecnologia e processos em um projeto de adequação estruturado.</p></div></article>
                                <article><ShieldCheck size={25} aria-hidden="true" /><div><h3>Experiência em diferentes mercados</h3><p>Adaptamos o trabalho aos tipos de dados, às relações comerciais e às rotinas de cada negócio.</p></div></article>
                            </div></div>
                            <aside className={styles.platformPanel} aria-labelledby="plataformas-title"><span className={styles.platformSymbol} aria-hidden="true"><Layers3 size={32} /></span><h3 id="plataformas-title">Tecnologia a serviço <span>da adequação.</span></h3><p>Avaliamos a estrutura que sua empresa já utiliza para conectar o projeto aos seus processos e ferramentas.</p><div className={styles.platforms}><span className={styles.micro}>Plataformas com as quais trabalhamos</span><ul>{platforms.map((platform) => <li key={platform.name}><Image src={platform.src} alt={platform.name} width={140} height={40} className={platform.whiteLogo ? styles.whiteLogo : undefined} /></li>)}</ul></div><p className={styles.platformNote}>A necessidade de ferramentas e licenças é avaliada no escopo do projeto.</p></aside>
                        </div>
                        <div className={styles.markets}><div><h3>O seu mercado tem particularidades.<br /><span className={styles.accent}>A nossa atuação também.</span></h3><p>Conheça algumas das áreas em que atuamos.</p></div><ul>{markets.map((market) => <li key={market.path}><a href={"https://togetherprivacy.tech/solucoes/" + market.path}>{market.title}<ArrowUpRight size={18} aria-hidden="true" /></a></li>)}</ul></div>
                    </div>
                </section>

                <section id="investimento" className={styles.section} aria-labelledby="investimento-title">
                    <div className={styles.container}>
                        <div className={styles.investmentFrame}><div className={styles.investmentCopy}><SectionPill>Prazo e investimento</SectionPill><h2 id="investimento-title">A proposta começa <span className={styles.accent}>pelo seu cenário.</span></h2><p>O tamanho da operação, o estágio atual da LGPD e as prioridades definem o trabalho necessário. A proposta apresenta as entregas, o cronograma e o investimento para a sua empresa.</p><ActionLink href="/contato" variant="dark" size="lg">Solicitar proposta</ActionLink></div><div className={styles.proposalGuide}><span className={styles.micro}>Para uma conversa mais objetiva</span><h3>Conte o que precisa acontecer.</h3><ol><li><span>01</span><div><strong>Como sua empresa opera</strong><p>Setor, áreas envolvidas e principais processos com dados pessoais.</p></div></li><li><span>02</span><div><strong>O que já está organizado</strong><p>Documentos, responsáveis, ferramentas e iniciativas anteriores.</p></div></li><li><span>03</span><div><strong>Qual é a sua prioridade</strong><p>Começar a adequação, avançar um projeto ou atender a uma exigência com prazo.</p></div></li></ol><div className={styles.deadlineNote}><strong>Tem uma auditoria ou negociação em andamento?</strong><p>Traga os requisitos e a data para avaliarmos as prioridades e a viabilidade das entregas.</p></div></div></div>
                        <div className={styles.continuity}><div><span className={styles.micro}>E depois da implantação?</span><h3>A adequação constrói a base.<br /><span className={styles.accent}>O DPO acompanha a rotina.</span></h3></div><div><p>Se sua empresa também precisa de acompanhamento contínuo, conheça o DPO as a Service. Os serviços podem se complementar na evolução do programa.</p><Link href="/servicos/dpo-as-a-service" className={styles.textLink}>Conhecer DPO as a Service <ArrowRight size={17} aria-hidden="true" /></Link></div></div>
                    </div>
                </section>

                <section id="duvidas" className={styles.section + " " + styles.faqSection} aria-labelledby="faq-title">
                    <div className={styles.container + " " + styles.faqGrid}><div className={styles.faqIntro}><SectionPill>Antes de contratar</SectionPill><h2 id="faq-title">Perguntas sobre <span className={styles.accent}>adequação à LGPD.</span></h2><p>O que você precisa saber para dar o próximo passo com clareza.</p><div className={styles.faqContact}><strong>Vamos conversar sobre sua empresa?</strong><ActionLink href="/contato" variant="dark">Falar com a TOGETHER</ActionLink></div></div><div className={styles.faqList}>{faqs.map((faq, index) => <details key={faq.question} open={index === 0}><summary>{faq.question}<span><ChevronDown size={21} aria-hidden="true" /></span></summary><p>{faq.answer}</p></details>)}<p className={styles.source}>Para conhecer os conceitos de proteção de dados, consulte as <a href="https://www.gov.br/anpd/pt-br/acesso-a-informacao/perguntas-frequentes" target="_blank" rel="noopener noreferrer">perguntas frequentes da ANPD<span className={styles.srOnly}> (abre em nova aba)</span></a>.</p></div></div>
                </section>

                <section className={styles.finalSection} aria-labelledby="proposta-title"><div className={styles.container}><div className={styles.finalFrame}>
                    <PixelDecor placement="topRight" mask="topRight" opacity={0.22} />
                    <div className={styles.finalCopy}><SectionPill tone="dark">Seu próximo passo</SectionPill><h2 id="proposta-title">Vamos colocar a adequação <span className={styles.accent}>em movimento?</span></h2><p>Conte o momento da sua empresa. A TOGETHER ajuda a transformar sua necessidade em um projeto com prioridades, entregas e próximos passos definidos.</p><ActionLink href="/contato" size="xl">Solicitar proposta</ActionLink></div>
                    <aside className={styles.nextStep}><span className={styles.micro}>Na conversa com nosso time</span><h3>Seu contexto.<br />Um plano para avançar.</h3><ul><li><Check size={19} aria-hidden="true" />Entendemos sua operação</li><li><Check size={19} aria-hidden="true" />Alinhamos o escopo necessário</li><li><Check size={19} aria-hidden="true" />Preparamos a proposta do projeto</li></ul><span className={styles.nextStepNote}>Do primeiro diagnóstico à continuidade.</span></aside>
                </div></div></section>
            </main>
            <Footer />
        </div>
    );
}
