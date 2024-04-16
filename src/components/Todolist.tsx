import {useState} from 'react';
import {TodolistInput} from "./TodolistInput.tsx";
import {ControlBar} from "./ControlBar.tsx";
import styles from "./Todolist.module.css"
import {TasksBar} from "./TasksBar.tsx";

export const Todolist = () => {
	const [todolistTitle, setTodolistTitle] = useState<string>("")

	return (
		<div className={styles.todolist}>
			<TodolistInput setInputValue={setTodolistTitle} value={todolistTitle}/>
			<TasksBar/>
			<ControlBar/>
		</div>
	);
};