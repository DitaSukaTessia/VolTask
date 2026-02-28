const API_BASE_URL = "http://localhost:3000/api";

const createTask = async (taskData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/tasks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(taskData),
    });
    if (!response.ok) {
      throw new Error("Failed to create task");
    }
    const data = await response.json();
    return data.task;
  } catch (error) {
    throw new Error("Error creating task: " + error.message);
  }
};

export { createTask };
