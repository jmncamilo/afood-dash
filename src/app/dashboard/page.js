'use client';

import { useState } from 'react';
import styles from "./Dashboard.module.css";
import Image from "next/image";

export default function Dashboard() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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
                    {/* TODO: Aquí empieza */}
                    {/* Header con título y desplegable */}
                    <div className="flex items-center justify-between mb-1.5 w-full">
                        {/* Título - alineado a la izquierda */}
                        <h2 className="text-xl md:text-2xl font-bold text-cyan-950">
                            Resumen
                        </h2>

                        {/* Desplegable de productos - alineado a la derecha */}
                        <div className="relative">
                            <div
                                className="flex items-center gap-2 px-4 py-2 bg-transparent rounded-lg text-[color:#505050] font-medium transition-colors cursor-pointer select-none"
                                role="button"
                                tabIndex={0}
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                onKeyDown={(e) => e.key === 'Enter' && setIsDropdownOpen(!isDropdownOpen)}
                            >
                                <span className="text-sm md:text-base">Producto</span>
                                <svg
                                    className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>

                            {/* Opciones del desplegable */}
                            {isDropdownOpen && (
                                <div className="absolute top-[calc(100%+0.2rem)] right-0 w-full min-w-max bg-gray-300 rounded-lg shadow-lg overflow-hidden z-50">
                                    <div
                                        className="w-full px-4 py-2 text-left text-sm md:text-base text-black hover:bg-gray-200 transition-colors cursor-pointer"
                                        role="button"
                                        tabIndex={0}
                                        onClick={() => setIsDropdownOpen(false)}
                                    >
                                        Lechuga
                                    </div>
                                    <div
                                        className="w-full px-4 py-2 text-left text-sm md:text-base text-black hover:bg-gray-200 transition-colors cursor-pointer"
                                        role="button"
                                        tabIndex={0}
                                        onClick={() => setIsDropdownOpen(false)}
                                    >
                                        Aromática
                                    </div>
                                    <div
                                        className="w-full px-4 py-2 text-left text-sm md:text-base text-black hover:bg-gray-200 transition-colors cursor-pointer"
                                        role="button"
                                        tabIndex={0}
                                        onClick={() => setIsDropdownOpen(false)}
                                    >
                                        Cilantrón
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    {/* TODO: Aquí termina */}

                    <div className={styles.summaryCardsScrollable}>
                        <div className={styles.summaryCardBase}>

                        </div>
                        <div className={styles.summaryCardBase}>

                        </div>
                        <div className={styles.summaryCardBase}>

                        </div>
                    </div>
                </section>

                {/* Sección impacto ambiental */}
                <section className={styles.sectionCardEnvironment}>
                    Aquí va la card que redirige a la vista de métricas impacto ambiental
                </section>

                {/* Sección badges */}
                <section className={styles.sectionAchievements}>
                    Aquí van los badges del cliente
                </section>

                {/* Sección política de pago y de entrega */}
                <section className={styles.sectionPolicies}>
                    Aquí van las políticas de compra y entrega
                </section>
            </main>
        </div>
    );
}