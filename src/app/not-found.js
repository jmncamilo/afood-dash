import Link from 'next/link';
import Image from 'next/image';
import { WhatsAppIcon } from '@/components/common/WhatsAppIcon';
import { Instagram, Linkedin, Facebook, Sprout, Home } from 'lucide-react';

export default function NotFound() {
    return (
        <main
            className="min-h-screen w-full flex flex-col items-center justify-center bg-[#fcfcfa] p-3 sm:p-4 lg:p-8 relative overflow-y-auto">

            {/* Elementos para decorar el fondo */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#00a751]/5 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 -left-24 w-72 h-72 bg-[#fede54]/10 rounded-full blur-3xl"></div>
            </div>

            {/* Logo de afood */}
            <div className="absolute top-3 sm:top-4 lg:top-6 left-0 w-full flex justify-center z-20">
                <div className="relative w-44 h-18 sm:w-48 sm:h-20 md:w-48 md:h-20 lg:w-44 lg:h-16 xl:w-56 xl:h-24">
                    <Image
                        src="/branding/logo-afood.svg"
                        alt="Afood Logo"
                        fill
                        className="object-contain drop-shadow-[0_3px_2px_rgba(0,0,0,0.50)]"
                        priority
                    />
                </div>
            </div>


            {/* Contenedor principal centrado */}
            <div
                className="flex flex-col items-center w-full max-w-lg lg:max-w-4xl xl:max-w-5xl z-10 mt-8 sm:mt-12 md:mt-16 lg:mt-0 mb-20 sm:mb-24 lg:mb-8">

                {/* Video de lechuga skater */}
                <div className="relative w-full h-48 sm:h-56 md:h-60 lg:h-56 xl:h-60">
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-contain"
                    >
                        <source src="/branding/lettuce-skater.mp4" type="video/mp4"/>
                        Su navegador no soporta el elemento de video.
                    </video>
                </div>

                {/* Bloque contenedor verde */}
                <div
                    className="w-full bg-[#054c2c] text-white rounded-tr-[4rem] rounded-bl-[4rem] rounded-tl-lg rounded-br-lg shadow-2xl p-5 sm:p-6 md:p-8 lg:p-8 xl:p-10 relative overflow-hidden transition-transform duration-300 hover:scale-[1.01]">

                    <div
                        className="absolute -right-8 -top-8 w-32 h-32 bg-[#00a751] rounded-full opacity-20 blur-xl"></div>

                    {/* Grid layout */}
                    <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:gap-8 xl:gap-12">

                        {/* Columna izquierda - mensaje para el usuario */}
                        <div
                            className="text-center lg:text-left lg:flex-1 space-y-2 sm:space-y-3 lg:space-y-4 mb-4 sm:mb-5 lg:mb-0">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-bold text-[#fede54] tracking-tight">
                                Oops!
                            </h1>
                            <h2 className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl font-medium text-white/90">
                                Parece que te perdiste en el huerto
                            </h2>
                            <p className="text-white/70 text-xs sm:text-sm md:text-base lg:text-sm xl:text-base leading-relaxed max-w-xs lg:max-w-md mx-auto lg:mx-0">
                                La ruta que buscas no ha germinado o fue cosechada. ¡Volvamos a terreno seguro!
                            </p>
                        </div>

                        {/* Columna derecha - botones de acción */}
                        <div className="flex flex-col items-center gap-3 sm:gap-4 lg:gap-5 lg:flex-1 lg:items-end">

                            {/* Enlaces de navegación */}
                            <div
                                className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-2.5 sm:gap-3 lg:gap-4 w-full lg:w-auto items-center justify-center sm:justify-center lg:justify-end xl:justify-end">
                                <Link
                                    href="/dashboard"
                                    className="group flex items-center justify-center gap-2 bg-[#fede54] text-[#0f0f0f] font-bold px-4 py-2 sm:px-5 sm:py-2.5 lg:px-6 lg:py-3 rounded-xl shadow-lg hover:bg-[#fff0a0] transition-all active:scale-95 w-full sm:w-auto whitespace-nowrap text-xs sm:text-sm lg:text-base"
                                >
                                    <span>Ir al Huerto</span>
                                    <Sprout className="h-4 w-4 lg:h-5 lg:w-5 transition-transform group-hover:translate-x-1" />
                                </Link>

                                <Link
                                    href="/"
                                    className="group flex items-center justify-center gap-2 border-2 border-[#00a751] text-white font-semibold px-4 py-2 sm:px-5 sm:py-2.5 lg:px-6 lg:py-3 rounded-xl hover:bg-[#00a751] transition-all active:scale-95 w-full sm:w-auto whitespace-nowrap text-xs sm:text-sm lg:text-base"
                                >
                                    <Home className="h-4 w-4 lg:h-5 lg:w-5 opacity-80" />
                                    <span>Ir al Inicio</span>
                                </Link>
                            </div>

                            {/* Separador */}
                            <div className="w-12 h-0.5 bg-white/10 rounded-full lg:hidden"></div>

                            {/* Enlace a WhatsApp */}
                            <a
                                href="https://wa.me/573125185174"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs lg:text-sm text-[#00a751] hover:text-[#fede54] transition-colors font-medium bg-[#0f0f0f]/30 px-2.5 py-1.5 sm:px-3 sm:py-2 lg:px-4 lg:py-2 rounded-full border border-white/5 hover:border-[#00a751]/50 whitespace-nowrap"
                            >
                                <WhatsAppIcon
                                    size={14}
                                    className="sm:w-4 sm:h-4 lg:w-5 lg:h-5"
                                />
                                ¿Necesitas ayuda? Escríbenos
                            </a>

                        </div>
                    </div>
                </div>
            </div>

            <footer className="absolute bottom-2 sm:bottom-3 lg:bottom-4 left-0 right-0 flex flex-col items-center gap-2 sm:gap-3">
                {/* Redes sociales */}
                <div className="flex items-center gap-2 sm:gap-3">
                    <a
                        href="https://instagram.com/TU_USUARIO_INSTAGRAM"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#054c2c] p-2 sm:p-2.5 rounded-full hover:bg-[#fede54] transition-colors group"
                        aria-label="Instagram"
                    >
                        <Instagram className="w-4 h-4 sm:w-5 sm:h-5 text-[#fede54] group-hover:text-[#054c2c] transition-colors"/>
                    </a>
                    <a
                        href="https://linkedin.com/company/TU_EMPRESA_LINKEDIN"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#054c2c] p-2 sm:p-2.5 rounded-full hover:bg-[#fede54] transition-colors group"
                        aria-label="LinkedIn"
                    >
                        <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 text-[#fede54] group-hover:text-[#054c2c] transition-colors"/>
                    </a>
                    <a
                        href="https://facebook.com/TU_PAGINA_FACEBOOK"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#054c2c] p-2 sm:p-2.5 rounded-full hover:bg-[#fede54] transition-colors group"
                        aria-label="Facebook"
                    >
                        <Facebook className="w-4 h-4 sm:w-5 sm:h-5 text-[#fede54] group-hover:text-[#054c2c] transition-colors"/>
                    </a>
                </div>

                {/* Otro separador */}
                <div className="w-8 h-0.5 bg-[#00a751] rounded-full"></div>

                {/* Copyright */}
                <p className="text-[10px] sm:text-xs text-gray-400">
                    © {new Date().getFullYear()} afood. Todos los derechos reservados.
                </p>
            </footer>

        </main>
    );
}