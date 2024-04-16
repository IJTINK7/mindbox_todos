import {v1} from 'uuid';

export type FilterType = "all" | "active" | "completed"
export type TodolistType = {
	tasksData: TaskType[]
	filter: FilterType
	taskTitleInputValue: string
}
export type TaskType = {
	id: string
	title: string
	isDone: boolean
}

const initialState: TodolistType = {
	tasksData: [
		{id: v1(), title: "Тестовое задание", isDone: true},
		{id: v1(), title: "Прекрасный код", isDone: false},
		{id: v1(), title: "Покрытие тестами", isDone: true}],
	filter: "all",
	taskTitleInputValue: ""
}

export type AddTaskActionType = ReturnType<typeof addTaskActionCreator>
export type ChangeTaskStatusActionType = ReturnType<typeof changeTaskStatusActionCreator>
export type ChangeFilterActionType = ReturnType<typeof changeFilterActionCreator>
export type AddTaskTitleActionType = ReturnType<typeof addTaskTitleActionCreator>

type ActionsType = AddTaskActionType | ChangeTaskStatusActionType | ChangeFilterActionType | AddTaskTitleActionType

export const todolistReducer = (state: TodolistType = initialState, action: ActionsType): TodolistType => {
	switch (action.type) {
		case 'ADD-TASK':
			return {...state, tasksData: [...state.tasksData, {id: v1(), title: action.title, isDone: false}]}

		case 'CHANGE-TASK-STATUS': {
			return {
				...state,
				tasksData: state.tasksData.map(el => el.id === action.taskId ? {...el, isDone: !action.isDone} : el)
			}
		}
		case 'CHANGE-FILTER': {
			return {...state, filter: action.filter}
		}
		case 'ADD-TASK-TITLE': {
			return {...state, taskTitleInputValue: action.taskTitle}
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
export const changeFilterActionCreator = (filter: FilterType) => {
	return {type: 'CHANGE-FILTER', filter} as const
}
export const addTaskTitleActionCreator = (taskTitle: string) => {
	return {type: 'ADD-TASK-TITLE', taskTitle} as const
}

