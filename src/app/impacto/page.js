"use client";

import Image from "next/image";
import { EnvironmentalCard } from "@/app/impacto/EnvironmentalCard";
import { useState, useEffect } from "react";
import { clearSession, getSession } from "@/lib/utils/authSession";
import { useRouter } from "next/navigation";
import { useObjectState } from "@/hooks/useObjectState";
import initialValues from "@/app/impacto/initialValues";
import { formatDashedString } from "@/lib/formatters/formatDashedString";
import { firstThreeWords } from "@/lib/utils/firstThreeWords";
import { formatCapitalize } from "@/lib/formatters/formatCapitalize";
import { Loader } from "@/components/common/Loader";

export default function EnvironmentalImpactMetrics() {
    const router = useRouter();
    // Estado para el loader
    const [isLoading, setIsLoading] = useState(true);

    // Estado objeto para almacenar los datos que se van a mostrar en esta vista
    const { objectData: viewData, updateStateByKey } = useObjectState(initialValues);

    // Valida la sesión y carga de los datos
    useEffect(() => {
        const authLoadData = async () => {

            try {
                // Verifica la sesión del usuario
                const session = getSession();
                if (!session) {
                    router.replace('/');
                    return;
                }
                // Formatea el nombre del cliente: separa por guiones, capitaliza y muestra solo las primeras 3 palabras con espacios (si aplica)
                const customerName = firstThreeWords(formatCapitalize(formatDashedString(session.clientNameQuery)));
                updateStateByKey('customerName', customerName); // Actualiza el estado que controla los datos de la vista

                // TODO: obtener los datos requeridos desde airtable según el requerimiento de la tabla a consultar que aún se esta determinando

                // UX
                setIsLoading(false);

            } catch (err) {
                console.error('Error cargando la vista:', err);
                alert('Error en el servidor, vuelve a ingresar...');
                clearSession();
                router.replace('/');
            }

        };

        authLoadData();
    }, []);

    return (
        <div className="w-full min-h-screen overflow-hidden">
            {/* Header con mensaje inspirador */}
            <header className="relative w-full mb-6">
                <div className="relative w-full h-[21rem] md:h-80 lg:h-96 overflow-hidden">
                    <Image
                        src="/banners/banner-impact.svg"
                        alt="Impacto ambiental"
                        fill
                        className="object-cover lg:object-fill"
                        priority
                    />
                    <div className="absolute inset-0"></div>
                </div>

                {/* Título superpuesto */}
                <h1 className="absolute inset-0 pt-16 md:pt-20 lg:pt-24 text-3xl md:text-4xl lg:text-5xl !font-medium text-[#00A751] text-center px-11 font-[family-name:var(--font-bricolage)]">
                    {`${viewData.customerName ?? 'Afood Co'} y afood`} <span className="text-[#135A36] font-extrabold">creamos un futuro</span> sostenible
                </h1>
            </header>

            {/* Contenedor principal con padding lateral */}
            <div className="px-10 py-6 sm:px-6 md:px-8 lg:px-36">
                <main className="max-w-7xl mx-auto flex flex-col overflow-hidden rounded-3xl p-0.5 md:p-8 lg:p-10">

                    {/* Section métricas ambientales */}
                    <section className="grid grid-cols-2 grid-rows-2 gap-7 md:gap-9 w-fit mx-auto">
                        <EnvironmentalCard value={viewData.waterValue} srcImage={'/misc/water-afood.svg'} mainLabel={'Agua'} highlightLabel={'ahorrada'} title={'m2 de agua que NO usamos'}/>
                        <EnvironmentalCard value={viewData.carbonValue} srcImage={'/misc/carbon-afood.svg'} mainLabel={'Emisiones'} highlightLabel={'de Co2'}/>
                        <EnvironmentalCard value={viewData.fishValue} srcImage={'/misc/fish-afood.svg'} mainLabel={'Peces'} highlightLabel={'producidos'}/>
                        <EnvironmentalCard value={viewData.nitrogenValue} srcImage={'/misc/nitrogen-afood.svg'} mainLabel={'Nitrógeno'} highlightLabel={'evitado'} title={'kg de nitrógeno que NO se desperdiciaron'}/>
                    </section>

                    {/* Sección que hace de footer para poner links de acceso */}
                    <section className="flex flex-col items-center justify-center mt-12 mb-8 px-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-[#135A36] mb-4 text-center">
                            ¿Quieres saber más? 🌱
                        </h2>
                        <p className="text-gray-600 text-base md:text-lg mb-8 text-center max-w-2xl">
                            Descubre cómo nació la visión de integrar tecnologías y saberes ancestrales en nuestras granjas...
                        </p>

                        <div className="flex flex-wrap gap-4 justify-center items-center">
                            {/* Sitio web */}
                            <a
                                href="https://afood.com.co/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 bg-[#00A751] hover:bg-[#135A36] text-white px-6 py-3 rounded-full transition-colors duration-300 shadow-lg hover:shadow-xl"
                            >
                                🌐 Visita nuestro sitio web
                            </a>

                            {/* Instagram */}
                            <a
                                href="https://www.instagram.com/afood_co/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 hover:from-purple-600 hover:via-pink-600 hover:to-orange-600 text-white px-6 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
                            >
                                📸 Síguenos en Instagram
                            </a>

                            {/* WhatsApp */}
                            <a
                                href="https://wa.me/573125185174"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-white px-6 py-3 rounded-full transition-colors duration-300 shadow-lg hover:shadow-xl"
                            >
                                💬 Escríbenos a WhatsApp
                            </a>
                        </div>
                    </section>

                </main>
            </div>

            {/* Componente loader */}
            {isLoading && <Loader/>}
        </div>
    );
}