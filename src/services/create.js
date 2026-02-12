import fs from "fs";

let tasks = [];

// load existing tasks from the JSON file
try {
  const data = fs.readFileSync("data/taskDB.json", "utf8");
  tasks = JSON.parse(data);
} catch (err) {
  console.error("Error reading tasks from file:", err);
}

// function to add a new task
const addTask = (title, priority, status) => {
  if (!title) {
    throw new Error("Title is required");
  }

  const priorities = ["low", "medium", "high"];
  priority = priority ?? "medium";
  if (!priorities.includes(priority)) {
    throw new Error("Invalid priority");
  }

  const statuses = ["pending", "active", "done", "blocked"];
  status = status ?? "pending";
  //   if (!status) {
  //     status = "pending";
  //   }

  if (!statuses.includes(status)) {
    throw new Error("Invalid status");
  }

  let task = {
    id: tasks.length + 1,
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
