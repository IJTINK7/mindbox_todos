import React, {useState} from "react";
import {FilterType} from "./Todolist.tsx";
import styles from "./ControlBar.module.css"
export type ControlBarType = {
	changeFilter: (filterValue: FilterType)=> void
}

export const ControlBar: React.FC<ControlBarType> = ({changeFilter}) => {
	const [leftItemsCount, setLeftItemsCount] = useState<number>(0)

	const onAllClickHandler = (value:FilterType) => {
		changeFilter(value)
		setLeftItemsCount(1)
	}
	const onActiveClickHandler = (value:FilterType) => {
		changeFilter(value)
		setLeftItemsCount(2)
	}
	const onCompletedClickHandler = (value:FilterType) => {
		changeFilter(value)
		setLeftItemsCount(3)
	}
	const clearCompletedTasksHandler = () => {
		console.log("Completed tasks were cleared")
	}
	return (
		<div className={styles.controlBar}>
			<div>{leftItemsCount} item(s) left</div>
			<div style={{gap: "20px", display: "flex"}}>
				<button onClick={()=>onAllClickHandler("all")}>All</button>
				<button onClick={()=>onActiveClickHandler("active")}>Active</button>
				<button onClick={()=>onCompletedClickHandler("completed")}>Completed</button>
			</div>
			<div>
				<button onClick={clearCompletedTasksHandler}>Clear completed</button>
			</div>
		</div>
	);
};