import type { Request, Response } from "express";
import { env } from "../config/env.js";
import { getDatabaseStatus } from "../services/database.service.js";
export const getHealth = (_req: Request, res: Response): void => {
  res.status(200).json({
    data: {
      status: "up",
      version: process.env.APP_VERSION ?? "unknown",
      environment: process.env.NODE_ENV ?? "unknown",
    },
  });
};
export const getDatabaseHealth = (_req: Request, res: Response): void => {
  const data = getDatabaseStatus();
  res.status(data.status === "up" ? 200 : 503).json({ data });
};
