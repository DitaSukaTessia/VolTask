import { updateTask } from "../services/update.js";

const updateTaskController = (req, res) => {
  try {
    const id = Number(req.params.id);
    if (Number.isNaN(id)) {
      return res.status(400).json({ error: "Invalid id" });
    }

    const { title, priority, status } = req.body;
    const data = { title, priority, status };
    const updatedTask = updateTask(id, data);
    res.status(200).json({ updatedTask });
  } catch (error) {
    res.status(404).json({ error: error.message }); //404 for not found and other errors from service
  }
};

export { updateTaskController };
