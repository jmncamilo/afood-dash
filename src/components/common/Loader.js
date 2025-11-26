export function Loader() {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
            {/* Overlay con blur */}
            <div className="absolute inset-0 bg-white/40 backdrop-blur-sm"/>

            {/* Contenedor del loader - punto de referencia central */}
            <div className="relative w-40 h-40">
                {/* Anillo externo - centrado al contenedor */}
                <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-[#46c055] border-r-[#fee045] animate-spin"/>

                {/* Anillo interno - centrado al contenedor */}
                <div
                    className="absolute inset-2 rounded-full border-4 border-transparent border-b-[#054c2c] border-l-[#d1f442] animate-spin"
                    style={{ animationDuration: '2s' }}/>

                {/* Círculo blanco - centrado al contenedor */}
                <div className="absolute inset-4 bg-white rounded-full shadow-2xl ring-4 ring-gray-100 animate-pulse">
                    {/* Logo - forzar centrado absoluto */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div
                            className="w-20 h-20 bg-center bg-no-repeat bg-contain"
                            style={{ backgroundImage: 'url(/branding/symbol-afood.svg)' }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}