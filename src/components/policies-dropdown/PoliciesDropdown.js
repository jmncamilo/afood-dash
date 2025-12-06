import styles from "./PoliciesDropdown.module.css";
import { EyeIcon, EyeClosed } from "lucide-react";
import { useState } from "react";

export function PoliciesDropdown({ title, text, list }) {
    const [isExpanded, setIsExpanded] = useState(false);
    // TODO: ubicar las props correctamente e iterar con map (array de objetos con información de las políticas) en caso de que se requiera una lista ordenada
    return (
            <div className={styles.mainWrapper}>
                <span className={styles.titleWrapper}>
                    <h3 className={styles.titleStyle}>Términos de xxxxx</h3>
                </span>
                <div className={`${styles.textWrapper} ${isExpanded ? styles.textWrapperExpanded : ''}`}>
                    <p className={styles.textStyle}>
                        To post a song go to My Songs section and click a Post button, located on the bottom of your screen.
                        To post a song go to My Songs section and click a Post button, located on the bottom of your screen.
                        To post a song go to My Songs section and click a Post button, located on the bottom of your screen.
                        To post a song go to My Songs section and click a Post button, located on the bottom of your screen.
                        To post a song go to My Songs section and click a Post button, located on the bottom of your screen.
                        To post a song go to My Songs section and click a Post button, located on the bottom of your screen.
                    </p>
                     <ol className="list-decimal pl-5 pt-3 marker:font-[500] marker:text-[#2d7351]">
                        <li>To post a song go to My Songs section and click a Post button, located on the bottom of your screen.</li>
                        <li>To post a song go to My Songs section and click a Post button, located on the bottom of your screen.</li>
                        <li>To post a song go to My Songs section and click a Post button, located on the bottom of your screen.</li>
                        <li>To post a song go to My Songs section and click a Post button, located on the bottom of your screen.</li>
                        <li>To post a song go to My Songs section and click a Post button, located on the bottom of your screen.</li>
                        <li>To post a song go to My Songs section and click a Post button, located on the bottom of your screen.</li>
                    </ol>
                </div>
                <div className={styles.iconWrapper} onClick={() => setIsExpanded(prev => !prev)}>
                    {
                        isExpanded
                            ? <EyeClosed color={'#f0f0f0'} className="w-2/3 h-auto" />
                            : <EyeIcon color={'#f0f0f0'} className="w-2/3 h-auto"/>
                    }
                </div>
            </div>
    );
}