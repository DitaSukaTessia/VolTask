import { tasks } from "./create.js";

const getAllTasks = () => {
  return tasks;
};

const getTaskById = (taskId) => {
  const task = tasks.find((task) => task.id === taskId);
  if (!task) {
    const error = new Error("Task not found!");
    error.statusCode = 404; // Not Found
    throw error;
  }
  return task;
};

export { getAllTasks, getTaskById };
