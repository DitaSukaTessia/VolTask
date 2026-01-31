import express from "express";
import { createTaskController } from "./controllers/createTaskController.js";
import { getTaskByIdController } from "./controllers/getTaskController.js";
import { getAllTasksController } from "./controllers/getTaskController.js";
import { updateTaskController } from "./controllers/updateTaskController.js";
import { deleteTaskController } from "./controllers/deleteTaskController.js";

const server = express();
server.use(express.json());

server.post("/tasks", createTaskController);
server.get("/tasks", getAllTasksController);
server.get("/tasks/:id", getTaskByIdController);
server.put("/tasks/:id", updateTaskController);
server.delete("/tasks/:id", deleteTaskController);

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});
