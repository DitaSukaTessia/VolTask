const validateUpdateTask = (data) => {
  const { title: newTitle, priority: newPriority, status: newStatus } = data;

  if (!data) {
    const error = new Error("No data provided for update");
    error.statusCode = 400; // Bad Request
    throw error;
  }

  if (!newTitle) {
    const error = new Error("Title is required");
    error.statusCode = 400; // Bad Request
    throw error;
  }

  const statuses = ["pending", "active", "done", "blocked"];
  if (!statuses.includes(newStatus)) {
    const error = new Error("Invalid status");
    error.statusCode = 400; // Bad Request
    throw error;
  }

  return { title: newTitle, priority: newPriority, status: newStatus };
};

export { validateUpdateTask };
