import styles from "./DebtDetails.module.css";
import Image from "next/image";
import { OrderRow } from "@/components/modals/debt-details/OrderRow";
import { executeOrderProductHandlers } from "@/components/modals/debt-details/executeOrderProductHandlers";
import { formatClientOrderId } from "@/lib/formatters/formatClientOrderId";
import { formatCurrency } from "@/lib/formatters/formatCurrency";

export function DebtDetails({ onClose, debtOrdersData }) {

    // Redireccionar a WhatsApp Business para resolver dudas sobre los pedidos
    const handleDoubtsClick = () => {
        window.open("https://wa.link/nl54je", "_blank");
    };

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
                        {!!debtOrdersData?.length
                            ? (
                                debtOrdersData.map(order => {
                                    const { orderDetails, totalItemsInOrder } = executeOrderProductHandlers(order);
                                    return (
                                        <OrderRow
                                            key={formatClientOrderId(order?.['Id Cumplimiento'])}
                                            qtyItems={totalItemsInOrder}
                                            products={orderDetails}
                                            total={formatCurrency(order?.['Precio del Pedido'])}
                                            date={order?.['Fecha real de entrega raw']}/>
                                    )
                                })
                            )
                            : (
                                <div className="flex flex-col items-center justify-center gap-2 py-6 px-4">
                                    <span className="text-5xl">✨</span>
                                    <span className="text-lg font-medium text-[#0f0f0f]">
                                        ¡Todo al día!
                                    </span>
                                    <span className="text-sm text-[#A8A8A8] text-center">
                                        No tienes deudas pendientes
                                    </span>
                                </div>
                            )
                        }
                    </div>

                    <div className={styles.buttonsFooterSection}>
                        <div className={styles.buttonsContainer}>
                            <button className={styles.secondButton} onClick={handleDoubtsClick}>
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
                            <button
                                className={styles.firstButton}
                                disabled={!debtOrdersData?.length}
                            >
                                Pagar
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}