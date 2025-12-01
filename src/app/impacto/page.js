export default function EnvironmentalImpactMetrics() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-6 py-10 bg-gradient-to-b from-green-50 to-white text-center">

            {/* Icono */}
            <div className="mb-6 flex items-center justify-center">
                <div className="p-5 bg-green-600 rounded-2xl shadow-lg">
                    <svg
                        className="w-12 h-12 md:w-16 md:h-16 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                        />
                    </svg>
                </div>
            </div>

            {/* Título */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-800 mb-4">
                🌿 Módulo de Impacto Ambiental
            </h1>

            {/* Estado */}
            <div className="inline-block bg-yellow-200 text-yellow-900 px-5 py-2 rounded-full text-sm md:text-base font-semibold mb-6 shadow-sm">
                🚧 En Construcción – Mejorando este espacio para ti
            </div>

            {/* Descripción */}
            <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-xl mb-6">
                Estamos trabajando en funcionalidades para que puedas medir y visualizar el impacto ambiental de tus actividades.
                Muy pronto podrás acceder a métricas detalladas. ✨
            </p>

            {/* Indicador de progreso */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center pt-4">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span>Trabajando para ti</span>
                </div>
            </div>

            {/* Contacto */}
            <p className="text-gray-500 text-sm md:text-base mt-8">
                ¿Necesitas ayuda? 💬 Contáctanos para más información.
            </p>
        </div>
    );
}