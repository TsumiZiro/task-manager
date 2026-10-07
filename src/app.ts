import express from "express";
import { healthRouter } from "./routes/health.routes.js";
import { taskRouter } from "./routes/task.routes.js";
import { requestContext } from "./middlewares/request-context.middleware.js";
import { notFound } from "./middlewares/not-found.middleware.js";
import { errorHandler } from "./middlewares/error.middleware.js";
export const app = express();
app.use(requestContext);
app.use(express.json());

//Parte de prueba
app.get("/", (_req, res) => {
  res.json({
    status: "ok",
    message: "API funcionando correctamente",
  });
});

//Fin parte de prueba para solucionar el GET

app.use("/health", healthRouter);
app.use("/api/tasks", taskRouter);
app.use(notFound);
app.use(errorHandler);
