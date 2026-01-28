import { Card, CardContent, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Insights() {
    const posts = [
        {
            category: "Artigo",
            title: "Como passar em Vendor Assessments de grandes empresas.",
            readTime: "5 min",
        },
        {
            category: "Guia",
            title: "Checklist de Adequação para 2026.",
            readTime: "Download PDF",
        },
        {
            category: "Webinar",
            title: "O papel do DPO moderno.",
            readTime: "Assistir",
        },
    ]
    return (
        <section className="w-full py-16 md:py-24 bg-neutral-50">
            <div className="container px-4 md:px-6">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-neutral-900 mb-2">
                            Inteligência de Mercado
                        </h2>
                        <p className="text-neutral-500">Nossa visão sobre o futuro da privacidade.</p>
                    </div>
                    <Button variant="ghost" className="hidden md:flex text-brand-600 hover:text-brand-700 font-semibold gap-2">
                        Ver todos <ArrowRight className="w-4 h-4" />
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {posts.map((post, i) => (
                        <Card key={i} className="group hover:border-brand-200 hover:shadow-md transition-all cursor-pointer bg-white">
                            <CardContent className="p-6 space-y-4">
                                <div className="flex justify-between items-center">
                                    <span className="text-xs font-bold text-brand-600 uppercase tracking-wider">{post.category}</span>
                                    <span className="text-xs text-neutral-400">{post.readTime}</span>
                                </div>
                                <CardTitle className="text-lg leading-tight group-hover:text-brand-600 transition-colors">
                                    {post.title}
                                </CardTitle>
                            </CardContent>
                            <CardFooter className="p-6 pt-0">
                                <span className="text-sm font-semibold text-neutral-400 group-hover:text-brand-500 flex items-center gap-2 transition-colors">
                                    Ler agora <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                                </span>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
                <div className="mt-8 md:hidden text-center">
                    <Button variant="ghost" className="text-brand-600 hover:text-brand-700 font-semibold gap-2">
                        Ver todos <ArrowRight className="w-4 h-4" />
                    </Button>
                </div>
            </div>
        </section>
    );
}
