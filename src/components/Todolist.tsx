import {TodolistInput} from "./TodolistInput.tsx";
import {ControlBar} from "./ControlBar.tsx";
import styles from "./Todolist.module.css"
import {TasksBar} from "./TasksBar.tsx";

export const Todolist = () => {

	return (
		<div className={styles.todolist}>
			<TodolistInput/>
			<TasksBar/>
			<ControlBar/>
		</div>
	);
};