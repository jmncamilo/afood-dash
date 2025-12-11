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
import { useObjectState } from "@/hooks/useObjectState";
import { additionalDataDefaultValues } from "@/app/dashboard/additionalDataDefaultValues";
import { formatCapitalize } from "@/lib/formatters/formatCapitalize";
import { formatClientName } from "@/lib/formatters/formatClientName";
import { formatCurrency } from "@/lib/formatters/formatCurrency";
import { formatSliceNit } from "@/lib/formatters/formatSliceNit";
import { calculateIntegerColumnTotal } from "@/lib/calculations/calculateIntegerColumnTotal";
import { PoliciesDropdown } from "@/components/policies-dropdown/PoliciesDropdown";
import { termsConditionsValues } from "@/app/dashboard/TermsConditionsValues";
import { AlertModal } from "@/components/modals/alert/AlertModal";
import { benefitsValues } from "@/app/dashboard/BenefitsValues";


export default function Dashboard() {
    // Hook useRouter para redireccionamiento reactivo
    const router = useRouter();

    // Estado para el loader
    const [isLoading, setIsLoading] = useState(true);

    // Estado para manejar información dinámica del cliente
    const { objectData:additionalData, setObjectData:setAdditionalData, updateStateByKey } = useObjectState(additionalDataDefaultValues);

    // Custom hook para el fetching de datos con url del endpoint base para la consulta de los datos desde airtable
    const { data: ordersData, execute } = useFetch('/api/airtable');

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
                console.log(completeQuery); // TESTING CJ
                // Ejecuta el fetching
                const data = await execute(`/api/airtable${completeQuery}`);
                // Valída la respuesta del back para dar más robustez
                if (!data.success) {
                    alert('Error en el servidor, vuelve a iniciar sesión...'); // TODO: hacer modal esto
                    clearSession();
                    router.replace('/login');
                    return;
                }
                // Filtra y setea la data del fetching para obtener los pedidos pendientes por pagar
                setDebtOrdersData(filterOrders(data.data, 'Status Pago', 'Sin Pagar'));
                // Seteando información adicional importante para UX
                updateStateByKey('customerName', formatCapitalize(formatClientName(data?.data?.[0]?.['Id Cumplimiento'])));
                updateStateByKey('customerNit', formatSliceNit(session?.nit || additionalData.customerNit));
                updateStateByKey('customerLogo', session?.clientNameQuery);

                // UX
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

    // Estado para manejar el modal de los beneficios
    const [isBenefitsOn, setIsBenefitsOn] = useState(false);

    // TESTING CJ
    const testConsolePrinting = () => {
        alert('Imprimiendo datos en consola...');
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
                    <div className="flex items-center py-2.5 px-4 w-full bg-white rounded-2xl shadow-md shadow-gray-700/60 font-[family-name:var(--font-bricolage)]">
                        <div className="relative w-12 h-12 rounded-full bg-gray-200 mr-4 flex items-center justify-center overflow-hidden">
                            <Image
                                className={styles.customerLogo}
                                src={additionalData?.customerLogo?.trim() ? `/logos/${additionalData.customerLogo}.png` : '/logos/default-afood.svg'}
                                alt="Logo del cliente"
                                layout="fill"
                                objectFit="cover"
                                onError={() => updateStateByKey('customerLogo', null)}
                            />
                        </div>
                        <div className="flex-grow leading-tight truncate">
                            <div className="font-bold text-base text-neutral-700">{additionalData.customerName}</div>
                            <div className="text-sm text-gray-600 tracking-widest font-medium">. . . . . {additionalData.customerNit}</div>
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

                {/* Sección afood card (total pagado y deuda) */}
                <section className={styles.sectionCreditCard}>
                    <div className={styles.cardBase}>
                        <div className={styles.cardFirstColumn}>
                            <div className={styles.cardWrapperTotal}>
                                <span className="block leading-tight text-md md:text-lg lg:text-xl font-normal text-gray-50">Total comprado</span>
                                <span className="block leading-tight text-2xl md:text-3xl lg:text-4xl font-bold text-gray-100">
                                    ${formatCurrency(calculateIntegerColumnTotal(ordersData?.data, 'Precio del Pedido') || 999999)},00
                                </span>
                            </div>
                            <span className={styles.chipCard} aria-hidden={true}></span>
                            <div className={styles.cardWrapperTotal}>
                                <span className="block leading-tight text-base md:text-lg lg:text-lg font-medium text-red-200">Mi deuda</span>
                                <span className="block leading-tight text-xl md:text-2xl lg:text-2xl font-medium text-gray-100">
                                    ${formatCurrency(calculateIntegerColumnTotal(debtOrdersData, 'Precio del Pedido') || 0)},00
                                </span>
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

                <section className={styles.sectionSummaryOrders}>
                    <SummaryHeader ordersData={ordersData} additionalData={additionalData} updateAdditionalData={updateStateByKey} />
                    <div className={styles.summaryCardsScrollable}>
                        <SummaryCard firstLineText={'Pedidos'} secondLineText={'realizados'} value={additionalData.orders}/>
                        <SummaryCard firstLineText={'Unidades'} secondLineText={'entregadas'} value={additionalData.units} secondFigure={true}/>
                        <SummaryCard firstLineText={'Gramos'} secondLineText={'entregados'} value={additionalData.grams}/>
                    </div>
                </section>

                {/* Sección impacto ambiental */}
                <section className={styles.sectionCardEnvironment}>
                    <div className={styles.bannerCardEnvironment}>
                        <div className={styles.bannerCardEnvironmentContentWrapper}>
                            <span className="block text-[1.1rem] md:text-lg lg:text-xl font-bold">¡Tu impacto!</span>
                            <span className="block text-[0.95rem] md:text-base lg:text-lg font-normal lg:leading-snug">Conoce el gran cambio que haces en el mundo con afood.</span>
                            <button
                                className={styles.bannerCardEnvironmentButton}
                                onClick={() => router.push('/impacto')}
                            >
                                Ver más
                            </button>
                        </div>
                    </div>
                </section>

                {/* Sección logros afoodlover */}
                {ordersData?.data?.length > 20 && (
                    <section className={styles.sectionAchievements}>
                        <div className={styles.achievementsCardWrapper}>
                            <div className={styles.achievementsCardTextContainer}>
                                <span className="block text-[0.7rem] md:text-lg lg:text-xl font-bold">Eres Afoodlover</span>
                                <span className="block text-[0.7rem] md:text-base lg:text-lg font-normal lg:leading-snug">¡Completaste más de 20 pedidos!</span>
                                <span
                                    className="block px-4 py-1 text-[0.6rem] md:text-base lg:text-md font-normal lg:leading-snug cursor-pointer bg-emerald-400 text-white rounded-lg hover:bg-emerald-500 transition-colors"
                                    onClick={() => setIsBenefitsOn(true)}
                                >
                                    Beneficios
                                </span>
                            </div>
                        </div>
                    </section>
                )}

                {/* Sección política de pago y de entrega */}
                <section className={styles.sectionPolicies}>
                    <PoliciesDropdown
                        title={termsConditionsValues[0].title}
                        text={termsConditionsValues[0].text}
                        list={termsConditionsValues[0].list} />
                </section>

                {/* Sección de logout */}
                <section className={styles.sectionLogout}>
                    <button className={styles.buttonLogout} onClick={testConsolePrinting}>Cerrar Sesión</button>
                </section>
            </main>

            {/* Componente para mostrar detalles de la deuda */}
            {isOpenDebtDetails && <DebtDetails onClose={closeDebtDetails} debtOrdersData={debtOrdersData}/>}

            {/* Componente modal para mostrar los beneficios del cliente por ser afoodlover */}
            <AlertModal
                isOpen={isBenefitsOn}
                srcImage={'/icons/3d-gift.png'}
                title={benefitsValues[0].title}
                message={'Soy el mensaje...'}
                onClose={() => setIsBenefitsOn(false)}
                messageList={benefitsValues[0].list}
            />

            {/* Componente loader */}
            {isLoading && <Loader/>}
        </div>
    );
}