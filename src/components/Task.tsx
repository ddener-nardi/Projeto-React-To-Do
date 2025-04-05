import { Task } from "./TasksWrapper";
import {  Trash  } from "@phosphor-icons/react";
import styles from "./Task.module.css";
import { ChangeEvent, useState } from "react";

interface TaskProps {
    task: Task;
    onDeleteTask: (task: Task) => void;
    onChangeTask: (task: Task) => void;
}



export function TaskToDo({task, onDeleteTask, onChangeTask}:TaskProps){

    const [ check, setCheck ] = useState(task.isDone);
    // const [ newCheck, setNewCheck] = useState(false); 

    const handleDeleteComment = () => {
        
        onDeleteTask(task);
        onChangeTask(task);
    }


    const handleChangeCheck = (event: ChangeEvent<HTMLInputElement>) => {
        task.isDone = event.target.checked;
        setCheck(event.target.checked);
        console.log(task);
        onChangeTask(task);
    }

    return (
        <div className={styles.task}>
            <div className={styles.description}>
                <input className={styles.rounded__Checkbox} type="checkbox" onChange={handleChangeCheck} checked={check}/>
                <p className={ task.isDone ? styles.task_paragraphDone : styles.task_paragraph }>{task.content}</p>
            </div>
            <button onClick={handleDeleteComment}>
                <Trash size={20}></Trash>
            </button>                    
        </div>
    );
}