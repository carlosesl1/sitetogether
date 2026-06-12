"use client";

import Image from "next/image";
import Link from "next/link";
import type { FormEvent, ReactNode } from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  AlertTriangle,
  ArrowRight,
  Box,
  Briefcase,
  CalendarDays,
  CheckCircle2,
  ClipboardCheck,
  Clock3,
  CircleAlert,
  Database,
  Download,
  FileCheck2,
  Folder,
  GraduationCap,
  Handshake,
  Headset,
  Landmark,
  Lock,
  Megaphone,
  MonitorCheck,
  Scale,
  Search,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Target,
  TrendingUp,
  UserCheck,
  Users,
} from "lucide-react";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { PixelDecor } from "@/components/ui/backgrounds/pixel-decor";
import { ActionLink, SectionPill } from "@/components/ui/site-primitives";
import ScrollStack, { ScrollStackItem } from "@/components/ui/scroll-stack";
import { submitContact } from "@/lib/contact";
import { cn } from "@/lib/utils";

type SupportPhase = {
  icon: LucideIcon;
  title: string;
  kicker: string;
  items: string[];
};

type UrgencyItem = {
  icon: LucideIcon;
  title: string;
  text: string;
  evidence: string;
};

type ApplicabilitySignal = {
  icon: LucideIcon;
  label: string;
};

type ImpactLane = {
  icon: LucideIcon;
  area: string;
  text: string;
};

type RiskPoint = {
  icon: LucideIcon;
  title: string;
  text: string;
};

type SectorColumn = {
  icon: LucideIcon;
  title: string;
  text: string;
  items: string[];
};

const fadeUp = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
} as const;

const urgencyItems: UrgencyItem[] = [
  {
    icon: Landmark,
    title: "Lei em vigor",
    text: "O ECA Digital foi sancionado e estabelece obrigações claras para ambientes digitais.",
    evidence: "Lei nº 15.211/2025",
  },
  {
    icon: Search,
    title: "ANPD monitora",
    text: "A Autoridade Nacional de Proteção de Dados já incluiu o tema em suas agendas regulatórias.",
    evidence: "Agenda Regulatória 2025-2026",
  },
  {
    icon: ShieldCheck,
    title: "Canal de denúncias ativo",
    text: "Crianças, adolescentes, famílias e sociedade já podem reportar riscos e violações.",
    evidence: "Canal de Denúncias da ANPD",
  },
  {
    icon: ClipboardCheck,
    title: "Auditorias e due diligences",
    text: "Grandes empresas, investidores e parceiros já avaliam conformidade com o ECA Digital.",
    evidence: "Questionários e Diligências em andamento",
  },
];

const applicabilityChecklist: ApplicabilitySignal[] = [
  { icon: Smartphone, label: "App, site ou plataforma aberta" },
  { icon: Users, label: "Chat, comunidade ou comentários" },
  { icon: ClipboardCheck, label: "Cadastro, login ou perfil" },
  { icon: MonitorCheck, label: "Conteúdo público ou compartilhável" },
  { icon: Megaphone, label: "Campanhas, mídia ou influenciadores" },
  { icon: Database, label: "Coleta ou uso de dados pessoais" },
  { icon: Sparkles, label: "Feed, recomendação ou personalização" },
  { icon: Users, label: "Uso comum por adolescentes" },
  { icon: Handshake, label: "Produto de terceiros em B2B2C" },
];

const impactLanes: ImpactLane[] = [
  {
    icon: Scale,
    area: "Jurídico e Compliance",
    text: "Documentação, avaliações de risco, políticas, contratos e evidências para autoridades, clientes e parceiros.",
  },
  {
    icon: MonitorCheck,
    area: "Produto e UX",
    text: "Configurações mais protetivas, análise de funcionalidades, critérios de idade e prevenção de experiências inadequadas.",
  },
  {
    icon: Megaphone,
    area: "Marketing",
    text: "Revisão de campanhas, segmentação, publicidade digital, influenciadores e práticas de personalização.",
  },
  {
    icon: Lock,
    area: "Privacidade e DPO",
    text: "Mapeamento de dados, minimização, relatórios de impacto e governança contínua.",
  },
  {
    icon: Headset,
    area: "Atendimento e Moderação",
    text: "Fluxos de denúncia, resposta, escalonamento e tratamento de situações sensíveis.",
  },
  {
    icon: Briefcase,
    area: "Diretoria",
    text: "Gestão de riscos regulatórios, reputacionais, operacionais e comerciais.",
  },
];

const supportPhases: SupportPhase[] = [
  {
    icon: Target,
    title: "Mapear",
    kicker: "Entender o contexto",
    items: [
      "Diagnóstico de aplicabilidade do ECA Digital",
      "Matriz de riscos e plano de ação priorizado",
      "Revisão de produto, UX, dados e marketing",
    ],
  },
  {
    icon: ClipboardCheck,
    title: "Estruturar",
    kicker: "Desenhar controles",
    items: [
      "Avaliação de mecanismos de idade, quando aplicável",
      "Políticas, procedimentos e evidências de diligência",
      "Relatórios de impacto e documentação de suporte",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Operar",
    kicker: "Garantir continuidade",
    items: [
      "Treinamentos para áreas envolvidas",
      "Operação contínua via DPO as a Service",
    ],
  },
];

const supportDeliverableCount = supportPhases.reduce((total, phase) => total + phase.items.length, 0);

const ecaClientLogos = [
  {
    name: "Axia Energia",
    src: "/logos/partners/pinheiro-guimaraes.svg",
    width: 595,
    height: 57,
  },
  {
    name: "Mercado Bitcoin",
    src: "/logos/partners/camara-comercio-arabe-brasileira.svg",
    width: 409,
    height: 142,
  },
  {
    name: "Tarea",
    src: "/logos/partners/governo-rio-de-janeiro.svg",
    width: 283,
    height: 82,
  },
  {
    name: "Eletrobras",
    src: "/logos/partners/eletrobras.svg",
    width: 538,
    height: 150,
  },
  {
    name: "Unimed",
    src: "/logos/partners/unimed.svg",
    width: 406,
    height: 150,
  },
  {
    name: "Bom Consorcio",
    src: "/logos/partners/bomconsorcio.png",
    width: 622,
    height: 137,
  },
  {
    name: "Inhire",
    src: "/logos/partners/idel.svg",
    width: 416,
    height: 94,
  },
  {
    name: "Ideal",
    src: "/logos/partners/ideal.png",
    width: 307,
    height: 88,
  },
];

const riskPoints: RiskPoint[] = [
  {
    icon: UserCheck,
    title: "Falta de mecanismos adequados de idade",
    text: "Ausência ou deficiência de controles para identificar e proteger públicos infantojuvenis.",
  },
  {
    icon: Database,
    title: "Coleta excessiva de dados",
    text: "Uso de informações além do necessário para a finalidade pretendida.",
  },
  {
    icon: Megaphone,
    title: "Publicidade inadequada",
    text: "Práticas de segmentação ou comunicação incompatíveis com o melhor interesse da criança e do adolescente.",
  },
  {
    icon: Lock,
    title: "Privacidade insuficiente por padrão",
    text: "Produtos e serviços que não incorporam proteção desde a concepção.",
  },
  {
    icon: CircleAlert,
    title: "Ausência de canais de denúncia",
    text: "Falta de mecanismos para recebimento e tratamento de notificações.",
  },
  {
    icon: Clock3,
    title: "Funcionalidades que estimulam uso excessivo",
    text: "Recursos que incentivam comportamento compulsivo ou dificultam supervisão.",
  },
];

const sectorColumns: SectorColumn[] = [
  {
    icon: GraduationCap,
    title: "Alto contato direto",
    text: "Segmentos em que menores costumam ser parte explícita ou recorrente da experiência.",
    items: ["Edtechs", "Jogos e entretenimento", "Comunidades online", "Conteúdo e creator economy"],
  },
  {
    icon: Smartphone,
    title: "Acesso provável",
    text: "Produtos não infantis, mas com uso previsível por adolescentes ou público geral.",
    items: ["Apps e plataformas", "E-commerces", "Fintechs", "Healthtechs"],
  },
  {
    icon: Handshake,
    title: "Operação B2B2C",
    text: "Empresas que habilitam experiências de terceiros também precisam entender seu papel.",
    items: ["SaaS B2B2C", "Marketplaces", "Mídia e publicidade", "Programas de relacionamento"],
  },
];

export function EcaDigitalPageClient() {
  return (
    <main className="min-h-screen overflow-x-clip bg-white selection:bg-brand-400/30">
      <Navbar />
      <HeroSection />
      <UrgencySection />
      <ApplicabilitySection />
      <ImpactSection />
      <DeliverablesSection />
      <RisksSection />
      <SectorsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white pt-20 pb-24 text-neutral-900 md:pt-28 md:pb-32">
      <PixelDecor placement="topRight" mask="topRight" opacity={0.2} />
      <PixelDecor placement="bottomLeft" mask="bottomLeft" opacity={0.12} />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_14%,rgba(245,192,0,0.14),transparent_28%),radial-gradient(circle_at_80%_18%,rgba(0,0,0,0.035),transparent_24%)]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, #121212 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="container relative z-10 mx-auto px-6">
        <div className="grid w-full gap-12 xl:grid-cols-[minmax(0,1fr)_minmax(360px,0.86fr)] xl:items-center xl:gap-16">
          <div className="min-w-0">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <SectionPill>ECA Digital - Diagnóstico e Adequação</SectionPill>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-5xl text-[2.75rem] font-bold leading-[0.98] tracking-normal text-neutral-900 sm:text-6xl xl:text-[4rem] 2xl:text-[4.45rem]"
            >
              Sua empresa está preparada para as exigências do{" "}
              <span className="font-light italic text-brand-500">ECA Digital?</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 max-w-2xl text-lg font-medium leading-relaxed text-neutral-500 sm:text-xl"
            >
              Se crianças ou adolescentes podem acessar seu produto, aplicativo, plataforma,
              conteúdo ou campanha digital, sua empresa pode precisar avaliar riscos, revisar
              processos e implementar medidas de proteção previstas pela nova regulamentação.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.16, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap 2xl:flex-nowrap"
            >
              <ActionLink href="#diagnostico-eca" size="xl" fullWidth className="sm:w-auto xl:px-7 xl:text-xs 2xl:px-10 2xl:text-sm">
                Agendar Diagnóstico
              </ActionLink>
              <ActionLink href="#aplicabilidade" size="xl" variant="dark" fullWidth className="sm:w-auto xl:px-7 xl:text-xs 2xl:px-10 2xl:text-sm">
                Entender Aplicabilidade
              </ActionLink>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.22, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
            >
              {[
                { icon: Search, label: "Aplicabilidade", value: "clara" },
                { icon: ShieldCheck, label: "Risco", value: "proporcional" },
                { icon: FileCheck2, label: "Plano", value: "de ação" },
                { icon: Sparkles, label: "Sem burocracia", value: "desnecessária" },
              ].map((metric) => (
                <div
                  key={metric.label}
                  className="flex min-h-16 items-center gap-3 border-r border-neutral-200/70 pr-4 last:border-r-0"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-400/15 text-neutral-950">
                    <metric.icon className="h-5 w-5" />
                  </div>
                  <p className="text-sm font-bold leading-tight text-neutral-900">
                    {metric.label}
                    <span className="block font-medium text-neutral-500">{metric.value}</span>
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="min-w-0 xl:flex xl:justify-end"
          >
            <DiagnosticPanel />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function DiagnosticPanel() {
  const rows = [
    {
      icon: Box,
      label: "Produto",
      detail: "Avaliação de funcionalidades e contexto",
      status: "Acesso provável",
      statusIcon: CheckCircle2,
      tone: "success",
    },
    {
      icon: Database,
      label: "Dados",
      detail: "Mapeamento de dados e fluxos",
      status: "Risco mapeado",
      statusIcon: CircleAlert,
      tone: "warning",
    },
    {
      icon: Users,
      label: "Áreas",
      detail: "Responsáveis e impacto organizacional",
      status: "Plano integrado",
      statusIcon: Clock3,
      tone: "neutral",
    },
  ];

  return (
    <div className="relative mx-auto w-full max-w-[560px] xl:mx-0">
      <div className="relative z-10 grid gap-3 overflow-hidden rounded-[2rem] border border-neutral-100 bg-neutral-50/90 p-3 shadow-2xl shadow-neutral-900/10 sm:grid-cols-[3.5rem_1fr] sm:p-4">
        <div className="hidden rounded-[1.35rem] bg-white/55 p-2.5 sm:block">
          <div className="flex h-full min-h-[360px] flex-col items-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-neutral-950 text-brand-500 shadow-xl shadow-neutral-950/15">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div className="mt-9 h-px w-8 bg-neutral-200" />
            <div className="relative mt-6 flex flex-1 flex-col items-center gap-6">
              <div className="absolute bottom-0 top-0 w-px bg-neutral-200" />
              {[
                { icon: Search, active: true },
                { icon: ShieldCheck },
                { icon: TrendingUp },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={Icon.displayName ?? String(item.icon)}
                    className={cn(
                      "relative z-10 flex h-8 w-8 items-center justify-center rounded-2xl bg-white text-neutral-400",
                      item.active && "text-neutral-500"
                    )}
                  >
                    {item.active ? (
                      <span className="absolute -left-2.5 h-6 w-0.5 rounded-full bg-brand-400" />
                    ) : null}
                    <Icon className="h-4 w-4" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="rounded-[1.75rem] bg-white p-4 shadow-xl shadow-neutral-900/10 sm:p-5 md:p-6">
          <div className="mb-5 flex items-start justify-between gap-5">
            <div className="min-w-0">
              <h3 className="text-xl font-bold leading-tight tracking-tight text-neutral-900 md:text-2xl">
                Diagnóstico de aplicabilidade
              </h3>
              <p className="mt-2 text-xs font-medium leading-relaxed text-neutral-500 md:text-sm">
                Entenda onde sua empresa precisa agir com prioridade.
              </p>
            </div>
            <button
              type="button"
              aria-label="Baixar diagnóstico"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-neutral-200 bg-white text-neutral-500 shadow-sm transition-colors hover:border-brand-400 hover:text-neutral-900"
            >
              <Download className="h-4 w-4" />
            </button>
          </div>

          <div className="overflow-hidden rounded-[1.45rem] bg-neutral-950 p-4 text-white shadow-2xl shadow-neutral-950/20 md:p-5">
            <p className="text-[10px] font-black uppercase tracking-[0.22em] text-brand-500">
              Ponto de partida
            </p>
            <div className="mt-4">
              {rows.map((row) => {
                const Icon = row.icon;
                const StatusIcon = row.statusIcon;

                return (
                  <div
                    key={row.label}
                    className="grid gap-3 border-b border-white/10 py-3 first:pt-0 last:border-b-0 last:pb-0 sm:grid-cols-[minmax(0,1fr)_minmax(126px,136px)] sm:items-center"
                  >
                    <div className="flex min-w-0 items-center gap-3">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-black/35 text-white shadow-lg shadow-black/20">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="min-w-0">
                        <h4 className="text-base font-bold leading-tight text-white">{row.label}</h4>
                        <p className="mt-1 text-xs font-medium leading-snug text-neutral-300">
                          {row.detail}
                        </p>
                      </div>
                    </div>
                    <div
                      className={cn(
                        "inline-flex min-h-11 items-center gap-2 rounded-2xl px-3 py-2 text-[10px] font-black uppercase leading-tight tracking-[0.1em] sm:min-w-[136px] sm:justify-center",
                        row.tone === "success" && "bg-emerald-500/20 text-emerald-400",
                        row.tone === "warning" && "bg-brand-400/20 text-brand-400",
                        row.tone === "neutral" && "bg-white/12 text-white"
                      )}
                    >
                      <StatusIcon className="h-4 w-4 shrink-0" />
                      <span>{row.status}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-4 flex gap-3 rounded-[1.2rem] border border-neutral-200 bg-white p-4">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-brand-400/15 text-brand-600">
              <ShieldCheck className="h-4 w-4" />
            </div>
            <p className="text-xs font-medium leading-relaxed text-neutral-500">
              Diagnóstico rápido, seguro e confidencial.
              <span className="block text-neutral-600">Alinhado à LGPD e ao ECA Digital.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function UrgencySection() {
  return (
    <section className="relative overflow-hidden bg-white py-24 md:py-32">
      <PixelDecor placement="right" mask="right" opacity={0.12} />
      <div className="container relative z-10 mx-auto px-6">
        <div className="grid gap-12 xl:grid-cols-[minmax(0,0.72fr)_minmax(320px,0.82fr)] xl:items-start">
          <div className="min-w-0">
            <SectionHeading
            pill="Por que isso importa"
            title="O ECA Digital já está em vigor."
            accent="E entrou no radar regulatório."
            text="A Lei nº 15.211/2025 trouxe novas responsabilidades para empresas que operam ambientes digitais acessados por crianças e adolescentes. O impacto passa por produto, marketing, privacidade, atendimento, tecnologia e governança."
            />
            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.14 }}
              className="mt-9 grid max-w-3xl gap-5 rounded-[1.5rem] border border-neutral-200 bg-white p-5 shadow-xl shadow-neutral-900/10 sm:grid-cols-[auto_minmax(0,1fr)] sm:items-center md:grid-cols-[auto_1px_minmax(0,1fr)] md:gap-6 md:p-6"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-400/10 text-neutral-950">
                  <CalendarDays className="h-7 w-7 stroke-[1.8]" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-black uppercase tracking-[0.22em] text-neutral-500">
                    Data-chave
                  </p>
                  <p className="mt-1 text-2xl font-black leading-tight text-neutral-950">17 março 2026</p>
                </div>
              </div>
              <div className="hidden h-16 w-px bg-neutral-300 md:block" />
              <p className="max-w-sm text-sm font-medium leading-relaxed text-neutral-500 md:text-base">
                Entrada em vigor da exigibilidade das principais obrigações do ECA Digital.
              </p>
            </motion.div>
          </div>
          <motion.div
            {...fadeUp}
            className="relative overflow-hidden rounded-[2rem] border border-neutral-200 bg-white text-neutral-900 shadow-2xl shadow-neutral-900/10"
          >
            <div className="border-b border-neutral-200 bg-neutral-50/70">
              <div className="flex flex-col gap-3 px-5 py-4 md:px-7 xl:flex-row xl:items-center xl:justify-between">
                <h3 className="inline-flex items-center gap-3 text-xs font-black uppercase tracking-[0.22em] text-neutral-900">
                  <Folder className="h-5 w-5 text-brand-500" />
                  Linha do tempo regulatória
                </h3>
                <p className="text-[10px] font-black uppercase tracking-[0.28em] text-neutral-400">
                  Evidências e sinais
                </p>
              </div>
            </div>

            <div className="relative px-5 py-5 md:px-7 md:py-6">
              <div>
                {urgencyItems.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="grid gap-4 border-b border-neutral-200 py-5 first:pt-1 last:border-b-0 md:grid-cols-[1.6rem_3.25rem_minmax(0,1fr)] md:gap-4 xl:grid-cols-[1.6rem_3.35rem_minmax(0,1fr)_minmax(200px,0.5fr)]"
                    >
                      <div className="hidden pt-5 text-center text-xl font-black leading-none tabular-nums text-brand-500 md:block">
                        {`${index + 1}º`}
                      </div>
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-neutral-950">
                        <Icon className="h-8 w-8 stroke-[1.8]" />
                      </div>
                      <div className="min-w-0">
                        <h4 className="text-xl font-bold leading-tight text-neutral-900">{item.title}</h4>
                        <p className="mt-2 text-sm font-medium leading-relaxed text-neutral-500">{item.text}</p>
                      </div>
                      <div className="min-w-0 md:col-start-3 xl:col-start-auto xl:pt-1">
                        <p className="text-[9px] font-black uppercase tracking-[0.2em] text-neutral-500">
                          <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-brand-400 align-middle" />
                          Evidência
                        </p>
                        <p className="mt-2 text-sm font-medium leading-snug text-neutral-700">
                          {index === 3 ? (
                            <>
                              <span className="block whitespace-nowrap">Questionários e Diligências</span>
                              <span className="block whitespace-nowrap">em andamento</span>
                            </>
                          ) : index === 1 ? (
                            <>
                              <span className="block whitespace-nowrap">Agenda Regulatória</span>
                              <span className="block whitespace-nowrap">2025-2026</span>
                            </>
                          ) : (
                            item.evidence
                          )}
                        </p>
                        <div className="mt-4 h-px w-32 max-w-full bg-brand-400" />
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-5 flex gap-4 rounded-[1.25rem] border border-brand-400/30 bg-brand-400/10 p-4 md:items-center">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-400 text-neutral-950">
                  <Target className="h-6 w-6" />
                </div>
                <p className="text-sm font-medium leading-relaxed text-neutral-800">
                  Esperar para se adequar aumenta custos, riscos e exposição.
                  <span className="block font-bold text-neutral-900">
                    Antecipar é governança, reputação e vantagem competitiva.
                  </span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ApplicabilitySection() {
  return (
    <section id="aplicabilidade" className="relative overflow-hidden bg-neutral-950 pt-20 pb-12 text-white md:pt-28 md:pb-20">
      <PixelDecor placement="topRight" mask="topRight" opacity={0.16} />
      <PixelDecor placement="bottomLeft" mask="bottomLeft" opacity={0.12} />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_8%,rgba(245,192,0,0.16),transparent_30%),radial-gradient(circle_at_84%_16%,rgba(255,255,255,0.06),transparent_24%)]" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="mx-auto max-w-5xl text-center">
          <motion.div {...fadeUp} className="mb-8 flex justify-center">
            <SectionPill tone="dark">Diagnóstico de Aplicabilidade</SectionPill>
          </motion.div>
          <motion.h2
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.04 }}
            className="text-[2.45rem] font-bold leading-[1.04] tracking-normal text-white sm:text-5xl md:text-[3.25rem] xl:text-[3.75rem]"
          >
            O ECA Digital não se aplica apenas a empresas voltadas para{" "}
            <span className="font-light italic text-brand-500">crianças.</span>
          </motion.h2>
          <motion.p
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.08 }}
            className="mx-auto mt-7 max-w-3xl text-base font-medium leading-relaxed text-neutral-400 md:text-lg"
          >
            A lei utiliza o conceito de acesso provável. Isso significa que mesmo empresas que
            não têm crianças ou adolescentes como público principal podem precisar avaliar a
            aplicabilidade da regulamentação.
          </motion.p>
        </div>

        <ScrollStack
          className="mx-auto mt-14 max-w-6xl md:mt-16"
          itemDistance={180}
          itemScale={0.02}
          itemStackDistance={28}
          stackPosition="10%"
          scaleEndPosition="6%"
          baseScale={0.91}
          blurAmount={0.25}
          disabledBelow={768}
          endSpacing={96}
          releaseOffset={240}
        >
          <ScrollStackItem>
            <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.12 }}>
              <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-2.5 shadow-[0_34px_110px_rgba(0,0,0,0.45)] md:rounded-[2rem]">
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(245,192,0,0.14),transparent_34%,transparent_74%,rgba(255,255,255,0.06))]" />
                <div className="relative z-10 min-h-[58vh] rounded-[1.45rem] bg-neutral-950 p-6 md:min-h-[500px] md:rounded-[1.7rem] md:p-8 xl:h-[500px] xl:min-h-0">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="inline-flex items-center gap-3 rounded-full border border-brand-400/25 bg-brand-400/10 px-3 py-2">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-400 text-sm font-black text-neutral-950">
                        01
                      </span>
                      <span className="text-[10px] font-black uppercase tracking-[0.22em] text-brand-500">
                        Comece pelo acesso
                      </span>
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-500">
                      Diagnóstico inicial
                    </span>
                  </div>

                  <div className="mt-8 max-w-3xl">
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.22em] text-brand-500">
                        Primeira pergunta
                      </p>
                      <h3 className="mt-4 text-3xl font-bold leading-tight text-white md:text-[2.5rem]">
                        Menores podem ser impactados pelo o que a sua empresa faz?
                      </h3>
                      <p className="mt-5 max-w-2xl text-base font-medium leading-relaxed text-neutral-400 md:text-lg">
                        O ponto é se crianças ou adolescentes conseguem acessar, interagir, criar
                        conta, ver conteúdo ou ser impactados pela experiência digital.
                      </p>
                    </div>
                  </div>

                  <div className="mt-7 grid gap-px overflow-hidden rounded-[1.25rem] bg-white/10 md:grid-cols-[minmax(0,1fr)_3.5rem_minmax(0,1fr)]">
                    <div className="bg-neutral-950/80 p-4">
                      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-500">
                        Evite decidir só por
                      </p>
                      <p className="mt-3 text-base font-bold text-white">Público infantil declarado</p>
                    </div>
                    <div className="hidden items-center justify-center bg-neutral-950/80 text-brand-500 md:flex">
                      <ArrowRight className="h-5 w-5" />
                    </div>
                    <div className="bg-neutral-900 p-4">
                      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-500">
                        Avalie também
                      </p>
                      <p className="mt-3 text-base font-bold text-white">Acesso provável por menores</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </ScrollStackItem>

          <ScrollStackItem>
            <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.12 }}>
              <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-2.5 shadow-[0_34px_110px_rgba(0,0,0,0.48)] md:rounded-[2rem]">
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(245,192,0,0.12),transparent_30%,transparent_72%,rgba(255,255,255,0.05))]" />
                <div className="relative z-10 rounded-[1.45rem] bg-neutral-950 p-6 md:min-h-[520px] md:rounded-[1.7rem] md:p-7 xl:h-[520px]">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/[0.06] text-sm font-black text-brand-500">
                        02
                      </span>
                      <span className="text-[10px] font-black uppercase tracking-[0.22em] text-brand-500">
                        Sinais práticos
                      </span>
                    </div>
                    <span className="rounded-full border border-brand-400/30 bg-brand-400/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-brand-500">
                      Um item já importa
                    </span>
                  </div>

                  <div className="mt-7 grid gap-6 xl:grid-cols-[minmax(0,0.38fr)_minmax(0,0.62fr)] xl:items-start">
                    <div>
                      <h3 className="text-3xl font-bold leading-tight text-white md:text-[2.35rem]">
                        Se sua empresa tem um ou mais desses pontos?
                      </h3>
                      <p className="mt-4 text-base font-medium leading-relaxed text-neutral-400">
                        Um item não confirma obrigação. Ele apenas indica que o tema não deve ser
                        descartado.
                      </p>
                    </div>

                    <div className="grid overflow-hidden rounded-[1.15rem] border border-white/10 md:grid-cols-2">
                      {applicabilityChecklist.map((item) => {
                        const Icon = item.icon;

                        return (
                          <div
                            key={item.label}
                            className="flex min-h-14 items-center gap-3 border-b border-white/10 bg-white/[0.025] p-3.5 last:border-b-0 md:min-h-[3.9rem] md:border-r md:p-3 md:[&:nth-child(2n)]:border-r-0 md:[&:nth-last-child(-n+1)]:border-b-0"
                          >
                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-400/10 text-brand-500">
                              <Icon className="h-4 w-4" />
                            </div>
                            <p className="text-[13px] font-bold leading-snug text-white">
                              {item.label}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </ScrollStackItem>

          <ScrollStackItem>
            <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.12 }}>
              <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-2.5 shadow-[0_34px_110px_rgba(0,0,0,0.52)] md:rounded-[2rem]">
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(245,192,0,0.16),transparent_32%,transparent_72%,rgba(255,255,255,0.05))]" />
                <div className="relative z-10 overflow-hidden rounded-[1.45rem] bg-neutral-950 md:rounded-[1.7rem]">
                  <div className="p-6 md:min-h-[410px] md:p-8 xl:h-[410px]">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2">
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/[0.06] text-sm font-black text-brand-500">
                          03
                        </span>
                        <span className="text-[10px] font-black uppercase tracking-[0.22em] text-brand-500">
                          Próxima decisão
                        </span>
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-500">
                        Conclusão de escopo
                      </span>
                    </div>

                    <div className="mt-8 max-w-4xl">
                      <div>
                        <h3 className="text-3xl font-bold leading-tight text-white md:text-[2rem]">
                          Se você respondeu &quot;sim&quot; para uma ou mais perguntas, vale realizar uma avaliação de aplicabilidade.
                        </h3>
                        <p className="mt-5 max-w-3xl text-lg font-bold leading-relaxed text-white md:text-xl">
                          Um sinal no checklist não confirma obrigação automática. Ele mostra que a
                          empresa precisa de uma conclusão objetiva antes de seguir.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-brand-400 p-5 text-neutral-950 md:flex md:items-center md:justify-between md:gap-6 md:p-5">
                    <div className="flex gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-neutral-950 text-brand-500">
                        <ArrowRight className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-lg font-black leading-tight">
                          Quer saber se precisa se adequar?
                        </p>
                        <p className="mt-2 text-sm font-bold leading-relaxed text-neutral-800">
                          A avaliação traduz esses sinais em aplicabilidade, riscos e próximos passos.
                        </p>
                      </div>
                    </div>
                    <ActionLink href="#diagnostico-eca" size="lg" variant="dark" className="mt-6 w-full md:mt-0 md:w-auto">
                      Solicitar avaliação
                    </ActionLink>
                  </div>
                </div>
              </div>
            </motion.div>
          </ScrollStackItem>
        </ScrollStack>
      </div>
    </section>
  );
}

function ImpactSection() {
  const laneOffsets = [
    "xl:ml-[5.5rem]",
    "xl:ml-[1.25rem]",
    "xl:ml-[5.5rem]",
    "xl:ml-[1.25rem]",
    "xl:ml-[5.5rem]",
    "xl:ml-[1.25rem]",
  ];

  return (
    <section className="relative overflow-hidden bg-white py-24 md:py-32 lg:py-36">
      <PixelDecor
        placement="custom"
        mask="topRight"
        opacity={0.12}
        className="left-0 top-0 h-[34rem] w-[34rem]"
      />
      <PixelDecor placement="bottomRight" mask="bottomRight" opacity={0.11} squareSize={11} />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_22%_20%,rgba(245,192,0,0.10),transparent_25%),radial-gradient(circle_at_74%_55%,rgba(0,0,0,0.035),transparent_30%)]" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="grid gap-14 xl:grid-cols-[minmax(330px,0.42fr)_minmax(0,0.58fr)] xl:items-center 2xl:gap-20">
          <div className="min-w-0">
            <motion.div
              {...fadeUp}
              className="mb-8"
            >
              <SectionPill>Impactos Operacionais</SectionPill>
            </motion.div>

            <motion.h2
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.04 }}
              className="max-w-[620px] text-[3rem] font-bold leading-[1.04] tracking-normal text-neutral-950 sm:text-[4rem] lg:text-[3.9rem] xl:text-[4.35rem] 2xl:text-[4.7rem]"
            >
              O ECA Digital
              <span className="block">vai muito além</span>
              <span className="block font-light italic text-brand-500">da privacidade.</span>
            </motion.h2>

            <motion.p
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.08 }}
              className="mt-8 max-w-[34rem] text-lg font-medium leading-relaxed text-neutral-500 md:text-xl"
            >
              A nova regulamentação exige que diferentes áreas da empresa trabalhem de forma integrada
              para proteger crianças e adolescentes no ambiente digital.
            </motion.p>

            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.12 }}
              className="relative mt-10 max-w-[470px] overflow-hidden rounded-[1.6rem] bg-[#0a0a0a] p-6 text-white shadow-[0_24px_70px_rgba(0,0,0,0.18)] md:p-7"
            >
              <div
                aria-hidden="true"
                className="absolute inset-y-0 right-0 w-48 opacity-[0.12]"
                style={{
                  backgroundImage: "radial-gradient(circle at 1px 1px, #FFD637 2px, transparent 0)",
                  backgroundSize: "22px 22px",
                }}
              />
              <div className="relative z-10 flex flex-col gap-6 sm:flex-row sm:items-center">
                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full border border-brand-400/20 bg-brand-400/[0.03] text-brand-500 shadow-[inset_0_0_34px_rgba(255,214,55,0.08)] sm:h-28 sm:w-28">
                  <Users className="h-9 w-9 sm:h-12 sm:w-12" />
                </div>
                <div className="min-w-0">
                  <h3 className="max-w-sm text-2xl font-bold leading-[1.08] tracking-normal text-white md:text-[1.7rem]">
                    Trabalho integrado entre áreas
                  </h3>
                  <p className="mt-3 text-sm font-medium leading-relaxed text-neutral-300 md:text-base">
                    Decisões alinhadas, processos conectados e proteção contínua em toda a jornada digital.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="relative mx-auto w-full max-w-[760px] xl:mx-0 xl:max-w-none">
            <div className="absolute bottom-12 left-[2.25rem] top-12 hidden w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-brand-400/55 to-transparent md:block" />
            <div className="grid gap-5 md:gap-3">
              {impactLanes.map((lane, index) => (
                <div key={lane.area} className="relative">
                  {index % 2 === 0 ? (
                    <span className="absolute left-[2.25rem] top-1/2 z-20 hidden h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-white bg-brand-500 shadow-[0_0_0_1px_rgba(245,192,0,0.24),0_8px_20px_rgba(245,192,0,0.22)] md:block" />
                  ) : null}
                  <ImpactLaneCard lane={lane} index={index} className={laneOffsets[index]} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImpactLaneCard({
  lane,
  index,
  className,
}: {
  lane: ImpactLane;
  index: number;
  className?: string;
}) {
  const Icon = lane.icon;

  return (
    <motion.div
      {...fadeUp}
      transition={{ ...fadeUp.transition, delay: 0.04 + index * 0.035 }}
      className={cn(
        "relative z-10 rounded-[1.45rem] border border-neutral-200/80 bg-white/95 p-5 shadow-[0_18px_46px_rgba(15,23,42,0.08)] backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_26px_64px_rgba(15,23,42,0.12)] md:ml-20 md:max-w-[590px] md:p-5",
        className
      )}
    >
      <div className="grid grid-cols-[3.25rem_minmax(0,1fr)] items-start gap-4 sm:grid-cols-[3.5rem_minmax(0,1fr)] sm:items-center sm:gap-5">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#080808] text-brand-500 shadow-[0_16px_28px_rgba(0,0,0,0.18)] sm:h-14 sm:w-14">
          <Icon className="h-6 w-6 sm:h-7 sm:w-7" strokeWidth={2} />
        </div>
        <div className="min-w-0">
          <h3 className="text-xl font-bold leading-tight tracking-normal text-neutral-950 md:text-[1.38rem]">
            {lane.area}
          </h3>
          <p className="mt-2 text-sm font-medium leading-[1.48] text-neutral-600 md:text-[0.95rem]">
            {lane.text}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

function DeliverablesSection() {
  return (
    <section className="relative overflow-hidden bg-[#050505] py-24 text-white md:py-32 lg:py-36">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#050505_0%,#090909_54%,#050505_100%)]" />
      <PixelDecor placement="topRight" mask="topRight" opacity={0.14} />
      <PixelDecor placement="bottomLeft" mask="bottomLeft" opacity={0.12} />
      <div className="container relative z-10 mx-auto px-6">
        <div className="grid gap-10 xl:grid-cols-[minmax(0,0.68fr)_minmax(300px,0.32fr)] xl:items-end">
          <motion.div {...fadeUp} className="min-w-0">
            <SectionPill>Como Podemos Apoiar</SectionPill>
            <h2 className="mt-8 max-w-5xl text-[2.78rem] font-bold leading-[1.02] tracking-normal text-white sm:text-6xl sm:leading-[0.98] md:text-[4rem] lg:text-[4rem]">
              Transformamos o ECA Digital em um{" "}
              <span className="font-light italic text-brand-500">programa executável</span> para sua empresa.
            </h2>
          </motion.div>

          <motion.p
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.08 }}
            className="max-w-xl border-l border-brand-400 pl-6 text-base font-medium leading-[1.75] text-neutral-300 md:text-lg xl:pb-10"
          >
            Nossa atuação combina privacidade, tecnologia, governança e operação para transformar exigências
            regulatórias em processos claros e sustentáveis.
          </motion.p>
        </div>

        <motion.div
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.12 }}
          className="mt-10 overflow-hidden rounded-[1.65rem] border border-white/15 bg-[#0b0b0b] shadow-[0_34px_90px_rgba(0,0,0,0.42)] md:mt-12"
        >
          <div className="h-px bg-brand-400" />
          <div className="grid xl:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,0.95fr)_260px]">
            {supportPhases.map((phase, index) => {
              const Icon = phase.icon;

              return (
                <div
                  key={phase.title}
                  className={cn(
                    "relative p-6 md:p-8 xl:p-10",
                    index > 0 && "border-t border-white/10 xl:border-l xl:border-t-0"
                  )}
                >
                  <div className="flex items-start gap-5">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-brand-400/80 bg-brand-400/[0.03] text-brand-500 shadow-[0_0_34px_rgba(255,214,55,0.07)]">
                      <Icon className="h-7 w-7" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-2xl font-bold leading-none text-white">{phase.title}</h3>
                      <p className="mt-3 text-[10px] font-black uppercase tracking-[0.16em] text-neutral-300">
                        {phase.kicker}
                      </p>
                      <div className="mt-4 h-px w-12 bg-brand-400" />
                    </div>
                  </div>

                  <div className="mt-8 divide-y divide-white/10">
                    {phase.items.map((item) => (
                      <div key={item} className="flex gap-4 py-4 first:pt-0 last:pb-0">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" />
                        <p className="text-sm font-medium leading-snug text-neutral-100 md:text-base">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}

            <div className="flex min-h-[300px] flex-col justify-between bg-brand-400 p-8 text-neutral-950 md:p-10 xl:min-h-full">
              <div>
                <p className="text-[8.5rem] font-black leading-[0.8] tracking-normal md:text-[9.5rem]">
                  {supportDeliverableCount}
                </p>
                <h3 className="mt-5 text-3xl font-black leading-none tracking-normal">entregáveis</h3>
                <div className="mt-6 h-px bg-neutral-950/70" />
                <p className="mt-6 max-w-[13rem] text-sm font-semibold leading-relaxed text-neutral-950/82">
                  Do diagnóstico à operação contínua, com evidências e conformidade.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.16 }}
          className="mt-8 overflow-hidden rounded-[1.35rem] border border-white/12 bg-[#0a0a0a] shadow-[0_28px_70px_rgba(0,0,0,0.34)]"
        >
          <div className="h-px bg-gradient-to-r from-brand-400 via-brand-400/40 to-transparent" />
          <div className="grid xl:grid-cols-[minmax(0,1fr)_380px]">
            <div className="flex flex-col gap-5 p-6 sm:p-7 md:p-8 xl:flex-row xl:items-center xl:p-9">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-brand-400/50 bg-brand-400/10 text-brand-400 shadow-[0_0_34px_rgba(255,214,55,0.08)]">
                <ShieldCheck className="h-7 w-7" />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] font-black uppercase leading-tight tracking-[0.18em] text-brand-400">
                  Próximo passo
                </p>
                <h3 className="mt-3 max-w-3xl text-2xl font-black leading-tight tracking-normal text-white sm:text-3xl md:text-[2.35rem]">
                  Agende um diagnóstico e saia com um plano priorizado.
                </h3>
                <p className="mt-3 max-w-3xl text-sm font-medium leading-relaxed text-neutral-300 md:text-base">
                  Privacidade que <span className="font-bold text-white">protege</span>. Governança que{" "}
                  <span className="font-bold text-white">sustenta</span>. Impacto que gera{" "}
                  <span className="font-bold text-white">confiança</span>.
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-center gap-5 border-t border-white/10 bg-white/[0.025] p-6 sm:p-7 md:p-8 xl:border-l xl:border-t-0">
              <div className="grid grid-cols-3 gap-2">
                {["Escopo", "Riscos", "Evidências"].map((item) => (
                  <div
                    key={item}
                    className="flex min-h-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] px-2 text-center text-[10px] font-black uppercase leading-tight tracking-[0.12em] text-neutral-200"
                  >
                    {item}
                  </div>
                ))}
              </div>
              <ActionLink href="#diagnostico-eca" size="lg" className="w-full">
                Agendar diagnóstico
              </ActionLink>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function RisksSection() {
  return (
    <section className="relative overflow-hidden bg-[#fbfaf6] py-24 md:py-32">
      <PixelDecor placement="topRight" mask="topRight" opacity={0.13} squareSize={10} />
      <PixelDecor placement="bottomLeft" mask="bottomLeft" opacity={0.1} squareSize={10} />
      <div className="pointer-events-none absolute left-0 top-[18%] hidden h-28 w-2 bg-brand-400 md:block" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_12%,rgba(245,192,0,0.08),transparent_26%),radial-gradient(circle_at_12%_86%,rgba(232,28,36,0.045),transparent_24%)]" />
      <div className="container relative z-10 mx-auto px-6">
        <div className="max-w-5xl">
          <div className="mb-8">
            <SectionPill>Pontos de Atenção</SectionPill>
          </div>
          <h2 className="max-w-5xl text-[2.72rem] font-bold leading-[1.02] tracking-normal text-neutral-950 sm:text-5xl md:text-[4rem] lg:text-[4rem]">
            Alguns riscos que já estão no foco{" "}
            <span className="font-light italic text-brand-500">das autoridades.</span>
          </h2>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-flow-col xl:grid-cols-none xl:grid-rows-3 xl:auto-cols-fr xl:gap-6">
          {riskPoints.map((point) => (
            <RiskAttentionCard key={point.title} point={point} />
          ))}
        </div>
      </div>
    </section>
  );
}

function RiskAttentionCard({ point }: { point: RiskPoint }) {
  const Icon = point.icon;

  return (
    <article className="group relative min-h-[144px] overflow-hidden rounded-[1.15rem] border border-neutral-200/80 bg-white/95 p-5 shadow-[0_20px_54px_rgba(15,23,42,0.075)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-neutral-300 hover:shadow-[0_28px_70px_rgba(15,23,42,0.11)] md:p-6">
      <div className="absolute right-0 top-0 flex h-10 w-10 items-center justify-center rounded-bl-xl bg-[#e51d2a] text-white shadow-[0_12px_28px_rgba(229,29,42,0.22)] transition-colors duration-300 group-hover:bg-[#c91622]">
        <AlertTriangle className="h-4 w-4" strokeWidth={2.4} />
      </div>

      <div className="grid grid-cols-[3.75rem_minmax(0,1fr)] items-start gap-4 sm:grid-cols-[4.5rem_minmax(0,1fr)] sm:items-center sm:gap-5">
        <div className="flex h-[3.75rem] w-[3.75rem] items-center justify-center rounded-2xl border border-brand-400/35 bg-brand-400/10 text-brand-500 shadow-sm sm:h-[4.5rem] sm:w-[4.5rem]">
          <Icon className="h-8 w-8" strokeWidth={1.9} />
        </div>
        <div className="min-w-0 pr-6 sm:pr-4">
          <h3 className="text-lg font-black leading-tight tracking-normal text-neutral-950 sm:text-xl md:text-[1.28rem]">
            {point.title}
          </h3>
          <p className="mt-2 text-sm font-medium leading-relaxed text-neutral-600 sm:mt-3 md:text-[0.95rem]">
            {point.text}
          </p>
        </div>
      </div>
    </article>
  );
}

function SectorsSection() {
  return (
    <section className="relative overflow-hidden border-y border-neutral-100 bg-neutral-50 py-20 md:py-28">
      <div className="container relative z-10 mx-auto px-6">
        <div className="max-w-4xl">
          <SectionHeading
            pill="Setores mais impactados"
            title="Principais segmentos que devem"
            accent="se antecipar."
            text="A prioridade deve considerar público, atratividade, dados tratados, funcionalidades e capacidade de moderar ou intervir na experiência."
          />
        </div>

        <div className="mt-14 grid gap-6 xl:grid-cols-3">
          {sectorColumns.map((column, index) => {
            const Icon = column.icon;

            return (
              <motion.div
                key={column.title}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: index * 0.05 }}
                className="border-l-2 border-brand-400 bg-white px-6 py-7 shadow-sm shadow-neutral-200/50"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-neutral-950 text-brand-500">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-bold leading-tight text-neutral-900">{column.title}</h3>
                </div>
                <p className="mt-5 text-sm font-medium leading-relaxed text-neutral-500">{column.text}</p>
                <div className="mt-7">
                  {column.items.map((item) => (
                    <p
                      key={item}
                      className="border-t border-neutral-100 py-3 text-sm font-bold leading-tight text-neutral-900"
                    >
                      {item}
                    </p>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function EcaClientLogoStrip({ className = "" }: { className?: string }) {
  return (
    <div className={cn("relative w-full max-w-full overflow-hidden py-2", className)}>
      <style>{`
        @keyframes eca-logo-marquee {
          from { transform: translate3d(0, 0, 0); }
          to { transform: translate3d(-50%, 0, 0); }
        }

        .eca-logo-fade {
          -webkit-mask-image: linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent);
          mask-image: linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent);
        }

        @media (prefers-reduced-motion: reduce) {
          .eca-logo-marquee {
            animation: none !important;
            transform: none !important;
          }
        }
      `}</style>
      <p className="mb-3 text-[10px] font-black uppercase tracking-[0.22em] text-neutral-400">
        Empresas que confiam:
      </p>
      <div className="eca-logo-fade relative overflow-hidden">
        <div
          className="eca-logo-marquee flex w-max items-center"
          style={{ animation: "eca-logo-marquee 34s linear infinite" }}
        >
          {[0, 1].map((groupIndex) => (
            <div
              key={groupIndex}
              aria-hidden={groupIndex === 1}
              className="flex shrink-0 items-center gap-8 pr-8"
            >
              {ecaClientLogos.map((logo) => (
                <div
                  key={`${logo.name}-${groupIndex}`}
                  className="flex h-12 w-[132px] shrink-0 items-center justify-center sm:w-[145px] xl:h-14 xl:w-[150px]"
                >
                  <Image
                    src={logo.src}
                    alt={groupIndex === 0 ? logo.name : ""}
                    width={logo.width}
                    height={logo.height}
                    sizes="(min-width: 1280px) 150px, (min-width: 640px) 145px, 132px"
                    className="h-8 w-full object-contain opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 xl:h-9"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ContactSection() {
  return (
    <section id="diagnostico-eca" className="relative overflow-hidden bg-white py-24 md:py-32">
      <PixelDecor placement="topRight" mask="topRight" opacity={0.18} />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(245,192,0,0.12),transparent_28%),radial-gradient(circle_at_86%_20%,rgba(0,0,0,0.035),transparent_24%)]" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="grid gap-10 xl:grid-cols-[minmax(0,0.82fr)_minmax(360px,0.78fr)] xl:items-start xl:gap-16">
          <div className="min-w-0">
            <SectionHeading
              pill="Diagnóstico ECA Digital"
              title="Antes de adequar,"
              accent="entenda se sua empresa está no escopo."
              text="O primeiro passo não é implementar controles. É entender quais exigências realmente se aplicam ao seu produto, seus dados e sua operação."
            />

            <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-5 sm:gap-4">
              {[
                { icon: Search, title: "Aplicabilidade clara" },
                { icon: ShieldCheck, title: "Risco proporcional" },
                { icon: FileCheck2, title: "Plano de ação" },
                { icon: Sparkles, title: "Sem burocracia desnecessária" },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3 border-b border-neutral-200/70 pb-4 sm:items-center sm:gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand-400 text-neutral-950 shadow-lg shadow-brand-400/25">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h3 className="min-w-0 text-[0.92rem] font-bold leading-tight tracking-tight text-neutral-900 sm:text-base">
                    {item.title}
                  </h3>
                </div>
              ))}
            </div>

            <EcaClientLogoStrip className="mt-10 max-w-2xl" />
          </div>

          <EcaContactForm />
        </div>
      </div>
    </section>
  );
}

function EcaContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitError(null);
    setIsSubmitting(true);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const message = String(formData.get("message") || "").trim();
    const composedMessage = [
      "Interesse: Diagnóstico ECA Digital",
      message ? `Fale sobre sua empresa: ${message}` : null,
    ]
      .filter(Boolean)
      .join("\n\n");

    try {
      await submitContact({
        firstName: String(formData.get("firstName") || "").trim(),
        lastName: String(formData.get("lastName") || "").trim(),
        email: String(formData.get("email") || "").trim(),
        company: String(formData.get("company") || "").trim(),
        phone: String(formData.get("phone") || "").trim(),
        message: composedMessage,
        website: String(formData.get("website") || "").trim(),
        pageUrl: window.location.href,
        source: "Diagnóstico ECA Digital",
      });

      form.reset();
      setIsSubmitted(true);
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Não foi possível enviar sua solicitação. Tente novamente."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      {...fadeUp}
      className="relative w-full min-w-0 xl:max-w-[570px] xl:justify-self-end"
    >
      <div className="absolute -inset-4 rounded-[3rem] bg-brand-400/10 blur-3xl" />
      <div className="relative overflow-hidden rounded-[2rem] border border-neutral-200/80 bg-white p-6 shadow-[0_32px_80px_rgba(15,23,42,0.10)] sm:p-8 md:p-10">
        {isSubmitted ? (
          <div className="flex min-h-[520px] flex-col items-center justify-center text-center">
            <div className="mb-10 flex h-24 w-24 items-center justify-center rounded-full bg-brand-400/20">
              <CheckCircle2 className="h-12 w-12 text-brand-600" />
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-neutral-900">Dados recebidos!</h2>
            <p className="mt-4 max-w-sm text-lg font-medium text-neutral-500">
              Um especialista entrará em contato para organizar a próxima etapa do diagnóstico.
            </p>
            <Button
              onClick={() => setIsSubmitted(false)}
              variant="outline"
              className="mt-12 h-14 rounded-2xl border-neutral-200 px-8 font-bold"
            >
              Enviar outra mensagem
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.22em] text-brand-600">
                Formulário rápido
              </p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-neutral-900">
                Agendar diagnóstico ECA Digital
              </h2>
            </div>

            <div className="hidden" aria-hidden="true">
              <label>
                Website
                <Input name="website" tabIndex={-1} autoComplete="off" />
              </label>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <FormField label="Nome" required>
                <Input name="firstName" required placeholder="Ex: Carlos" className="bg-neutral-50/70" />
              </FormField>
              <FormField label="Sobrenome" required>
                <Input name="lastName" required placeholder="Ex: Santos" className="bg-neutral-50/70" />
              </FormField>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <FormField label="E-mail de trabalho" required>
                <Input
                  name="email"
                  type="email"
                  required
                  placeholder="carlos@empresa.com.br"
                  className="bg-neutral-50/70"
                />
              </FormField>
              <FormField label="Empresa" required>
                <Input name="company" required placeholder="Nome da empresa" className="bg-neutral-50/70" />
              </FormField>
            </div>

            <FormField label="Telefone">
              <Input name="phone" type="tel" placeholder="(00) 00000-0000" className="bg-neutral-50/70" />
            </FormField>

            <FormField label="Fale sobre sua empresa">
              <Textarea
                name="message"
                placeholder="Conte se a empresa já avaliou aplicabilidade, idade dos usuários, dados tratados ou alguma urgência comercial/regulatória."
                className="min-h-[150px] bg-neutral-50/70"
              />
            </FormField>

            <div className="pt-2">
              <Button
                size="lg"
                disabled={isSubmitting}
                className="group h-auto min-h-16 w-full rounded-2xl px-6 py-5 text-sm font-bold shadow-2xl shadow-brand-400/30"
              >
                {isSubmitting ? "Enviando..." : "Agendar Diagnóstico"}
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-2" />
              </Button>
              {submitError ? (
                <p className="mt-4 text-center text-xs font-bold text-red-500">{submitError}</p>
              ) : null}
              <p className="mt-6 text-center text-[10px] font-medium leading-relaxed text-neutral-400">
                Ao enviar, você concorda com nosso{" "}
                <Link
                  href="https://demo.privacytools.com.br/policy-view/dq0owoEXY/1/poli%CC%81tica-de-privacidade-together-privacy-and-tech/pt_BR?s=1718983084115"
                  className="underline underline-offset-4 transition-colors hover:text-neutral-900"
                >
                  Aviso de Privacidade
                </Link>
                . Seus dados estão protegidos.
              </p>
            </div>
          </form>
        )}
      </div>
    </motion.div>
  );
}

function SectionHeading({
  pill,
  title,
  accent,
  text,
  align = "left",
  tone = "light",
}: {
  pill: string;
  title: string;
  accent: string;
  text: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
}) {
  const isDark = tone === "dark";

  return (
    <div className={cn("max-w-4xl", align === "center" && "mx-auto text-center")}>
      <motion.div {...fadeUp} className="mb-8">
        <SectionPill tone={isDark ? "dark" : "light"}>{pill}</SectionPill>
      </motion.div>
      <motion.h2
        {...fadeUp}
        transition={{ ...fadeUp.transition, delay: 0.04 }}
        className={cn(
          "text-[2.55rem] font-bold leading-[1.02] tracking-normal sm:text-5xl md:text-6xl",
          isDark ? "text-white" : "text-neutral-900"
        )}
      >
        {title} <span className="font-light italic text-brand-500">{accent}</span>
      </motion.h2>
      <motion.p
        {...fadeUp}
        transition={{ ...fadeUp.transition, delay: 0.08 }}
        className={cn(
          "mt-7 max-w-2xl text-base font-medium leading-relaxed md:text-lg",
          align === "center" && "mx-auto",
          isDark ? "text-neutral-400" : "text-neutral-500"
        )}
      >
        {text}
      </motion.p>
    </div>
  );
}

function FormField({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <div className="space-y-3">
      <label className="ml-1 text-[10px] font-bold uppercase tracking-[0.18em] text-neutral-500">
        {label} {required ? <span className="text-red-500">*</span> : null}
      </label>
      {children}
    </div>
  );
}
