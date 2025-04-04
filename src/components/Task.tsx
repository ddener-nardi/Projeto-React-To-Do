import { Task } from "./TasksWrapper";
import {  Trash  } from "@phosphor-icons/react";
import styles from "./Task.module.css";

interface TaskProps {
    task: Task;
}



export function TaskToDo({task}:TaskProps){
    return (
        <div className={styles.task}>
            <div className={styles.description}>
                <input className={styles.rounded__Checkbox} type="checkbox" />
                <p className={styles.task_paragraph}>{task.content}</p>
            </div>
            <button>
                <Trash size={20}></Trash>
            </button>
        </div>
    );
}