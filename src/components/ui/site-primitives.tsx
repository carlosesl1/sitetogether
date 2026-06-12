import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type SectionPillProps = {
    children: ReactNode;
    tone?: "light" | "dark" | "brand";
    className?: string;
};

export function SectionPill({ children, tone = "light", className }: SectionPillProps) {
    return (
        <div
            className={cn(
                "inline-flex max-w-full w-fit items-center gap-2 rounded-full border px-3 py-1 text-left shadow-sm",
                tone === "light" && "border-neutral-100 bg-neutral-50 text-neutral-500",
                tone === "dark" && "border-white/10 bg-white/5 text-neutral-400",
                tone === "brand" && "border-black/5 bg-white/20 text-neutral-900 backdrop-blur-md",
                className
            )}
        >
            <span className="h-1.5 w-1.5 rounded-full bg-brand-400 shadow-[0_0_10px_rgba(255,214,55,0.8)]" />
            <span className="min-w-0 text-[10px] font-bold uppercase tracking-[0.22em] leading-tight">{children}</span>
        </div>
    );
}

type ActionLinkProps = {
    href: string;
    children: ReactNode;
    variant?: "primary" | "dark" | "light" | "muted";
    size?: "sm" | "md" | "lg" | "xl";
    fullWidth?: boolean;
    className?: string;
};

export function ActionLink({
    href,
    children,
    variant = "primary",
    size = "md",
    fullWidth = false,
    className
}: ActionLinkProps) {
    return (
        <Link
            href={href}
            className={cn(
                "group inline-flex max-w-full items-center justify-center gap-3 whitespace-normal text-center font-bold uppercase leading-tight tracking-[0.14em] transition-all duration-200 active:scale-[0.98] sm:whitespace-nowrap sm:tracking-[0.16em]",
                fullWidth && "w-full",
                size === "sm" && "min-h-11 rounded-xl px-5 py-3 text-[11px] sm:px-6 sm:text-xs",
                size === "md" && "min-h-12 rounded-xl px-5 py-3 text-[11px] sm:px-7 sm:text-xs",
                size === "lg" && "min-h-14 rounded-2xl px-6 py-3 text-xs sm:px-8",
                size === "xl" && "min-h-16 rounded-2xl px-6 py-4 text-xs sm:px-10 sm:text-sm",
                variant === "primary" &&
                    "bg-brand-400 text-neutral-900 shadow-lg shadow-brand-400/25 hover:-translate-y-0.5 hover:bg-brand-500",
                variant === "dark" &&
                    "bg-neutral-950 text-white shadow-xl shadow-neutral-950/15 hover:-translate-y-0.5 hover:bg-neutral-800",
                variant === "light" &&
                    "bg-white text-neutral-950 shadow-xl shadow-white/5 hover:-translate-y-0.5 hover:bg-brand-400",
                variant === "muted" &&
                    "bg-neutral-100 text-neutral-900 hover:-translate-y-0.5 hover:bg-neutral-200",
                className
            )}
        >
            <span className="min-w-0 break-words">{children}</span>
            <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" />
        </Link>
    );
}
