import Image from "next/image";

const logos = [
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
] as const;

export function PrivateSchoolsContactLogoStrip() {
  return (
    <div className="relative mt-10 w-full max-w-2xl overflow-hidden py-2">
      <style>{`
        @keyframes private-schools-contact-logo-marquee {
          from { transform: translate3d(0, 0, 0); }
          to { transform: translate3d(-50%, 0, 0); }
        }

        .private-schools-contact-logo-fade {
          -webkit-mask-image: linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent);
          mask-image: linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent);
        }

        @media (prefers-reduced-motion: reduce) {
          .private-schools-contact-logo-marquee {
            animation: none !important;
            transform: none !important;
          }
        }
      `}</style>
      <p className="mb-3 text-[10px] font-black uppercase tracking-[0.22em] text-neutral-400">
        Empresas que confiam:
      </p>
      <div className="private-schools-contact-logo-fade overflow-hidden">
        <div
          data-pause-offscreen-animation
          className="private-schools-contact-logo-marquee flex w-max items-center"
          style={{
            animation: "private-schools-contact-logo-marquee 34s linear infinite",
          }}
        >
          {[0, 1].map((groupIndex) => (
            <div
              key={groupIndex}
              aria-hidden={groupIndex === 1}
              className="flex shrink-0 items-center gap-8 pr-8"
            >
              {logos.map((logo) => (
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
