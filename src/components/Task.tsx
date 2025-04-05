import { Task } from "./TasksWrapper";
import {  Trash  } from "@phosphor-icons/react";
import styles from "./Task.module.css";

interface TaskProps {
    task: Task;
    onDeleteTask: (task: Task) => void;
}



export function TaskToDo({task, onDeleteTask}:TaskProps){

    const handleDeleteComment = () => {
        onDeleteTask(task);
    }

    const handleDoneTask = () => {
        task.isDone = true;
    }

    return (
        <div className={styles.task}>

            { task.isDone ? (
                
                    <>
                        <div className={styles.description}>
                            <input className={styles.rounded__Checkbox} type="checkbox" onChange={handleDoneTask}/>
                            <p className={styles.task_paragraphDone}>{task.content}</p>
                        </div>
                        <button onClick={handleDeleteComment}>
                            <Trash size={20}></Trash>
                        </button>                    
                    </>
                

            ) : (

                <>
                    <div className={styles.description}>
                        <input className={styles.rounded__Checkbox} type="checkbox" onChange={handleDoneTask}/>
                        <p className={styles.task_paragraph}>{task.content}</p>
                    </div>
                    <button onClick={handleDeleteComment}>
                        <Trash size={20}></Trash>
                    </button>
                </>
            )}
        </div>
    );
}