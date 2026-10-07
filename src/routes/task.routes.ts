import { Router } from "express";
import {
  getTask,
  patchTaskComplete,
  postTask,
  removeTask,
} from "../controllers/task.controller.js";
import { requireJson } from "../middlewares/require-json.middleware.js";
import { validateTaskId } from "../middlewares/validate-task-id.middleware.js";
import { validateTaskTitle } from "../middlewares/validate-task-title.middleware.js";
import { listTasks } from "../services/task.service.js";
export const taskRouter = Router();
taskRouter.param("id", validateTaskId);
taskRouter.get("/", listTasks);
taskRouter.get("/:id", getTask);
taskRouter.post("/", requireJson, validateTaskTitle, postTask);
taskRouter.patch("/:id/complete", patchTaskComplete);
taskRouter.delete("/:id", removeTask);
