import React, {ChangeEvent, KeyboardEvent} from 'react';

type TodolistInputType = {
	value: string
	setInputValue: (inputValue: string) => void
	onKeyDownCallBack: (key: string) => void
}

export const TodolistInput: React.FC<TodolistInputType> = ({value,setInputValue,onKeyDownCallBack}) => {

	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.currentTarget.value)
	}
	const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
		if(e.key === "Enter"){
			onKeyDownCallBack(e.key)
			setInputValue("")
		}
	}
	return (
		<div>
			<input value={value} onChange={onChangeHandler} onKeyDown={onKeyDownHandler}/>
		</div>
	);
};
