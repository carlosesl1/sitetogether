"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MessageSquare } from "lucide-react";
import { ActionLink, SectionPill } from "@/components/ui/site-primitives";
import { PixelDecor } from "@/components/ui/backgrounds/pixel-decor";

const faqs = [
    {
        question: "A TOGETHER oferece serviços do tipo DPO as a Service?",
        answer: "Sim! Nossa consultoria disponibiliza esse serviço para clientes que ainda não possuem um DPO interno ou um comitê de privacidade estruturado. Oferecemos um DPO certificado e experiente, que atuará junto à nossa equipe técnica para garantir uma adequação segura à LGPD e a implementação de um programa de privacidade confiável e eficiente."
    },
    {
        question: "Substituímos ou complementamos o departamento jurídico?",
        answer: "Atuamos na operação do dia a dia da privacidade. Seu jurídico permanece focado no negócio e nas decisões regulatórias, enquanto nós cuidamos da rotina técnica e das demandas diárias de DPO."
    },
    {
        question: "Quanto tempo leva o processo de adequação à LGPD?",
        answer: "O tempo de adequação varia conforme o porte e a complexidade da sua empresa. Com nossa abordagem é flexível e focada nas suas principais necessidades, em média, a fase inicial de adequação leva de 1 a 3 meses, dependendo do volume de dados tratados e do nível de maturidade da empresa em relação à privacidade e proteção de dados."
    },
    {
        question: "Como é feita a gestão e o suporte após a adequação?",
        answer: "Privacidade não é um projeto com fim, é um processo. Mantemos um monitoramento mensal (Always-on) com auditorias recorrentes e suporte dedicado para qualquer incidente ou nova regulação."
    },
    {
        question: "Preciso contratar um software no primeiro momento?",
        answer: "Não necessariamente. No início, focamos na adequação inicial por meio de processos e documentação essenciais. No entanto, recomendamos fortemente o uso de uma plataforma de privacidade para manter o inventário de dados sempre atualizado e garantir que seu programa de privacidade esteja em conformidade contínua com as exigências de compliance."
    }
];

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
    const [isOpen, setIsOpen] = React.useState(index === 0);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={`group relative border-b border-neutral-100 transition-all duration-700 ${isOpen ? "pb-10 mb-10" : "pb-8"}`}
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between text-left gap-4 py-2 group/btn sm:gap-10"
            >
                <h3 className={`text-xl md:text-3xl font-bold tracking-tight transition-all duration-500 ${isOpen ? "text-neutral-900" : "text-neutral-400 group-hover:text-neutral-600"}`}>
                    {question}
                </h3>
                <div className={`shrink-0 w-12 h-12 rounded-full border border-neutral-100 flex items-center justify-center transition-all duration-500 ${isOpen ? "bg-neutral-900 text-white rotate-180 border-neutral-900 shadow-[0_10px_30px_rgba(0,0,0,0.15)] scale-110" : "text-neutral-400 group-hover:border-neutral-300 group-hover:text-neutral-900 group-hover:-translate-y-1"}`}>
                    <ChevronDown className="w-6 h-6" />
                </div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                    >
                        <div className="pt-6 border-l-2 border-brand-400 pl-8 ml-1">
                            <p className="text-neutral-500 text-lg md:text-xl leading-relaxed font-medium max-w-3xl">
                                {answer}
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

export function FAQSection() {
    return (
        <section className="w-full py-24 md:py-48 bg-white overflow-hidden relative" id="faq">
            {/* Ambient refinements */}
            <PixelDecor placement="topRight" mask="topRight" opacity={0.14} />
            <PixelDecor placement="bottomLeft" mask="bottomLeft" opacity={0.16} />
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neutral-100 to-transparent"></div>
            <div className="absolute top-[10%] right-[-5%] w-[600px] h-[600px] bg-brand-400/[0.03] rounded-full blur-[120px] -z-0"></div>

            <div className="container px-6 mx-auto relative z-10">
                <div className="flex flex-col gap-16 lg:flex-row lg:gap-40 items-start">
                    <div className="lg:w-1/3 lg:sticky lg:top-0 pt-2">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-10"
                        >
                            <SectionPill>Suporte & Consultoria</SectionPill>
                        </motion.div>

                        <h2 className="text-[2.75rem] sm:text-5xl lg:text-[3.6rem] xl:text-7xl font-bold tracking-tight text-neutral-900 leading-[0.94] mb-10">
                            Perguntas <br />
                            <span className="text-brand-500 italic font-light">Frequentes.</span>
                        </h2>

                        <p className="text-neutral-500 font-medium text-xl leading-relaxed max-w-sm mb-12">
                            Respostas para destravar seu próximo nível.
                        </p>

                        <div className="bg-neutral-50 rounded-3xl p-8 border border-neutral-100">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-2xl bg-white border border-neutral-100 flex items-center justify-center shadow-sm">
                                    <MessageSquare className="w-6 h-6 text-brand-500" />
                                </div>
                                <span className="font-bold text-neutral-900">Ainda com dúvidas?</span>
                            </div>
                            <ActionLink href="/contato" variant="dark" size="md" fullWidth className="tracking-[0.08em] sm:tracking-[0.1em] xl:tracking-[0.16em]">
                                Agendar Call Técnica
                            </ActionLink>
                        </div>
                    </div>

                    <div className="lg:w-2/3">
                        <div className="space-y-4">
                            {faqs.map((faq, i) => (
                                <FAQItem key={i} index={i} {...faq} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
