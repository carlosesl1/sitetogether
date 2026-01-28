import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQSection() {
    return (
        <section className="w-full py-24 bg-white" id="faq">
            <div className="container px-4 md:px-6 max-w-4xl mx-auto">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-neutral-900">
                        Perguntas que todo CEO/CFO/DPO faz
                    </h2>
                </div>

                <Accordion type="single" collapsible className="w-full space-y-4">

                    {/* Q1 */}
                    <AccordionItem value="item-1" className="border border-neutral-100 rounded-lg px-6 data-[state=open]:bg-neutral-50/50">
                        <AccordionTrigger className="text-lg font-bold text-neutral-900 hover:text-brand-600 text-left">
                            E se a ANPD bater na minha porta?
                        </AccordionTrigger>
                        <AccordionContent className="text-neutral-600 leading-relaxed text-base pt-2">
                            <p className="mb-4"><strong>Nós atendemos. Literalmente.</strong> Somos seu DPO nomeado oficialmente. A responsabilidade técnica é nossa.</p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Análise do pedido</li>
                                <li>Preparação de documentação técnica</li>
                                <li>Redação de respostas oficiais</li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Q2 */}
                    <AccordionItem value="item-2" className="border border-neutral-100 rounded-lg px-6 data-[state=open]:bg-neutral-50/50">
                        <AccordionTrigger className="text-lg font-bold text-neutral-900 hover:text-brand-600 text-left">
                            Já tenho jurídico interno. Por que preciso de vocês?
                        </AccordionTrigger>
                        <AccordionContent className="text-neutral-600 leading-relaxed text-base pt-2">
                            <p className="mb-4">Jurídico faz contratos. <strong>Nós fazemos a operação diária.</strong> Quem configura cookies? Quem responde titulares? Quem faz RIPD? Seu jurídico é fundamental para estratégia; nós operamos a máquina.</p>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Q3 */}
                    <AccordionItem value="item-3" className="border border-neutral-100 rounded-lg px-6 data-[state=open]:bg-neutral-50/50">
                        <AccordionTrigger className="text-lg font-bold text-neutral-900 hover:text-brand-600 text-left">
                            Meu DPO não vai ver vocês como ameaça?
                        </AccordionTrigger>
                        <AccordionContent className="text-neutral-600 leading-relaxed text-base pt-2">
                            <p className="mb-4"><strong>Não. Potencializamos o trabalho dele.</strong> Um DPO sozinho é como um médico fazendo cirurgia e limpeza ao mesmo tempo. Nós damos a ele um time cirúrgico completo para que ele possa atuar na gestão estratégica.</p>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Q4 */}
                    <AccordionItem value="item-4" className="border border-neutral-100 rounded-lg px-6 data-[state=open]:bg-neutral-50/50">
                        <AccordionTrigger className="text-lg font-bold text-neutral-900 hover:text-brand-600 text-left">
                            Isso não vai engessar meu time e atrasar projetos?
                        </AccordionTrigger>
                        <AccordionContent className="text-neutral-600 leading-relaxed text-base pt-2">
                            <p className="mb-4"><strong>Pelo contrário. Somos Business Enablers.</strong> Ao invés de travar uma venda por 3 semanas tentando montar evidências, nós entregamos em 24h. Nós desobstruímos seu pipeline.</p>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Q5 */}
                    <AccordionItem value="item-5" className="border border-neutral-100 rounded-lg px-6 data-[state=open]:bg-neutral-50/50">
                        <AccordionTrigger className="text-lg font-bold text-neutral-900 hover:text-brand-600 text-left">
                            Qual o custo real disso?
                        </AccordionTrigger>
                        <AccordionContent className="text-neutral-600 leading-relaxed text-base pt-2">
                            <p className="mb-4">Contratar um DPO júnior (CLT) custa ≈ R$ 45k/mês com encargos. A TOGETHER oferece um time completo (Advogados + DPO Sênior + Técnicos) por uma fração disso. É um investimento que se paga no primeiro contrato Enterprise destravado.</p>
                        </AccordionContent>
                    </AccordionItem>

                </Accordion>
            </div>
        </section>
    );
}
