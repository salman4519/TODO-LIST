import { Request, Response } from "express";
import { Task } from "../models/model";

// Create in-memory task list
let tasks: Task[] = [];

// Get tasks
export const getTasks = (req: Request, res: Response) => {
    res.json(tasks);
};

// Add task
export const addTasks = (req: Request, res: Response) => {
    const { text } = req.body;

    if (!text || typeof text !== "string") {
         res.status(400).json({ error: "Invalid input: 'text' is required and must be a string" });
         return
    }

    const newTask: Task = {
        id: Date.now(),
        text,
        completed: false,
    };

    tasks.push(newTask);
    res.status(201).json(newTask);
};

// Update task
export const updateTask = (req: Request, res: Response) => {
    const taskId = parseInt(req.params.id);
    const { completed, text } = req.body;

    const task = tasks.find((t) => t.id === taskId);

    if (!task) {
         res.status(404).json({ error: "Task not found" });
         return
    }

    if (typeof text === "string") task.text = text;
    if (typeof completed === "boolean") task.completed = completed;

    res.json(task);
};

// Delete task
export const deleteTask = (req: Request, res: Response) => {
    const taskId = parseInt(req.params.id);

    const initialLength = tasks.length;
    tasks = tasks.filter((t) => t.id !== taskId);

    if (tasks.length === initialLength) {
         res.status(404).json({ error: "Task not found" });
            return
        }

    res.json({ message: "Task deleted successfully" });
};

// Load page
export const loadPage = (req: Request, res: Response) => {
    res.render("index");
};
