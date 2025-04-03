import {  Trash  } from "@phosphor-icons/react";
import styles from "./Task.module.css";

export function Task(){
    return (
        <div className={styles.task}>
            <div>
                <input className={styles.rounded__Checkbox} type="checkbox" />
            </div>
            <p className={styles.task_paragraph}>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
            <button>
                <Trash size={20}></Trash>
            </button>
        </div>
    );
}