import styles from "./AlertModal.module.css";
import Image from "next/image";

export function AlertModal({ isOpen, onClose, srcImage, title, message, hasMessageList = false }) {

    if (!isOpen) return null;

    // TODO: crear estilos para la lista (ol) en el render condicional con el ternario

    return (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-md backdrop-saturate-150 flex items-center justify-center p-0 md:p-6 lg:p-8 z-50 overflow-hidden">
            <div className="w-full max-w-full min-w-[300px] max-h-[85vh] min-h-[300px] rounded-[5rem] md:max-w-[600px] md:max-h-[80vh] md:min-h-[350px] lg:max-w-[700px] lg:max-h-[75vh] lg:min-h-[300px] bg-[#f0f0f0] md:rounded-[3.5rem] shadow-[0_4px_13px_0_rgba(0,0,0,0.75)] flex flex-col justify-center items-center overflow-hidden py-14">
                <div className={styles.contentWrapper}>
                    <div className={styles.imageContainer}>
                        <Image
                            className={styles.iconImage}
                            src={srcImage}
                            alt={'Ícono del mensaje'}
                            fill
                        />
                    </div>
                    <div className={styles.title}>{title}</div>
                    <div className={styles.message}>
                        {hasMessageList
                            ? 'True'
                            : message
                        }
                    </div>
                    <div className={styles.buttonContainer}>
                        <button onClick={onClose}>Aceptar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}