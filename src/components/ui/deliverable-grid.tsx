import { Check, ChevronDown, type LucideIcon } from "lucide-react";
import styles from "./deliverable-grid.module.css";

export type Deliverable = {
    icon: LucideIcon;
    title: string;
    /** One line on why this front matters. */
    summary: string;
    /** What the client receives; kept short so the grid reads at a glance. */
    outputs: string[];
    /** How the work is done, shown only on request. */
    detail: string;
};

export function DeliverableGrid({ items, detailLabel }: { items: Deliverable[]; detailLabel: string }) {
    return (
        <ol className={styles.grid}>
            {items.map(({ icon: Icon, title, summary, outputs, detail }, index) => (
                <li key={title} className={styles.card}>
                    <div className={styles.top}>
                        <span className={styles.icon}><Icon aria-hidden="true" /></span>
                        <span className={styles.number} aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                    </div>
                    <h3>{title}</h3>
                    <p className={styles.summary}>{summary}</p>
                    <ul className={styles.outputs}>
                        {outputs.map((output) => <li key={output}><Check size={16} aria-hidden="true" />{output}</li>)}
                    </ul>
                    <details className={styles.more}>
                        <summary>{detailLabel}<ChevronDown size={16} aria-hidden="true" /></summary>
                        <p>{detail}</p>
                    </details>
                </li>
            ))}
        </ol>
    );
}
