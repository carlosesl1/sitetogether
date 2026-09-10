import Image from "next/image";

const logos = [
  { name: "AXIA Energia", src: "/logos/partners/pinheiro-guimaraes.svg", width: 595, height: 57 },
  { name: "Mercado Bitcoin", src: "/logos/partners/camara-comercio-arabe-brasileira.svg", width: 409, height: 142 },
  { name: "Tarea", src: "/logos/partners/governo-rio-de-janeiro.svg", width: 283, height: 82 },
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
    name: "Bom Consórcio",
    src: "/logos/partners/bomconsorcio.png",
    width: 622,
    height: 137,
  },
  {
    name: "InHire",
    src: "/logos/partners/idel.svg",
    width: 416,
    height: 94,
  },
  { name: "Ideal", src: "/logos/partners/ideal.webp", width: 307, height: 88 },
  { name: "Pinheiro Guimarães", src: "/logos/partners/partner-image-62.webp", width: 746, height: 46 },
  { name: "Governo do Estado do Rio de Janeiro", src: "/logos/partners/partner-image-63.webp", width: 543, height: 141 },
  { name: "Câmara de Comércio Árabe Brasileira", src: "/logos/partners/partner-image-64.webp", width: 337, height: 132 },
] as const;

export function IndustryContactLogoStrip({ layout = "marquee" }: { readonly layout?: "marquee" | "grid" } = {}) {
  if (layout === "grid") {
    return (
      <div className="relative mt-10 w-full max-w-2xl py-2">
        <p className="mb-6 text-[10px] font-black uppercase tracking-[0.22em] text-neutral-400">
          Empresas que confiam na TOGETHER:
        </p>
        <div className="grid grid-cols-4 items-center gap-x-5 gap-y-7 min-[480px]:grid-cols-6">
          {logos.map((logo, index) => (
            <div key={logo.src} className={`col-span-2 flex h-16 min-w-0 items-center justify-center ${index === 9 ? "min-[480px]:col-start-2" : ""} ${index === 10 ? "col-start-2 min-[480px]:col-start-4" : ""}`}>
              <Image
                src={logo.src}
                alt={logo.name}
                width={logo.width}
                height={logo.height}
                sizes="(min-width: 1024px) 170px, (min-width: 480px) 200px, 140px"
                className={`max-h-14 w-full object-contain opacity-65 grayscale ${index === 2 || index === 6 || index === 7 ? "max-w-[140px]" : "max-w-[170px]"}`}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="relative mt-10 w-full max-w-2xl overflow-hidden py-2">
      <style>{`
        @keyframes industry-contact-logo-marquee {
          from { transform: translate3d(0, 0, 0); }
          to { transform: translate3d(-50%, 0, 0); }
        }

        .industry-contact-logo-fade {
          -webkit-mask-image: linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent);
          mask-image: linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent);
        }

        @media (prefers-reduced-motion: reduce) {
          .industry-contact-logo-marquee {
            animation: none !important;
            transform: none !important;
          }
        }
      `}</style>
      <p className="mb-3 text-[10px] font-black uppercase tracking-[0.22em] text-neutral-400">
        Empresas que confiam na TOGETHER:
      </p>
      <div className="industry-contact-logo-fade overflow-hidden">
        <div
          data-pause-offscreen-animation
          className="industry-contact-logo-marquee flex w-max items-center"
          style={{ animation: "industry-contact-logo-marquee 75s linear infinite" }}
        >
          {[0, 1].map((groupIndex) => (
            <div
              key={groupIndex}
              aria-hidden={groupIndex === 1}
              className="flex shrink-0 items-center gap-8 pr-8"
            >
              {logos.map((logo) => (
                <div
                  key={`${logo.src}-${groupIndex}`}
                  className="flex h-12 w-[132px] shrink-0 items-center justify-center sm:w-[145px] xl:h-14 xl:w-[150px]"
                >
                  <Image
                    src={logo.src}
                    alt={groupIndex === 0 ? logo.name : ""}
                    width={logo.width}
                    height={logo.height}
                    sizes="(min-width: 1280px) 150px, (min-width: 640px) 145px, 132px"
                    className="h-8 w-full object-contain opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 xl:h-9"
                    style={logo.name === "InHire" ? { width: 130 } : undefined}
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
