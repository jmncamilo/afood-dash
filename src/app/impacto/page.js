import Image from "next/image";

export default function EnvironmentalImpactMetrics() {
    return (
        <div className="w-full min-h-screen overflow-hidden">
            {/* Header con mensaje inspirador */}
            <header className="relative w-full mb-6">
                <div className="relative w-full h-[21rem] md:h-80 lg:h-96 overflow-hidden">
                    <Image
                        src="/banners/banner-impact.svg"
                        alt="Impacto ambiental"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0"></div>
                </div>

                {/* Título superpuesto */}
                <h1 className="absolute inset-0 pt-16 md:pt-20 lg:pt-24 text-3xl md:text-4xl lg:text-5xl !font-medium text-[#00A751] text-center px-11 font-[family-name:var(--font-bricolage)]">
                    {`La Bendita Parrilla y afood`} <span className="text-[#135A36] font-extrabold">creamos un futuro</span> sostenible
                </h1>
            </header>

            {/* Contenedor principal con padding lateral */}
            <div className="px-10 py-6 sm:px-6 md:px-8 lg:px-36">
                <main className="max-w-7xl mx-auto flex flex-col overflow-hidden rounded-3xl p-0.5 md:p-8 lg:p-10">

                    {/* Section métricas ambientales */}
                    <section className="grid grid-cols-2 grid-rows-2 gap-7 md:gap-9 w-fit mx-auto">
                        {/* TODO: verificar en diferentes pantallas, corregir si es necesario, agregar últimos detalles y modularizar en un componente funcional */}
                        <div className="p-5 flex flex-col items-center justify-center gap-2 bg-[#fffffb] rounded-xl shadow-md shadow-black/20 md:p-8 w-full max-w-[350px] whitespace-nowrap overflow-hidden text-ellipsis">
                            <h2 className="text-2xl md:text-3xl font-semibold text-[#57B257] font-[family-name:var(--font-bricolage)]">77366</h2>
                            <div className="relative w-full h-24 md:h-28 flex-shrink-0">
                                <Image
                                    src="/misc/water-afood.svg"
                                    alt="Agua ahorrada"
                                    fill
                                    className="object-contain object-center"
                                />
                            </div>
                            <p className="text-md md:text-base text-[#00572D] font-[family-name:var(--font-bricolage)] font-semibold">
                                Agua <span className="text-[#57B257]">ahorrada</span>
                            </p>
                        </div>

                        <div className="p-5 flex flex-col items-center justify-center gap-2 bg-[#fffffb] rounded-xl shadow-md shadow-black/20 md:p-8 w-full max-w-[350px] whitespace-nowrap overflow-hidden text-ellipsis">
                            <h2 className="text-2xl md:text-3xl font-semibold text-[#57B257] font-[family-name:var(--font-bricolage)]">77366</h2>
                            <div className="relative w-full h-24 md:h-28 flex-shrink-0">
                                <Image
                                    src="/misc/water-afood.svg"
                                    alt="Agua ahorrada"
                                    fill
                                    className="object-contain object-center"
                                />
                            </div>
                            <p className="text-md md:text-base text-[#00572D] font-[family-name:var(--font-bricolage)] font-semibold">
                                Agua <span className="text-[#57B257]">ahorrada</span>
                            </p>
                        </div>

                        <div className="p-5 flex flex-col items-center justify-center gap-2 bg-[#fffffb] rounded-xl shadow-md shadow-black/20 md:p-8 w-full max-w-[350px] whitespace-nowrap overflow-hidden text-ellipsis">
                            <h2 className="text-2xl md:text-3xl font-semibold text-[#57B257] font-[family-name:var(--font-bricolage)]">77366</h2>
                            <div className="relative w-full h-24 md:h-28 flex-shrink-0">
                                <Image
                                    src="/misc/water-afood.svg"
                                    alt="Agua ahorrada"
                                    fill
                                    className="object-contain object-center"
                                />
                            </div>
                            <p className="text-md md:text-base text-[#00572D] font-[family-name:var(--font-bricolage)] font-semibold">
                                Agua <span className="text-[#57B257]">ahorrada</span>
                            </p>
                        </div>

                        <div className="p-5 flex flex-col items-center justify-center gap-2 bg-[#fffffb] rounded-xl shadow-md shadow-black/20 md:p-8 w-full max-w-[350px] whitespace-nowrap overflow-hidden text-ellipsis">
                            <h2 className="text-2xl md:text-3xl font-semibold text-[#57B257] font-[family-name:var(--font-bricolage)]">77366</h2>
                            <div className="relative w-full h-24 md:h-28 flex-shrink-0">
                                <Image
                                    src="/misc/water-afood.svg"
                                    alt="Agua ahorrada"
                                    fill
                                    className="object-contain object-center"
                                />
                            </div>
                            <p className="text-md md:text-base text-[#00572D] font-[family-name:var(--font-bricolage)] font-semibold">
                                Agua <span className="text-[#57B257]">ahorrada</span>
                            </p>
                        </div>
                    </section>

                    {/* Sección de contacto */}
                    <section className="flex flex-col items-center justify-center">
                        <p className="text-gray-500 text-sm md:text-base mt-8 text-center">
                            ¿Necesitas ayuda? 💬 Contáctanos para más información.
                        </p>
                    </section>
                </main>
            </div>
        </div>
    );
}