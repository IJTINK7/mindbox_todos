import {
	changeTaskStatusActionCreator,
	countActiveTasksActionCreator,
	FilterType,
	TaskType
} from "../store/todolist-reducer.ts";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../store/store.ts";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import {Checkbox} from "@mui/material";


export const TasksBar = () => {
	const tasks = useSelector<AppRootStateType, TaskType[]>(state => state.todolist.tasksData)
	const filter = useSelector<AppRootStateType, FilterType>(state => state.todolist.filter)
	const dispatch = useDispatch()
	const onChangeTaskStatusHandler = (taskId: string, isDone: boolean) => {
		dispatch(changeTaskStatusActionCreator(taskId, isDone))
		dispatch(countActiveTasksActionCreator())
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
		<div>
			{filteredTasks.map(el => {
				return (
					<ul key={el.id}>
						<li style={el.isDone ? {opacity: 0.5, textDecoration: "line-through"} : {opacity: 1}}>
							<Checkbox icon={<RadioButtonUncheckedIcon fontSize="large"/>} checkedIcon={ <CheckCircleOutlinedIcon fontSize="large" color="success"/>}
								checked={el.isDone} onChange={() => onChangeTaskStatusHandler(el.id, el.isDone)}/>
							<span>{el.title}</span>
							<hr/>
						</li>
					</ul>
				)
			})}
		</div>
	);
};