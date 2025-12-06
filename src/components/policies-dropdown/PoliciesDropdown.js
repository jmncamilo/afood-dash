import styles from "./PoliciesDropdown.module.css";
import { EyeIcon, EyeClosed } from "lucide-react";
import { useState } from "react";

export function PoliciesDropdown({ title, text, list = null }) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className={styles.mainWrapper}>
                <span className={styles.titleWrapper}>
                    <h3 className={styles.titleStyle}>{title}</h3>
                </span>
            <div className={`${styles.textWrapper} ${isExpanded ? styles.textWrapperExpanded : ''}`}>
                <p className={styles.textStyle}>
                    {text}
                </p>
                <ol className="list-decimal pl-5 pt-3 marker:font-[500] marker:text-[#2d7351]">
                    {!!list?.length && (
                        list.map(item => <li className={'py-1'} key={item.id}>{item.content}</li>)
                    )}
                </ol>
            </div>
            <div className={styles.iconWrapper} onClick={() => setIsExpanded(prev => !prev)}>
                {
                    isExpanded
                        ? <EyeClosed color={'#f0f0f0'} className="w-2/3 h-auto"/>
                        : <EyeIcon color={'#f0f0f0'} className="w-2/3 h-auto"/>
                }
            </div>
        </div>
    );
}