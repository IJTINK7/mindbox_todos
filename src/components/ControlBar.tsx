import {useState} from "react";
import styles from "./ControlBar.module.css"
import {useDispatch} from "react-redux";
import {changeFilterActionCreator, clearCompletedTasksActionCreator, FilterType} from "../store/todolist-reducer.ts";

export const ControlBar = () => {
	const dispatch = useDispatch()
	const [leftItemsCount, setLeftItemsCount] = useState<number>(0)

	const changeFilterHandler = (filterValue: FilterType) => {
		dispatch(changeFilterActionCreator(filterValue))
		setLeftItemsCount(1)
	}
	const clearCompletedTasksHandler = () => {
		dispatch(clearCompletedTasksActionCreator())
	}
	return (
		<div className={styles.controlBar}>
			<div>{leftItemsCount} item(s) left</div>
			<div style={{gap: "20px", display: "flex"}}>
				<button onClick={() => changeFilterHandler("all")}>All</button>
				<button onClick={() => changeFilterHandler("active")}>Active</button>
				<button onClick={() => changeFilterHandler("completed")}>Completed</button>
			</div>
			<div>
				<button onClick={clearCompletedTasksHandler}>Clear completed</button>
			</div>
		</div>
	);
};