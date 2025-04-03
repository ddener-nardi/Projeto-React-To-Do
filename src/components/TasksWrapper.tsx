import { Task } from "./Task";
import styles from "./TasksWrapper.module.css";


export function TasksWrapper(){
    return (
        <div className={styles.tasks__Wrapper}>
            <header>
                <div 
                    className={styles.created_tasks}
                >
                    Tarefas criadas <span>0</span>
                </div>
                <div
                    className={styles.conclude_tasks}
                >
                    Concluídas <span>2 de 5</span>
                </div>
            </header>
            <div className={styles.tasks__Container}>
                <Task></Task>
                <Task></Task>
                <Task></Task>
                <Task></Task>
                <Task></Task>
            </div>
        </div>
    );
}