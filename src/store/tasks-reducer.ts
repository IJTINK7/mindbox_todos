import {v1} from 'uuid';

export type TaskType = {
	id: string
	title: string
	isDone: boolean
}

const initialState: TaskType[] = [
	{id: v1(), title: "Тестовое задание", isDone: true},
	{id: v1(), title: "Прекрасный код", isDone: false},
	{id: v1(), title: "Покрытие тестами", isDone: true}
]

export type AddTaskActionType = ReturnType<typeof addTaskActionCreator>
export type ChangeTaskStatusActionType = ReturnType<typeof changeTaskStatusActionCreator>
type ActionsType = AddTaskActionType | ChangeTaskStatusActionType

export const tasksReducer = (state: TaskType[] = initialState, action: ActionsType): TaskType[] => {
	switch (action.type) {
		case 'ADD-TASK':
			return [...state, {id: v1(), title: action.title, isDone: false}]

		case 'CHANGE-TASK-STATUS': {
			return state.map(el=> el.id === action.taskId ? {...el, isDone: !action.isDone}: el)
		}
		default:
			return state;
	}
}

export const addTaskActionCreator = (title: string) => {
	return {type: 'ADD-TASK', title} as const
}
export const changeTaskStatusActionCreator = (taskId: string, isDone: boolean) => {
	return {type: 'CHANGE-TASK-STATUS', isDone, taskId} as const
}


