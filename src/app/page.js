"use client";

import React, { useState, useEffect } from 'react';
import { Loader } from "@/components/common/Loader";
import {
    Sprout, ArrowRight, Instagram, Linkedin, Facebook, ExternalLink, LogIn, Phone
} from 'lucide-react';

// Icono personalizado de WhatsApp porque no siempre está en todas las versiones de Lucide
const WhatsAppIcon = ({ size = 24, className }) => (<svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
>
    <path
        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
</svg>);

const LandingAfood = () => {
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
                className="min-h-screen bg-[#F0F0F0] font-sans text-[#0f0f0f] overflow-x-hidden selection:bg-[#00a751] selection:text-white">
                <style>{`
                    @keyframes fade-in-up {
                      0% { opacity: 0; transform: translateY(20px); }
                      100% { opacity: 1; transform: translateY(0); }
                    }
                    .animate-delay-100 { animation-delay: 100ms; }
                    .animate-delay-200 { animation-delay: 200ms; }
                    .animate-delay-300 { animation-delay: 300ms; }
                    .animate-delay-400 { animation-delay: 400ms; }
                    
                    /* Forma de hoja invertida: Punta TopLeft/BottomRight, Curva TopRight/BottomLeft */
                    /* Aumentado el radio a 100px para más suavidad */
                    .leaf-shape-inverted {
                      border-radius: 0px 100px 0px 100px;
                    }
                    
                    .fade-in-element {
                      opacity: 0;
                      animation: fade-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                    }
                  `}</style>

                {/* Contenedor Principal */}
                <div
                    className="lg:h-screen w-full flex flex-col p-6 lg:p-12 relative max-w-7xl mx-auto justify-between">

                    {/* Cuerpo Principal */}
                    <main
                        className="flex flex-col lg:flex-row items-center justify-center lg:items-center gap-10 lg:gap-16 flex-grow py-8 lg:py-4 w-full">

                        {/* Columna Izquierda: Texto y Botones (Ahora Centrado) */}
                        <section
                            className="flex-1 flex flex-col justify-center items-center text-center space-y-8 z-10 w-full max-w-2xl">

                            {/* Logo Centrado */}
                            <div
                                className={`flex flex-col items-center gap-2 fade-in-element ${isLoading ? 'opacity-100' : ''}`}>
                                <div className="bg-[#054c2c] p-3 rounded-xl text-[#fede54] shadow-lg">
                                    <Sprout size={40} strokeWidth={2}/>
                                </div>
                                <span className="text-2xl font-bold tracking-tight text-[#054c2c]">afood</span>
                            </div>

                            <div className="space-y-6">
                                <h1 className={`text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-[#0f0f0f] fade-in-element animate-delay-100`}>
                                    Bienvenido al panel <br/> de control <span className="text-[#00a751]">afood</span>
                                </h1>

                                <div className={`flex flex-col items-center gap-3 fade-in-element animate-delay-200`}>
                                    <h2 className="text-xl md:text-2xl font-bold text-[#054c2c]">
                                        Sembramos cambio cosechamos futuro
                                    </h2>
                                    <div className="h-1 w-20 bg-[#fede54] rounded-full"></div>
                                    <p className="text-base md:text-lg text-gray-600 max-w-lg leading-relaxed">
                                        Producimos en granjas urbanas que combinan tecnología y agricultura ancestral,
                                        para garantizar alimentos frescos, disponibles todo el año y a precios estables.
                                    </p>
                                </div>
                            </div>

                            {/* Botones de Acción */}
                            <div
                                className={`flex flex-col sm:flex-row gap-4 w-full max-w-md justify-center fade-in-element animate-delay-300`}>
                                <a
                                    href="/login"
                                    className="group relative flex items-center justify-between px-6 py-4 bg-[#054c2c] text-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 w-full"
                                >
                                    <div
                                        className="absolute inset-0 w-0 bg-[#00a751] transition-all duration-[250ms] ease-out group-hover:w-full opacity-100"></div>
                                    <div className="relative flex items-center gap-3 z-10">
                                        <LogIn className="w-5 h-5 text-[#fede54]"/>
                                        <span className="font-semibold text-base">Ingresar</span>
                                    </div>
                                    <ArrowRight
                                        className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform"/>
                                </a>

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
                                </a>
                            </div>
                        </section>

                        {/* Columna Derecha: Bloque Visual Leaf Shape Invertido */}
                        <section
                            className="flex-1 w-full flex flex-col justify-center items-center fade-in-element animate-delay-400">

                            {/* Contenedor Leaf Shape Invertido */}
                            <div
                                className="leaf-shape-inverted bg-[#054c2c] p-8 md:p-12 w-full max-w-md shadow-2xl transform transition-transform hover:scale-[1.02] duration-500 group cursor-default relative overflow-hidden">

                                <div className="flex flex-col h-full justify-between min-h-[280px] relative z-10">

                                    {/* Texto Nuevo */}
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

                                    {/* Redes Sociales */}
                                    <div className="mt-8 pt-6 border-t border-white/10">
                                        <div className="flex items-center justify-between">
                                            <p className="text-[#fede54] text-sm uppercase tracking-widest font-bold">Conecta</p>
                                            <div className="flex gap-3">
                                                {[{ Icon: Instagram, href: "#" }, {
                                                    Icon: Linkedin,
                                                    href: "#"
                                                }, { Icon: Facebook, href: "#" }, {
                                                    Icon: WhatsAppIcon,
                                                    href: "#"
                                                }].map((item, index) => (<a
                                                    key={index}
                                                    href={item.href}
                                                    className="bg-white/10 p-2.5 rounded-full text-white hover:bg-[#fede54] hover:text-[#054c2c] transition-all duration-300 hover:scale-110"
                                                >
                                                    <item.Icon size={20}/>
                                                </a>))}
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
                        className={`flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 border-t border-[#054c2c]/10 pt-6 mt-4 gap-4 fade-in-element animate-delay-400 w-full`}>
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-[#00a751] animate-pulse"></span>
                            <p>Cultivamos cerca de ti, sin costos ocultos ni intermediarios.</p>
                        </div>

                        <div className="text-center md:text-right space-y-1">
                            <p className="font-medium text-[#054c2c]">afoacuaponia@gmail.com</p>
                            <p className="text-xs">3158882060 · Colombia</p>
                        </div>
                    </footer>
                </div>
            </div>)
    );
};

export default LandingAfood;