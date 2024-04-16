import {useState} from 'react';
import {TodolistInput} from "./TodolistInput.tsx";
import {ControlBar} from "./ControlBar.tsx";
import {v1} from "uuid";
import styles from "./Todolist.module.css"
import {TasksBar} from "./Tasks";

export type FilterType = "all" | "active" | "completed"
export type TaskType = {
	id: string
	title: string
	isDone: boolean
}

export const Todolist = () => {
	const [tasks, setTasks] = useState<TaskType[]>([
		{id: v1(), title: "Тестовое задание", isDone: true},
		{id: v1(), title: "Прекрасный код", isDone: false},
		{id: v1(), title: "Покрытие тестами", isDone: true}]
	)
	const [filter, setFilter] = useState<FilterType>("all")

	const [todolistTitle, setTodolistTitle] = useState<string>("")

	const addTask = (value: string) => {
		setTasks([...tasks, {id: v1(), title: value, isDone: false}])
	}
	const changeFilter = (filterValue: FilterType) => {
		setFilter(filterValue)
	}

	const keyDownForAddWishlist = (key: string) => {
		key === 'Enter' && addTask(todolistTitle)
	}

	return (
		<div className={styles.todolist}>
			<TodolistInput setInputValue={setTodolistTitle} value={todolistTitle} onKeyDownCallBack={(e) => {
				keyDownForAddWishlist(e)
			}}/>
			<TasksBar tasks={tasks}/>
			<ControlBar changeFilter={changeFilter}/>
			<div style={{margin: "0 auto"}}>{filter}</div>
		</div>
	);
};