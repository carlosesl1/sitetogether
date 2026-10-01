"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import { ArrowRight, Check } from "lucide-react";
import styles from "./mentoria-service.module.css";

type Area = {
    name: string;
    question: string;
    description: string;
    topics: string[];
    takeaway: string;
};

export function CultureExplorer({ areas }: { areas: Area[] }) {
    const [selected, setSelected] = useState(0);
    const tabs = useRef<(HTMLButtonElement | null)[]>([]);

    function moveTab(event: KeyboardEvent<HTMLButtonElement>, index: number) {
        if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
        let next: number;
        if (event.key === "ArrowRight") next = (index + 1) % areas.length;
        else if (event.key === "ArrowLeft") next = (index - 1 + areas.length) % areas.length;
        else if (event.key === "Home") next = 0;
        else if (event.key === "End") next = areas.length - 1;
        else return;
        event.preventDefault();
        setSelected(next);
        tabs.current[next]?.focus();
    }

    return (
        <div className={styles.areaExplorer}>
            <div className={styles.areaTabs} role="tablist" aria-label="Exemplos de capacitação por área">
                {areas.map((area, index) => (
                    <button
                        key={area.name}
                        ref={(element) => { tabs.current[index] = element; }}
                        type="button"
                        role="tab"
                        id={"culture-tab-" + index}
                        aria-controls={"culture-panel-" + index}
                        aria-selected={selected === index}
                        tabIndex={selected === index ? 0 : -1}
                        onClick={() => setSelected(index)}
                        onKeyDown={(event) => moveTab(event, index)}
                    >
                        {area.name}<ArrowRight size={17} aria-hidden="true" />
                    </button>
                ))}
            </div>
            {areas.map((area, index) => (
                <div
                    key={area.name}
                    id={"culture-panel-" + index}
                    role="tabpanel"
                    aria-labelledby={"culture-tab-" + index}
                    tabIndex={0}
                    hidden={selected !== index}
                    className={styles.areaPanel}
                >
                    <div className={styles.areaSituation}>
                        <span className={styles.micro}>Uma pergunta que aparece na rotina</span>
                        <h3>{area.question}</h3>
                        <p>{area.description}</p>
                        <span className={styles.situationLabel}>Exemplo de situação para trabalhar com a equipe</span>
                    </div>
                    <div className={styles.areaLearning}>
                        <span className={styles.micro}>O que pode entrar na trilha</span>
                        <ul>{area.topics.map((topic) => <li key={topic}><Check size={18} aria-hidden="true" />{topic}</li>)}</ul>
                        <div className={styles.areaTakeaway}><span className={styles.micro}>Para levar ao trabalho</span><p>{area.takeaway}</p></div>
                    </div>
                </div>
            ))}
        </div>
    );
}
