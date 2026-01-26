import { tasks } from "./create.js";

const getAllTasks = () => {
  return tasks;
};

const getTaskById = (taskId) => {
  const task = tasks.find((task) => task.id === taskId);
  if (!task) {
    throw new Error("Task not found!");
  }
  return task;
};

export { getAllTasks, getTaskById };
