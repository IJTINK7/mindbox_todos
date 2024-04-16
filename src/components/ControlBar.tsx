import styles from "./ControlBar.module.css"
import {useDispatch, useSelector} from "react-redux";
import {
	changeFilterActionCreator,
	clearCompletedTasksActionCreator, countActiveTasksActionCreator,
	FilterType
} from "../store/todolist-reducer.ts";
import {AppRootStateType} from "../store/store.ts";

export const ControlBar = () => {
	const activeTasksCount = useSelector<AppRootStateType, number>(state => state.todolist.activeItemsCount)
	const dispatch = useDispatch()


	const changeFilterHandler = (filterValue: FilterType) => {
		dispatch(changeFilterActionCreator(filterValue))
	}
	const clearCompletedTasksHandler = () => {
		dispatch(clearCompletedTasksActionCreator())
		dispatch(countActiveTasksActionCreator())
	}
	return (
		<div className={styles.controlBar}>
			<div style={{fontSize: "26px"}}>{activeTasksCount} item(s) left</div>
			<div style={{gap: "20px", display: "flex"}}>
				<button onClick={() => changeFilterHandler("all")}>All</button>
				<button onClick={() => changeFilterHandler("active")}>Active</button>
				<button onClick={() => changeFilterHandler("completed")}>Completed</button>
			</div>
			<div>
				<button onClick={clearCompletedTasksHandler} style={{fontSize: "14px"}}>Clear completed</button>
			</div>
		</div>
	);
};