import {ChangeEvent, KeyboardEvent} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addTaskActionCreator, addTaskTitleActionCreator} from "../store/todolist-reducer.ts";
import {AppRootStateType} from "../store/store.ts";

export const TodolistInput= () => {
	const taskTitleInputValue = useSelector<AppRootStateType, string>(state => state.todolist.taskTitleInputValue)
	const dispatch = useDispatch()

	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		dispatch(addTaskTitleActionCreator(e.currentTarget.value))
	}

	const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter") {
			dispatch(addTaskTitleActionCreator(""))
			dispatch(addTaskActionCreator(e.currentTarget.value))
		}
	}

	return (
		<div style={{margin: "0 auto"}}>
			<input value={taskTitleInputValue} onChange={onChangeHandler} onKeyDown={onKeyDownHandler}/>
		</div>
	);
};
