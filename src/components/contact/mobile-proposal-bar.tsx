"use client";

import { useEffect, useState, type ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import styles from "./mobile-proposal-bar.module.css";

/**
 * Phone-only call to action pinned to the bottom of a service page.
 * Stays hidden while the visitor is at the top or while any proposal form is on screen.
 * An extra action (children) replaces the note, which would not fit beside two buttons.
 */
export function MobileProposalBar({ href, label, note, children }: { href: string; label: string; note: string; children?: ReactNode }) {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const forms = Array.from(document.querySelectorAll("[data-proposal-form]"));
        const onScreen = new Set<Element>();
        let pastTop = window.scrollY > 600;
        const update = () => setVisible(pastTop && onScreen.size === 0);

        const observer = new IntersectionObserver((entries) => {
            for (const entry of entries) {
                if (entry.isIntersecting) onScreen.add(entry.target);
                else onScreen.delete(entry.target);
            }
            update();
        });
        forms.forEach((form) => observer.observe(form));

        const onScroll = () => {
            const next = window.scrollY > 600;
            if (next !== pastTop) { pastTop = next; update(); }
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        update();
        return () => { observer.disconnect(); window.removeEventListener("scroll", onScroll); };
    }, []);

    return (
        <div className={styles.bar} data-visible={visible} inert={!visible}>
            {children ?? <p>{note}</p>}
            <a href={href} className={styles.primary}>{label}<ArrowRight size={17} aria-hidden="true" /></a>
        </div>
    );
}
