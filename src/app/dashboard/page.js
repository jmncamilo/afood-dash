import styles from "./Dashboard.module.css";
import Image from "next/image";

export default function Dashboard() {
    return (
        // Contenedor padre
        <div className="w-full min-h-screen px-10 py-6 sm:px-6 md:px-8 lg:px-36 overflow-hidden">
            {/* Contenedor donde vive el fondo gris */}
            <main className={`${styles.dashboardWrapper} max-w-7xl mx-auto flex flex-col overflow-hidden`}>

                {/* Encabezado del usuario */}
                <header className={styles.customerHeader}>
                    <div className="flex items-center p-2.5 w-full bg-white rounded-2xl shadow-md shadow-gray-700/60 font-sans">
                        <div className="relative w-12 h-12 rounded-full bg-gray-200 mr-4 flex items-center justify-center overflow-hidden">
                            <Image
                                className={styles.customerLogo}
                                src="/branding/symbol-afood.svg"
                                alt="Logo del cliente"
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                        <div className="flex-grow leading-tight">
                            <div className="font-bold text-base text-neutral-700">Limoncello</div>
                            <div className="text-sm text-gray-600 tracking-widest font-medium">. . . . . 1389</div>
                        </div>
                        <div className="relative w-12 h-6 bg-transparent ml-2 flex items-center justify-center">
                            <Image
                                src="/branding/logo-afood-font-color.svg"
                                alt="Logotipo de afood"
                                layout="fill"
                                objectFit="contain"
                                quality={95}
                            />
                        </div>
                    </div>
                </header>

                {/* Sección de tarjeta / saldo / cuenta */}
                <section className={styles.sectionCreditCard}>
                    <div className={styles.cardBase}>
                        <div className={styles.cardFirstColumn}>
                            <div className={styles.cardWrapperTotal}>
                                <span className="block leading-tight text-md md:text-lg lg:text-xl text-gray-50">Total comprado</span>
                                <span className="block leading-tight text-2xl md:text-3xl lg:text-4xl font-bold text-gray-100">$520.000,00</span>
                            </div>
                            <span className={styles.chipCard} aria-hidden={true}></span>
                            <div className={styles.cardWrapperTotal}>
                                <span className="block leading-tight text-xs md:text-sm lg:text-base font-medium text-red-200">Deuda</span>
                                <span className="block leading-tight text-md md:text-lg lg:text-xl font-medium text-gray-100">$65.000,00</span>
                            </div>
                        </div>
                        <div className={styles.cardSecondColumn}>
                            {/* TODO: toca envolver esto en un wrapper y acomodar todo con base a ese wrapper para mantener diseño consistente */}
                            <span className={styles.cardAfoodLogo}></span>
                            <span className={styles.cardWireless}></span>
                        </div>
                    </div>
                </section>

                {/* Resumen semanal / pedidos / balances */}
                <section className={`${styles.sectionSummaryOrders} ${styles.sectionFullWidth}`}>
                    Aquí va el resumen de los pedidos por producto
                </section>

                {/* Impacto o estadísticas adicionales */}
                <section className={styles.sectionCardEnvironment}>
                    Aquí va la card que redirige a la vista de métricas impacto ambiental
                </section>

                {/* Logros y badges */}
                <section className={styles.sectionAchievements}>
                    Aquí van los badges del cliente
                </section>

                {/* Políticas de pago y de entrega */}
                <section className={styles.sectionPolicies}>
                    Aquí van las políticas de compra y entrega
                </section>
            </main>
        </div>
    );
}