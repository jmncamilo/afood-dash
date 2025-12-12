"use client";

import styles from "./Login.module.css";
import Image from "next/image";
import { validateNit } from "@/constants/nitDictionary";
import { useForm } from "@/hooks/useForm";
import { useRouter } from "next/navigation";
import { setSession, getSession } from "@/lib/utils/authSession";
import { useEffect, useState } from "react";
import { Loader } from "@/components/common/Loader";

export default function Login() {
    // Usa el hook de next para redireccionamiento
    const router = useRouter();

    // Estado para el loader
    const [isLoading, setIsLoading] = useState(true);

    // Verifica que no haya sesión iniciada para mostrar o no la vista actual
    useEffect(() => {
        const session = getSession();
        if (session) {
            router.replace('/dashboard');
        } else {
            // Usa setTimeout para evitar setState sincrónico
            setTimeout(() => setIsLoading(false), 0);
        }
    }, [router]);

    // Usa el custom hook useForm y establece valor inicial vacío
    const { form, handlerSetForm, resetForm } = useForm({ customerNit: '' });

    // Handler del input con validación
    const handleChangeNit = e => {
        if (!/^\d*$/.test(e.target.value)) return;
        if (e.target.value.length > 12) return;
        handlerSetForm(e);
    };

    // Handler con la lógica del login
    const handleLogin = () => {
        try {
            // Valida que el input no esté vacío
            if (!form.customerNit) return alert('Debes ingresar el NIT de tu empresa...'); // TODO: modal
            // Valida que el input tenga más de 5 caracteres
            if (form.customerNit.length < 6) return alert('El NIT ingresado no cumple con el formato legal requerido. Por favor, verifica e intenta nuevamente.');
            // Valida que el NIT se encuentre en el diccionario
            const customerNameQuery = validateNit(form.customerNit);
            if (!customerNameQuery) return alert('El NIT ingresado no está registrado como cliente de afood. Por favor, verifica e intenta nuevamente.'); // TODO: modal
            // Si el código llega hasta acá, quiere decir que encontró al cliente
            setSession(form.customerNit, customerNameQuery);
            // Respuesta exitosa y redireccionamiento
            alert('¡Login exitoso!');
            router.push('/dashboard');
        } catch (error) {
            // Manejando errores inesperados
            alert('Ocurrió un error inesperado. Por favor, intenta nuevamente.'); // TODO: modal
            console.error(error);
        }
    };

    return(
        <div className="min-h-screen bg-[#ffffff] px-4 sm:px-6 lg:px-8 overflow-hidden h-screen">
            <div className="max-w-md mx-auto sm:max-w-lg lg:max-w-2xl py-8">
                <header className={styles.header}>
                    <div className={styles.headerLogo}>
                        <Image
                            className={styles.logoAfood}
                            src="/branding/logo-afood.svg"
                            alt="Logo de afood"
                            width={125}
                            height={36}
                            priority
                            quality={98}
                        />
                    </div>
                </header>

                <main className={styles.main}>
                    <div className={styles.mainBanner}>
                        <div className={styles.bannerImageContainer}>
                            <Image
                                className={styles.bannerImage}
                                src="/banners/login-people-hd.svg"
                                alt="Banner login"
                                width={383}
                                height={480}
                                priority
                                quality={98}
                            />
                        </div>
                        <div className={styles.circleDesign}></div>
                    </div>
                    <div className={styles.modalCardContainer}>
                        <div className={styles.containerMainInfo}>
                            <h1>¡Bienvenido a tu<br />huerto digital!</h1>
                            <h3>Consulta tus compras, saldos y más...</h3>
                            <div className={styles.wrapperInput}>
                                <h2>NIT</h2>
                                <input
                                    name="customerNit"
                                    value={form.customerNit}
                                    onChange={handleChangeNit}
                                    placeholder={'Ej: 999888222'}
                                    type="number"
                                />
                            </div>
                            <label className="flex items-center gap-2 cursor-pointer self-start">
                                <input type="checkbox" className="w-4 h-4 cursor-pointer accent-[#46BF55] focus:outline-none" />
                                <span className="text-base text-gray-700">Recuérdame</span>
                            </label>
                            <button onClick={handleLogin}>INGRESAR</button>
                        </div>
                    </div>
                </main>
            </div>
            {/* Componente loader */}
            {isLoading && <Loader/>}
        </div>
    );
}