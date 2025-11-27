"use client";

import { useEffect, useState } from "react";
import styles from "./Dashboard.module.css";
import Image from "next/image";
import { SummaryHeader } from "@/app/dashboard/SummaryHeader";
import { SummaryCard } from "@/app/dashboard/SummaryCard";
import { useModal } from "@/hooks/useModal";
import { DebtDetails } from "@/components/modals/debt-details/DebtDetails";
import { useRouter } from "next/navigation";
import { getSession, clearSession } from "@/lib/utils/authSession";
import { Loader } from "@/components/common/Loader";
import { useFetch } from "@/hooks/useFetch";
import { filterOrders } from "@/lib/utils/filterOrders";

export default function Dashboard() {
    // Hook useRouter para redireccionamiento reactivo
    const router = useRouter();

    // Estado para el loader
    const [isLoading, setIsLoading] = useState(true);

    // Estado para manejar información dinámica del cliente


    // Custom hook para el fetching de datos con url del endpoint base para la consulta de los datos desde airtable
    const { data: ordersData, execute, loading } = useFetch('/api/airtable');

    // Estado para almacenar los pedidos que aún están pendientes de pagar (deudas del cliente)
    const [debtOrdersData, setDebtOrdersData] = useState([]);

    // Verifica que haya sesión iniciada para mostrar la vista
    useEffect(() => {
        const loadData = async () => {
            try {
                // Verifica datos válidos de autenticación
                const session = getSession();
                if (!session) {
                    router.replace('/login');
                    return;
                }
                // Obtiene el nombre del cliente y concatenándolo para construir la query string de la url del fetch
                const completeQuery = `?customer=${session.clientNameQuery}`;
                    console.log(completeQuery);
                // Ejecuta el fetching
                const data = await execute(`/api/airtable${completeQuery}`);
                // Valída la respuesta del back para dar más robustez
                if (!data.success) {
                    alert('Error en el servidor, vuelve a iniciar sesión...');
                    clearSession();
                    router.replace('/login');
                    return;
                }
                // Filtra y setea la data del fetching para obtener los pedidos pendientes por pagar
                setDebtOrdersData(filterOrders(data.data, 'Status Pago', 'Sin Pagar'));
                // UX
                alert('Datos cargados correctamente...');
                setIsLoading(false);

            } catch (err) {
                console.error("Error cargando pedidos:", err);
                alert('Error en el servidor, vuelve a iniciar sesión...');
                clearSession();
                router.replace('/login');
            }
        };

        loadData();
    }, []);


    // Usando el custom hook para manejar el modal del detalle de la deuda
    const { isOpen: isOpenDebtDetails, open: openDebtDetails, close: closeDebtDetails } = useModal();

    // Estado para manejar el filtro del producto a consultar
    const [dropdownState, setDropdownState] = useState({
        isOpen: false,
        selectedProduct: 'Productos',
    });

    // Estado para manejar los valores dinámicos en la sección de resumen
    const [summaryValues, setSummaryValues] = useState({
        orders: '99',
        units: '99',
        grams: '99'
    });

    // Prueba
    const testConsolePrinting = () => {
        console.log('Pedidos', ordersData);
        console.log('Deudas', debtOrdersData);
    }

    return (
        // Contenedor padre
        <div className="w-full min-h-screen px-10 py-6 sm:px-6 md:px-8 lg:px-36 overflow-hidden">
            {/* Contenedor donde vive el fondo gris */}
            <main className={`${styles.dashboardWrapper} max-w-7xl mx-auto flex flex-col overflow-hidden`}>

                {/* Encabezado del cliente */}
                <header className={styles.customerHeader}>
                    <div className="flex items-center py-2.5 px-4 w-full bg-white rounded-2xl shadow-md shadow-gray-700/60 font-sans">
                        <div className="relative w-12 h-12 rounded-full bg-gray-200 mr-4 flex items-center justify-center overflow-hidden">
                            <Image
                                className={styles.customerLogo}
                                src="/branding/symbol-afood.svg"
                                alt="Logo del cliente"
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                        <div className="flex-grow leading-tight">
                            <div className="font-bold text-base text-neutral-700">Limoncello</div>
                            <div className="text-sm text-gray-600 tracking-widest font-medium">. . . . . 1389</div>
                        </div>
                        <div className="relative w-12 h-6 bg-transparent ml-2 flex items-center justify-center">
                            <Image
                                src="/branding/logo-afood-font-color.svg"
                                alt="Logotipo de afood"
                                layout="fill"
                                objectFit="contain"
                                quality={95}
                            />
                        </div>
                    </div>
                </header>

                {/* Sección afood card (total pagado - deuda) */}
                <section className={styles.sectionCreditCard}>
                    <div className={styles.cardBase}>
                        <div className={styles.cardFirstColumn}>
                            <div className={styles.cardWrapperTotal}>
                                <span className="block leading-tight text-md md:text-lg lg:text-xl text-gray-50">Total comprado</span>
                                <span className="block leading-tight text-2xl md:text-3xl lg:text-4xl font-bold text-gray-100">$920.000,00</span>
                            </div>
                            <span className={styles.chipCard} aria-hidden={true}></span>
                            <div className={styles.cardWrapperTotal}>
                                <span className="block leading-tight text-xs md:text-sm lg:text-base font-medium text-red-200">Mi deuda</span>
                                <span className="block leading-tight text-md md:text-lg lg:text-xl font-medium text-gray-100">$65.000,00</span>
                            </div>
                        </div>
                        <div className={styles.cardSecondColumn}>
                            <div className={styles.cardWrapperIcons}>
                                <span className={styles.cardAfoodLogo}></span>
                                <span className={styles.cardWireless}></span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Sección con botón para ver detalles de la deuda */}
                <section className={styles.sectionButtonDetails}>
                    <button className={styles.buttonDetails} title={'Ver detalles de la deuda'} onClick={openDebtDetails}>
                        Ver Deuda
                    </button>
                </section>

                {/* Sección resumen de pedidos */}
                <section className={styles.sectionSummaryOrders}>
                    <SummaryHeader dropdownState={dropdownState} setDropdownState={setDropdownState} />
                    <div className={styles.summaryCardsScrollable}>
                        <SummaryCard firstLineText={'Pedidos'} secondLineText={'realizados'} value={summaryValues.orders}/>
                        <SummaryCard firstLineText={'Unidades'} secondLineText={'entregadas'} value={summaryValues.units} secondFigure={true}/>
                        <SummaryCard firstLineText={'Gramos'} secondLineText={'entregados'} value={summaryValues.grams}/>
                    </div>
                </section>

                {/* Sección impacto ambiental */}
                    {/* TODO: esto puede tener modificaciones finales ya que no es la imagen definitiva, pero es un punto de partida avanzado */}
                <section className={styles.sectionCardEnvironment}>
                    <div className={styles.bannerCardEnvironment}>
                        <div className={styles.bannerCardEnvironmentContentWrapper}>
                            <span className="block text-[1.1rem] md:text-lg lg:text-xl font-bold">¡Buen trabajo!</span>
                            <span className="block text-[0.95rem] md:text-base lg:text-lg font-normal lg:leading-snug">Al comprar productos afood reduces la huella ambiental.</span>
                            <button className={styles.bannerCardEnvironmentButton} onClick={testConsolePrinting}>Ver más</button>
                        </div>
                    </div>
                </section>

                {/* Sección badges */}
                    {/* TODO: será render dinámico, sólo cuando el cliente sobrepase X cantidad de pedidos. Puede cambiar el diseño, pero más que el bg de la card */}
                <section className={styles.sectionAchievements}>
                    <div className={styles.achievementsCardWrapper}>
                        <div className={styles.achievementsCardTextContainer}>
                            <span className="block text-[0.7rem] md:text-lg lg:text-xl font-bold">Eres Afoodlover</span>
                            <span className="block text-[0.7rem] md:text-base lg:text-lg font-normal lg:leading-snug">¡Completaste más de XX pedidos!</span>
                            <span className="block px-4 py-1 text-[0.6rem] md:text-base lg:text-md font-normal lg:leading-snug cursor-pointer bg-emerald-400 text-white rounded-lg hover:bg-emerald-500 transition-colors" onClick={() => alert('Beneficios click...')}>Beneficios</span>
                        </div>
                    </div>
                </section>

                {/* Sección política de pago y de entrega */}
                <section className={styles.sectionPolicies}>
                    Aquí van las políticas de compra y entrega
                </section>
            </main>

            {/* Componente para mostrar detalles de la deuda */}
            {isOpenDebtDetails && <DebtDetails onClose={closeDebtDetails}/>}

            {/* Componente loader */}
            {isLoading && <Loader/>}
        </div>
    );
}