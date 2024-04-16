import {useState} from 'react';
import {TodolistInput} from "./TodolistInput.tsx";
import {ControlBar} from "./ControlBar.tsx";
import {v1} from "uuid";

export type FilterType = "all" | "active" | "completed"

export const Todolist = () => {
	const [tasks, setTasks] = useState([
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
		<div>
			<TodolistInput setInputValue={setTodolistTitle} value={todolistTitle} onKeyDownCallBack={(e) => {
				keyDownForAddWishlist(e)
			}}/>
			{tasks.map(el => {
				return <div>{el.title}</div>
			})}
			<ControlBar changeFilter={changeFilter}/>
			{filter}


		</div>
	);
};