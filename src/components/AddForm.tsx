import { PlusCircle } from "@phosphor-icons/react";
import { tasks as allTasks, Task } from "./TasksWrapper"
import styles from "./AddForm.module.css";
import { ChangeEvent, FormEvent, useState } from "react";

export function AddForm(){

    const [ task, setTask ] = useState<Task[]>(allTasks)

    const [ newTaskContent, setNewTaskContent ] = useState<string>('')

    const handleSubmitTask = (event: FormEvent) => {
        event.preventDefault();

        var newTask:Task = {
            id: task.length + 1,
            content: newTaskContent,
            isDone: false,
        }

        setTask([ ...task, newTask ]);
        setNewTaskContent('');
    }

    const handleChangeNewTask = (event: ChangeEvent<HTMLInputElement>) => {
        
        event.target.setCustomValidity('');
        setNewTaskContent(event.target.value);
    }

    return (
        <div className={styles.form__Wrapper}>
            <form onSubmit={handleSubmitTask}>
                <input type="text" onChange={handleChangeNewTask} placeholder="Adicione uma nova tarefa" className={styles.form_input}/>
                <button type="submit" className={styles.form_button}>
                    Criar
                    <PlusCircle size={16}></PlusCircle>
                </button>
            </form>
        </div>
    );
}