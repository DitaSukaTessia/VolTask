import { useState } from "react";
import EditModal from "./EditModal";

function TaskItem({ task, onDelete, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);

  const priorityColor = {
    low: "bg-gray-200 text-gray-700",
    medium: "bg-yellow-200 text-yellow-800",
    high: "bg-red-200 text-red-800",
  };

  return (
    <>
      <li className="flex items-center justify-between bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition">
        {/* Task info */}
        <div className="flex flex-col">
          <span className="font-medium text-gray-800">{task.title}</span>

          <div className="flex gap-2 mt-1 text-sm">
            <span
              className={`px-2 py-1 rounded-md text-xs font-medium ${priorityColor[task.priority]}`}
            >
              {task.priority}
            </span>

            <span className="px-2 py-1 rounded-md text-xs bg-blue-100 text-blue-700">
              {task.status}
            </span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-2">
          <button
            onClick={() => setIsEditing(true)}
            className="text-sm px-3 py-1 rounded-lg bg-gray-100 hover:bg-gray-200 transition"
          >
            Edit
          </button>

          <button
            onClick={() => onDelete(task.id)}
            className="text-sm px-3 py-1 rounded-lg bg-red-500 text-white hover:bg-red-600 transition"
          >
            Delete
          </button>
        </div>
      </li>

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
    </>
  );
}

export default TaskItem;
