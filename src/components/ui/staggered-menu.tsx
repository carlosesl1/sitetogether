"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { gsap } from "gsap";
import "./staggered-menu.css";

interface MenuItem {
    label: string;
    ariaLabel: string;
    link: string;
}

interface SocialItem {
    label: string;
    link: string;
}

interface StaggeredMenuProps {
    items?: MenuItem[];
    socialItems?: SocialItem[];
    displaySocials?: boolean;
    displayItemNumbering?: boolean;
    colors?: string[];
    accentColor?: string;
    ctaLabel?: string;
    ctaLink?: string;
    onMenuOpen?: () => void;
    onMenuClose?: () => void;
}

export const StaggeredMenu: React.FC<StaggeredMenuProps> = ({
    colors = ["#FFF8DC", "#F5C518"],
    items = [],
    socialItems = [],
    displaySocials = true,
    displayItemNumbering = true,
    accentColor = "#F5C518",
    ctaLabel = "Falar com Especialista",
    ctaLink = "#contato",
    onMenuOpen,
    onMenuClose,
}) => {
    const [open, setOpen] = useState(false);
    const openRef = useRef(false);
    const panelRef = useRef<HTMLElement>(null);
    const preLayersRef = useRef<HTMLDivElement>(null);
    const preLayerElsRef = useRef<HTMLDivElement[]>([]);
    const backdropRef = useRef<HTMLDivElement>(null);

    const openTlRef = useRef<gsap.core.Timeline | null>(null);
    const closeTweenRef = useRef<gsap.core.Tween | null>(null);
    const toggleBtnRef = useRef<HTMLButtonElement>(null);
    const busyRef = useRef(false);
    const itemEntranceTweenRef = useRef<gsap.core.Tween | null>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const panel = panelRef.current;
            const preContainer = preLayersRef.current;
            const backdrop = backdropRef.current;
            if (!panel) return;

            let preLayers: HTMLDivElement[] = [];
            if (preContainer) {
                preLayers = Array.from(
                    preContainer.querySelectorAll(".sm-prelayer")
                ) as HTMLDivElement[];
            }
            preLayerElsRef.current = preLayers;

            gsap.set([panel, ...preLayers], { x: 0, xPercent: 100 });
            if (backdrop) gsap.set(backdrop, { opacity: 0 });
        });
        return () => ctx.revert();
    }, []);

    const buildOpenTimeline = useCallback(() => {
        const panel = panelRef.current;
        const layers = preLayerElsRef.current;
        const backdrop = backdropRef.current;
        if (!panel) return null;

        openTlRef.current?.kill();
        if (closeTweenRef.current) {
            closeTweenRef.current.kill();
            closeTweenRef.current = null;
        }
        itemEntranceTweenRef.current?.kill();

        const itemEls = Array.from(
            panel.querySelectorAll(".sm-panel-itemLabel")
        ) as HTMLElement[];
        const numberEls = Array.from(
            panel.querySelectorAll(
                ".sm-panel-list[data-numbering] .sm-panel-item"
            )
        ) as HTMLElement[];
        const ctaWrapper = panel.querySelector(".sm-cta-wrapper") as HTMLElement;
        const socialTitle = panel.querySelector(".sm-socials-title") as HTMLElement;
        const socialLinks = Array.from(
            panel.querySelectorAll(".sm-socials-link")
        ) as HTMLElement[];

        const layerStates = layers.map((el) => ({
            el,
            start: Number(gsap.getProperty(el, "xPercent")),
        }));
        const panelStart = Number(gsap.getProperty(panel, "xPercent"));

        if (itemEls.length) {
            gsap.set(itemEls, { yPercent: 140, rotate: 10 });
        }
        if (numberEls.length) {
            gsap.set(numberEls, { "--sm-num-opacity": "0" } as gsap.TweenVars);
        }
        if (ctaWrapper) {
            gsap.set(ctaWrapper, { opacity: 0, y: 30 });
        }
        if (socialTitle) {
            gsap.set(socialTitle, { opacity: 0 });
        }
        if (socialLinks.length) {
            gsap.set(socialLinks, { y: 25, opacity: 0 });
        }

        const tl = gsap.timeline({ paused: true });

        // Backdrop fade in
        if (backdrop) {
            tl.to(backdrop, { opacity: 1, duration: 0.4, ease: "power2.out" }, 0);
        }

        // Pre-layers slide in
        layerStates.forEach((ls, i) => {
            tl.fromTo(
                ls.el,
                { x: 0, xPercent: ls.start },
                { x: 0, xPercent: 0, duration: 0.5, ease: "power4.out" },
                i * 0.07
            );
        });
        const lastTime = layerStates.length
            ? (layerStates.length - 1) * 0.07
            : 0;
        const panelInsertTime = lastTime + (layerStates.length ? 0.08 : 0);
        const panelDuration = 0.65;
        tl.fromTo(
            panel,
            { x: 0, xPercent: panelStart },
            { x: 0, xPercent: 0, duration: panelDuration, ease: "power4.out" },
            panelInsertTime
        );

        // Staggered item entrance
        if (itemEls.length) {
            const itemsStartRatio = 0.15;
            const itemsStart = panelInsertTime + panelDuration * itemsStartRatio;
            tl.to(
                itemEls,
                {
                    yPercent: 0,
                    rotate: 0,
                    duration: 1,
                    ease: "power4.out",
                    stagger: { each: 0.1, from: "start" },
                },
                itemsStart
            );
            if (numberEls.length) {
                tl.to(
                    numberEls,
                    {
                        duration: 0.6,
                        ease: "power2.out",
                        "--sm-num-opacity": "1",
                        stagger: { each: 0.08, from: "start" },
                    } as gsap.TweenVars,
                    itemsStart + 0.1
                );
            }
        }

        // CTA button entrance
        if (ctaWrapper) {
            const ctaStart = panelInsertTime + panelDuration * 0.35;
            tl.to(
                ctaWrapper,
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    ease: "power3.out",
                },
                ctaStart
            );
        }

        // Social links entrance
        if (socialTitle || socialLinks.length) {
            const socialsStart = panelInsertTime + panelDuration * 0.4;
            if (socialTitle) {
                tl.to(
                    socialTitle,
                    { opacity: 1, duration: 0.5, ease: "power2.out" },
                    socialsStart
                );
            }
            if (socialLinks.length) {
                tl.to(
                    socialLinks,
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.55,
                        ease: "power3.out",
                        stagger: { each: 0.08, from: "start" },
                        onComplete: () => {
                            gsap.set(socialLinks, { clearProps: "opacity" });
                        },
                    },
                    socialsStart + 0.04
                );
            }
        }

        openTlRef.current = tl;
        return tl;
    }, []);

    const playOpen = useCallback(() => {
        if (busyRef.current) return;
        busyRef.current = true;
        const tl = buildOpenTimeline();
        if (tl) {
            tl.eventCallback("onComplete", () => {
                busyRef.current = false;
            });
            tl.play(0);
        } else {
            busyRef.current = false;
        }
    }, [buildOpenTimeline]);

    const playClose = useCallback(() => {
        openTlRef.current?.kill();
        openTlRef.current = null;
        itemEntranceTweenRef.current?.kill();

        const panel = panelRef.current;
        const layers = preLayerElsRef.current;
        const backdrop = backdropRef.current;
        if (!panel) return;

        const all = [...layers, panel];
        closeTweenRef.current?.kill();

        // Fade out backdrop
        if (backdrop) {
            gsap.to(backdrop, {
                opacity: 0,
                duration: 0.3,
                ease: "power3.in",
            });
        }

        closeTweenRef.current = gsap.to(all, {
            x: 0,
            xPercent: 100,
            duration: 0.32,
            ease: "power3.in",
            overwrite: "auto",
            onComplete: () => {
                const itemEls = Array.from(
                    panel.querySelectorAll(".sm-panel-itemLabel")
                );
                if (itemEls.length) {
                    gsap.set(itemEls, { yPercent: 140, rotate: 10 });
                }
                const numberEls = Array.from(
                    panel.querySelectorAll(
                        ".sm-panel-list[data-numbering] .sm-panel-item"
                    )
                );
                if (numberEls.length) {
                    gsap.set(numberEls, {
                        "--sm-num-opacity": "0",
                    } as gsap.TweenVars);
                }
                const ctaWrapper = panel.querySelector(".sm-cta-wrapper");
                if (ctaWrapper) gsap.set(ctaWrapper, { opacity: 0, y: 30 });
                const socialTitle = panel.querySelector(".sm-socials-title");
                const socialLinks = Array.from(
                    panel.querySelectorAll(".sm-socials-link")
                );
                if (socialTitle) gsap.set(socialTitle, { opacity: 0 });
                if (socialLinks.length)
                    gsap.set(socialLinks, { y: 25, opacity: 0 });
                busyRef.current = false;
            },
        });
    }, []);

    const toggleMenu = useCallback(() => {
        const target = !openRef.current;
        openRef.current = target;
        setOpen(target);

        // Lock/unlock body scroll
        if (target) {
            document.body.style.overflow = "hidden";
            onMenuOpen?.();
            playOpen();
        } else {
            document.body.style.overflow = "";
            onMenuClose?.();
            playClose();
        }
    }, [
        playOpen,
        playClose,
        onMenuOpen,
        onMenuClose,
    ]);

    const closeMenu = useCallback(() => {
        if (openRef.current) {
            openRef.current = false;
            setOpen(false);
            document.body.style.overflow = "";
            onMenuClose?.();
            playClose();
        }
    }, [playClose, onMenuClose]);

    // Close on backdrop click
    React.useEffect(() => {
        if (!open) return;
        const handleClickOutside = (event: MouseEvent) => {
            if (
                panelRef.current &&
                !panelRef.current.contains(event.target as Node) &&
                toggleBtnRef.current &&
                !toggleBtnRef.current.contains(event.target as Node)
            ) {
                closeMenu();
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [open, closeMenu]);

    // Cleanup body overflow on unmount
    React.useEffect(() => {
        return () => {
            document.body.style.overflow = "";
        };
    }, []);

    const portalTarget = typeof document === "undefined" ? null : document.body;
    const menuOverlay = (
        <div
            className="staggered-menu-wrapper"
            style={
                accentColor
                    ? ({ "--sm-accent": accentColor } as React.CSSProperties)
                    : undefined
            }
            data-open={open || undefined}
        >
            {/* Backdrop */}
            <div
                ref={backdropRef}
                className="sm-backdrop"
                onClick={closeMenu}
            />

            {/* Pre-layers (color stripes) */}
            <div ref={preLayersRef} className="sm-prelayers" aria-hidden="true">
                {(() => {
                    const raw =
                        colors && colors.length
                            ? colors.slice(0, 4)
                            : ["#FFF8DC", "#F5C518"];
                    const arr = [...raw];
                    if (arr.length >= 3) {
                        const mid = Math.floor(arr.length / 2);
                        arr.splice(mid, 1);
                    }
                    return arr.map((c, i) => (
                        <div
                            key={i}
                            className="sm-prelayer"
                            style={{ background: c }}
                        />
                    ));
                })()}
            </div>

            {/* Panel */}
            <aside
                id="staggered-menu-panel"
                ref={panelRef}
                className="staggered-menu-panel"
                aria-hidden={!open}
            >
                <div className="sm-panel-inner">
                    {/* Menu Items */}
                    <ul
                        className="sm-panel-list"
                        role="list"
                        data-numbering={displayItemNumbering || undefined}
                    >
                        {items && items.length ? (
                            items.map((it, idx) => (
                                <li className="sm-panel-itemWrap" key={it.label + idx}>
                                    <a
                                        className="sm-panel-item"
                                        href={it.link}
                                        aria-label={it.ariaLabel}
                                        data-index={idx + 1}
                                        onClick={closeMenu}
                                    >
                                        <span className="sm-panel-itemLabel">
                                            {it.label}
                                        </span>
                                    </a>
                                </li>
                            ))
                        ) : (
                            <li className="sm-panel-itemWrap" aria-hidden="true">
                                <span className="sm-panel-item">
                                    <span className="sm-panel-itemLabel">Sem itens</span>
                                </span>
                            </li>
                        )}
                    </ul>

                    {/* CTA Button */}
                    {ctaLabel && (
                        <div className="sm-cta-wrapper">
                            <a href={ctaLink} className="sm-cta-button" onClick={closeMenu}>
                                {ctaLabel}
                            </a>
                        </div>
                    )}

                    {/* Social Links */}
                    {displaySocials && socialItems && socialItems.length > 0 && (
                        <div className="sm-socials" aria-label="Links sociais">
                            <h3 className="sm-socials-title">Redes</h3>
                            <ul className="sm-socials-list" role="list">
                                {socialItems.map((s, i) => (
                                    <li key={s.label + i} className="sm-socials-item">
                                        <a
                                            href={s.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="sm-socials-link"
                                        >
                                            {s.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </aside>
        </div>
    );

    const hamburgerButton = (
        <button
            ref={toggleBtnRef}
            className={`sm-hamburger${open ? " sm-hamburger--open" : ""}`}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            aria-controls="staggered-menu-panel"
            onClick={toggleMenu}
            type="button"
        >
            <span className="sm-hamburger-line" />
            <span className="sm-hamburger-line" />
            <span className="sm-hamburger-line" />
        </button>
    );

    return (
        <>
            {/* Hamburger Toggle Button */}
            {open && portalTarget ? createPortal(hamburgerButton, portalTarget) : hamburgerButton}

            {/* Full-screen overlay menu */}
            {portalTarget ? createPortal(menuOverlay, portalTarget) : null}
        </>
    );
};

export default StaggeredMenu;
