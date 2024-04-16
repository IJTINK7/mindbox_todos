import {combineReducers, legacy_createStore} from 'redux';
import {todolistReducer} from "./todolist-reducer.ts";

const rootReducer = combineReducers({
	todolist: todolistReducer,
});
export type AppRootStateType = ReturnType<typeof rootReducer>;

export const store = legacy_createStore(rootReducer);

