import {v1} from 'uuid';

export type FilterType = "all" | "active" | "completed"
export type TodolistType = {
	taskTitleInputValue: string
	tasksData: TaskType[]
	activeItemsCount: number
	filter: FilterType
}
export type TaskType = {
	id: string
	title: string
	isDone: boolean
}

const initialState: TodolistType = {
	taskTitleInputValue: "",
	tasksData: [
		{id: v1(), title: "Тестовое задание", isDone: false},
		{id: v1(), title: "Прекрасный код", isDone: true},
		{id: v1(), title: "Покрытие тестами", isDone: false}],
	activeItemsCount: 2,
	filter: "all"
}

export type ChangeTaskTitleActionType = ReturnType<typeof changeTaskTitleActionCreator>
export type AddTaskActionType = ReturnType<typeof addTaskActionCreator>
export type ChangeTaskStatusActionType = ReturnType<typeof changeTaskStatusActionCreator>
export type CountActiveTasksActionCreator = ReturnType<typeof countActiveTasksActionCreator>
export type ChangeFilterActionType = ReturnType<typeof changeFilterActionCreator>
export type ClearCompletedTasksActionType = ReturnType<typeof clearCompletedTasksActionCreator>

type ActionsType =
	ChangeTaskTitleActionType
	| AddTaskActionType
	| ChangeTaskStatusActionType
	| CountActiveTasksActionCreator
	| ChangeFilterActionType
	| ClearCompletedTasksActionType


export const todolistReducer = (state: TodolistType = initialState, action: ActionsType): TodolistType => {
	switch (action.type) {
		case 'CHANGE-TASK-TITLE': {
			return {...state, taskTitleInputValue: action.taskTitle}
		}
		case 'ADD-TASK':
			return {
				...state,
				tasksData: [...state.tasksData, {id: v1(), title: action.title, isDone: false}],
				activeItemsCount: state.activeItemsCount + 1
			}
		case 'CHANGE-TASK-STATUS': {
			const updatedTasks = state.tasksData.map(el => el.id === action.taskId ? {
				...el,
				isDone: !action.isDone
			} : el)
			const activeTasksCount = updatedTasks.filter((el) => !el.isDone).length;
			return {
				...state,
				tasksData: updatedTasks,
				activeItemsCount: activeTasksCount
			}
		}
		case "COUNT-ACTIVE-TASKS": {
			return {...state, activeItemsCount: state.tasksData.filter(el => !el.isDone).length}
		}
		case 'CHANGE-FILTER': {
			return {...state, filter: action.filter}
		}
		case "CLEAR-COMPLETED-TASKS": {
			return {...state, tasksData: state.tasksData.filter(el => !el.isDone)}
		}
		default:
			return state;
	}
}

export const changeTaskTitleActionCreator = (taskTitle: string) => {
	return {type: 'CHANGE-TASK-TITLE', taskTitle} as const
}
export const addTaskActionCreator = (title: string) => {
	return {type: 'ADD-TASK', title} as const
}
export const changeTaskStatusActionCreator = (taskId: string, isDone: boolean) => {
	return {type: 'CHANGE-TASK-STATUS', isDone, taskId} as const
}
export const countActiveTasksActionCreator = () => {
	return {type: 'COUNT-ACTIVE-TASKS'} as const
}
export const changeFilterActionCreator = (filter: FilterType) => {
	return {type: 'CHANGE-FILTER', filter} as const
}
export const clearCompletedTasksActionCreator = () => {
	return {type: 'CLEAR-COMPLETED-TASKS'} as const
}


