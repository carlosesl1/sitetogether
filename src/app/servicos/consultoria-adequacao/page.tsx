"use client";

import {
    Briefcase,
    CheckCircle2,
    Clock,
    Database,
    FileText,
    Search,
    ShieldAlert,
    ShieldCheck,
    TrendingUp,
    Users,
    Zap,
    Scale,
} from "lucide-react";
import { ServicePageShell } from "@/components/ui/service-page-shell";

const content = {
    hero: {
        pill: "Consultoria de adequação LGPD",
        title: "Adequação à LGPD",
        accent: "sem parar a rotina da sua empresa.",
        titleClassName: "xl:max-w-[41.25rem]",
        text: "Conduzimos a adequação inicial de ponta a ponta, organizando diagnóstico, documentação, processos e treinamento para que a conformidade saia do papel.",
        primary: { href: "/contato", label: "Agendar diagnóstico" },
        secondary: { href: "#escopo", label: "Ver escopo" },
        metrics: [
            { label: "Projeto", value: "Da análise inicial à implementação" },
            { label: "Prazo médio", value: "4 a 8 semanas" },
            { label: "Entrega", value: "Documentos, processos e plano de continuidade" },
        ],
        visual: {
            icon: Scale,
            title: "Adequação LGPD",
            subtitle: "Projeto estruturado",
            items: [
                { label: "Riscos", value: "mapeados" },
                { label: "Documentos", value: "organizados" },
                { label: "Processos", value: "ativados" },
            ],
        },
    },
    challenge: {
        pill: "O cenário atual",
        title: "Adequar a empresa não precisa virar",
        accent: "um projeto interminável.",
        text: "Sem uma metodologia clara, a LGPD se espalha por várias áreas, gera retrabalho e cria a sensação de que a adequação nunca termina.",
        cards: [
            {
                icon: Clock,
                title: "Tempo escasso",
                highlight: "agenda comprometida",
                text: "A equipe já tem prioridades operacionais. Sem apoio, a adequação compete com entregas críticas do negócio.",
            },
            {
                icon: ShieldAlert,
                title: "Conhecimento fragmentado",
                highlight: "jurídico e técnico separados",
                text: "A LGPD exige entendimento legal, processos internos e tecnologia trabalhando juntos na mesma direção.",
            },
            {
                icon: TrendingUp,
                title: "Pressão por evidências",
                highlight: "clientes e diretoria cobrando",
                text: "Auditorias, contratos e fiscalizações pedem documentação clara, responsáveis definidos e processos comprováveis.",
            },
        ],
    },
    scope: {
        pill: "Escopo da consultoria",
        title: "Tudo que sua empresa precisa para",
        accent: "estruturar a adequação.",
        text: "Organizamos as entregas essenciais para que a empresa reduza riscos agora e consiga manter a conformidade depois da conclusão do projeto.",
        action: { href: "/contato", label: "Solicitar proposta" },
        meta: { label: "Prazo médio", value: "4 a 8 semanas" },
        items: [
            {
                icon: Search,
                title: "Diagnóstico de maturidade",
                highlight: "ponto de partida",
                text: "Mapeamos operação, riscos, prioridades e lacunas que precisam ser tratadas na adequação.",
            },
            {
                icon: Database,
                title: "Mapeamento de dados",
                text: "Identificamos como os dados circulam pela empresa, quais áreas participam e onde estão os principais riscos.",
            },
            {
                icon: FileText,
                title: "Documentação LGPD",
                text: "Estruturamos políticas, registros, contratos, avisos e documentos necessários para a conformidade.",
            },
            {
                icon: Scale,
                title: "Processos e governança",
                text: "Definimos papéis, fluxos, controles e responsabilidades para a rotina de privacidade.",
            },
            {
                icon: Users,
                title: "Treinamento pós-adequação",
                text: "Orientamos a equipe para aplicar os processos e manter a adequação funcionando na prática.",
            },
            {
                icon: CheckCircle2,
                title: "Plano de continuidade",
                text: "Entregamos recomendações de evolução para que a empresa não volte ao ponto inicial depois do projeto.",
            },
        ],
    },
    process: {
        pill: "Metodologia",
        title: "Um processo claro para",
        accent: "adequar sua empresa à LGPD.",
        text: "Cada fase tem objetivo, responsáveis e entregas definidos para reduzir ruído entre áreas e acelerar decisões.",
        steps: [
            {
                icon: Search,
                label: "Fase 01",
                title: "Diagnóstico inicial",
                text: "Levantamos maturidade, sistemas, contratos, fluxos de dados e prioridades de risco.",
            },
            {
                icon: Database,
                label: "Fase 02",
                title: "Mapeamento e plano",
                text: "Transformamos os achados em prioridades, cronograma e plano de execução viável.",
            },
            {
                icon: FileText,
                label: "Fase 03",
                title: "Documentação e processos",
                text: "Criamos ou ajustamos documentos, políticas, controles e fluxos operacionais.",
            },
            {
                icon: ShieldCheck,
                label: "Fase 04",
                title: "Ativação e continuidade",
                text: "Treinamos a equipe, organizamos evidências e deixamos um plano para evolução contínua.",
            },
        ],
        highlight: {
            icon: Zap,
            title: "Precisa destravar uma exigência comercial?",
            text: "Priorizamos evidências e entregas técnicas para apoiar auditorias, clientes estratégicos e negociações em andamento.",
            action: { href: "/contato", label: "Falar com especialista" },
        },
    },
    value: {
        pill: "Por que a TOGETHER",
        title: "Não entregamos apenas documentos.",
        accent: "Estruturamos a operação.",
        text: "A consultoria conecta estratégia, processo e rotina para que a adequação seja utilizável depois da entrega.",
        cards: [
            {
                icon: Users,
                title: "Equipe multidisciplinar",
                text: "Advogados, analistas de privacidade e especialistas em operação trabalhando juntos no mesmo projeto.",
            },
            {
                icon: Briefcase,
                title: "+5 anos com LGPD",
                text: "Experiência em projetos de adequação para empresas de diferentes portes, setores e níveis de maturidade.",
            },
            {
                icon: Zap,
                title: "Operação preservada",
                text: "Conduzimos o projeto sem tirar sua equipe das entregas críticas do dia a dia.",
            },
            {
                icon: TrendingUp,
                title: "Resultados em semanas",
                text: "Primeiras entregas úteis já no início do projeto, com cronograma claro até a ativação final.",
            },
            {
                icon: CheckCircle2,
                title: "Suporte pós-adequação",
                text: "Treinamento, plano de evolução e recomendações para manter a conformidade ao longo do tempo.",
            },
        ],
    },
};

export default function ConsultoriaAdequacao() {
    return <ServicePageShell content={content} />;
}
