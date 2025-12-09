import styles from "./AlertModal.module.css";
import Image from "next/image";

export function AlertModal({ isOpen }) {

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-md backdrop-saturate-150 flex items-center justify-center p-0 md:p-6 lg:p-8 z-50 overflow-hidden">
            <div className="w-full max-w-full min-w-[300px] max-h-[85vh] min-h-[300px] rounded-[5rem] md:max-w-[600px] md:max-h-[80vh] md:min-h-[350px] lg:max-w-[700px] lg:max-h-[75vh] lg:min-h-[300px] bg-[#f0f0f0] md:rounded-[3.5rem] shadow-[0_4px_13px_0_rgba(0,0,0,0.75)] flex flex-col justify-center items-center overflow-hidden py-14">
                <div className={styles.contentWrapper}>
                    <div className={styles.imageContainer}>
                        {/*<Image/>*/}
                    </div>
                    <div className={styles.title}></div>
                    <div className={styles.message}></div>
                    <div className={styles.buttonContainer}>
                        <button>Aceptar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}