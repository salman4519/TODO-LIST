import { Router } from "express";
import { getTasks,addTasks,updateTask,deleteTask,loadPage } from "../controllers/controller";

const router = Router();

// Homepage route
router.get("/", loadPage);

// Task routes
router.get("/tasks", getTasks); // Get all tasks
router.post("/tasks", addTasks); // Add a new task
router.put("/tasks/:id", updateTask); // Update a task by ID
router.delete("/tasks/:id", deleteTask); // Delete a task by ID

// Fallback route for undefined endpoints
router.use((req, res) => {
    res.status(404).json({ error: "Route not found" });
});

export default router;
