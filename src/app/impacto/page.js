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
import { useFetch } from "@/hooks/useFetch";
import { calculateNumericColumnTotal } from "@/lib/calculations/calculateNumericColumnTotal";
import { formatToTwoDecimals } from "@/lib/formatters/formatToTwoDecimals";
import { formatCurrency } from "@/lib/formatters/formatCurrency";

export default function EnvironmentalImpactMetrics() {
    const router = useRouter();
    // Estado para el loader
    const [isLoading, setIsLoading] = useState(true);

    // Custom hook para manejar el fetching
    const { data: allOrdersDelivered, execute} = useFetch('/api/airtable');

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

                // Obtiene y setea los datos requeridos desde airtable para renderizar las métricas
                const data = await execute('api/airtable?customer=');
                if (!data.success) {
                    router.replace('/dashboard');
                    return;
                }
                const nitrogen = calculateNumericColumnTotal(data.data, 'Nitrógeno Evitado en Cuerpos de Agua Kg');
                updateStateByKey('nitrogenValue', formatToTwoDecimals(nitrogen));
                const carbon = calculateNumericColumnTotal(data.data, 'Emisiones CO2e Evitadas Kg');
                updateStateByKey('carbonValue', formatToTwoDecimals(carbon));
                const water = calculateNumericColumnTotal(data.data, 'Agua Ahorrada L');
                updateStateByKey('waterValue', formatToTwoDecimals(water));

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
            <div className="px-10 py-3 sm:px-6 md:px-8 lg:px-36">
                <main className="max-w-7xl mx-auto flex flex-col overflow-hidden rounded-3xl p-0.5 md:p-8 lg:p-10">

                    {/* Section métricas ambientales */}
                    <section className="flex flex-col gap-6 md:gap-8 w-full max-w-4xl mx-auto">
                        <EnvironmentalCard
                            value={formatCurrency(viewData.waterValue)}
                            srcImage={'/misc/water-afood.svg'}
                            mainLabel={'Agua'}
                            highlightLabel={'ahorrada'}
                            title={'Litros de agua ahorrados'}
                            description={'Litros: 90% menos consumo de agua que la agricultura tradicional'}
                        />
                        <EnvironmentalCard
                            value={formatCurrency(viewData.carbonValue)}
                            srcImage={'/misc/carbon-afood.svg'}
                            mainLabel={'Emisiones'}
                            highlightLabel={'de CO2'}
                            title={'Kgs de CO2 evitados'}
                            description={'Kgs de CO2 equivalente evitados, reduciendo la huella de carbono'}
                        />
                        <EnvironmentalCard
                            value={formatCurrency(viewData.nitrogenValue)}
                            srcImage={'/misc/nitrogen-afood.svg'}
                            mainLabel={'Nitrógeno'}
                            highlightLabel={'evitado'}
                            title={'Kgs de nitrógeno evitados'}
                            description={'Kgs de nitrógeno evitados, protegiendo ecosistemas acuáticos'}
                        />
                    </section>

                    {/* Sección que hace de footer para poner links de acceso y detalles de las métricas */}
                    <section className="flex flex-col items-center justify-center mt-12 mb-8 px-4 gap-0.5">
                        <h2 className="text-2xl md:text-3xl font-bold text-[#135A36] mb-3 text-center">
                            ¡Así lo logramos! 🌱
                        </h2>
                        <p className="text-gray-600 text-base md:text-lg mb-8 text-center max-w-3xl">
                            Nuestro modelo de agricultura vertical local combina tecnología de punta con prácticas sostenibles para generar un impacto real y medible...
                        </p>

                        {/* Desglose de las métricas */}
                        <div className="w-full max-w-3xl mb-10">
                            <ul className="space-y-5 md:space-y-6">
                                <li className="flex items-start gap-4 bg-gradient-to-r from-green-50 to-emerald-50 p-5 md:p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
                                    <span className="text-2xl md:text-3xl flex-shrink-0">🚚</span>
                                    <div className="flex-1">
                                        <h3 className="font-bold text-[#135A36] text-base md:text-lg mb-1">
                                            Entrega local de bajo impacto
                                        </h3>
                                        <p className="text-gray-700 text-sm md:text-base">
                                            Distribución en un radio de <strong className="text-[#00A751]">1–15 km</strong>, frente a 200–300 km en sistemas convencionales
                                        </p>
                                    </div>
                                </li>

                                <li className="flex items-start gap-4 bg-gradient-to-r from-green-50 to-emerald-50 p-5 md:p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
                                    <span className="text-2xl md:text-3xl flex-shrink-0">💧</span>
                                    <div className="flex-1">
                                        <h3 className="font-bold text-[#135A36] text-base md:text-lg mb-1">
                                            90% menos consumo de agua
                                        </h3>
                                        <p className="text-gray-700 text-sm md:text-base">
                                            Solo <strong className="text-[#00A751]">14,6 L/kg</strong> en granjas AFOOD frente a 146 L/kg en la agricultura tradicional
                                        </p>
                                    </div>
                                </li>

                                <li className="flex items-start gap-4 bg-gradient-to-r from-green-50 to-emerald-50 p-5 md:p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
                                    <span className="text-2xl md:text-3xl flex-shrink-0">✅</span>
                                    <div className="flex-1">
                                        <h3 className="font-bold text-[#135A36] text-base md:text-lg mb-1">
                                            Validado por CIF Climate KIC
                                        </h3>
                                        <p className="text-gray-700 text-sm md:text-base">
                                            Nuestro impacto ambiental está certificado por una de las principales comunidades climáticas de Europa
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>


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

                    {/* Botón volver al huerto (dashboard) */}
                    <section className="flex flex-col items-center justify-center mt-14 mb-12 px-4">
                        <div className="w-full max-w-md">
                            <button
                                onClick={() => router.push('/dashboard')}
                                className="group relative w-full bg-gradient-to-r from-[#00A751] to-[#135A36] hover:from-[#135A36] hover:to-[#00A751] text-white px-8 py-4 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 flex items-center justify-center gap-3"
                            >
                                <span
                                    className="text-xl md:text-2xl group-hover:scale-110 transition-transform duration-300">🌿</span>
                                <span className="text-base md:text-lg font-bold">
                                    Volver a mi huerto
                                </span>
                                <span
                                    className="text-xl md:text-2xl group-hover:translate-x-1 transition-transform duration-300">→</span>
                            </button>

                            <p className="text-center text-gray-500 text-sm mt-4">
                                Regresa al dashboard para ver más detalles
                            </p>
                        </div>
                    </section>

                </main>
            </div>

            {/* Componente loader */}
            {isLoading && <Loader/>}
        </div>
    );
}