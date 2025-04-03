import { PlusCircle } from "@phosphor-icons/react";
import styles from "./AddForm.module.css";

export function AddForm(){
    return (
        <div className={styles.form__Wrapper}>
            <form>
                <input type="text" placeholder="Adicione uma nova tarefa" className={styles.form_input}/>
                <button className={styles.form_button}>
                    Criar
                    <PlusCircle size={16}></PlusCircle>
                </button>
            </form>
        </div>
    );
}