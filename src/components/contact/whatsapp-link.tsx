import { MessageCircle } from "lucide-react";
import styles from "./whatsapp-link.module.css";

export const TOGETHER_WHATSAPP = "5511926420123";

type WhatsAppLinkProps = {
    /** Pre-filled first message, so the team knows which page the lead came from. */
    message: string;
    label?: string;
    /** Read by the click tracker as cta_location. */
    location: string;
    variant?: "outline" | "compact";
    className?: string;
};

export function WhatsAppLink({ message, label = "Falar no WhatsApp", location, variant = "outline", className }: WhatsAppLinkProps) {
    const href = `https://wa.me/${TOGETHER_WHATSAPP}?text=${encodeURIComponent(message)}`;
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            data-analytics-location={location}
            className={`${styles.link} ${styles[variant]}${className ? ` ${className}` : ""}`}
            aria-label={variant === "compact" ? `${label} (abre em nova aba)` : undefined}
        >
            <MessageCircle size={18} aria-hidden="true" />
            {variant === "compact" ? <span className={styles.compactText}>WhatsApp</span> : <>{label}<span className={styles.srOnly}> (abre em nova aba)</span></>}
        </a>
    );
}
