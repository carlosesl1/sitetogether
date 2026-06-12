import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold uppercase tracking-[0.16em] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 active:scale-[0.98]",
    {
        variants: {
            variant: {
                default: "bg-brand-400 text-neutral-900 shadow-md hover:bg-brand-500 hover:shadow-lg hover:-translate-y-0.5 border border-transparent",
                destructive:
                    "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
                outline:
                    "border-2 border-neutral-200 bg-transparent hover:bg-neutral-50 hover:text-neutral-900 hover:border-neutral-300 text-neutral-600",
                secondary:
                    "bg-neutral-100 text-neutral-900 shadow-sm hover:bg-neutral-200",
                ghost: "hover:bg-neutral-100 hover:text-neutral-900 text-neutral-600",
                link: "text-brand-600 underline-offset-4 hover:underline",
            },
            size: {
                default: "h-11 px-6 py-2", /* Taller standard button */
                sm: "h-9 rounded-md px-4 text-xs",
                lg: "h-14 rounded-xl px-8 text-base", /* Large, substantial button */
                icon: "h-11 w-11",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
)

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button"
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export { Button, buttonVariants }
