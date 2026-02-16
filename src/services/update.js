import { tasks } from "./create.js";
import { validateUpdateTask } from "../validators/updateTaskValidator.js";

const updateTask = (taskId, data) => {
  const task = tasks.find((task) => task.id === taskId);
  if (!task) {
    const error = new Error("Task not found!");
    error.statusCode = 404; // Not Found
    throw error;
  }

  const newTitle = data.title ?? task.title;
  const newPriority = data.priority ?? task.priority;
  const newStatus = data.status ?? task.status;

  if (newStatus === "done" && task.status === "blocked") {
    const error = new Error(
      "Only tasks with status 'pending' or 'active' can be updated",
    );
    error.statusCode = 400; // Bad Request
    throw error;
  }

  return Object.assign(task, {
    title: newTitle,
    priority: newPriority,
    status: newStatus,
    updated_at: new Date().toISOString(),
  });
};

export { updateTask };
