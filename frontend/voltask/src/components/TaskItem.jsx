import { useState } from "react";
import EditModal from "./EditModal";

function TaskItem({ task, onDelete, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <li>
      {task.title} - {task.priority} - {task.status}
      <button onClick={() => setIsEditing(true)}>Edit</button>
      <button onClick={() => onDelete(task.id)}>Delete</button>
      {isEditing && (
        <EditModal
          task={task}
          onClose={() => setIsEditing(false)}
          onSave={(updatedData) => {
            onUpdate(task.id, updatedData);
            setIsEditing(false);
          }}
        />
      )}
    </li>
  );
}

export default TaskItem;
