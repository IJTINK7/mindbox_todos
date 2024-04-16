import {combineReducers, legacy_createStore} from 'redux';
import {tasksReducer} from "./tasks-reducer.ts";

const rootReducer = combineReducers({
	tasks: tasksReducer,
});
export type AppRootStateType = ReturnType<typeof rootReducer>;

export const store = legacy_createStore(rootReducer);

