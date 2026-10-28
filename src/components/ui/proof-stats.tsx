import styles from "./proof-stats.module.css";

export type ProofStat = { value: string; label: string };

/** Short facts a visitor can take in at a glance, e.g. under a landing page headline. */
export function ProofStats({ items, label }: { items: ProofStat[]; label: string }) {
    return (
        <dl className={styles.stats} aria-label={label}>
            {items.map((item) => (
                <div key={item.value + item.label}>
                    <dt>{item.value}</dt>
                    <dd>{item.label}</dd>
                </div>
            ))}
        </dl>
    );
}
