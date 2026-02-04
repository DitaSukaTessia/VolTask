import express from "express";
import router from "./routes/taskRoutes.js";
import { errorHandler } from "./middlewares/globalErrorHandler.js";

const server = express();
server.use(express.json());

server.use("/api", router);
server.use(errorHandler);

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});
