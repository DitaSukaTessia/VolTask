import { deleteTask } from "../services/delete.js";

const deleteTaskController = (req, res, next) => {
  try {
    const id = Number(req.params.id);
    if (Number.isNaN(id)) {
      return res.status(404).json({ error: "invalid id" });
    }

    const deletedTask = deleteTask(id);
    res.status(200).json({ deletedTask, message: "Task deleted successfully" });
  } catch (error) {
    next(error);
  }
};

export { deleteTaskController };
