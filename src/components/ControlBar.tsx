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
	const filter = useSelector<AppRootStateType, FilterType>(state => state.todolist.filter)
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
			<div>{activeTasksCount} item(s) left</div>
			<div style={{gap: "20px", display: "flex"}}>
				<button className={filter === 'all' ? styles.activeFilter : ''} onClick={() => changeFilterHandler("all")}>All</button>
				<button className={filter === 'active' ? styles.activeFilter : ''} onClick={() => changeFilterHandler("active")}>Active</button>
				<button className={filter === 'completed' ? styles.activeFilter : ''} onClick={() => changeFilterHandler("completed")}>Completed</button>
			</div>
				<button onClick={clearCompletedTasksHandler}>Clear completed</button>
		</div>
	);
};