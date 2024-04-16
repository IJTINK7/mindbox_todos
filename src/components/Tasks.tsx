import {changeTaskStatusActionCreator, TaskType} from "../store/tasks-reducer.ts";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../store/store.ts";


export const TasksBar = () => {
	const tasks = useSelector<AppRootStateType, TaskType[]>(state => state.tasks)
	const dispatch = useDispatch()
	const onChangeTaskStatusHandler = (taskId: string, isDone: boolean) => {
		dispatch(changeTaskStatusActionCreator(taskId, isDone))
	}
	return (
		<div style={{margin: "0 auto"}}>
			{tasks.map(el => {
				return (
					<ul key={el.id}>
						<li><input type='checkbox' checked={el.isDone} onChange={()=>onChangeTaskStatusHandler(el.id, el.isDone)}/><span>{el.title}</span></li>
					</ul>
				)
			})}
		</div>
	);
};