import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, BadgeCheck, Check, ChevronDown, Database, FileCheck2, Files, GraduationCap, Layers3, MoveRight, Search, ShieldCheck, Workflow } from "lucide-react";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { AuthorityStrip } from "@/components/ui/authority-strip";
import { IndustryContactLogoStrip } from "@/components/industry/industry-contact-logo-strip";
import { ActionLink, SectionPill } from "@/components/ui/site-primitives";
import { PixelDecor } from "@/components/ui/backgrounds/pixel-decor";
import { ProofStats } from "@/components/ui/proof-stats";
import { DeliverableGrid, type Deliverable } from "@/components/ui/deliverable-grid";
import { MobileProposalBar } from "@/components/contact/mobile-proposal-bar";
import { WhatsAppLink } from "@/components/contact/whatsapp-link";
import { ProposalForm, whatsappMessage } from "./proposal-form";
import styles from "./adequacao-service.module.css";

const proofStats = [
    { value: "+6 anos", label: "de experiência em privacidade" },
    { value: "Até 3 meses", label: "para concluir o projeto, em geral" },
    { value: "Até 24h", label: "para responder, geralmente no mesmo dia" },
];

const deliverables: Deliverable[] = [
    { icon: Database, title: "Data Mapping", summary: "O mapa de onde estão os dados e seus riscos.", detail: "Mapeamos como os dados entram, circulam, são compartilhados e armazenados. Analisamos finalidades, bases legais e os riscos identificados nos processos.", outputs: ["Inventário de dados (ROPA)", "Fluxos e compartilhamentos", "Pontos de atenção por processo"] },
    { icon: Search, title: "Diagnóstico e plano de ação", summary: "Prioridades definidas a partir do mapa.", detail: "Avaliamos a maturidade da empresa, os processos existentes e as lacunas de privacidade. Com isso, organizamos as prioridades do projeto.", outputs: ["Diagnóstico da situação atual", "Plano de ação priorizado", "Etapas e responsáveis definidos"] },
    { icon: Files, title: "Documentos, políticas e contratos", summary: "Documentação conectada à sua operação.", detail: "Estruturamos ou revisamos os documentos necessários ao cenário da empresa, alinhando o que está escrito ao que as equipes fazem no dia a dia.", outputs: ["Políticas e avisos de privacidade", "Cláusulas contratuais recomendadas", "Relatório de impacto (RIPD), se aplicável"] },
    { icon: Workflow, title: "Processos e governança", summary: "Responsabilidades claras para a rotina funcionar.", detail: "Definimos com suas áreas os fluxos de privacidade, o atendimento a titulares, a avaliação de fornecedores e a organização da resposta a incidentes, conforme o escopo.", outputs: ["Fluxo de atendimento a titulares", "Papéis e responsabilidades", "Controles de segurança recomendados"] },
    { icon: GraduationCap, title: "Treinamento e implementação", summary: "Sua equipe preparada para colocar em prática.", detail: "Orientamos os profissionais sobre os processos definidos e apoiamos a ativação das rotinas. As ações são alinhadas com os responsáveis internos pela implementação.", outputs: ["Treinamento das equipes", "Guia dos novos processos", "Registro das ações realizadas"] },
    { icon: FileCheck2, title: "Evidências e continuidade", summary: "Uma base organizada para seguir evoluindo.", detail: "Consolidamos as entregas, registramos as pendências e orientamos as próximas prioridades. Sua empresa recebe uma visão do que foi estruturado e do que precisa continuar.", outputs: ["Evidências organizadas", "Pendências e próximos passos", "Plano de continuidade"] },
];

const situations = [
    { title: "Um cliente está cobrando adequação?", text: "Organizamos as prioridades e as evidências necessárias para apoiar questionários, auditorias e negociações." },
    { title: "O projeto de LGPD começou, mas parou?", text: "Avaliamos o que já existe e estruturamos um plano para tirar as ações do papel com responsáveis definidos." },
    { title: "Sua empresa precisa começar?", text: "Conduzimos o diagnóstico e a implementação das bases do programa, com orientação para as áreas envolvidas." },
];

const phases = [
    { title: "Data Mapping", text: "Mapeamos como os dados pessoais entram, circulam e saem da sua empresa." },
    { title: "Priorizar", text: "Com o mapa em mãos, definimos onde vale concentrar tempo e recursos." },
    { title: "Implementar", text: "Estruturamos documentos e processos com as áreas responsáveis e orientamos a equipe." },
    { title: "Dar continuidade", text: "Consolidamos as evidências e alinhamos o que a empresa precisa manter e acompanhar." },
];

const methodBenefits = ["Adequação sob medida para a sua empresa", "Tempo e recursos onde realmente importam", "Investimento otimizado, sem gastos com o que não precisa mudar"];

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
    { question: "O que é uma consultoria de adequação à LGPD?", answer: "É um projeto para avaliar como a empresa trata dados pessoais e organizar as medidas necessárias ao seu contexto. Envolve diagnóstico, mapeamento de dados, documentação, processos e orientação das equipes. Na TOGETHER, as frentes são conectadas em um plano de ação, com entregas e responsabilidades definidas." },
    { question: "Quanto custa adequar minha empresa à LGPD?", answer: "O investimento considera o porte e a complexidade da operação, os processos que tratam dados, o que já foi implementado e as entregas necessárias. A proposta da TOGETHER é construída a partir desse cenário." },
    { question: "Quanto tempo leva o projeto de adequação?", answer: "Em geral, o projeto é concluído em até 3 meses. O cronograma depende do escopo, da quantidade de áreas e processos, da documentação disponível e da participação dos responsáveis internos. Alinhamos as etapas e os prazos na proposta. Se existe uma data de auditoria ou negociação, informe esse contexto para avaliarmos as entregas prioritárias e a viabilidade do prazo." },
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
            <Navbar prefetch={false} ctaHref="#proposta-final" ctaLabel="Agende uma conversa" />
            <main id="conteudo-adequacao">
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema).replace(/</g, "\\u003c") }} />
                <section className={styles.hero} aria-labelledby="adequacao-title">
                    <PixelDecor placement="right" mask="right" opacity={0.22} />
                    <PixelDecor placement="bottomLeft" mask="bottomLeft" opacity={0.12} />
                    <div className={styles.container}>
                        <nav className={styles.breadcrumb} aria-label="Navegação estrutural"><Link href="/">Início</Link><span aria-hidden="true">/</span><span aria-current="page">Consultoria de adequação LGPD</span></nav>
                        <div className={styles.heroGrid}>
                            <div className={styles.heroCopy}>
                                <SectionPill>Diagnóstico gratuito de 30 min</SectionPill>
                                <h1 id="adequacao-title">Adequação à LGPD para empresas <span className={styles.accent}>em até 3 meses.</span></h1>
                                <p className={styles.lead}>Começamos pelo Data Mapping para saber onde focar tempo e investimento. Depois, documentos, processos e treinamento sob medida, com jurídico e tecnologia no mesmo time.</p>
                                <a href="#escopo" className={styles.textLink + " " + styles.heroLink}>Ver o que você recebe <ArrowDown size={17} aria-hidden="true" /></a>
                                <div className={styles.heroStats}><ProofStats items={proofStats} label="A TOGETHER em números" /></div>
                            </div>
                            <ProposalForm placement="hero" />
                        </div>
                    </div>
                </section>

                <div className={styles.clients}><AuthorityStrip title="Clientes que confiam na TOGETHER" /></div>

                <section className={styles.section} aria-labelledby="cenario-title">
                    <div className={styles.container}>
                        <div className={styles.sectionHeader}><div><SectionPill>O ponto de partida é a sua empresa</SectionPill><h2 id="cenario-title">O que trouxe você <span className={styles.accent}>até aqui?</span></h2></div></div>
                        <div className={styles.situations}>{situations.map((item) => <article key={item.title}><span className={styles.situationMark} aria-hidden="true"><ArrowUpRight size={23} /></span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
                        <div className={styles.situationsCta}><div><span className={styles.micro}>Diagnóstico inicial gratuito</span><h3>A TOGETHER resolve <span className={styles.accent}>todos esses cenários.</span></h3></div><div><p>Em 30 minutos, entendemos o seu ponto de partida e indicamos o caminho. Sem compromisso.</p><ActionLink href="#solicitar-proposta" size="lg">Agende uma conversa</ActionLink></div></div>
                    </div>
                </section>

                <section id="escopo" className={styles.section + " " + styles.dark} aria-labelledby="escopo-title">
                    <PixelDecor placement="topRight" mask="topRight" opacity={0.17} />
                    <div className={styles.container}>
                        <div className={styles.sectionHeader}><div><SectionPill tone="dark">O que você recebe</SectionPill><h2 id="escopo-title">Seis frentes. <span className={styles.accent}>Entregas que ficam com você.</span></h2></div><p>Cada frente mostra o que fica com a sua empresa. Quer saber como fazemos? Abra os detalhes de cada uma.</p></div>
                        <DeliverableGrid items={deliverables} detailLabel="Como fazemos" />
                        <div className={styles.scopeFooter}><p>Na proposta, você vê quais entregas se aplicam à sua empresa e o que fica com cada parte.</p><ActionLink href="#proposta-final" size="lg">Agende uma conversa</ActionLink></div>
                    </div>
                </section>

                <section id="metodo" className={styles.section} aria-labelledby="metodo-title">
                    <div className={styles.container}>
                        <div className={styles.sectionHeader}><div><SectionPill>Como funciona</SectionPill><h2 id="metodo-title">Começamos pelo Data Mapping. <span className={styles.accent}>Você investe onde importa.</span></h2></div><p>Mapear os dados primeiro mostra onde focar. Assim, a adequação é feita sob medida, o projeto fica mais direcionado e o investimento vai para o que realmente precisa mudar.</p></div>
                        <ol className={styles.phases}>{phases.map((phase, index) => <li key={phase.title}><div className={styles.phaseTop}><span>0{index + 1}</span>{index < phases.length - 1 && <MoveRight size={29} aria-hidden="true" />}</div><h3>{phase.title}</h3><p>{phase.text}</p></li>)}</ol>
                        <ul className={styles.methodBenefits} aria-label="Por que começar pelo Data Mapping">{methodBenefits.map((benefit) => <li key={benefit}><Check size={18} aria-hidden="true" />{benefit}</li>)}</ul>
                    </div>
                </section>

                <section id="por-que-together" className={styles.section + " " + styles.soft} aria-labelledby="diferenciais-title">
                    <PixelDecor placement="bottomLeft" mask="bottomLeft" opacity={0.12} />
                    <div className={styles.container}>
                        <div className={styles.proofGrid}>
                            <div className={styles.proofCopy}><SectionPill>Por que escolher a TOGETHER</SectionPill><h2 id="diferenciais-title">Quem entende de LGPD <span className={styles.accent}>e de tecnologia.</span></h2><p>Advogados, DPOs e analistas que levam as exigências da LGPD para a rotina da sua empresa.</p><div className={styles.proofPoints}>
                                <article><BadgeCheck size={25} aria-hidden="true" /><div><h3>Especialistas certificados</h3><p>Certificação internacional EXIN em proteção de dados e certificações nas principais plataformas de privacidade do mercado.</p></div></article>
                                <article><Layers3 size={25} aria-hidden="true" /><div><h3>Entregas para a sua operação</h3><p>Plano de ação, inventário de dados, políticas e fluxos de privacidade pensados para a rotina das suas equipes.</p></div></article>
                                <article><ShieldCheck size={25} aria-hidden="true" /><div><h3>Mais de 6 anos em privacidade</h3><p>Experiência em diferentes mercados, adaptando o trabalho aos tipos de dados, às relações comerciais e às rotinas de cada negócio.</p></div></article>
                            </div></div>
                            <aside className={styles.platformPanel} aria-labelledby="plataformas-title"><span className={styles.platformSymbol} aria-hidden="true"><Layers3 size={32} /></span><h3 id="plataformas-title">Tecnologia a serviço <span>da adequação.</span></h3><p>Avaliamos a estrutura que sua empresa já utiliza para conectar o projeto aos seus processos e ferramentas.</p><div className={styles.platforms}><span className={styles.micro}>Plataformas com as quais trabalhamos</span><ul>{platforms.map((platform) => <li key={platform.name}><Image src={platform.src} alt={platform.name} width={140} height={40} className={platform.whiteLogo ? styles.whiteLogo : undefined} /></li>)}</ul></div><p className={styles.platformNote}>A necessidade de ferramentas e licenças é avaliada no escopo do projeto.</p></aside>
                        </div>
                    </div>
                </section>

                <section id="duvidas" className={styles.section + " " + styles.faqSection} aria-labelledby="faq-title">
                    <div className={styles.container + " " + styles.faqGrid}><div className={styles.faqIntro}><SectionPill>Antes de contratar</SectionPill><h2 id="faq-title">Perguntas sobre <span className={styles.accent}>adequação à LGPD.</span></h2><p>O que você precisa saber para dar o próximo passo com clareza.</p><div className={styles.faqContact}><strong>Vamos conversar sobre sua empresa?</strong><ActionLink href="#proposta-final" variant="dark">Falar com a TOGETHER</ActionLink></div></div><div className={styles.faqList}>{faqs.map((faq, index) => <details key={faq.question} open={index === 0}><summary>{faq.question}<span><ChevronDown size={21} aria-hidden="true" /></span></summary><p>{faq.answer}</p></details>)}<p className={styles.source}>Para conhecer os conceitos de proteção de dados, consulte as <a href="https://www.gov.br/anpd/pt-br/acesso-a-informacao/perguntas-frequentes" target="_blank" rel="noopener noreferrer">perguntas frequentes da ANPD<span className={styles.srOnly}> (abre em nova aba)</span></a>.</p></div></div>
                </section>

                <section className={styles.finalSection} aria-labelledby="proposta-title">
                    <PixelDecor placement="topRight" mask="topRight" opacity={0.18} />
                    <div className={styles.container}><div className={styles.finalFrame}>
                    <div className={styles.finalCopy}>
                        <SectionPill>Seu próximo passo na LGPD</SectionPill>
                        <h2 id="proposta-title">Comece a adequar sua empresa <span className={styles.accent}>à LGPD.</span></h2>
                        <p>Conte o momento da sua empresa. No diagnóstico inicial de 30 minutos, entendemos as prioridades e indicamos por onde começar.</p>
                        <p className={styles.proposalNextStep}>Gratuito e sem compromisso. Respondemos no mesmo dia, em até 24 horas.</p>
                        <p className={styles.proposalSummary}>Diagnóstico, plano de ação, inventário de dados, documentos e treinamento, em geral concluídos em até 3 meses.</p>
                        <div className={styles.contactLogos}><IndustryContactLogoStrip /></div>
                    </div>
                    <ProposalForm />
                </div></div></section>
            </main>
            <MobileProposalBar href="#proposta-final" label="Agende uma conversa" note="Diagnóstico inicial gratuito de 30 min."><WhatsAppLink message={whatsappMessage} variant="compact" location="barra_mobile" /></MobileProposalBar>
            <Footer />
        </div>
    );
}
