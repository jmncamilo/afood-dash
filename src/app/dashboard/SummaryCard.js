import styles from "@/app/dashboard/Dashboard.module.css";

export function SummaryCard({ firstLineText, secondLineText, value = '0', secondFigure = false }) {
    return (
        <div className={`${styles.summaryCardBase} ${secondFigure && styles.summaryCardSecondFigure}`}>
            <div className={styles.summaryCardTextWrapper}>
                <span className={styles.summaryCardTextWrapperTitle}>{firstLineText}</span>
                <span className={styles.summaryCardTextWrapperTitle}>{secondLineText}</span>
                <span className={`${styles.summaryCardTextWrapperValue} ${value.length > 3 && styles.summaryCardTextWrapperValueLong}`}>{value}</span>
            </div>
        </div>
    );
}