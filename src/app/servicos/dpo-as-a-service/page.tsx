import Link from "next/link";
import Image from "next/image";
import { ArrowDown, ArrowRight, ArrowUpRight, BadgeCheck, BriefcaseBusiness, Check, ChevronDown, FileCheck2, GraduationCap, Layers3, Route, Scale, Search, Settings2, ShieldCheck, Sparkles, TrendingUp, Truck, Users, Workflow } from "lucide-react";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { AuthorityStrip } from "@/components/ui/authority-strip";
import { ActionLink, SectionPill } from "@/components/ui/site-primitives";
import { PixelDecor } from "@/components/ui/backgrounds/pixel-decor";
import { DpoScopeExplorer } from "./dpo-scope-explorer";
import styles from "./dpo-service.module.css";

const scope = [
    { title: "Encarregado e atendimento a titulares", text: "Atuação como DPO externo ou apoio ao DPO interno, com organização do canal de privacidade, acompanhamento de solicitações e apoio nas comunicações com a ANPD.", output: "Fluxos de atendimento, registros e acompanhamento das respostas." },
    { title: "Governança e documentos de privacidade", text: "Revisão de processos, políticas e registros para que a proteção de dados acompanhe as mudanças da empresa.", output: "Plano de ação, responsáveis definidos e documentação atualizada." },
    { title: "Contratos, fornecedores e auditorias", text: "Apoio na avaliação de fornecedores, revisão de cláusulas de privacidade e resposta a questionários de clientes e auditorias.", output: "Análises, respostas e evidências organizadas para consulta." },
    { title: "Operação das plataformas de privacidade", text: "Gestão das ferramentas que sua empresa utiliza, incluindo configurações, registros e acompanhamento das atividades.", output: "Plataforma atualizada e conectada aos processos da equipe." },
    { title: "Preparação e apoio em incidentes", text: "Organização do fluxo de resposta e apoio na avaliação de incidentes envolvendo dados pessoais, em conjunto com as áreas responsáveis.", output: "Responsabilidades, registros e orientação sobre os próximos passos." },
    { title: "Orientação das equipes e evolução contínua", text: "Orientações para quem trata dados, acompanhamento de mudanças regulatórias e revisão das prioridades do programa.", output: "Equipes orientadas e ações de melhoria acompanhadas." },
];

const differences = [
    { icon: ShieldCheck, title: "Especialistas certificados nas principais plataformas", text: "Nossa equipe tem certificações nas principais plataformas de privacidade do mercado. Esse conhecimento apoia a configuração, a gestão e o uso das ferramentas na sua operação." },
    { icon: Layers3, title: "Uma solução validada na prática", text: "Aplicamos uma solução já validada, conectando jurídico, tecnologia e processos. O trabalho se traduz em atividades executadas, registros organizados e prioridades acompanhadas." },
    { icon: FileCheck2, title: "Experiência para atuar em diferentes mercados", text: "Adaptamos a atuação aos dados, aos processos e às demandas de cada negócio. Seu time recebe apoio para lidar com fornecedores, clientes, auditorias e a rotina de privacidade." },
];

const models = [
    { tag: "Preciso de um encarregado", title: "DPO externo", description: "Para empresas que querem contratar a função de encarregado com suporte especializado para a operação de privacidade.", items: ["Atuação como encarregado", "Acompanhamento da rotina de LGPD", "Interface com suas áreas internas"], action: "Conversar sobre DPO externo", href: "/contato" },
    { tag: "Já tenho um encarregado", title: "Apoio ao DPO interno", description: "Para empresas que já têm um responsável e precisam de capacidade técnica e operacional para executar as demandas.", items: ["Apoio ao profissional já nomeado", "Execução das atividades acordadas", "Gestão de plataformas e evidências"], action: "Conversar sobre apoio ao DPO", href: "/contato" },
    { tag: "Preciso estruturar a base", title: "Projeto de adequação", description: "Para empresas que precisam mapear lacunas e organizar processos, documentos e controles em um projeto com escopo definido.", items: ["Diagnóstico e plano de adequação", "Estruturação do programa de LGPD", "Possibilidade de continuidade com DPO"], action: "Conhecer a consultoria LGPD", href: "/servicos/consultoria-adequacao" },
];

const markets = [
    { title: "SaaS e tecnologia", description: "Dados de usuários, fornecedores e exigências de clientes B2B.", path: "privacidade-saas" },
    { title: "Educação", description: "Dados de alunos, famílias e profissionais da instituição.", path: "privacidade-escolas-particulares" },
    { title: "Ensino superior", description: "Processos acadêmicos, administrativos e plataformas digitais.", path: "privacidade-ensino-superior" },
    { title: "Transporte e logística", description: "Dados de motoristas, clientes, entregas e parceiros.", path: "privacidade-transporte-fracionado" },
    { title: "Gestão de rodovias", description: "Operações, prestadores de serviço e dados dos usuários.", path: "privacidade-gestao-de-rodovias" },
    { title: "Escritórios de advocacia", description: "Atuação conjunta em projetos de privacidade e LGPD.", path: "escritorios-de-advocacia" },
];

const steps = [
    { title: "Entendemos seu cenário", text: "Conhecemos a operação, o DPO atual, as ferramentas e as demandas que precisam de atenção." },
    { title: "Definimos o escopo", text: "Alinhamos atividades, responsabilidades, prioridades e condições de atendimento na proposta." },
    { title: "Organizamos a operação", text: "Reunimos os documentos, alinhamos acessos e estruturamos os fluxos com os pontos de contato da empresa." },
    { title: "Acompanhamos a rotina", text: "Executamos as atividades acordadas, registramos as entregas e revisamos as próximas prioridades." },
];

const faqs = [
    { question: "O que faz um DPO as a Service?", answer: "É um serviço de encarregado de proteção de dados terceirizado. O DPO atua como canal entre a organização, os titulares de dados e a ANPD, além de orientar sobre proteção de dados. Na TOGETHER, o serviço também pode incluir a operação de processos, documentos e plataformas de privacidade, conforme o escopo contratado." },
    { question: "É possível contratar uma empresa como DPO?", answer: "Sim. A Resolução CD/ANPD nº 18/2024 permite que o encarregado seja pessoa natural ou jurídica. A indicação deve ser formalizada, com divulgação da identidade e dos contatos e observância das regras de atuação e de conflitos de interesse. A contratação do serviço não transfere as responsabilidades legais do controlador para o DPO." },
    { question: "Minha empresa já tem jurídico ou DPO interno. A TOGETHER pode ajudar?", answer: "Sim. Podemos apoiar o DPO e as áreas de jurídico, TI, segurança e compliance na execução das atividades. O responsável interno continua participando das decisões, enquanto a TOGETHER assume as frentes operacionais definidas no escopo." },
    { question: "Qual a diferença entre DPO as a Service e consultoria de adequação à LGPD?", answer: "A consultoria de adequação organiza a base do programa em um projeto: diagnóstico, processos, documentos e controles. O DPO as a Service atende à necessidade de acompanhamento contínuo. Os dois podem se complementar quando a empresa precisa estruturar o programa e manter a rotina depois da implantação." },
    { question: "Quanto custa contratar DPO as a Service?", answer: "O investimento depende da complexidade da operação, do volume de demandas, das plataformas utilizadas e do escopo de atuação. A TOGETHER avalia esse cenário para elaborar uma proposta. Na conversa inicial, informe se já existe um DPO, quais ferramentas são usadas e quais são as principais prioridades." },
    { question: "Precisamos trocar nossa plataforma de privacidade?", answer: "A TOGETHER pode operar ferramentas já utilizadas pela empresa, como OneTrust, Securiti e Privacy Tools. Avaliamos a plataforma existente, os acessos e as atividades necessárias para definir o trabalho. Licenças e eventuais novas ferramentas devem ser tratadas na proposta." },
    { question: "O serviço inclui atendimento a incidentes e resposta à ANPD?", answer: "O escopo pode contemplar apoio na avaliação e no registro de incidentes, organização de evidências e suporte às comunicações necessárias. Canais, horários, prazos de atendimento e responsabilidades são definidos na contratação, considerando as obrigações aplicáveis à empresa." },
    { question: "Como começar e em quanto tempo o serviço entra em operação?", answer: "O primeiro passo é conversar com a TOGETHER sobre sua operação. O início é planejado conforme o escopo, os acessos, os documentos disponíveis e as prioridades identificadas. Esses pontos são alinhados antes da contratação para que sua equipe saiba o que preparar e o que esperar." },
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
const marketIcons = [Layers3, GraduationCap, Users, Truck, Route, Scale];
const processIcons = [Search, FileCheck2, Settings2, TrendingUp];
const fitItems = [
    { icon: ShieldCheck, title: "Preciso de um DPO", text: "Um encarregado e uma equipe para executar a rotina." },
    { icon: Users, title: "Meu time está sobrecarregado", text: "Apoio ao DPO que já acumula muitas demandas." },
    { icon: FileCheck2, title: "Tenho uma auditoria pela frente", text: "Organização das informações e evidências solicitadas." },
    { icon: Workflow, title: "Quero dar continuidade à LGPD", text: "Acompanhamento depois da adequação inicial." },
];

export default function DpoAsAService() {
    return (
        <div className={styles.page}>
            <a href="#conteudo-dpo" className={styles.skipLink}>Ir para o conteúdo</a>
            <Navbar />
            <main id="conteudo-dpo">
                <section className={styles.hero} aria-labelledby="dpo-title">
                    <PixelDecor placement="right" mask="right" opacity={0.26} />
                    <PixelDecor placement="bottomLeft" mask="bottomLeft" opacity={0.15} />
                    <div className={styles.container}>
                        <nav className={styles.breadcrumb} aria-label="Navegação estrutural">
                            <Link href="/">Início</Link><span aria-hidden="true">/</span><span aria-current="page">DPO as a Service</span>
                        </nav>
                        <div className={styles.heroGrid}>
                            <div className={styles.heroCopy}>
                                <SectionPill>DPO as a Service</SectionPill>
                                <h1 id="dpo-title">DPO as a Service para a LGPD <span className={styles.accent}>funcionar no <span className={styles.heroPhrase}>dia a dia.</span></span></h1>
                                <p className={styles.lead}>Uma equipe especializada para assumir a rotina de privacidade da sua empresa. A TOGETHER conecta jurídico, tecnologia e processos, como DPO externo ou apoiando o seu DPO interno.</p>
                                <div className={styles.actions}>
                                    <ActionLink href="/contato" size="xl">Solicitar proposta</ActionLink>
                                    <a className={styles.textLink} href="#escopo">Conhecer as entregas <ArrowDown size={17} aria-hidden="true" /></a>
                                </div>
                                <p className={styles.heroNote}>DPO externo ou apoio ao seu DPO. O ponto de partida é o seu cenário.</p>
                            </div>
                            <aside className={styles.serviceMap} aria-label="Frentes de atuação da TOGETHER">
                                <div className={styles.mapHeading}><span className={styles.iconTile}><ShieldCheck aria-hidden="true" /></span><div><span className={styles.micro}>Sua operação de privacidade</span><h2>Um time. Três frentes.</h2></div></div>
                                <ul className={styles.fronts}>
                                    <li><span className={styles.frontIcon}><Scale aria-hidden="true" /></span><div><strong>Jurídico</strong><span>Orientação, contratos e governança LGPD.</span></div><span className={styles.frontNumber} aria-hidden="true">01</span></li>
                                    <li><span className={styles.frontIcon}><Layers3 aria-hidden="true" /></span><div><strong>Tecnologia</strong><span>Plataformas, registros e processos de dados.</span></div><span className={styles.frontNumber} aria-hidden="true">02</span></li>
                                    <li><span className={styles.frontIcon}><Users aria-hidden="true" /></span><div><strong>Operação</strong><span>Titulares, auditorias e demandas do dia a dia.</span></div><span className={styles.frontNumber} aria-hidden="true">03</span></li>
                                </ul>
                                <div className={styles.mapResult}><Check size={18} aria-hidden="true" /><span>Especialistas conectados à rotina da sua empresa.</span></div>
                            </aside>
                        </div>
                    </div>
                </section>

                <div className={styles.clients}><AuthorityStrip title="Clientes que confiam na TOGETHER" /></div>
                <nav className={styles.sectionNav} aria-label="Nesta página">
                    <div className={styles.container}><span>Nesta página</span><a href="#escopo">Entregas</a><a href="#por-que-together">Por que TOGETHER</a><a href="#modelos">Modelos de atuação</a><a href="#investimento">Investimento</a><a href="#duvidas">Dúvidas</a></div>
                </nav>

                <section className={styles.section} aria-labelledby="o-que-e">
                    <PixelDecor placement="bottomLeft" mask="bottomLeft" opacity={0.13} />
                    <div className={styles.container + " " + styles.introGrid}>
                        <div>
                            <SectionPill>Entenda o serviço</SectionPill>
                            <h2 id="o-que-e">O que é <span className={styles.accent}>DPO as a Service?</span></h2>
                            <p>DPO as a Service é a contratação de um encarregado de proteção de dados externo. Ele orienta a organização e atua como canal de comunicação com os titulares de dados pessoais e a ANPD.</p>
                            <p>Com a TOGETHER, essa atuação se conecta à execução: processos acompanhados, documentos atualizados e apoio especializado às demandas que chegam à sua empresa.</p>
                        </div>
                        <div className={styles.fitGrid}>
                            {fitItems.map(({icon: Icon, title, text}) => <article key={title}><span className={styles.smallIcon}><Icon aria-hidden="true" /></span><h3>{title}</h3><p>{text}</p></article>)}
                        </div>
                    </div>
                </section>

                <section id="escopo" className={styles.section + " " + styles.dark} aria-labelledby="escopo-title">
                    <PixelDecor placement="topRight" mask="topRight" opacity={0.19} />
                    <PixelDecor placement="bottomLeft" mask="bottomLeft" opacity={0.12} />
                    <div className={styles.container}>
                        <div className={styles.sectionHeader}>
                            <div><SectionPill tone="dark">Da orientação à execução</SectionPill><h2 id="escopo-title">O que a TOGETHER faz <span className={styles.accent}>pela sua operação.</span></h2></div>
                            <p>Explore as frentes que podem compor o serviço. O escopo é construído a partir do que sua empresa precisa.</p>
                        </div>
                        <DpoScopeExplorer items={scope} />
                        <div className={styles.scopeFooter}><p>Atividades, frequência, canais e prazos de atendimento ficam definidos na proposta.</p><ActionLink href="/contato" size="lg">Conversar sobre meu escopo</ActionLink></div>
                    </div>
                </section>

                <section id="por-que-together" className={styles.section} aria-labelledby="diferenciais-title">
                    <PixelDecor placement="topRight" mask="topRight" opacity={0.14} />
                    <div className={styles.container}>
                        <div className={styles.sectionHeader}>
                            <div><SectionPill>Por que escolher a TOGETHER</SectionPill><h2 id="diferenciais-title">Conhecimento certificado. <span className={styles.accent}>Experiência que faz diferença.</span></h2></div>
                            <p>Quem orienta. Quem executa. Como o trabalho é acompanhado. A TOGETHER conecta essas frentes para fazer a privacidade acontecer.</p>
                        </div>
                        <div className={styles.proofGrid}>
                            <article className={styles.certification}>
                                <span className={styles.proofIcon}><BadgeCheck aria-hidden="true" /></span>
                                <div><span className={styles.micro}>Conhecimento aplicado</span><h3>{differences[0].title}</h3><p>{differences[0].text}</p></div>
                                <div className={styles.platforms}>
                                    <p>Plataformas com as quais trabalhamos</p>
                                    <ul>{platforms.map(platform => <li key={platform.name}><Image src={platform.src} alt={platform.name} width={140} height={38} className={platform.whiteLogo ? styles.whiteLogo : undefined} /></li>)}</ul>
                                </div>
                            </article>
                            <article className={styles.validated}>
                                <PixelDecor placement="bottomRight" mask="bottomRight" opacity={0.16} />
                                <div className={styles.proofLabel}><Check size={20} aria-hidden="true" /><span>Da estratégia à entrega</span></div>
                                <h3>{differences[1].title}</h3><p>{differences[1].text}</p>
                                <div className={styles.validationFlow}><span>Orientar</span><ArrowRight aria-hidden="true" /><span>Executar</span><ArrowRight aria-hidden="true" /><span>Evoluir</span></div>
                            </article>
                            <article className={styles.experience}>
                                <span className={styles.smallIcon}><BriefcaseBusiness aria-hidden="true" /></span><div><h3>{differences[2].title}</h3><p>{differences[2].text}</p></div>
                            </article>
                        </div>
                        <div className={styles.markets}>
                            <div className={styles.marketHeading}><h3>Um serviço que entende <span className={styles.accent}>o seu mercado.</span></h3><p>Conheça nossa atuação por setor.</p></div>
                            <div className={styles.marketGrid}>
                                {markets.map((market, index) => { const Icon = marketIcons[index]; return <a key={market.path} href={"https://togetherprivacy.tech/solucoes/" + market.path}><span className={styles.marketIcon}><Icon aria-hidden="true" /></span><div><span className={styles.marketTitle}>{market.title}</span><p>{market.description}</p></div><ArrowUpRight size={20} aria-hidden="true" /></a>; })}
                            </div>
                        </div>
                    </div>
                </section>

                <section id="modelos" className={styles.section + " " + styles.soft} aria-labelledby="modelos-title">
                    <PixelDecor placement="bottomRight" mask="bottomRight" opacity={0.18} />
                    <div className={styles.container}>
                        <div className={styles.centerHeading}><SectionPill>O apoio certo para seu momento</SectionPill><h2 id="modelos-title">Dois caminhos. <span className={styles.accent}>A mesma equipe ao seu lado.</span></h2><p>Você pode contratar um DPO externo ou ampliar a capacidade de quem já cuida da privacidade.</p></div>
                        <div className={styles.models}>
                            {models.slice(0,2).map((model, index) => { const Icon = index === 0 ? ShieldCheck : Users; return (
                                <article key={model.title} className={index === 0 ? styles.externalModel : styles.internalModel}>
                                    <div className={styles.modelTop}><span className={styles.modelIcon}><Icon aria-hidden="true" /></span><span className={styles.micro}>{model.tag}</span></div>
                                    <h3>{model.title}</h3><p>{model.description}</p>
                                    <ul className={styles.checkList}>{model.items.map(item => <li key={item}><Check aria-hidden="true" />{item}</li>)}</ul>
                                    <ActionLink href={model.href} variant={index === 0 ? "dark" : "primary"} size="lg">{model.action}</ActionLink>
                                </article>
                            ); })}
                        </div>
                        <div className={styles.foundation}><span className={styles.smallIcon}><Layers3 aria-hidden="true" /></span><div><h3>Ainda precisa estruturar a base?</h3><p>{models[2].description}</p></div><Link href={models[2].href} className={styles.textLink}>{models[2].action}<ArrowRight size={18} aria-hidden="true" /></Link></div>
                    </div>
                </section>

                <section id="como-funciona" className={styles.section} aria-labelledby="processo-title">
                    <PixelDecor placement="bottomLeft" mask="bottomLeft" opacity={0.15} />
                    <div className={styles.container}>
                        <div className={styles.sectionHeader}><div><SectionPill>Como funciona a contratação</SectionPill><h2 id="processo-title">Do primeiro contato <span className={styles.accent}>à rotina em movimento.</span></h2></div><p>Um início organizado, com responsabilidades e prioridades alinhadas à sua operação.</p></div>
                        <ol className={styles.steps}>{steps.map((step, index) => { const Icon = processIcons[index]; return <li key={step.title}><div className={styles.stepIcon}><Icon aria-hidden="true" /><span aria-hidden="true">{String(index+1).padStart(2,"0")}</span></div><h3>{step.title}</h3><p>{step.text}</p></li>; })}</ol>
                        <div id="investimento" className={styles.investment}>
                            <div className={styles.investmentCopy}><SectionPill tone="brand">Investimento</SectionPill><h2>Quanto custa <span>DPO as a Service?</span></h2><p>O valor depende do trabalho que precisa ser feito. A proposta considera a estrutura, o volume de demandas e o nível de apoio necessário.</p><ActionLink href="/contato" variant="dark" size="lg">Solicitar proposta</ActionLink></div>
                            <div className={styles.quoteGuide}><span className={styles.micro}>Uma proposta construída com você</span><h3>Seu cenário define o escopo.</h3><dl>
                                <div><dt><span aria-hidden="true">01</span>Sua operação</dt><dd>Áreas envolvidas, processos com dados pessoais e complexidade do negócio.</dd></div>
                                <div><dt><span aria-hidden="true">02</span>A demanda de trabalho</dt><dd>Solicitações, contratos, fornecedores, auditorias e prioridades atuais.</dd></div>
                                <div><dt><span aria-hidden="true">03</span>A estrutura que já existe</dt><dd>DPO interno, equipe disponível, documentos e plataformas de privacidade.</dd></div>
                            </dl><p>Na conversa inicial, traga suas principais demandas.</p></div>
                        </div>
                    </div>
                </section>

                <section id="duvidas" className={styles.section + " " + styles.faqSection} aria-labelledby="faq-title">
                    <PixelDecor placement="topRight" mask="topRight" opacity={0.13} />
                    <div className={styles.container + " " + styles.faqGrid}>
                        <div className={styles.faqIntro}><SectionPill>Antes de contratar</SectionPill><h2 id="faq-title">Perguntas sobre <span className={styles.accent}>DPO as a Service.</span></h2><p>Respostas para comparar opções e conversar com nosso time com mais clareza.</p><div className={styles.faqContact}><strong>Vamos conversar sobre sua empresa?</strong><ActionLink href="/contato" variant="dark">Falar com a TOGETHER</ActionLink></div></div>
                        <div className={styles.faqList}>
                            {faqs.map((faq,index) => <details key={faq.question} open={index===0}><summary>{faq.question}<span><ChevronDown size={21} aria-hidden="true" /></span></summary><p>{faq.answer}</p></details>)}
                            <p className={styles.source}>Referência sobre a atuação do encarregado: <a href="https://www.gov.br/anpd/pt-br/centrais-de-conteudo/materiais-educativos-e-publicacoes/guia_da_atuacao_do_encarregado_anpd.pdf" target="_blank" rel="noopener noreferrer">Guia orientativo da ANPD <span className={styles.srOnly}>(abre em nova aba)</span></a>.</p>
                        </div>
                    </div>
                </section>

                <section className={styles.finalSection} aria-labelledby="contato-title">
                    <div className={styles.container}><div className={styles.finalFrame}>
                        <PixelDecor placement="topRight" mask="topRight" opacity={0.23} />
                        <div className={styles.finalCopy}><SectionPill tone="dark">Dê continuidade à sua privacidade</SectionPill><h2 id="contato-title">Sua próxima etapa: <span className={styles.accent}>um time para colocar a LGPD em prática.</span></h2><p>Conte à TOGETHER o que sua empresa precisa resolver. Vamos avaliar as frentes de atuação e preparar uma proposta para o seu cenário.</p><ActionLink href="/contato" size="xl">Solicitar proposta</ActionLink></div>
                        <aside className={styles.nextConversation}><span className={styles.nextIcon}><Sparkles aria-hidden="true" /></span><h3>Uma conversa.<br />Um próximo passo claro.</h3><ul className={styles.checkList}><li><Check aria-hidden="true" />Sua estrutura atual de privacidade</li><li><Check aria-hidden="true" />As demandas que pedem atenção</li><li><Check aria-hidden="true" />O modelo de apoio para sua empresa</li></ul><span className={styles.nextNote}>DPO externo ou apoio ao DPO interno.</span></aside>
                    </div></div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
