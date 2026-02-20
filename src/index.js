import express from "express";
import router from "./routes/taskRoutes.js";
import { errorHandler } from "./middlewares/globalErrorHandler.js";
import cors from "cors";

const server = express();
server.use(express.json());

server.use(
  cors({
    origin: "http://localhost:5173",
  }),
);

server.use("/api", router);
server.use(errorHandler);

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000/api/tasks");
});
