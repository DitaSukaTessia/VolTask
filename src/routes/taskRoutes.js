import express from "express";
const router = express.Router();
import { createTaskController } from "../controllers/createTaskController.js";
import {
  getAllTasksController,
  getTaskByIdController,
} from "../controllers/getTaskController.js";
import { updateTaskController } from "../controllers/updateTaskController.js";
import { deleteTaskController } from "../controllers/deleteTaskController.js";

router.post("/tasks", createTaskController);
router.get("/tasks", getAllTasksController);
router.get("/tasks/:id", getTaskByIdController);
router.put("/tasks/:id", updateTaskController);
router.delete("/tasks/:id", deleteTaskController);

export default router;
