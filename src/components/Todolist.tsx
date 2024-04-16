import {useState} from 'react';
import {TodolistInput} from "./TodolistInput.tsx";
import {ControlBar} from "./ControlBar.tsx";
import styles from "./Todolist.module.css"
import {TasksBar} from "./Tasks.tsx";


export type FilterType = "all" | "active" | "completed"

export const Todolist = () => {
	const [filter, setFilter] = useState<FilterType>("all")

	const [todolistTitle, setTodolistTitle] = useState<string>("")


	const changeFilter = (filterValue: FilterType) => {
		setFilter(filterValue)
	}


	return (
		<div className={styles.todolist}>
			<TodolistInput setInputValue={setTodolistTitle} value={todolistTitle}/>
			<TasksBar />
			<ControlBar changeFilter={changeFilter}/>
			<div style={{margin: "0 auto"}}>{filter}</div>
		</div>
	);
};