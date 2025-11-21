export function SummaryHeader({ dropdownState, setDropdownState }) {
    // Handler para solo desplegar u ocultar las opciones cuando se da click
    const toggleDropdown = () => {
        setDropdownState(prev => ({
           ...prev,
            isOpen: !prev.isOpen
        }));
    };

    // Handler cuando se selecciona una opción del desplegable
    const handleSelectProduct = (selectedProduct = '') => {
        setDropdownState({
            isOpen: false,
            selectedProduct: selectedProduct,
        });
    };

    return (
             // Header con título y desplegable
        <div className="flex items-center justify-between mb-1.5 w-full">
            {/* Título - alineado a la izquierda */}
            <h2 className="text-xl md:text-2xl font-bold text-cyan-950">
                Resumen
            </h2>

            {/* Desplegable de productos - alineado a la derecha */}
            <div className="relative">
                <div
                    className="flex items-center gap-2 px-0.5 py-2 bg-transparent rounded-lg text-[color:#505050] transition-all duration-200 ease-in-out font-medium cursor-pointer select-none outline-none focus:text-cyan-950  hover:text-shadow-xs"
                    role="button"
                    tabIndex={0}
                    onClick={toggleDropdown}
                    onKeyDown={e => e.key === 'Enter' && toggleDropdown()}
                >
                    <span className="text-sm md:text-base">{dropdownState.selectedProduct}</span>
                    <svg
                        className={`w-4 h-4 transition-transform ${dropdownState.isOpen ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                    </svg>
                </div>

                {/* Opciones dinámicas del desplegable */}
                {dropdownState.isOpen && (
                    <div
                        className="absolute top-[calc(100%+0.2rem)] right-0 w-full min-w-max bg-gray-300 rounded-lg shadow-lg overflow-hidden z-50">
                        <div
                            className="w-full px-4 py-2 text-left text-sm md:text-base text-black hover:bg-gray-200 focus:bg-gray-200 outline-none transition-colors cursor-pointer"
                            role="button"
                            tabIndex={0}
                            onClick={() => handleSelectProduct('Lechuga')}
                        >
                            Lechuga
                        </div>
                        <div
                            className="w-full px-4 py-2 text-left text-sm md:text-base text-black hover:bg-gray-200 focus:bg-gray-200 outline-none transition-colors cursor-pointer"
                            role="button"
                            tabIndex={0}
                            onClick={() => handleSelectProduct('Aromática')}
                        >
                            Aromática
                        </div>
                        <div
                            className="w-full px-4 py-2 text-left text-sm md:text-base text-black hover:bg-gray-200 focus:bg-gray-200 outline-none transition-colors cursor-pointer"
                            role="button"
                            tabIndex={0}
                            onClick={() => handleSelectProduct('Cilantrón')}
                        >
                            Cilantrón
                        </div>
                        {dropdownState.selectedProduct !== 'Productos' &&
                            <div
                                className="w-full px-4 py-2 text-left text-sm md:text-base text-black hover:bg-gray-200 focus:bg-gray-200 outline-none transition-colors cursor-pointer"
                                role="button"
                                tabIndex={0}
                                onClick={() => handleSelectProduct('Todos')}
                            >
                                Todos
                            </div>
                        }
                    </div>
                )}
            </div>
        </div>
    );
}