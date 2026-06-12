"use client";

import {
    BrainCircuit,
    Briefcase,
    CheckCircle2,
    GraduationCap,
    MonitorPlay,
    ShieldAlert,
    ShieldCheck,
    Target,
    TrendingUp,
    Users,
    Zap,
} from "lucide-react";
import { ServicePageShell } from "@/components/ui/service-page-shell";

const content = {
    hero: {
        tone: "dark" as const,
        pill: "Treinamentos e cultura",
        title: "Treinamentos práticos para criar",
        accent: "uma cultura real de privacidade.",
        titleClassName: "xl:max-w-[45.75rem]",
        text: "Capacitamos equipes com exemplos da rotina, trilhas por área e formação de multiplicadores para que a LGPD seja aplicada nas decisões do dia a dia.",
        primary: { href: "/contato", label: "Solicitar grade" },
        secondary: { href: "#escopo", label: "Ver programas" },
        metrics: [
            { label: "Formato", value: "Workshops práticos e trilhas por área" },
            { label: "Conteúdo", value: "+20 temas aplicados à rotina" },
            { label: "Cultura", value: "Privacy champions e multiplicadores" },
        ],
        visual: {
            icon: GraduationCap,
            title: "Cultura LGPD",
            subtitle: "Capacitação aplicada",
            items: [
                { label: "Equipes", value: "treinadas" },
                { label: "Riscos", value: "reduzidos" },
                { label: "Rotina", value: "orientada" },
            ],
        },
    },
    challenge: {
        pill: "O desafio",
        title: "Contratos não evitam falhas.",
        accent: "Comportamento sim.",
        text: "Boa parte dos incidentes nasce de ações simples: e-mails enviados errado, compartilhamentos indevidos, excesso de acesso ou desconhecimento da regra no momento da decisão.",
        cards: [
            {
                icon: BrainCircuit,
                title: "Treinamentos ignorados",
                highlight: "conteúdo genérico",
                text: "Quando o treinamento não conversa com a rotina da equipe, ele vira obrigação formal e não muda comportamento.",
            },
            {
                icon: ShieldAlert,
                title: "Risco descentralizado",
                highlight: "lacunas por departamento",
                text: "RH, marketing, vendas, jurídico e TI tratam dados de formas diferentes. Cada área precisa de exemplos próprios.",
            },
            {
                icon: Users,
                title: "DPO solitário",
                highlight: "sem multiplicadores",
                text: "Sem pessoas-chave em cada área, boas práticas não se sustentam quando a operação acelera.",
            },
        ],
    },
    scope: {
        pill: "Escopo da capacitação",
        title: "Tudo que sua equipe precisa para",
        accent: "aplicar a LGPD na prática.",
        text: "As trilhas são adaptadas ao contexto da empresa e combinam conscientização, exemplos reais, formação por departamento e apoio ao uso das ferramentas de privacidade.",
        action: { href: "/contato", label: "Requisitar grade completa" },
        meta: { label: "Implementação", value: "A partir de 2 semanas" },
        items: [
            {
                icon: GraduationCap,
                title: "Workshops práticos",
                highlight: "aprendizado aplicado",
                text: "Sessões com exemplos reais da rotina para que o conteúdo seja lembrado no momento da decisão.",
            },
            {
                icon: Target,
                title: "Treinamentos por área",
                text: "Conteúdos adaptados para RH, marketing, vendas, TI, jurídico e demais áreas que tratam dados.",
            },
            {
                icon: BrainCircuit,
                title: "+20 temas de privacidade",
                text: "Incidentes, bases legais, compartilhamento, titulares, contratos, IA, segurança e boas práticas operacionais.",
            },
            {
                icon: MonitorPlay,
                title: "Conteúdos gravados",
                text: "Treinamentos disponíveis para onboarding, reciclagem e consulta da equipe quando necessário.",
            },
            {
                icon: ShieldCheck,
                title: "Diagnóstico de conhecimento",
                text: "Avaliamos maturidade, entendimento e aplicação prática antes de definir a melhor trilha.",
            },
            {
                icon: CheckCircle2,
                title: "Uso de ferramentas",
                text: "Orientamos a equipe sobre plataformas e processos de privacidade usados na rotina da empresa.",
            },
        ],
    },
    process: {
        pill: "Nossa metodologia",
        title: "Não entregamos apenas treinamento.",
        accent: "Criamos referência interna.",
        text: "A capacitação precisa gerar memória operacional: pessoas capazes de identificar riscos, acionar o fluxo correto e orientar colegas.",
        steps: [
            {
                icon: Users,
                label: "Módulo estrutural",
                title: "Conscientização geral",
                text: "Introduzimos conceitos essenciais com exemplos práticos e simulações da rotina corporativa.",
            },
            {
                icon: Target,
                label: "Treinamento tático",
                title: "Formação departamental",
                text: "Adaptamos os conteúdos para as decisões e riscos reais de cada área da empresa.",
            },
            {
                icon: ShieldCheck,
                label: "Liderança interna",
                title: "Privacy champions",
                text: "Capacitamos pessoas-chave para reforçar boas práticas e apoiar o DPO na rotina.",
            },
        ],
        highlight: {
            icon: Zap,
            title: "O Privacy Champion tira a LGPD do slide.",
            text: "Multiplicadores bem treinados ajudam a manter as boas práticas funcionando quando o time cresce, muda ou acelera.",
            action: { href: "/contato", label: "Solicitar formação" },
        },
    },
    value: {
        pill: "Valor para a diretoria",
        title: "Cultura de privacidade reduz risco",
        accent: "onde ele realmente acontece.",
        text: "Equipes preparadas erram menos, respondem melhor e tornam a privacidade parte natural da operação.",
        cards: [
            {
                icon: ShieldCheck,
                title: "Redução de incidentes reais",
                text: "Colaboradores reconhecem situações de risco antes que erros simples se transformem em incidentes.",
            },
            {
                icon: TrendingUp,
                title: "Aceleração comercial B2B",
                text: "Processos bem compreendidos ajudam a responder auditorias e exigências de clientes com mais segurança.",
            },
            {
                icon: Briefcase,
                title: "Continuidade operacional",
                text: "Com multiplicadores em cada área, as boas práticas sobrevivem a mudanças de equipe e novas demandas.",
            },
            {
                icon: ShieldAlert,
                title: "Demonstra responsabilidade",
                text: "Treinamentos estruturados mostram preparo, diligência e compromisso real com proteção de dados.",
            },
        ],
    },
};

export default function MentoriaECultura() {
    return <ServicePageShell content={content} />;
}
