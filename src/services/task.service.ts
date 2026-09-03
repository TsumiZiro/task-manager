import { tasks } from "../data/tasks.js";
import type { Task } from "../models/task.js";
export const listTasks = (): readonly Task[] => tasks;
/*export const findTaskByStatus = (status: "pending" | "completed"): Task | undefined =>
  tasks.find((task) => task.status === status); */
export const findTaskById = (id: number): Task | undefined =>
  tasks.find((task) => task.id === id);
export const createTask = (title: string): Task => {
  const cleanTitle = title.trim();
  if (!cleanTitle) {
    throw new Error("El título de la tarea es obligatorio.");
  }
  const nextId = Math.max(0, ...tasks.map((task) => task.id)) + 1;
  const newTask: Task = {
    id: nextId,
    title: cleanTitle,
    status: "pending",
    createdAt: new Date(),
  };
  tasks.push(newTask);
  return newTask;
};
export const completeTask = (id: number): Task => {
  const task = findTaskById(id);
  if (!task) {
    throw new Error(`No existe una tarea con el id ${id}.`);
  }
  task.status = "completed";
  return task;
  
};
/*
//Desafio Individual 1
export const deleteTask = (id: number): void => {
  const taskIndex = tasks.findIndex((task) => task.id === id);  
  if (taskIndex === -1) {
    throw new Error(`No existe una tarea con el id ${id}.`);
  }
  tasks.splice(taskIndex, 1);
};
//Desafio Individual 2
export const PendingTask = (status: "pending"): Task => {
  const task = findTaskByStatus(status);
  if (!task) {
    throw new Error(`No existe una tarea con el id ${status}.`);
  }
  task.status = "pending";
  return task;
 
}
 */
