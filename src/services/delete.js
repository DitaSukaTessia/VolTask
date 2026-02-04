import { tasks } from "./create.js";

const deleteTask = (taskId) => {
  const taskToDelete = tasks.find((task) => task.id === taskId);
  if (!taskToDelete) {
    const error = new Error("Task not found!");
    error.statusCode = 404; // Not Found
    throw error;
  }

  const IndexTodelete = tasks.indexOf(taskToDelete);
  tasks.splice(IndexTodelete, 1);
  return taskToDelete;
};

export { deleteTask };
