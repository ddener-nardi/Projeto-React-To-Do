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
        isDone: false,
        isDeleted: false
    }
]

export function TasksWrapper(){
    const [ task, setTask ] = useState<Task[]>(tasks);

    const [ newTaskContent, setNewTaskContent ] = useState<string>('');

    const [ taskChecked, setTaskChecked ] = useState(0);


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
        console.log(task);
    }

    const deleteTask = (taskToDelete: Task) => {
        taskToDelete.isDeleted = true;
        console.log(task);
        const tasksWithoutDelete = task.filter(task => {
            return task.isDeleted != true;
        })

        setTask(tasksWithoutDelete)
    }

    const isCommentValueInvalid = (event:InvalidEvent<HTMLInputElement>) => {
        event.target.setCustomValidity('Este valor é inválido!')
    }

    const isEmpty = newTaskContent.length === 0;

    const changeTask = (taskDone: Task) => {
        if(taskDone.isDone && !taskDone.isDeleted) {
            setTaskChecked((state)=> {
                return state + 1;
            });
        } 
        if (taskDone.isDone && taskDone.isDeleted)
        {
            setTaskChecked((state)=> {
                return state - 1;
            });
        }
        if(!taskDone.isDone){
            setTaskChecked((state)=> {
                return state - 1;
            });
        }
    }

    const orderedTask = [...task].sort((a, b) => {
        return  Number((a.isDone === true)) - Number((b.isDone === true));
    })

    const doneTask = task.filter(innerTask => innerTask.isDone === true);

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
                    Concluídas <span>
                        {
                            doneTask.length
                        } de {task.length}</span>
                </div>
            </header>
            <div className={styles.tasks__Container}>
                {
                    orderedTask.map((taskInner) => {
                        return(
                            <TaskToDo 
                                key={taskInner.id}
                                task={taskInner}
                                onDeleteTask={deleteTask}
                                onChangeTask={changeTask}
                            />
                        )
                    })
                }
            </div>
        </div>
        </>
    );
}