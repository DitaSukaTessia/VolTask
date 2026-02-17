const validateUpdateTask = (data) => {
  if (!data || typeof data !== "object") {
    const error = new Error("Invalid update payload");
    error.statusCode = 400; // Bad Request
    throw error;
  }

  const { title, priority, status } = data;
  const validated = {};

  if (Object.prototype.hasOwnProperty.call(data, "title")) {
    if (!title || typeof title !== "string") {
      const error = new Error("Invalid title");
      error.statusCode = 400;
      throw error;
    }
    validated.title = title;
  }

  if (Object.prototype.hasOwnProperty.call(data, "priority")) {
    const priorities = ["low", "medium", "high"];
    if (!priorities.includes(priority)) {
      const error = new Error("Invalid priority");
      error.statusCode = 400;
      throw error;
    }
    validated.priority = priority;
  }

  if (Object.prototype.hasOwnProperty.call(data, "status")) {
    const statuses = ["pending", "active", "done", "blocked"];
    if (!statuses.includes(status)) {
      const error = new Error("Invalid status");
      error.statusCode = 400;
      throw error;
    }
    validated.status = status;
  }

  if (Object.keys(validated).length === 0) {
    const error = new Error("No valid fields to update");
    error.statusCode = 400;
    throw error;
  }

  return validated;
};

export { validateUpdateTask };
