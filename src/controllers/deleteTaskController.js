import { deleteTask } from "../services/delete.js";

const deleteTaskController = (req, res) => {
  try {
    const id = Number(req.params.id);
    if (Number.isNaN(id)) {
      return res.status(404).json({ error: "invalid id" });
    }

    const deletedTask = deleteTask(id);
    res.status(200).json({ deletedTask });
    res.status(200).json({ message: "Task deleted successfully" });
  } catch (error) {
    next(err);
  }
};

export { deleteTaskController };
