import { getAllTasks, getTaskById } from "../services/get.js";

const getAllTasksController = (req, res, next) => {
  try {
    const allTasks = getAllTasks();
    res.status(200).json({ allTasks });
  } catch (error) {
    next(error);
  }
};

const getTaskByIdController = (req, res, next) => {
  try {
    const id = Number(req.params.id);
    if (Number.isNaN(id)) {
      return res.status(400).json({ error: "Invalid id" });
    }

    const task = getTaskById(id);
    res.status(200).json({ task });
  } catch (error) {
    next(error);
  }
};

export { getAllTasksController, getTaskByIdController };
