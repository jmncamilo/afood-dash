import styles from "./DebtDetails.module.css";
import Image from "next/image";
import { OrderRow } from "@/components/modals/debt-details/OrderRow";

export function DebtDetails({ onClose, debtOrdersData }) {
    return (
        <div
            className="fixed inset-0 bg-black/40 backdrop-blur-md backdrop-saturate-150 flex items-center justify-center p-0 md:p-6 lg:p-8 z-50 overflow-hidden"
            onClick={onClose}
        >
            <div
                className="w-full max-w-full min-w-[300px] max-h-[85vh] min-h-[300px] rounded-[5rem] md:max-w-[600px] md:max-h-[80vh] md:min-h-[350px] lg:max-w-[700px] lg:max-h-[75vh] lg:min-h-[300px] bg-[#f0f0f0] md:rounded-[3.5rem] shadow-[0_4px_13px_0_rgba(0,0,0,0.75)] flex flex-col justify-center items-center overflow-hidden py-14"
                onClick={(e) => e.stopPropagation()}
            >

                <div className={styles.modalContentWrapper}>
                    <div className={styles.barFigureSection}>
                        <div
                            className="w-16 h-1 bg-[#999999] rounded-full mx-auto cursor-pointer"
                            onClick={onClose}
                        />
                    </div>

                    <div className={styles.titleSection}>
                        <h1 className={styles.titleH1}>Pedido(s)</h1>
                    </div>

                    <div className={styles.detailSection}>
                        {/* TODO: esto se itera con map y con formateadores de texto para devolver únicamente el string que se necesita en cada prop. Se pasa la data general obtenida desde la api y los formateadores deberán hacer su trabajo */}
                        <OrderRow qtyItems={'2'} products={'48 lech, 12 cilan'} total={'151.968'} date={'24/11/25'}/>
                        <OrderRow qtyItems={'3'} products={'999 lech, 999gr albah, 4444gr hierb'} total={'999.000'} date={'11/12/25'}/>
                        <OrderRow qtyItems={'3'} products={'999 lech, 999gr albah, 4444gr hierb'} total={'999.000'} date={'11/12/25'}/>
                        <OrderRow qtyItems={'3'} products={'999 lech, 999gr albah, 4444gr hierb'} total={'999.000'} date={'11/12/25'}/>
                        <OrderRow qtyItems={'3'} products={'999 lech, 999gr albah, 4444gr hierb'} total={'999.000'} date={'11/12/25'}/>
                        <OrderRow qtyItems={'3'} products={'999 lech, 999gr albah, 4444gr hierb'} total={'999.000'} date={'11/12/25'}/>
                        <OrderRow qtyItems={'3'} products={'999 lech, 999gr albah, 4444gr hierb'} total={'999.000'} date={'11/12/25'}/>
                        <OrderRow qtyItems={'3'} products={'999 lech, 999gr albah, 4444gr hierb'} total={'999.000'} date={'11/12/25'}/>
                    </div>

                    <div className={styles.buttonsFooterSection}>
                        <div className={styles.buttonsContainer}>
                            <button className={styles.secondButton}>
                                <Image
                                    className={styles.secondButtonIcon}
                                    src={"/icons/whatsapp-icon.svg"}
                                    width={25}
                                    height={25}
                                    quality={95}
                                    objectFit="contain"
                                    alt={"WhatsApp"}
                                />
                                Dudas
                            </button>
                            <button className={styles.firstButton}>Pagar</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}