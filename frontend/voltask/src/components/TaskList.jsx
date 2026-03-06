import TaskItem from "./TaskItem";

function TaskList({ tasks, onDelete, onUpdate }) {
  if (tasks.length === 0) {
    return <div>No tasks found.</div>;
  } else {
    return tasks.map((task) => (
      <TaskItem
        key={task.id}
        task={task}
        onDelete={onDelete}
        onUpdate={onUpdate}
      />
    ));
  }
}

export default TaskList;
