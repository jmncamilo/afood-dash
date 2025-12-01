"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Loader } from "@/components/common/Loader";
import styles from "./LandingAfood.module.css";
import { WhatsAppIcon } from "@/components/common/WhatsAppIcon";
import {
    Sprout, ArrowRight, Instagram, Linkedin, Facebook, ExternalLink, LogIn, Phone
} from 'lucide-react';


export default function LandingAfood() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 500); // Ajusta el tiempo según necesites

        return () => clearTimeout(timer);
    }, []);

    return (isLoading === true
            ? <Loader/>
            : (<div
                className="min-h-screen bg-[#F0F0F0] text-[#0f0f0f] overflow-x-hidden">

                {/* Contenedor principal */}
                <div
                    className="lg:h-screen w-full flex flex-col p-6 lg:p-10 relative max-w-7xl mx-auto justify-between">

                    {/* Contenido principal */}
                    <main
                        className="flex flex-col lg:flex-row items-center justify-center lg:items-center gap-10 lg:gap-16 flex-grow py-8 lg:py-2 w-full">

                        {/* Columna de la izquierda: texto y botones */}
                        <section
                            className="flex-1 flex flex-col justify-center items-center text-center space-y-8 z-10 w-full max-w-2xl">

                            {/* Logo centrado */}
                            <div
                                className={`flex flex-col items-center gap-2 ${styles.fadeInElement} ${isLoading ? 'opacity-100' : ''}`}>
                                <div className="bg-[#054c2c] p-3 rounded-xl text-[#fede54] shadow-lg">
                                    <Sprout size={40} strokeWidth={2}/>
                                </div>
                                <span className="text-2xl font-bold tracking-tight text-[#054c2c]">afood</span>
                            </div>

                            <div className="space-y-6">
                                <h1 className={`text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-[#0f0f0f] ${styles.fadeInElement} ${styles.animateDelay100}`}>
                                    Bienvenida/o a tu panel <br/> de control <span className="text-[#00a751]">afood</span>
                                </h1>

                                <div className={`flex flex-col items-center gap-3 ${styles.fadeInElement} ${styles.animateDelay200}`}>
                                    <h2 className="text-xl md:text-2xl font-bold text-[#054c2c]">
                                        Sembramos cambio cosechamos{' '}
                                        <span
                                            className={`${styles.leafShapeInverted} bg-[#054c2c] text-[#fede54] px-6 py-0.5 inline-block`}>
                                            futuro
                                        </span>
                                    </h2>
                                    <div className="h-1 w-20 bg-[#fede54] rounded-full"></div>
                                    <p className="text-base md:text-lg text-gray-600 max-w-lg leading-relaxed">
                                        Producimos en granjas urbanas que combinan tecnología y agricultura ancestral,
                                        para garantizar alimentos frescos, disponibles todo el año y a precios estables.
                                    </p>
                                </div>

                            </div>

                            {/* Botones de acción */}
                            <div
                                className={`flex flex-col sm:flex-row gap-4 w-full max-w-md justify-center ${styles.fadeInElement} ${styles.animateDelay300}`}>
                                <Link
                                    href="/login"
                                    className="group relative flex items-center justify-between px-6 py-4 bg-[#054c2c] text-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 w-full"
                                >
                                    <div className="absolute inset-0 w-0 bg-[#00a751] transition-all duration-[250ms] ease-out group-hover:w-full opacity-100"></div>
                                    <div className="relative flex items-center gap-3 z-10">
                                        <LogIn className="w-5 h-5 text-[#fede54]"/>
                                        <span className="font-semibold text-base">Ingresar</span>
                                    </div>
                                    <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform"/>
                                </Link>

                                <a
                                    href="https://afood.com.co/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center justify-between px-6 py-4 bg-white border-2 border-[#054c2c] text-[#054c2c] rounded-2xl hover:bg-[#F0F0F0] hover:shadow-lg transition-all duration-300 hover:-translate-y-1 w-full"
                                >
                                    <div className="flex items-center gap-3">
                                        <ExternalLink className="w-5 h-5"/>
                                        <span className="font-semibold text-base">Sitio oficial</span>
                                    </div>
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform opacity-50"/>
                                </a>
                            </div>
                        </section>

                        {/* Columna de la derecha: bloque visual Leaf Shape */}
                        <section
                            className={`flex-1 w-full flex flex-col justify-center items-center ${styles.fadeInElement} ${styles.animateDelay400}`}>

                            {/* Contenedor Leaf Shape */}
                            <div
                                className={`${styles.leafShapeInverted} bg-[#054c2c] p-10 md:p-12 w-full max-w-md shadow-2xl transform transition-transform hover:scale-[1.02] duration-500 group cursor-default relative overflow-hidden`}>

                                <div className="flex flex-col h-full justify-between min-h-[280px] relative z-10">

                                    {/* Texto párrafo */}
                                    <div className="space-y-6 flex-grow flex flex-col justify-center">
                                        <div
                                            className="w-12 h-12 bg-[#fede54] rounded-full flex items-center justify-center text-[#054c2c] mb-2">
                                            <Sprout size={28}/>
                                        </div>
                                        <h3 className="text-2xl md:text-3xl font-bold leading-snug text-white">
                                            Ingredientes orgánicos, sin químicos, cultivados localmente y entregados con
                                            consistencia.
                                        </h3>
                                        <div
                                            className="w-16 h-1 bg-[#fede54] rounded-full group-hover:w-32 transition-all duration-500"></div>
                                    </div>

                                    {/* Redes sociales */}
                                    <div className="mt-8 pt-6 border-t border-white/10">
                                        <div className="flex items-center justify-between">
                                            <p className="text-[#fede54] text-sm uppercase tracking-widest font-bold">Conecta</p>
                                            <div className="flex gap-3">
                                                {[
                                                    { Icon: Instagram, href: "https://www.instagram.com/afood_co/" },
                                                    { Icon: Linkedin, href: "https://www.linkedin.com/company/afood-co/" },
                                                    { Icon: Facebook, href: "https://www.facebook.com/AFOOD.COL/" },
                                                    { Icon: WhatsAppIcon, href: "https://wa.me/573158882060" }
                                                ].map((item, index) => (
                                                    <a
                                                        key={index}
                                                        href={item.href}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="bg-white/10 p-2.5 rounded-full text-white hover:bg-[#fede54] hover:text-[#054c2c] transition-all duration-300 hover:scale-110"
                                                    >
                                                        <item.Icon size={20}/>
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                {/* Decoración de fondo */}
                                <div
                                    className="absolute top-0 right-0 w-32 h-32 bg-[#00a751] opacity-20 rounded-bl-[100px] pointer-events-none transition-all duration-700 group-hover:scale-150"></div>
                                <Sprout
                                    className="absolute -bottom-10 -left-10 text-white/5 w-64 h-64 -rotate-12 pointer-events-none"
                                />
                            </div>

                        </section>
                    </main>

                    {/* Footer */}
                    <footer
                        className={`flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 border-t border-[#054c2c]/10 pt-6 mt-4 gap-4 ${styles.fadeInElement} ${styles.animateDelay400} w-full`}>

                        <div className="flex items-center justify-center gap-2 text-center md:justify-start md:text-left">
                            <span className="hidden md:inline-block w-2 h-2 rounded-full bg-[#00a751] animate-pulse"></span>
                            <p className="font-semibold md:font-normal">Cultivamos cerca de ti, sin costos ocultos ni intermediarios.</p>
                        </div>

                        <div className="text-center md:text-right space-y-1">
                            <p className="font-medium text-[#054c2c]">afoacuaponia@gmail.com</p>
                            <p className="text-xs">3158882060 · Colombia</p>
                        </div>
                    </footer>
                </div>
            </div>)
    );
}