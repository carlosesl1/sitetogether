import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar() {
    return (
        <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-neutral-100/50 supports-[backdrop-filter]:bg-white/60">
            <div className="container flex h-20 items-center justify-between">
                {/* Logo Area - Simplified */}
                <Link href="/" className="flex items-center space-x-2 group">
                    <div className="h-9 w-9 rounded-full bg-brand-400 flex items-center justify-center text-neutral-900 font-bold group-hover:scale-105 transition-transform shadow-sm">
                        T
                    </div>
                    <span className="text-xl font-bold tracking-tight text-neutral-900">TOGETHER</span>
                </Link>

                {/* Navigation Links - Centered */}
                <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
                    {["Soluções", "Metodologia", "Cases", "Conteúdos"].map((item) => (
                        <Link
                            key={item}
                            href="#"
                            className="text-sm font-medium text-neutral-500 transition-colors hover:text-neutral-900 hover:bg-neutral-50 px-3 py-2 rounded-md"
                        >
                            {item}
                        </Link>
                    ))}
                </nav>

                {/* Action Buttons - Minimal */}
                <div className="flex items-center gap-4">
                    <Button size="default" className="font-bold shadow-none hover:shadow-md transition-all">
                        Falar com Especialista
                    </Button>
                </div>
            </div>
        </header>
    );
}
