import TaskItem from "./TaskItem";

function TaskList({ tasks }) {
  if (tasks.length === 0) {
    return <div>No tasks found.</div>;
  } else {
    return tasks.map((task) => <TaskItem key={task.id} task={task} />);
  }
}

export default TaskList;
