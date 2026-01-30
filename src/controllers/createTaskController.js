import { addTask } from "../services/create.js";

const createTaskController = (req, res) => {
  try {
    const { title, priority, status } = req.body;

    const task = addTask(title, priority, status);
    res.status(201).json({ task });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export { createTaskController };
