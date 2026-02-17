import fs from "fs";
import { tasks } from "./create.js";
import { validateUpdateTask } from "../validators/updateTaskValidator.js";

const updateTask = (taskId, data) => {
  const task = tasks.find((task) => task.id === taskId);
  if (!task) {
    const error = new Error("Task not found!");
    error.statusCode = 404; // Not Found
    throw error;
  }

  // Validate incoming update payload (only fields provided)
  const updates = validateUpdateTask(data);

  // Business rule: only tasks with 'pending' or 'active' status can be updated

  if (Object.prototype.hasOwnProperty.call(updates, "status")) {
    const allowedTransitions = {
      pending: ["active", "done", "blocked"],
      active: ["pending", "active", "done", "blocked"],
      blocked: ["pending", "active"],
      done: [], // no transitions allowed from 'done'
    };

    if (!allowedTransitions[task.status].includes(updates.status)) {
      const error = new Error(
        "Only tasks with 'pending' or 'active' status can be updated to the new status",
      );
      error.statusCode = 400; // Bad Request
      throw error;
    }
  }
  Object.assign(task, updates, { updated_at: new Date().toISOString() });

  // Persist changes to disk so in-memory state and file stay in sync
  try {
    fs.writeFileSync("data/taskDB.json", JSON.stringify(tasks, null, 2));
  } catch (err) {
    const error = new Error("Failed to persist task updates");
    error.statusCode = 500;
    throw error;
  }

  return task;
};

export { updateTask };
