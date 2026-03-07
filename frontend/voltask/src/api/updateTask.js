const API_BASE_URL = "http://localhost:3000/api";

const updateTask = async (taskId, updatedData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/tasks/${taskId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    });
    if (!response.ok) {
      throw new Error("Failed to update task");
    }
    const data = await response.json();
    console.log(data);
    return data.updatedTask;
  } catch (error) {
    throw new Error(error.message);
  }
};

export { updateTask };
