let tasks = [];

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

  if (status == "done") {
    status = "done";
  }

  let task = {
    id: tasks.length + 1,
    title: title,
    priority: priority,
    status: status,
    created_at: new Date().toISOString(),
  };
  tasks.push(task);
  return task;
};

console.log(tasks);

export { tasks, addTask };
