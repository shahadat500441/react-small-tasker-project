import {useState} from "react"
import SearchTask from "./SearchTask";
import TaskActions from "./TaskActions";
import TaskList from "./TaskList";

export default function TaskBord(){
	const defaultTask = {
		"id": crypto.randomUUID(),
		"title": 'Learn React',
		"description": 'Learn React.js and build real-world applications.',
		"tags": ["web", "react", "js"],
        "priority": 'High',
		"isFavorite": true
	}
	const [tasks, setTasks] = useState([defaultTask])
    return (
        <section className="mb-20" id="tasks">
		<div className="container">
		<div className="p-2 flex justify-end">
			<SearchTask></SearchTask>
		</div>
		
			<div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
				<TaskActions></TaskActions>
				<TaskList tasks={tasks}></TaskList>
			</div>
		</div>
	</section>
    );
}