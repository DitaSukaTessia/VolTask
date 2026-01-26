import { tasks } from "./create.js";

const updateTask = (taskId, data) => {
  let task = tasks.find((task) => task.id === taskId);
  if (!task) {
    throw new Error("Task not found!");
  }

  const newTitle = data.title ?? task.title;
  if (!newTitle) {
    throw new Error("Title is required");
  }

  const newPriority = data.priority ?? task.priority;

  const statuses = ["pending", "active", "done", "blocked"];
  const newStatus = data.status ?? task.status;

  if (!statuses.includes(newStatus)) {
    throw new Error("Invalid status");
  }
  if (newStatus === "done" && task.status === "blocked") {
    throw new Error(
      "Only tasks with status 'pending' or 'active' can be updated",
    );
  }

  return Object.assign(task, {
    title: newTitle,
    priority: newPriority,
    status: newStatus,
    updated_at: new Date().toISOString(),
  });
};

export { updateTask };
