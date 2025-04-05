import { TaskToDo } from "./Task";
import { PlusCircle } from "@phosphor-icons/react";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import styles from "./TasksWrapper.module.css";

export interface Task {
    id: number;
    content: string;
    isDone: boolean;
    isDeleted: boolean;
}

export const tasks: Task[] = [
    {
        id:1,
        content: "Aula de ReactJs",
        isDone: false,
        isDeleted: false,
    },
    {
        id: 2,
        content: "Aula de NodeJs",
        isDone: false,
        isDeleted: false
    },
    {
        id: 3,
        content: "Aula de Banco de Dados",
        isDone: true,
        isDeleted: false
    }
]

export function TasksWrapper(){
    const [ task, setTask ] = useState<Task[]>(tasks)

    const [ newTaskContent, setNewTaskContent ] = useState<string>('')

    const handleSubmitTask = (event: FormEvent) => {
        event.preventDefault();

        var newTask:Task = {
            id: task.length + 1,
            content: newTaskContent,
            isDone: false,
            isDeleted: false
        }

        setTask([ ...task, newTask ]);
        setNewTaskContent('');
    }

    const handleChangeNewTask = (event: ChangeEvent<HTMLInputElement>) => {
        
        event.target.setCustomValidity('');
        setNewTaskContent(event.target.value);
    }

    const deleteTask = (taskToDelete: Task) => {
        taskToDelete.isDeleted = true;
        const tasksWithoutDelete = tasks.filter(task => {
            return task.isDeleted != true;
        })

        

        setTask(tasksWithoutDelete)
    }

    const isCommentValueInvalid = (event:InvalidEvent<HTMLInputElement>) => {
        event.target.setCustomValidity('Este valor é inválido!')
    }

    const isEmpty = newTaskContent.length === 0;
    return (
        <>
        <div className={styles.form__Wrapper}>
            <form onSubmit={handleSubmitTask}>
                <input type="text" 
                    onChange={handleChangeNewTask}
                    onInvalid={isCommentValueInvalid}
                    value={newTaskContent}
                    placeholder="Adicione uma nova tarefa" 
                    className={styles.form_input}
                    required
                />
                <button type="submit" disabled={isEmpty} className={styles.form_button}>
                    Criar
                    <PlusCircle size={16}></PlusCircle>
                </button>
            </form>
        </div>
        <div className={styles.tasks__Wrapper}>
            <header>
                <div 
                    className={styles.created_tasks}
                >
                    Tarefas criadas <span>{task.length}</span>
                </div>
                <div
                    className={styles.conclude_tasks}
                >
                    Concluídas <span>2 de {task.length}</span>
                </div>
            </header>
            <div className={styles.tasks__Container}>
                {
                    task.map((taskInner) => {
                        return(
                            <TaskToDo 
                                key={taskInner.id}
                                task={taskInner}
                                onDeleteTask={deleteTask}
                            />
                        )
                    })
                }
            </div>
        </div>
        </>
    );
}