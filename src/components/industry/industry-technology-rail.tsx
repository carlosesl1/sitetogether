import Image from "next/image";
import { privacyPlatforms } from "@/content/privacy-platforms";

export function IndustryTechnologyRail() {
  return (
    <div className="border-t border-white/10 pt-10">
      <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-neutral-500">
        Experiência prática com plataformas de privacidade
      </p>
      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-7">
        {privacyPlatforms.map((platform) => (
          <div
            key={platform.id}
            className="flex min-h-20 items-center justify-center rounded-[20px] border border-white/10 bg-white/[0.035] px-4"
          >
            <Image
              src={platform.src}
              alt={platform.label}
              width={160}
              height={48}
              className="max-h-8 w-auto max-w-full object-contain grayscale opacity-65"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
