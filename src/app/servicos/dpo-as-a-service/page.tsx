"use client";

import {
    Activity,
    CheckCircle2,
    Clock,
    Database,
    FileText,
    Scale,
    Search,
    Server,
    ShieldAlert,
    ShieldCheck,
    Users,
    Zap,
} from "lucide-react";
import { ServicePageShell } from "@/components/ui/service-page-shell";

const content = {
    hero: {
        pill: "DPO as a Service",
        title: "Privacidade e LGPD gerenciadas por",
        accent: "uma equipe especializada.",
        text: "A TOGETHER assume a rotina operacional de privacidade da sua empresa, conecta jurídico, tecnologia e processos, e mantém a LGPD funcionando no dia a dia.",
        primary: { href: "/contato", label: "Solicitar proposta" },
        secondary: { href: "#escopo", label: "Ver escopo" },
        metrics: [
            { label: "Modelo", value: "DPO externo ou apoio ao DPO interno" },
            { label: "Rotina", value: "+200 atividades operacionais" },
            { label: "Auditorias", value: "Evidências e respostas organizadas" },
        ],
        visual: {
            icon: ShieldCheck,
            title: "DPO as a Service",
            subtitle: "Base operacional",
            items: [
                { label: "Governança", value: "contínua" },
                { label: "Incidentes", value: "monitorados" },
                { label: "Auditorias", value: "assistidas" },
            ],
        },
    },
    challenge: {
        pill: "O desafio operacional",
        title: "A privacidade não pode depender de",
        accent: "tempo sobrando na agenda.",
        text: "Quando a LGPD vira tarefa paralela de jurídico, TI ou compliance, a operação perde ritmo, evidências ficam dispersas e respostas críticas chegam tarde.",
        cards: [
            {
                icon: Clock,
                title: "Funções acumuladas",
                highlight: "riscos multiplicados",
                text: "Demandas de titulares, contratos, auditorias e plataformas acabam disputando espaço com a rotina principal da equipe.",
            },
            {
                icon: ShieldAlert,
                title: "Incidentes sem dono",
                highlight: "respostas lentas",
                text: "Sem um processo claro, a empresa perde tempo para decidir quem responde, quais evidências reunir e qual caminho seguir.",
            },
            {
                icon: Activity,
                title: "Contratos B2B travados",
                highlight: "na due diligence",
                text: "Grandes clientes pedem evidências de privacidade. Sem organização, questionários simples viram semanas de retrabalho.",
            },
        ],
    },
    scope: {
        pill: "Escopo do serviço",
        title: "Um time dedicado para cuidar da",
        accent: "operação de privacidade.",
        text: "A TOGETHER acompanha a rotina, organiza processos, responde auditorias e mantém sua estrutura de LGPD atualizada sem exigir uma equipe interna completa.",
        action: { href: "/contato", label: "Falar com especialista" },
        meta: { label: "Tempo de resposta", value: "Em até 2 horas úteis" },
        items: [
            {
                icon: Users,
                title: "DPO externo ou apoio ao DPO interno",
                highlight: "liderança especializada",
                text: "Atuamos como DPO da empresa ou apoiamos diretamente o responsável interno já nomeado.",
            },
            {
                icon: Scale,
                title: "Governança LGPD contínua",
                text: "Organizamos rotinas, responsáveis, cadências e controles para manter a empresa alinhada à legislação.",
            },
            {
                icon: CheckCircle2,
                title: "+200 atividades e entregáveis",
                text: "Mantemos a operação atualizada com controles, registros, políticas, respostas e evidências de conformidade.",
            },
            {
                icon: Database,
                title: "Gestão de plataformas de privacidade",
                text: "Operamos ferramentas como OneTrust, Securiti ou outras plataformas usadas pela sua empresa.",
            },
            {
                icon: FileText,
                title: "Due diligence e auditorias",
                text: "Apoiamos respostas a questionários, solicitações de clientes e auditorias com evidências técnicas claras.",
            },
            {
                icon: Server,
                title: "Monitoramento e evolução",
                text: "Acompanhamos mudanças regulatórias, maturidade interna e melhorias necessárias na operação.",
            },
        ],
    },
    process: {
        pill: "Como funciona",
        title: "Um ciclo contínuo para",
        accent: "manter a privacidade viva.",
        text: "A operação não termina na implementação. Ela precisa ser acompanhada, ajustada e comprovada conforme a empresa cresce.",
        steps: [
            {
                icon: Search,
                label: "Diagnóstico",
                title: "Entender a operação",
                text: "Mapeamos maturidade, riscos, sistemas, contratos e responsabilidades internas.",
            },
            {
                icon: FileText,
                label: "Organização",
                title: "Estruturar a rotina",
                text: "Definimos cadências, documentos, evidências e fluxos de resposta para o dia a dia.",
            },
            {
                icon: ShieldCheck,
                label: "Operação",
                title: "Executar com consistência",
                text: "Acompanhamos demandas, plataformas, auditorias e solicitações de titulares.",
            },
            {
                icon: Activity,
                label: "Evolução",
                title: "Melhorar continuamente",
                text: "Revisamos indicadores, atualizações regulatórias e pontos de maturidade da empresa.",
            },
        ],
        highlight: {
            icon: Zap,
            title: "Venda travada por falta de compliance?",
            text: "Organizamos evidências técnicas para destravar contratos e responder clientes corporativos com mais previsibilidade.",
            action: { href: "/contato", label: "Destravar operação" },
        },
    },
    value: {
        pill: "Valor para a diretoria",
        title: "Privacidade deixa de ser pendência e vira",
        accent: "rotina executada.",
        text: "O modelo reduz dependência interna, melhora previsibilidade e cria uma base de confiança para clientes, auditorias e crescimento.",
        cards: [
            {
                icon: Server,
                title: "Custo previsível",
                text: "A empresa acessa especialistas sem montar uma estrutura interna completa de jurídico, privacidade e tecnologia.",
            },
            {
                icon: Activity,
                title: "Continuidade operacional",
                text: "Férias, desligamentos ou prioridades internas deixam de interromper a rotina de proteção de dados.",
            },
            {
                icon: ShieldCheck,
                title: "Confiança comercial",
                text: "Auditorias, questionários e contratos B2B passam a contar com evidências organizadas e linguagem técnica correta.",
            },
        ],
    },
};

export default function DpoAsAService() {
    return <ServicePageShell content={content} />;
}
