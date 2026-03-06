import { useState, useEffect } from "react";
import { getTasks } from "./api/tasks";
import { createTask } from "./api/createTask";
import { deleteTask } from "./api/deleteTask";
import { updateTask } from "./api/updateTask";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getTasks();
        setTasks(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading tasks...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <>
      <TaskForm onCreate={handleCreate} />
      <TaskList tasks={tasks} onDelete={handleDelete} onUpdate={handleUpdate} />
    </>
  );

  async function handleCreate(newTaskData) {
    try {
      const newTask = await createTask(newTaskData);
      setTasks((prevTasks) => [...prevTasks, newTask]);
    } catch (err) {
      setError(err.message);
    }
  }

  async function handleDelete(taskId) {
    try {
      await deleteTask(taskId);
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    } catch (err) {
      setError(err.message);
    }
  }

  async function handleUpdate(taskId, updatedData) {
    try {
      const updatedTask = await updateTask(taskId, updatedData);
      setTasks((prevTasks) =>
        prevTasks.map((task) => (task.id === taskId ? updatedTask : task)),
      );
    } catch (err) {
      setError(err.message);
    }
  }
}

export default App;
