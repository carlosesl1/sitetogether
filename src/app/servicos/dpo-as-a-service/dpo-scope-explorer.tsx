"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import { ArrowDown, ArrowRight, Check, FileCheck2, GraduationCap, Layers3, Scale, ShieldCheck, Users } from "lucide-react";
import styles from "./dpo-service.module.css";

type ScopeItem = { title: string; text: string; output: string };
const icons = [Users, Scale, FileCheck2, Layers3, ShieldCheck, GraduationCap];
const labels = ["DPO e titulares", "Governança LGPD", "Contratos e auditorias", "Plataformas de privacidade", "Apoio em incidentes", "Equipes e evolução"];

export function DpoScopeExplorer({ items }: { items: ScopeItem[] }) {
    const [selected, setSelected] = useState(0);
    const tabs = useRef<(HTMLButtonElement | null)[]>([]);

    function moveTab(event: KeyboardEvent<HTMLButtonElement>, index: number) {
        if (event.altKey || event.ctrlKey || event.metaKey) return;
        let next = index;
        if (event.key === "ArrowDown" || event.key === "ArrowRight") next = (index + 1) % items.length;
        else if (event.key === "ArrowUp" || event.key === "ArrowLeft") next = (index - 1 + items.length) % items.length;
        else if (event.key === "Home") next = 0;
        else if (event.key === "End") next = items.length - 1;
        else return;
        event.preventDefault();
        setSelected(next);
        tabs.current[next]?.focus();
    }

    return (
        <div className={styles.scopeExplorer}>
            <div className={styles.scopeChooser}>
                <p className={styles.scopeHint}>Selecione uma frente <ArrowDown size={15} aria-hidden="true" /></p>
                <div role="tablist" aria-label="Frentes de atuação" aria-orientation="vertical" className={styles.scopeTabs}>
                    {items.map((item, index) => {
                        const Icon = icons[index] ?? ShieldCheck;
                        return (
                            <button
                                key={item.title}
                                ref={element => { tabs.current[index] = element; }}
                                id={"scope-tab-" + index}
                                type="button"
                                role="tab"
                                aria-selected={selected === index}
                                aria-controls={"scope-panel-" + index}
                                tabIndex={selected === index ? 0 : -1}
                                onClick={() => setSelected(index)}
                                onKeyDown={event => moveTab(event, index)}
                            >
                                <Icon size={20} aria-hidden="true" />
                                <span>{labels[index] ?? item.title}</span>
                                <ArrowRight size={17} aria-hidden="true" />
                            </button>
                        );
                    })}
                </div>
            </div>
            <div className={styles.scopePanels}>
                {items.map((item, index) => {
                    const Icon = icons[index] ?? ShieldCheck;
                    return (
                        <div key={item.title} id={"scope-panel-" + index} role="tabpanel" aria-labelledby={"scope-tab-" + index} tabIndex={0} hidden={selected !== index} className={styles.scopePanel}>
                            <div className={styles.scopePanelTop}><span className={styles.scopePanelIcon}><Icon aria-hidden="true" /></span><span className={styles.micro}>Frente {String(index+1).padStart(2,"0")} / {String(items.length).padStart(2,"0")}</span></div>
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                            <div className={styles.scopeOutput}><span><Check size={17} aria-hidden="true" />Na prática</span><p>{item.output}</p></div>
                            <p className={styles.scopePanelNote}>Atuação integrada ao jurídico, à tecnologia e às áreas envolvidas no seu negócio.</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
