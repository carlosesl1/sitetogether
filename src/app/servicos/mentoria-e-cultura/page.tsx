import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight, BadgeCheck, BookOpen, Check, ChevronDown, GraduationCap, Layers3, MessagesSquare, Users } from "lucide-react";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { AuthorityStrip } from "@/components/ui/authority-strip";
import { ActionLink, SectionPill } from "@/components/ui/site-primitives";
import { PixelDecor } from "@/components/ui/backgrounds/pixel-decor";
import { CultureExplorer } from "./culture-explorer";
import styles from "./mentoria-service.module.css";

const programs = [
    {
        title: "Treinamentos e workshops",
        audience: "Para envolver as equipes",
        description: "Conceitos de LGPD, situações da rotina e boas práticas apresentados na linguagem de quem trabalha com dados todos os dias.",
        focus: "Conscientização geral ou trilhas por departamento.",
        application: "Reconhecer situações de atenção e entender quais cuidados e fluxos fazem parte do trabalho.",
        icon: GraduationCap,
    },
    {
        title: "Mentoria para DPOs e analistas",
        audience: "Para aprofundar a atuação",
        description: "Orientação aplicada às dúvidas, aos processos e às ferramentas de quem já participa da operação de privacidade.",
        focus: "Equipe de privacidade, DPO, jurídico e profissionais envolvidos no programa.",
        application: "Discutir situações da operação e conectar o conhecimento técnico à condução das atividades.",
        icon: MessagesSquare,
    },
    {
        title: "Formação de Privacy Champions",
        audience: "Para multiplicar o conhecimento",
        description: "Capacitação de pessoas-chave para reforçar boas práticas e ajudar a conectar cada área ao time de privacidade.",
        focus: "Profissionais de referência nos departamentos.",
        application: "Orientar colegas, reconhecer dúvidas recorrentes e encaminhar demandas ao DPO ou à área responsável.",
        icon: Users,
    },
];

const areas = [
    { name: "RH e pessoas", question: "Quem precisa ter acesso a este documento?", description: "Currículos, admissões, dados de colaboradores e compartilhamento de documentos fazem parte da rotina de RH. A capacitação leva esses cenários para a conversa.", topics: ["Coleta e uso de dados de candidatos e colaboradores", "Acesso, compartilhamento e guarda de documentos", "Encaminhamento de dúvidas e solicitações"], takeaway: "Uma equipe que entende os cuidados com dados em cada etapa da relação de trabalho." },
    { name: "Marketing e vendas", question: "Podemos usar esta base na próxima campanha?", description: "Campanhas, formulários, CRM e parceiros envolvem decisões sobre dados. Trabalhamos exemplos que conectam a atividade comercial aos processos de privacidade.", topics: ["Finalidades e bases legais no uso de dados", "Formulários, campanhas e preferências de contato", "Compartilhamento com parceiros e fornecedores"], takeaway: "Mais clareza para planejar ações e reconhecer quando envolver o time de privacidade." },
    { name: "TI e produto", question: "Este acesso ainda faz sentido?", description: "Sistemas, permissões, integrações e novas ferramentas mudam a forma como os dados circulam. Os temas acompanham as decisões técnicas da equipe.", topics: ["Acessos, compartilhamento e boas práticas de segurança", "Privacidade no uso de ferramentas e inteligência artificial", "Identificação e encaminhamento de possíveis incidentes"], takeaway: "Profissionais atentos aos impactos das decisões técnicas sobre os dados pessoais." },
    { name: "DPO e jurídico", question: "Como orientar a área e registrar a decisão?", description: "O time de privacidade precisa transformar demandas em orientação prática. A mentoria conecta os temas aos processos, às ferramentas e aos interlocutores da empresa.", topics: ["Bases legais, contratos e avaliação de situações", "Atendimento a titulares e organização de registros", "Uso das plataformas e comunicação com as áreas"], takeaway: "Conhecimento aplicado à análise das demandas e à orientação dos responsáveis internos." },
];

const steps = [
    { title: "Entender o time", text: "Conhecemos as áreas, o nível de conhecimento e as situações que motivaram a capacitação.", output: "Diagnóstico do público e das necessidades" },
    { title: "Desenhar a trilha", text: "Selecionamos os temas, os exemplos e o formato de acordo com o contexto da empresa.", output: "Conteúdo e agenda alinhados" },
    { title: "Praticar em conjunto", text: "Conduzimos o aprendizado com situações da operação e espaço para as dúvidas dos participantes.", output: "Workshops, treinamentos ou mentoria" },
    { title: "Reforçar a aplicação", text: "Definimos como retomar os conteúdos e conectar o aprendizado à continuidade do programa.", output: "Próximas ações de capacitação" },
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

const faqs = [
    { question: "Para quem são os treinamentos de LGPD da TOGETHER?", answer: "Os programas atendem equipes que precisam conhecer e aplicar boas práticas de privacidade, profissionais que já atuam como DPOs ou analistas e pessoas que serão multiplicadoras nas áreas. O conteúdo considera o conhecimento prévio e as atividades do público participante." },
    { question: "Qual a diferença entre treinamento, mentoria e Privacy Champions?", answer: "O treinamento desenvolve conhecimentos e práticas para um público ou departamento. A mentoria aprofunda as situações e dúvidas de quem atua na operação de privacidade. A formação de Privacy Champions prepara pessoas-chave para reforçar orientações e apoiar a conexão entre as áreas e o DPO. Os formatos podem ser combinados no programa." },
    { question: "Os conteúdos são adaptados aos processos da empresa?", answer: "Sim. O ponto de partida são os processos, as ferramentas e as situações que as equipes encontram no trabalho. O levantamento inicial ajuda a selecionar temas e exemplos para RH, marketing, vendas, TI, jurídico e outras áreas que tratam dados." },
    { question: "Os conteúdos podem ficar disponíveis para novos colaboradores?", answer: "O programa pode incluir conteúdos gravados para integração de novos profissionais, reciclagem e consulta. Os materiais, as condições de acesso e a disponibilidade são definidos no escopo da contratação." },
    { question: "A mentoria pode abordar nossa plataforma de privacidade?", answer: "Sim. A capacitação pode contemplar os processos e as ferramentas de privacidade utilizados pela empresa. Avaliamos a plataforma e as atividades que a equipe precisa aprender para definir os temas. Licenças e condições de acesso são alinhadas na proposta." },
    { question: "Como funcionam os Privacy Champions?", answer: "São pessoas de referência nos departamentos, capacitadas para reforçar boas práticas, reconhecer situações que merecem atenção e encaminhar dúvidas aos responsáveis pelo programa. A formação ajuda esses profissionais a apoiar os colegas e a manter a conexão com o DPO." },
    { question: "Qual é a duração e quanto custa o programa?", answer: "A duração e o investimento dependem do público, dos temas, da profundidade e dos formatos escolhidos. Na conversa inicial, compartilhe as áreas envolvidas, o número aproximado de participantes, a prioridade de capacitação e a agenda desejada. Esses pontos orientam a proposta." },
    { question: "O programa substitui a adequação à LGPD ou o DPO?", answer: "Os serviços se complementam. A mentoria e os treinamentos desenvolvem conhecimento e aplicação prática nas equipes. A consultoria de adequação estrutura processos, documentos e controles; o DPO as a Service apoia a operação contínua de privacidade. Podemos indicar a combinação adequada ao momento da empresa." },
];

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Mentoria, treinamentos LGPD e cultura de privacidade",
    serviceType: "Capacitação corporativa em privacidade e proteção de dados",
    url: "https://togetherprivacy.tech/servicos/mentoria-e-cultura",
    description: "Workshops, treinamentos por área, mentoria para equipes de privacidade e formação de Privacy Champions.",
    provider: { "@type": "Organization", name: "TOGETHER Privacy & Tech", url: "https://togetherprivacy.tech" },
};

export default function MentoriaECultura() {
    return (
        <div className={styles.page}>
            <a href="#conteudo-mentoria" className={styles.skipLink}>Ir para o conteúdo</a>
            <Navbar />
            <main id="conteudo-mentoria">
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema).replace(/</g, "\\u003c") }} />
                <section className={styles.hero} aria-labelledby="mentoria-title">
                    <PixelDecor placement="right" mask="right" opacity={0.22} />
                    <PixelDecor placement="bottomLeft" mask="bottomLeft" opacity={0.12} />
                    <div className={styles.container}>
                        <nav className={styles.breadcrumb} aria-label="Navegação estrutural"><Link href="/">Início</Link><span aria-hidden="true">/</span><span aria-current="page">Mentoria e Cultura</span></nav>
                        <div className={styles.heroGrid}>
                            <div className={styles.heroCopy}>
                                <SectionPill>Mentoria e cultura de privacidade</SectionPill>
                                <h1 id="mentoria-title">Treinamentos LGPD. <span className={styles.accent}>Conhecimento que vira prática.</span></h1>
                                <p className={styles.lead}>Workshops, mentoria para equipes de privacidade e formação de multiplicadores. A TOGETHER conecta o aprendizado aos dados, às ferramentas e às decisões que fazem parte do trabalho.</p>
                                <div className={styles.actions}><ActionLink href="/contato" size="xl">Solicitar proposta</ActionLink><a href="#escopo" className={styles.textLink}>Explorar os programas <ArrowDown size={17} aria-hidden="true" /></a></div>
                                <p className={styles.heroNote}>Conteúdo, formato e agenda pensados para o seu time.</p>
                            </div>
                            <aside className={styles.learningMap} aria-label="Do aprendizado à cultura de privacidade">
                                <div className={styles.mapHeading}><span className={styles.mapIcon}><BookOpen size={27} aria-hidden="true" /></span><div><span className={styles.micro}>Uma cultura que se constrói</span><h2>Pessoas preparadas.<br />Conhecimento em movimento.</h2></div></div>
                                <ol className={styles.learningSteps}>
                                    <li><span className={styles.stepNumber}>01</span><div><strong>Entender</strong><p>Reconhecer os dados e os cuidados da rotina.</p></div></li>
                                    <li><span className={styles.stepNumber}>02</span><div><strong>Praticar</strong><p>Conectar o conteúdo às decisões do trabalho.</p></div></li>
                                    <li><span className={styles.stepNumber}>03</span><div><strong>Multiplicar</strong><p>Levar boas práticas para dentro de cada área.</p></div></li>
                                </ol>
                                <p className={styles.mapNote}><Check size={17} aria-hidden="true" />O aprendizado continua na operação.</p>
                            </aside>
                        </div>
                    </div>
                </section>

                <div className={styles.clients}><AuthorityStrip title="Clientes que confiam na TOGETHER" /></div>
                <nav className={styles.sectionNav} aria-label="Nesta página"><div className={styles.container}><span>Conheça os programas</span><a href="#escopo">Formatos</a><a href="#na-pratica">Na sua área</a><a href="#metodologia">Como funciona</a><a href="#por-que-together">Por que TOGETHER</a><a href="#duvidas">Dúvidas</a></div></nav>

                <section id="escopo" className={styles.section} aria-labelledby="programas-title">
                    <div className={styles.container}>
                        <div className={styles.sectionHeader}><div><SectionPill>Três formas de desenvolver o time</SectionPill><h2 id="programas-title">Da primeira orientação <span className={styles.accent}>à referência interna.</span></h2></div><p>Escolha o ponto de partida da sua empresa. Os programas podem ser combinados para atender diferentes públicos e níveis de conhecimento.</p></div>
                        <div className={styles.programs}>{programs.map(({ title, audience, description, focus, application, icon: Icon }, index) => <article key={title} className={styles.program}>
                            <div className={styles.programIdentity}><span className={styles.programNumber}>0{index + 1}</span><span className={styles.micro}>{audience}</span><h3>{title}</h3><span className={styles.programIcon}><Icon size={25} aria-hidden="true" /></span></div>
                            <div className={styles.programDescription}><p>{description}</p><div><span className={styles.micro}>Foco do programa</span><p>{focus}</p></div></div>
                            <div className={styles.programApplication}><span className={styles.micro}>Para aplicar no trabalho</span><p>{application}</p><Check size={22} aria-hidden="true" /></div>
                        </article>)}</div>
                        <div className={styles.sectionFooter}><p>Não sabe por onde começar? Conte qual equipe você precisa preparar e o que ela enfrenta hoje.</p><ActionLink href="/contato" variant="dark" size="lg">Conversar sobre meu time</ActionLink></div>
                    </div>
                </section>

                <section id="na-pratica" className={styles.section + " " + styles.dark} aria-labelledby="rotina-title">
                    <PixelDecor placement="topRight" mask="topRight" opacity={0.19} />
                    <div className={styles.container}>
                        <div className={styles.sectionHeader}><div><SectionPill tone="dark">O conteúdo encontra a rotina</SectionPill><h2 id="rotina-title">Cada área lida com dados. <span className={styles.accent}>Cada trilha faz sentido.</span></h2></div><p>Explore exemplos de situações e temas que podem orientar a capacitação. A seleção final considera os processos da sua empresa.</p></div>
                        <CultureExplorer areas={areas} />
                        <p className={styles.explorerNote}>Sua equipe atua em outra área? Adaptamos os temas aos processos, às ferramentas e ao conhecimento de cada público.</p>
                    </div>
                </section>

                <section id="metodologia" className={styles.section} aria-labelledby="metodo-title">
                    <div className={styles.container}>
                        <div className={styles.sectionHeader}><div><SectionPill>Como o programa acontece</SectionPill><h2 id="metodo-title">Uma trilha pensada <span className={styles.accent}>para quem vai aprender.</span></h2></div><p>Conectamos o nível de conhecimento da equipe aos temas, aos formatos e às situações que precisam de atenção.</p></div>
                        <ol className={styles.phases}>{steps.map((step, index) => <li key={step.title}><span className={styles.phaseNumber}>0{index + 1}</span><h3>{step.title}</h3><p>{step.text}</p><div className={styles.phaseOutput}><Check size={16} aria-hidden="true" />{step.output}</div></li>)}</ol>
                        <div className={styles.learningResources}><div><span className={styles.micro}>Conhecimento para retomar</span><h3>O time muda.<br /><span className={styles.accent}>O aprendizado pode continuar.</span></h3><p>O programa pode incluir conteúdos gravados para integração de novos profissionais, reciclagem e consulta.</p></div><div className={styles.resourceUses}><span><BookOpen size={22} aria-hidden="true" /><strong>Integração</strong><span>Uma base para quem está chegando.</span></span><span><GraduationCap size={22} aria-hidden="true" /><strong>Reciclagem</strong><span>Temas importantes revisitados pela equipe.</span></span><span><MessagesSquare size={22} aria-hidden="true" /><strong>Consulta</strong><span>Conteúdo de apoio às dúvidas da rotina.</span></span></div><p className={styles.resourceNote}>Materiais, gravações e condições de acesso são definidos no escopo contratado.</p></div>
                    </div>
                </section>

                <section className={styles.championsSection} aria-labelledby="champions-title">
                    <div className={styles.container}><div className={styles.championsFrame}>
                        <div className={styles.championsCopy}><SectionPill>Privacy Champions</SectionPill><h2 id="champions-title">Uma referência em cada área. <span className={styles.accent}>Um time mais conectado.</span></h2><p>Multiplicadores ajudam a levar as orientações de privacidade para perto de quem trata dados. A formação prepara essas pessoas para apoiar os colegas e manter o diálogo com o DPO.</p><a href="/contato" className={styles.textLink}>Quero formar multiplicadores <ArrowRight size={17} aria-hidden="true" /></a></div>
                        <div className={styles.championRoles}><span className={styles.micro}>O papel do multiplicador</span><ul><li><span>Reconhecer</span><p>Perceber situações da área que precisam de orientação.</p></li><li><span>Reforçar</span><p>Manter boas práticas presentes nas atividades da equipe.</p></li><li><span>Conectar</span><p>Encaminhar dúvidas e demandas ao time de privacidade.</p></li></ul><div className={styles.championConnection}><Users size={20} aria-hidden="true" /><span>Equipes</span><span aria-hidden="true">↔</span><span>Multiplicadores</span><span aria-hidden="true">↔</span><span>DPO</span></div></div>
                    </div></div>
                </section>

                <section id="por-que-together" className={styles.section} aria-labelledby="diferenciais-title">
                    <div className={styles.container + " " + styles.proofGrid}>
                        <div className={styles.proofCopy}><SectionPill>Por que escolher a TOGETHER</SectionPill><h2 id="diferenciais-title">Quem conhece a operação <span className={styles.accent}>ensina com contexto.</span></h2><p>A experiência em jurídico, tecnologia e processos orienta uma capacitação próxima da realidade das empresas.</p><div className={styles.proofPoints}>
                            <article><BadgeCheck size={24} aria-hidden="true" /><div><h3>Especialistas certificados</h3><p>Equipe com certificações nas principais plataformas de privacidade do mercado, conectando conhecimento técnico e uso das ferramentas.</p></div></article>
                            <article><Layers3 size={24} aria-hidden="true" /><div><h3>Uma solução validada na prática</h3><p>O aprendizado se apoia em uma solução validada que reúne jurídico, tecnologia e os processos da operação.</p></div></article>
                            <article><Users size={24} aria-hidden="true" /><div><h3>Repertório de diferentes mercados</h3><p>Adaptamos os exemplos aos dados, às relações e às atividades de cada negócio.</p></div></article>
                        </div><div className={styles.marketLinks}><span className={styles.micro}>Conheça nossa atuação</span><a href="https://togetherprivacy.tech/solucoes/privacidade-saas">Tecnologia <ArrowUpRight size={15} aria-hidden="true" /></a><a href="https://togetherprivacy.tech/solucoes/privacidade-escolas-particulares">Educação <ArrowUpRight size={15} aria-hidden="true" /></a><a href="https://togetherprivacy.tech/solucoes/privacidade-transporte-fracionado">Logística <ArrowUpRight size={15} aria-hidden="true" /></a></div></div>
                        <aside className={styles.platformPanel} aria-labelledby="plataformas-title"><span className={styles.platformIcon}><Layers3 size={30} aria-hidden="true" /></span><h3 id="plataformas-title">A ferramenta faz parte <span>do aprendizado.</span></h3><p>A capacitação pode abordar as plataformas utilizadas pela equipe, conectando funcionalidades, registros e processos da empresa.</p><div className={styles.platforms}><span className={styles.micro}>Plataformas com as quais trabalhamos</span><ul>{platforms.map((platform) => <li key={platform.name}><Image src={platform.src} alt={platform.name} width={140} height={40} className={platform.whiteLogo ? styles.whiteLogo : undefined} /></li>)}</ul></div><p className={styles.platformNote}>Temas, ferramentas e condições de acesso são alinhados na proposta.</p></aside>
                    </div>
                </section>

                <section className={styles.proposalSection} aria-labelledby="proposta-programa-title">
                    <div className={styles.container}><div className={styles.proposalFrame}><div><SectionPill>Um programa para o seu cenário</SectionPill><h2 id="proposta-programa-title">Quem precisa aprender <span className={styles.accent}>o quê, agora?</span></h2><p>Essa conversa orienta os temas, os formatos, a duração e o investimento. Traga suas prioridades para construirmos uma proposta.</p><ActionLink href="/contato" variant="dark" size="lg">Solicitar proposta</ActionLink></div><dl className={styles.proposalQuestions}><div><dt>Quem participa?</dt><dd>Áreas envolvidas, número aproximado de pessoas e experiência com LGPD.</dd></div><div><dt>O que precisa mudar?</dt><dd>Dúvidas recorrentes, novos processos, ferramentas ou formação de multiplicadores.</dd></div><div><dt>Qual é o momento?</dt><dd>Integração de colaboradores, reciclagem, evolução do programa e agenda desejada.</dd></div></dl></div></div>
                </section>

                <section id="duvidas" className={styles.section} aria-labelledby="faq-title">
                    <div className={styles.container + " " + styles.faqGrid}><div className={styles.faqIntro}><SectionPill>Antes de contratar</SectionPill><h2 id="faq-title">Perguntas sobre <span className={styles.accent}>mentoria e cultura.</span></h2><p>Entenda os formatos e como preparar o programa para a sua equipe.</p><div className={styles.faqContact}><strong>Vamos conversar sobre o seu time?</strong><ActionLink href="/contato" variant="dark">Falar com a TOGETHER</ActionLink></div></div><div className={styles.faqList}>{faqs.map((faq, index) => <details key={faq.question} open={index === 0}><summary>{faq.question}<span><ChevronDown size={21} aria-hidden="true" /></span></summary><p>{faq.answer}</p></details>)}<div className={styles.relatedLinks}><span>Conheça também</span><Link href="/servicos/consultoria-adequacao">Consultoria de adequação <ArrowUpRight size={16} aria-hidden="true" /></Link><Link href="/servicos/dpo-as-a-service">DPO as a Service <ArrowUpRight size={16} aria-hidden="true" /></Link></div></div></div>
                </section>

                <section className={styles.finalSection} aria-labelledby="contato-title"><div className={styles.container}><div className={styles.finalFrame}>
                    <PixelDecor placement="topRight" mask="topRight" opacity={0.22} />
                    <div className={styles.finalCopy}><SectionPill tone="dark">Prepare o próximo passo do seu time</SectionPill><h2 id="contato-title">Leve a privacidade para <span className={styles.accent}>as decisões de todos os dias.</span></h2><p>Conte quem você precisa capacitar. A TOGETHER ajuda a desenhar um programa que faça sentido para as pessoas e para a operação.</p><ActionLink href="/contato" size="xl">Solicitar proposta</ActionLink></div>
                    <aside className={styles.nextStep}><span className={styles.micro}>Na conversa com nosso time</span><h3>Pessoas, prioridades<br />e um caminho para aprender.</h3><ul><li><Check size={19} aria-hidden="true" />Entendemos o público e o contexto</li><li><Check size={19} aria-hidden="true" />Alinhamos os temas e os formatos</li><li><Check size={19} aria-hidden="true" />Preparamos a proposta do programa</li></ul><span className={styles.nextStepNote}>Treinamentos, mentoria e multiplicadores.</span></aside>
                </div></div></section>
            </main>
            <Footer />
        </div>
    );
}
