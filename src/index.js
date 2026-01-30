import express from "express";
import { createTaskController } from "./controllers/createTaskController.js";
import { getTaskByIdController } from "./controllers/getTaskCotroller.js";
import { getAllTasksController } from "./controllers/getTaskCotroller.js";

const server = express();
server.use(express.json());

server.post("/tasks", createTaskController);
server.get("/tasks", getAllTasksController);
server.get("/tasks/:id", getTaskByIdController);

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});
