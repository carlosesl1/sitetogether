import Image from "next/image";
import type { SaasClientName } from "@/components/industry/saas/saas-content-types";
import { cn } from "@/lib/utils";

const clientAssets: Record<
  SaasClientName,
  { src: string; width: number; height: number; className: string }
> = {
  "Mercado Bitcoin": {
    src: "/logos/partners/camara-comercio-arabe-brasileira.svg",
    width: 409,
    height: 142,
    className: "h-12 w-[150px] sm:h-14 sm:w-[180px]",
  },
  "Tarea": {
    src: "/logos/partners/governo-rio-de-janeiro.svg",
    width: 283,
    height: 82,
    className: "h-8 w-[140px] sm:h-9 sm:w-[170px]",
  },
  "InHire": {
    src: "/logos/partners/idel.svg",
    width: 416,
    height: 94,
    className: "h-7 w-[120px] sm:h-8 sm:w-[145px]",
  },
  "Eletrobras": {
    src: "/logos/partners/eletrobras.svg",
    width: 538,
    height: 150,
    className: "h-9 w-[145px] sm:h-10 sm:w-[175px]",
  },
  "Unimed": {
    src: "/logos/partners/unimed.svg",
    width: 406,
    height: 150,
    className: "h-9 w-[130px] sm:h-10 sm:w-[160px]",
  },
};

const openLogoClasses: Record<SaasClientName, string> = {
  "Mercado Bitcoin": "h-10 w-[144px] sm:h-11 sm:w-[160px]",
  "Tarea": "h-8 w-[120px] sm:w-[138px]",
  "InHire": "h-7 w-[124px] sm:w-[138px]",
  "Eletrobras": "h-9 w-[135px] sm:h-10 sm:w-[150px]",
  "Unimed": "h-9 w-[112px] sm:h-10 sm:w-[124px]",
};

export function SaasClientProof({
  clients,
  heading,
  variant = "static",
}: {
  readonly clients: readonly SaasClientName[];
  readonly heading?: string;
  readonly variant?: "transition" | "static" | "open";
}) {
  const content = (
    <>
      {heading ? (
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-neutral-400 sm:text-sm">
          {heading}
        </p>
      ) : null}
      <div
        role="list"
        aria-label="Empresas que já confiaram na TOGETHER"
        className={cn(
          "mt-8 grid grid-cols-2 items-center gap-x-6 gap-y-8 lg:grid-cols-5",
          variant === "open" ? "lg:gap-0" : "sm:grid-cols-3 lg:gap-8",
        )}
      >
        {clients.map((name, index) => {
          const client = { name, ...clientAssets[name] };
          return (
            <div
              key={client.name}
              role="listitem"
              className={cn(
                "flex min-h-16 items-center justify-center",
                variant === "open"
                  ? "last:col-span-2 lg:min-h-20 lg:px-6 lg:last:col-span-1"
                  : "lg:justify-start",
                variant === "open" && index > 0 && "lg:border-l lg:border-neutral-200",
              )}
            >
              <Image
                src={client.src}
                alt={client.name}
                width={client.width}
                height={client.height}
                sizes="(min-width: 1024px) 180px, 45vw"
                className={cn(
                  "max-w-full object-contain grayscale opacity-75",
                  variant === "open" ? openLogoClasses[client.name] : client.className,
                )}
              />
            </div>
          );
        })}
      </div>
    </>
  );

  if (variant === "transition") {
    return (
      <div className="relative z-20 -mt-10 w-full bg-[linear-gradient(to_bottom,transparent_2.5rem,#fffdf8_2.5rem)] px-4 md:px-6">
        <section className="container relative rounded-[40px] bg-white px-6 pb-12 pt-12 shadow-[0_-20px_40px_rgba(0,0,0,0.02)] sm:px-8 lg:px-12">
          {content}
        </section>
      </div>
    );
  }

  if (variant === "open") {
    return <div className="text-neutral-950">{content}</div>;
  }

  return (
    <div className="rounded-[2rem] border border-white/10 bg-white p-6 text-neutral-950 sm:p-9">
      {content}
    </div>
  );
}
