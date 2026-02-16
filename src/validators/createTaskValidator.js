const validateCreateTask = (task) => {
  const { title, priority = "medium", status = "pending" } = task;

  if (!title) {
    const error = new Error("Title is required");
    error.statusCode = 400; // Bad Request
    throw error;
  }

  const priorities = ["low", "medium", "high"];
  if (!priorities.includes(priority)) {
    const error = new Error("Invalid priority");
    error.statusCode = 400; // Bad Request
    throw error;
  }

  const statuses = ["pending", "active", "done", "blocked"];
  if (!statuses.includes(status)) {
    const error = new Error("Invalid status");
    error.statusCode = 400; // Bad Request
    throw error;
  }

  return { title, priority, status };
};

export { validateCreateTask };
