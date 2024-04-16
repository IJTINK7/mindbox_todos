import React from "react";

import {TaskType} from "./Todolist";


export type TasksBarType = {
	tasks: TaskType[]
}

export const TasksBar: React.FC<TasksBarType> = ({tasks}) => {

	return (
		<div style={{margin: "0 auto"}}>
			{tasks.map(el => {
				return (
					<ul key={el.id}>
						<li><input type='checkbox' checked={el.isDone}/><span>{el.title}</span></li>
					</ul>
				)
			})}
		</div>
	);
};