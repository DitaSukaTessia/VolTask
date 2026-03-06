function TaskItem({ task, onDelete, onUpdate }) {
  return (
    <li>
      {task.title}
      <button onClick={() => onDelete(task.id)}>Delete</button>
      <button onClick={() => onUpdate(task.id)}>Update</button>
    </li>
  );
}

export default TaskItem;
