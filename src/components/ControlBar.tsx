import {useState} from "react";
import styles from "./ControlBar.module.css"
import {useDispatch} from "react-redux";
import {changeFilterActionCreator, FilterType} from "../store/todolist-reducer.ts";

export const ControlBar = () => {
	const dispatch = useDispatch()
	const [leftItemsCount, setLeftItemsCount] = useState<number>(0)

	const onAllClickHandler = (filterValue: FilterType) => {
		dispatch(changeFilterActionCreator(filterValue))

	}
	const onActiveClickHandler = (filterValue: FilterType) => {
		dispatch(changeFilterActionCreator(filterValue))
	}
	const onCompletedClickHandler = (filterValue: FilterType) => {
		dispatch(changeFilterActionCreator(filterValue))
	}
	const clearCompletedTasksHandler = () => {
		console.log("Completed tasks were cleared")
		setLeftItemsCount(123)
	}
	return (
		<div className={styles.controlBar}>
			<div>{leftItemsCount} item(s) left</div>
			<div style={{gap: "20px", display: "flex"}}>
				<button onClick={() => onAllClickHandler("all")}>All</button>
				<button onClick={() => onActiveClickHandler("active")}>Active</button>
				<button onClick={() => onCompletedClickHandler("completed")}>Completed</button>
			</div>
			<div>
				<button onClick={clearCompletedTasksHandler}>Clear completed</button>
			</div>
		</div>
	);
};