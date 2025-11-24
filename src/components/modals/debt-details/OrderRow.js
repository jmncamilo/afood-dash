import styles from "@/components/modals/debt-details/DebtDetails.module.css";

export function OrderRow({ qtyItems, products, total, date }) {

    // Si no se pasan todas las props o se pasan como valores falsy, no renderiza el componente
    if (!qtyItems || !products || !total || !date) return null;

    return (
        <div className={styles.wrapperOrderRow}>
            <div className={styles.iconOrderRowContainer}>
                <span className={styles.iconFigureOrder}></span>
            </div>
            <div className={styles.textOrderRowContainer}>
                <span className={styles.textOrderFirstLine}>{qtyItems} ítem(s)</span>
                <span className={styles.textOrderSecondLine}>{products}</span>
            </div>
            <div className={styles.totalDateOrderRowContainer}>
                <span className={styles.orderPricing}>${total}</span>
                <span className={styles.orderDate}>{date}</span>
            </div>
        </div>
    );
}