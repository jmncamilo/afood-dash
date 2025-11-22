"use client";

import { useState } from "react";
import styles from "./Dashboard.module.css";
import Image from "next/image";
import { SummaryHeader } from "@/app/dashboard/SummaryHeader";
import { SummaryCard } from "@/app/dashboard/SummaryCard";

export default function Dashboard() {
    // Estado para manejar el filtro del producto a consultar
    const [dropdownState, setDropdownState] = useState({
        isOpen: false,
        selectedProduct: 'Productos',
    });

    // Estado para manejar los valores dinámicos en la sección de resumen
    const [summaryValues, setSummaryValues] = useState({
        orders: '99',
        units: '99',
        grams: '99'
    });

    return (
        // Contenedor padre
        <div className="w-full min-h-screen px-10 py-6 sm:px-6 md:px-8 lg:px-36 overflow-hidden">
            {/* Contenedor donde vive el fondo gris */}
            <main className={`${styles.dashboardWrapper} max-w-7xl mx-auto flex flex-col overflow-hidden`}>

                {/* Encabezado del cliente */}
                <header className={styles.customerHeader}>
                    <div className="flex items-center py-2.5 px-4 w-full bg-white rounded-2xl shadow-md shadow-gray-700/60 font-sans">
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

                {/* Sección afood card (total pagado - deuda) */}
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
                            <div className={styles.cardWrapperIcons}>
                                <span className={styles.cardAfoodLogo}></span>
                                <span className={styles.cardWireless}></span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Sección con botón para ver detalles de la deuda */}
                <section className={styles.sectionButtonDetails}>
                    <button className={styles.buttonDetails} title={'Ver detalles de la deuda'}>
                        Deuda
                    </button>
                </section>

                {/* Sección resumen de pedidos */}
                <section className={styles.sectionSummaryOrders}>
                    <SummaryHeader dropdownState={dropdownState} setDropdownState={setDropdownState} />
                    <div className={styles.summaryCardsScrollable}>
                        <SummaryCard firstLineText={'Pedidos'} secondLineText={'realizados'} value={summaryValues.orders}/>
                        <SummaryCard firstLineText={'Unidades'} secondLineText={'entregadas'} value={summaryValues.units} secondFigure={true}/>
                        <SummaryCard firstLineText={'Gramos'} secondLineText={'entregados'} value={summaryValues.grams}/>
                    </div>
                </section>

                {/* Sección impacto ambiental */}
                    {/* TODO: esto puede tener modificaciones finales ya que no es la imagen definitiva, pero es un punto de partida avanzado */}
                <section className={styles.sectionCardEnvironment}>
                    <div className={styles.bannerCardEnvironment}>
                        <div className={styles.bannerCardEnvironmentContentWrapper}>
                            <span className="block text-[1.1rem] md:text-lg lg:text-xl font-bold">¡Buen trabajo!</span>
                            <span className="block text-[0.95rem] md:text-base lg:text-lg font-normal lg:leading-snug">Al comprar productos afood reduces la huella ambiental.</span>
                            <button className={styles.bannerCardEnvironmentButton}>Ver más</button>
                        </div>
                    </div>
                </section>

                {/* Sección badges */}
                    {/* TODO: empezar a construir está sección, será render dinámico, sólo cuando el cliente sobrepase X cantidad de pedidos */}
                <section className={styles.sectionAchievements}>
                    Aquí van el badge del cliente sólo si es too buyer mayor a 15 pedidos
                </section>

                {/* Sección política de pago y de entrega */}
                <section className={styles.sectionPolicies}>
                    Aquí van las políticas de compra y entrega
                </section>
            </main>
        </div>
    );
}