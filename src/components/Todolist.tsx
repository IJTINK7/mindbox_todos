import {useState} from 'react';
import {TodolistInput} from "./TodolistInput.tsx";

export const Todolist = () => {
	const [tasks, setTasks] = useState(["Тестовое задание", "Прекрасный код", "Покрытие тестами"])
	const [todolistTitle, setTodolistTitle] = useState<string>("")
	const addTask = (value: string) => {
		setTasks([...tasks,value])
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
				return <div>{el}</div>
			})}
		</div>
	);
};