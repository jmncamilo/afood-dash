export default function EnvironmentalImpactMetrics() {
    return (
        // Contenedor padre
        <div className="w-full min-h-screen px-10 py-6 sm:px-6 md:px-8 lg:px-36 overflow-hidden">
            {/* Contenedor principal con fondo */}
            <main className="max-w-7xl mx-auto flex flex-col overflow-hidden bg-gray-50 rounded-3xl p-6 md:p-8 lg:p-10">

                {/* Header con mensaje inspirador */}
                <header className="mb-6">
                   <h1>La Bendita y afood crean un futuro sostenible</h1>
                </header>

                {/* Section métricas ambientales */}
                <section className="flex flex-col items-center justify-center">
                    <h1>Sección para mostrar las métricas</h1>
                </section>

                {/* Sección de contacto */}
                <section className="flex flex-col items-center justify-center">
                    {/* Contacto */}
                    <p className="text-gray-500 text-sm md:text-base mt-8 text-center">
                        ¿Necesitas ayuda? 💬 Contáctanos para más información.
                    </p>
                </section>
            </main>
        </div>
    );
}