import styles from "./DebtDetails.module.css";

export function DebtDetails({ onClose }) {
    return (
        <div
            className="fixed inset-0 bg-black/40 backdrop-blur-md backdrop-saturate-150 flex items-center justify-center p-0 md:p-6 lg:p-8 z-50 overflow-hidden"
            onClick={onClose}
        >
            <div
                className="w-full min-w-[300px] h-[55vh] rounded-[5rem] md:w-[600px] md:h-[65vh] md:max-h-[90vh] md:min-h-[300px] lg:w-[700px] bg-[#f0f0f0] md:rounded-[3.5rem] shadow-[0_4px_13px_0_rgba(0,0,0,0.75)] flex flex-col justify-center items-center overflow-hidden"
                onClick={(e) => e.stopPropagation()}
            >

                <div className={styles.modalContentWrapper}>
                    <div className={styles.barFigureSection}>
                        <div className="w-12 h-1 bg-[#161616] rounded-full mx-auto my-3" />
                    </div>

                    <div className={styles.titleSection}>
                        <h1 className={styles.titleH1}>Pedido(s)</h1>
                    </div>

                    <div className={styles.detailSection}>
                        {/* TODO: modularizar!! ya que se renderizará dinámicamente con los datos de la api... */}
                        <div className={styles.wrapperOrderRow}>
                            <div className={styles.iconOrderRowContainer}>
                                <span className={styles.iconFigureOrder}></span>
                            </div>
                            <div className={styles.textOrderRowContainer}>
                                <span className={styles.textOrderFirstLine}>3 ítem(s)</span>
                                <span className={styles.textOrderSecondLine}>999 lech, 999gr albah, 4444gr hierb</span>
                            </div>
                            <div className={styles.totalDateOrderRowContainer}>
                                <span className={styles.orderPricing}>$999.000</span>
                                <span className={styles.orderDate}>11/12/25</span>
                            </div>
                        </div>

                        <div className={styles.wrapperOrderRow}>
                            <div className={styles.iconOrderRowContainer}>
                                <span className={styles.iconFigureOrder}></span>
                            </div>
                            <div className={styles.textOrderRowContainer}>
                                <span className={styles.textOrderFirstLine}>3 ítem(s)</span>
                                <span className={styles.textOrderSecondLine}>999 lech, 999gr albah, 4444gr hierb</span>
                            </div>
                            <div className={styles.totalDateOrderRowContainer}>
                                <span className={styles.orderPricing}>$125.000</span>
                                <span className={styles.orderDate}>11/12/25</span>
                            </div>
                        </div>

                        <div className={styles.wrapperOrderRow}>
                            <div className={styles.iconOrderRowContainer}>
                                <span className={styles.iconFigureOrder}></span>
                            </div>
                            <div className={styles.textOrderRowContainer}>
                                <span className={styles.textOrderFirstLine}>3 ítem(s)</span>
                                <span className={styles.textOrderSecondLine}>999 lech, 999gr albah, 4444gr hierb</span>
                            </div>
                            <div className={styles.totalDateOrderRowContainer}>
                                <span className={styles.orderPricing}>$125.000</span>
                                <span className={styles.orderDate}>11/12/25</span>
                            </div>
                        </div>

                        <div className={styles.wrapperOrderRow}>
                            <div className={styles.iconOrderRowContainer}>
                                <span className={styles.iconFigureOrder}></span>
                            </div>
                            <div className={styles.textOrderRowContainer}>
                                <span className={styles.textOrderFirstLine}>3 ítem(s)</span>
                                <span className={styles.textOrderSecondLine}>999 lech, 999gr albah, 4444gr hierb</span>
                            </div>
                            <div className={styles.totalDateOrderRowContainer}>
                                <span className={styles.orderPricing}>$125.000</span>
                                <span className={styles.orderDate}>11/12/25</span>
                            </div>
                        </div>

                        <div className={styles.wrapperOrderRow}>
                            <div className={styles.iconOrderRowContainer}>
                                <span className={styles.iconFigureOrder}></span>
                            </div>
                            <div className={styles.textOrderRowContainer}>
                                <span className={styles.textOrderFirstLine}>3 ítem(s)</span>
                                <span className={styles.textOrderSecondLine}>999 lech, 999gr albah, 4444gr hierb</span>
                            </div>
                            <div className={styles.totalDateOrderRowContainer}>
                                <span className={styles.orderPricing}>$125.000</span>
                                <span className={styles.orderDate}>11/12/25</span>
                            </div>
                        </div>

                        <div className={styles.wrapperOrderRow}>
                            <div className={styles.iconOrderRowContainer}>
                                <span className={styles.iconFigureOrder}></span>
                            </div>
                            <div className={styles.textOrderRowContainer}>
                                <span className={styles.textOrderFirstLine}>3 ítem(s)</span>
                                <span className={styles.textOrderSecondLine}>999 lech, 999gr albah, 4444gr hierb</span>
                            </div>
                            <div className={styles.totalDateOrderRowContainer}>
                                <span className={styles.orderPricing}>$125.000</span>
                                <span className={styles.orderDate}>11/12/25</span>
                            </div>
                        </div>

                        <div className={styles.wrapperOrderRow}>
                            <div className={styles.iconOrderRowContainer}>
                                <span className={styles.iconFigureOrder}></span>
                            </div>
                            <div className={styles.textOrderRowContainer}>
                                <span className={styles.textOrderFirstLine}>3 ítem(s)</span>
                                <span className={styles.textOrderSecondLine}>999 lech, 999gr albah, 4444gr hierb</span>
                            </div>
                            <div className={styles.totalDateOrderRowContainer}>
                                <span className={styles.orderPricing}>$125.000</span>
                                <span className={styles.orderDate}>11/12/25</span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.buttonsFooterSection}>
                        Botoncitos
                    </div>
                </div>

            </div>
        </div>
    );
}