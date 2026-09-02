import Image from "next/image";

const privateSchoolsLogos = [
  {
    name: "Mercado Bitcoin",
    src: "/logos/partners/camara-comercio-arabe-brasileira.svg",
    width: 409,
    height: 142,
    className: "h-12 w-[180px] lg:h-14 lg:w-[220px]",
  },
  {
    name: "Tarea",
    src: "/logos/partners/governo-rio-de-janeiro.svg",
    width: 283,
    height: 82,
    className: "h-9 w-[160px] lg:h-10 lg:w-[200px]",
  },
  {
    name: "InHire",
    src: "/logos/partners/idel.svg",
    width: 416,
    height: 94,
    className: "h-8 w-[140px] lg:h-9 lg:w-[170px]",
  },
  {
    name: "Eletrobras",
    src: "/logos/partners/eletrobras.svg",
    width: 538,
    height: 150,
    className: "h-10 w-[180px] lg:h-12 lg:w-[220px]",
  },
  {
    name: "Unimed",
    src: "/logos/partners/unimed.svg",
    width: 406,
    height: 150,
    className: "h-10 w-[160px] lg:h-12 lg:w-[200px]",
  },
] as const;

function LogoSet({ duplicate = false }: { readonly duplicate?: boolean }) {
  return (
    <div
      aria-hidden={duplicate || undefined}
      className="flex shrink-0 items-center gap-10 pr-10 opacity-70 transition-opacity duration-300 hover:opacity-100 lg:gap-16 lg:pr-16"
    >
      {privateSchoolsLogos.map((logo) => (
        <div
          key={`${duplicate ? "duplicate-" : ""}${logo.name}`}
          className="flex h-16 w-[190px] shrink-0 items-center justify-center lg:h-20 lg:w-[240px]"
        >
          <Image
            src={logo.src}
            alt={duplicate ? "" : logo.name}
            width={logo.width}
            height={logo.height}
            sizes="(min-width: 1024px) 240px, 190px"
            className={`${logo.className} object-contain grayscale transition duration-300 hover:grayscale-0`}
          />
        </div>
      ))}
    </div>
  );
}

export function PrivateSchoolsProofStrip() {
  return (
    <div className="relative z-20 -mt-10 w-full px-4 md:px-6">
      <section
        aria-labelledby="private-schools-proof-title"
        className="container relative mx-auto rounded-[40px] bg-white px-6 pb-12 pt-12 shadow-[0_-20px_40px_rgba(0,0,0,0.02)] sm:px-8 lg:px-12"
      >
        <h2
          id="private-schools-proof-title"
          className="mb-8 text-sm font-medium uppercase tracking-widest text-stone-400"
        >
          Empresas que confiam na TOGETHER
        </h2>
        <div className="relative w-full overflow-hidden">
          <div className="absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-white to-transparent lg:w-32" />
          <div className="absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-white to-transparent lg:w-32" />
          <div
            data-pause-offscreen-animation
            className="flex w-max animate-marquee motion-reduce:animate-none motion-reduce:transform-none"
          >
            <LogoSet />
            <LogoSet duplicate />
          </div>
        </div>
      </section>
    </div>
  );
}
