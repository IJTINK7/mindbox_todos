import React, {ChangeEvent, KeyboardEvent} from 'react';
import {useDispatch} from "react-redux";
import {addTaskActionCreator} from "../store/tasks-reducer.ts";

type TodolistInputType = {
	value: string
	setInputValue: (inputValue: string) => void
}

export const TodolistInput: React.FC<TodolistInputType> = ({value,setInputValue}) => {
	const dispatch = useDispatch()

	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.currentTarget.value)
	}
	const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
		if(e.key === "Enter"){
			setInputValue("")
			dispatch(addTaskActionCreator(e.currentTarget.value))
		}
	}
	return (
		<div style={{margin: "0 auto"}}>
			<input value={value} onChange={onChangeHandler} onKeyDown={onKeyDownHandler}/>
		</div>
	);
};
