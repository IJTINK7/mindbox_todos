import {changeTaskStatusActionCreator, FilterType, TaskType} from "../store/todolist-reducer.ts";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../store/store.ts";


export const TasksBar = () => {
	const tasks = useSelector<AppRootStateType, TaskType[]>(state => state.todolist.tasksData)
	const filter = useSelector<AppRootStateType, FilterType>(state => state.todolist.filter)
	const dispatch = useDispatch()
	const onChangeTaskStatusHandler = (taskId: string, isDone: boolean) => {
		dispatch(changeTaskStatusActionCreator(taskId, isDone))
	}
	const filteredTasks = tasks.filter(task => {
		if (filter === 'active') {
			return !task.isDone;
		}
		if (filter === 'completed') {
			return task.isDone;
		}
		return true
	});

	return (
		<div style={{margin: "0 auto"}}>
			{filteredTasks.map(el => {
				return (
					<ul key={el.id}>
						<li><input type='checkbox' checked={el.isDone} onChange={() => onChangeTaskStatusHandler(el.id, el.isDone)}/><span>{el.title}</span>
						</li>
					</ul>
				)
			})}
		</div>
	);
};