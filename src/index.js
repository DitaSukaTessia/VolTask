import express from "express";
import router from "./routes/taskRoutes.js";

const server = express();
server.use(express.json());

server.use("/api", router);

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});
