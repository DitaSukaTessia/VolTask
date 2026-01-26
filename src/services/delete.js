import { tasks } from "./create.js";

const deleteTask = (taskId) => {
  const taskToDelete = tasks.find((task) => task.id === taskId);
  if (!taskToDelete) {
    throw new Error("Task not found!");
  }

  const IndexTodelete = tasks.indexOf(taskToDelete);
  tasks.splice(IndexTodelete, 1);
  return taskToDelete;
};

export { deleteTask };
