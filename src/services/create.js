import fs from "fs";
import { validateCreateTask } from "../validators/createTaskValidator.js";

let tasks = [];

// load existing tasks from the JSON file
try {
  const data = fs.readFileSync("data/taskDB.json", "utf8");
  tasks = JSON.parse(data);
} catch (err) {
  console.error("Error reading tasks from file:", err);
}

// function to add a new task
const addTask = (taskData) => {
  // validate task data
  const { title, priority, status } = validateCreateTask(taskData);
  // id generation logic
  let maxId = 0;
  tasks.forEach((task) => {
    if (task.id > maxId) {
      maxId = task.id;
    }
  });

  const id = maxId + 1;

  const task = {
    id: id,
    title: title,
    priority: priority,
    status: status,
    created_at: new Date().toISOString(),
  };
  tasks.push(task);

  fs.writeFileSync("data/taskDB.json", JSON.stringify(tasks, null, 2));
  return task;
};

export { tasks, addTask };
