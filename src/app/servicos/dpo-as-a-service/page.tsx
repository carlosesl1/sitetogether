import Link from "next/link";
import Image from "next/image";
import { ArrowDown, ArrowRight, BadgeCheck, BriefcaseBusiness, Check, ChevronDown, FileCheck2, GraduationCap, Layers3, Scale, Search, Settings2, ShieldCheck, TrendingUp, Users, Workflow } from "lucide-react";
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
import { DpoProposalForm, whatsappMessage } from "./proposal-form";
import styles from "./dpo-service.module.css";

const proofStats = [
    { value: "+6 anos", label: "de experiência em privacidade" },
    { value: "+200", label: "atividades e entregas mapeadas" },
    { value: "Até 24h", label: "para responder, geralmente no mesmo dia" },
];

const scope: Deliverable[] = [
    { icon: Users, title: "Encarregado e atendimento a titulares", summary: "DPO externo ou apoio ao seu DPO interno.", detail: "Atuação como DPO externo ou apoio ao DPO interno, com organização do canal de privacidade, acompanhamento de solicitações e apoio nas comunicações com a ANPD.", outputs: ["Canal de privacidade organizado", "Solicitações de titulares acompanhadas", "Apoio nas comunicações com a ANPD"] },
    { icon: Scale, title: "Governança e documentos", summary: "A proteção de dados acompanhando as mudanças da empresa.", detail: "Revisão de processos, políticas e registros para que a proteção de dados acompanhe as mudanças da empresa.", outputs: ["Plano de ação com responsáveis", "Políticas e registros atualizados", "Processos revisados"] },
    { icon: FileCheck2, title: "Contratos, fornecedores e auditorias", summary: "Apoio para responder clientes e auditores.", detail: "Apoio na avaliação de fornecedores, revisão de cláusulas de privacidade e resposta a questionários de clientes e auditorias.", outputs: ["Fornecedores avaliados", "Cláusulas de privacidade revisadas", "Questionários respondidos com evidências"] },
    { icon: Layers3, title: "Operação das plataformas", summary: "Sistema contratado e parado? Colocamos para funcionar.", detail: "Muitas empresas contratam um sistema de privacidade e não chegam a usá-lo por falta de conhecimento da ferramenta. Fazemos a implementação, configuramos o sistema e treinamos a equipe para que ele funcione na rotina, com registros e atividades sempre atualizados.", outputs: ["Implementação e configuração", "Treinamento da equipe no sistema", "Plataforma em uso no dia a dia"] },
    { icon: ShieldCheck, title: "Preparação e apoio em incidentes", summary: "Um fluxo pronto antes de precisar dele.", detail: "Organização do fluxo de resposta e apoio na avaliação de incidentes envolvendo dados pessoais, em conjunto com as áreas responsáveis.", outputs: ["Fluxo de resposta definido", "Avaliação e registro de incidentes", "Orientação sobre os próximos passos"] },
    { icon: GraduationCap, title: "Orientação das equipes", summary: "O programa de privacidade evoluindo com a empresa.", detail: "Orientações para quem trata dados, acompanhamento de mudanças regulatórias e revisão das prioridades do programa.", outputs: ["Orientação para quem trata dados", "Acompanhamento regulatório", "Revisão das prioridades do programa"] },
];

const differences = [
    { icon: ShieldCheck, title: "Especialistas certificados nas principais plataformas", text: "Advogados, DPOs e analistas com certificação internacional EXIN em proteção de dados e certificações nas principais plataformas de privacidade do mercado. Esse conhecimento apoia a configuração, a gestão e o uso das ferramentas na sua operação." },
    { icon: Layers3, title: "Mais de 200 atividades mapeadas", text: "Um método com mais de 200 atividades e entregas que cobrem a rotina de conformidade com a LGPD. O trabalho aparece em atividades executadas, registros organizados e prioridades acompanhadas." },
    { icon: FileCheck2, title: "Mais de 6 anos em privacidade", text: "Experiência em diferentes mercados, adaptando a atuação aos dados, aos processos e às demandas de cada negócio. Seu time recebe apoio para lidar com fornecedores, clientes, auditorias e a rotina de privacidade." },
];

const models = [
    { tag: "Preciso de um encarregado", title: "DPO externo", description: "Para empresas que querem contratar a função de encarregado com suporte especializado para a operação de privacidade.", items: ["Atuação como encarregado", "Acompanhamento da rotina de LGPD", "Interface com suas áreas internas"], action: "Conversar sobre DPO externo", href: "#proposta-final" },
    { tag: "Já tenho um encarregado", title: "Apoio ao DPO interno", description: "Para empresas que já têm um responsável e precisam de capacidade técnica e operacional para executar as demandas.", items: ["Apoio ao profissional já nomeado", "Execução das atividades acordadas", "Gestão de plataformas e evidências"], action: "Conversar sobre apoio ao DPO", href: "#proposta-final" },
    { tag: "Preciso estruturar a base", title: "Projeto de adequação", description: "Para empresas que precisam mapear lacunas e organizar processos, documentos e controles em um projeto com escopo definido.", items: ["Diagnóstico e plano de adequação", "Estruturação do programa de LGPD", "Possibilidade de continuidade com DPO"], action: "Conhecer a consultoria LGPD", href: "/servicos/consultoria-adequacao" },
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
    { question: "Precisamos trocar nossa plataforma de privacidade?", answer: "A TOGETHER pode operar ferramentas já utilizadas pela empresa, como OneTrust, Securiti e Privacy Tools. Se o sistema foi contratado e não está em uso, fazemos a implementação e treinamos a equipe para operá-lo. Avaliamos a plataforma existente, os acessos e as atividades necessárias para definir o trabalho. Licenças e eventuais novas ferramentas devem ser tratadas na proposta." },
    { question: "O serviço inclui atendimento a incidentes e resposta à ANPD?", answer: "O escopo pode contemplar apoio na avaliação e no registro de incidentes, organização de evidências e suporte às comunicações necessárias. Canais, horários, prazos de atendimento e responsabilidades são definidos na contratação, considerando as obrigações aplicáveis à empresa." },
    { question: "Como começar e em quanto tempo o serviço entra em operação?", answer: "O primeiro passo é conversar com a TOGETHER sobre sua operação. Respondemos no mesmo dia, em até 24 horas, e o diagnóstico inicial de 30 minutos é gratuito. O início é planejado conforme o escopo, os acessos, os documentos disponíveis e as prioridades identificadas. Esses pontos são alinhados antes da contratação para que sua equipe saiba o que preparar e o que esperar." },
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
            <Navbar prefetch={false} ctaHref="#proposta-final" ctaLabel="Agende uma conversa" />
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
                                <SectionPill>Diagnóstico gratuito de 30 min</SectionPill>
                                <h1 id="dpo-title">DPO terceirizado <span className={styles.accent}>para a sua empresa.</span></h1>
                                <p className={styles.lead}>Contrate um DPO externo ou apoio ao seu DPO interno. A TOGETHER conecta jurídico, tecnologia e operação para atender titulares, organizar documentos e acompanhar a rotina de privacidade.</p>
                                <a className={styles.textLink + " " + styles.heroLink} href="#escopo">Ver o que você recebe <ArrowDown size={17} aria-hidden="true" /></a>
                                <div className={styles.heroStats}><ProofStats items={proofStats} label="A TOGETHER em números" /></div>
                            </div>
                            <DpoProposalForm placement="hero" />
                        </div>
                    </div>
                </section>

                <div className={styles.clients}><AuthorityStrip title="Clientes que confiam na TOGETHER" /></div>

                <section className={styles.section} aria-labelledby="o-que-e">
                    <PixelDecor placement="bottomLeft" mask="bottomLeft" opacity={0.13} />
                    <div className={styles.container + " " + styles.introGrid}>
                        <div>
                            <SectionPill>Entenda o serviço</SectionPill>
                            <h2 id="o-que-e">O que é <span className={styles.accent}>DPO as a Service?</span></h2>
                            <p>DPO as a Service, também chamado de DPO terceirizado ou DPO externo, é a contratação do serviço de encarregado de proteção de dados. Ele orienta a organização e atua como canal de comunicação com os titulares de dados pessoais e a ANPD.</p>
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
                            <p>Cada frente mostra o que a TOGETHER entrega. Quer saber como atuamos? Abra os detalhes de cada uma.</p>
                        </div>
                        <DeliverableGrid items={scope} detailLabel="Como atuamos" />
                        <div className={styles.scopeFooter}><p>Atividades, frequência, canais e prazos de atendimento ficam definidos na proposta.</p><ActionLink href="#proposta-final" size="lg">Conversar sobre meu escopo</ActionLink></div>
                    </div>
                </section>

                <section id="por-que-together" className={styles.section} aria-labelledby="diferenciais-title">
                    <PixelDecor placement="topRight" mask="topRight" opacity={0.14} />
                    <div className={styles.container}>
                        <div className={styles.sectionHeader}>
                            <div><SectionPill>Por que escolher a TOGETHER</SectionPill><h2 id="diferenciais-title">Certificados nas plataformas. <span className={styles.accent}>Experientes na rotina.</span></h2></div>
                            <p>A mesma equipe orienta, executa e acompanha. Você não precisa coordenar vários fornecedores para a privacidade acontecer.</p>
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
                    </div>
                </section>

                <section id="modelos" className={styles.section + " " + styles.soft} aria-labelledby="modelos-title">
                    <PixelDecor placement="bottomRight" mask="bottomRight" opacity={0.18} />
                    <div className={styles.container}>
                        <div className={styles.centerHeading}><SectionPill>O apoio certo para seu momento</SectionPill><h2 id="modelos-title">Contratar um DPO externo <span className={styles.accent}>ou apoiar o seu DPO?</span></h2><p>Você pode contratar um DPO externo ou ampliar a capacidade de quem já cuida da privacidade.</p></div>
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
                    </div>
                </section>

                <section id="duvidas" className={styles.section + " " + styles.faqSection} aria-labelledby="faq-title">
                    <PixelDecor placement="topRight" mask="topRight" opacity={0.13} />
                    <div className={styles.container + " " + styles.faqGrid}>
                        <div className={styles.faqIntro}><SectionPill>Antes de contratar</SectionPill><h2 id="faq-title">Perguntas sobre <span className={styles.accent}>DPO as a Service.</span></h2><p>Respostas para comparar opções e conversar com nosso time com mais clareza.</p><div className={styles.faqContact}><strong>Vamos conversar sobre sua empresa?</strong><ActionLink href="#proposta-final" variant="dark">Falar com a TOGETHER</ActionLink></div></div>
                        <div className={styles.faqList}>
                            {faqs.map((faq,index) => <details key={faq.question} open={index===0}><summary>{faq.question}<span><ChevronDown size={21} aria-hidden="true" /></span></summary><p>{faq.answer}</p></details>)}
                            <p className={styles.source}>Referência sobre a atuação do encarregado: <a href="https://www.gov.br/anpd/pt-br/centrais-de-conteudo/materiais-educativos-e-publicacoes/guia_da_atuacao_do_encarregado_anpd.pdf" target="_blank" rel="noopener noreferrer">Guia orientativo da ANPD <span className={styles.srOnly}>(abre em nova aba)</span></a>.</p>
                        </div>
                    </div>
                </section>

                <section className={styles.finalSection} aria-labelledby="contato-title">
                    <PixelDecor placement="topRight" mask="topRight" opacity={0.18} />
                    <div className={styles.container}><div className={styles.finalFrame}>
                        <div className={styles.finalCopy}>
                            <SectionPill>Vamos definir seu escopo</SectionPill>
                            <h2 id="contato-title">Sua proposta de DPO <span className={styles.accent}>começa aqui.</span></h2>
                            <p>Conte se sua empresa precisa de um DPO externo ou de apoio ao responsável interno. No diagnóstico inicial de 30 minutos, entendemos a operação e indicamos o melhor modelo.</p>
                            <p className={styles.proposalNextStep}>Gratuito e sem compromisso. Respondemos no mesmo dia, em até 24 horas.</p>
                            <p className={styles.proposalSummary}>A proposta mostra as atividades, a frequência, os canais de atendimento e o investimento do serviço.</p>
                            <div className={styles.contactLogos}><IndustryContactLogoStrip /></div>
                        </div>
                        <DpoProposalForm />
                    </div></div>
                </section>
            </main>
            <MobileProposalBar href="#proposta-final" label="Agende uma conversa" note="Diagnóstico inicial gratuito de 30 min."><WhatsAppLink message={whatsappMessage} variant="compact" location="barra_mobile" /></MobileProposalBar>
            <Footer />
        </div>
    );
}
