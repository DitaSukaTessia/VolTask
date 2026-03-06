const API_BASE_URL = "http://localhost:3000/api";

const deleteTask = async (taskId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/tasks/${taskId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Failed to delete task");
    }
    return true;
  } catch (error) {
    throw new Error("Error deleting task: " + error.message);
  }
};

export { deleteTask };
