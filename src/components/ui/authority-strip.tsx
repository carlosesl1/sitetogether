import { cn } from "@/lib/utils";
import Image from "next/image";

const logos = [
    {
        name: "Pinheiro Guimaraes",
        src: "/logos/partners/pinheiro-guimaraes.svg",
        width: 595,
        height: 57,
        className: "h-5 lg:h-7 w-[200px] lg:w-[260px]",
    },
    {
        name: "Camara de Comercio Arabe Brasileira",
        src: "/logos/partners/camara-comercio-arabe-brasileira.svg",
        width: 409,
        height: 142,
        className: "h-12 lg:h-16 w-[210px] lg:w-[280px]",
    },
    {
        name: "Tarea",
        src: "/logos/partners/governo-rio-de-janeiro.svg",
        width: 283,
        height: 82,
        className: "h-8 lg:h-10 w-[155px] lg:w-[210px]",
    },
    {
        name: "Inhire",
        src: "/logos/partners/idel.svg",
        width: 416,
        height: 94,
        className: "h-6 lg:h-8 w-[120px] lg:w-[170px]",
    },
    {
        name: "Eletrobras",
        src: "/logos/partners/eletrobras.svg",
        width: 538,
        height: 150,
        className: "h-9 lg:h-12 w-[180px] lg:w-[240px]",
    },
    {
        name: "Unimed",
        src: "/logos/partners/unimed.svg",
        width: 406,
        height: 150,
        className: "h-9 lg:h-12 w-[160px] lg:w-[220px]",
    },
    {
        name: "Bom Consorcio",
        src: "/logos/partners/bomconsorcio.png",
        width: 622,
        height: 137,
        className: "h-9 lg:h-12 w-[180px] lg:w-[250px]",
    },
    {
        name: "Ideal",
        src: "/logos/partners/ideal.png",
        width: 307,
        height: 88,
        className: "h-9 lg:h-12 w-[130px] lg:w-[170px]",
    },
    {
        name: "Parceiro",
        src: "/logos/partners/partner-image-62.png",
        width: 746,
        height: 46,
        className: "h-6 lg:h-8 w-[190px] lg:w-[260px]",
    },
    {
        name: "Parceiro",
        src: "/logos/partners/partner-image-63.png",
        width: 543,
        height: 141,
        className: "h-10 lg:h-12 w-[180px] lg:w-[240px]",
    },
    {
        name: "Parceiro",
        src: "/logos/partners/partner-image-64.png",
        width: 337,
        height: 132,
        className: "h-10 lg:h-12 w-[130px] lg:w-[180px]",
    },
];

function LogoMarqueeSet({ duplicate = false }: { duplicate?: boolean }) {
    return (
        <div className={cn(
            "flex items-center gap-10 lg:gap-16 opacity-80 transition-opacity duration-500 hover:opacity-100",
            duplicate && "ml-10 lg:ml-16"
        )}>
            {logos.map((logo, index) => (
                <div
                    key={`${duplicate ? "dup-" : ""}${logo.src}-${index}`}
                    className="flex h-16 lg:h-20 shrink-0 items-center justify-center"
                >
                    <Image
                        src={logo.src}
                        alt={logo.name}
                        width={logo.width}
                        height={logo.height}
                        sizes="(min-width: 1024px) 280px, 210px"
                        className={cn("object-contain", logo.className)}
                    />
                </div>
            ))}
        </div>
    );
}

export function AuthorityStrip() {
    return (
        <div className="relative z-20 -mt-10 w-full px-4 md:px-6">
            <section className="container relative rounded-t-[40px] bg-white px-6 pb-12 pt-12 shadow-[0_-20px_40px_rgba(0,0,0,0.02)] sm:px-8 lg:px-12">
                <p className="text-left text-sm font-medium text-stone-400 uppercase tracking-widest mb-8">
                    Clientes que confiam:
                </p>

                <div className="overflow-hidden w-full relative">
                    {/* Gradient Masks */}
                    <div className="z-10 bg-gradient-to-r from-white to-transparent w-12 lg:w-40 h-full absolute top-0 left-0"></div>
                    <div className="z-10 bg-gradient-to-l from-white to-transparent w-12 lg:w-40 h-full absolute top-0 right-0"></div>

                    {/* Marquee Content */}
                    <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
                        <LogoMarqueeSet />
                        <LogoMarqueeSet duplicate />
                    </div>
                </div>
            </section>
        </div>
    );
}
