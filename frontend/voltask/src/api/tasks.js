const API_BASE_URL = "http://localhost:3000/api";

const getTasks = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/tasks`);
    if (!response.ok) {
      throw new Error("Failed to fetch tasks");
    }
    const data = await response.json();
    return data.allTasks;
  } catch (error) {
    throw new Error("Error fetching tasks: " + error.message);
  }
};

export { getTasks };
