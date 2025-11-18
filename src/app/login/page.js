import styles from "./Login.module.css";
import Image from "next/image";

export default function Login() {

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
                            height={36} priority
                            quality={95}
                        />
                    </div>
                </header>

                <main className={styles.main}>
                    <div className={styles.mainBanner}>
                        <div className={styles.bannerImageContainer}>
                            <Image
                                className={styles.bannerImage}
                                src="/banners/login-people.svg"
                                alt="Banner login"
                                width={383}
                                height={480} priority
                                quality={95}
                            />
                        </div>
                        <div className={styles.circleDesign}></div>
                    </div>
                    <div className={styles.modalCardContainer}>
                        <div className={styles.containerMainInfo}>
                            <h1>¡Bienvenido a tu<br />afood dash!</h1>
                            <h3>Consulta tus compras, saldos y más...</h3>
                            <div className={styles.wrapperInput}>
                                <h2>NIT</h2>
                                <input
                                    name="customerNit"
                                    placeholder={'Ej: 999888222'}
                                    type="number"
                                />
                            </div>
                            <label className="flex items-center gap-2 cursor-pointer self-start">
                                <input type="checkbox" className="w-4 h-4 cursor-pointer accent-[#46BF55]" />
                                <span className="text-base text-gray-700">Recuérdame</span>
                            </label>
                            <button>INGRESAR</button>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}