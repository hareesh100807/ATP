/**
 * app.js — Task Management System Entry Point
 * ---------------------------------------------
 * Demonstrates adding tasks, listing them, and
 * completing a task via the task module.
 *
 * Concepts: ES6 Module imports, CRUD operations
 */

import { addTask, getAllTasks, completeTask } from "./task.js";

// ─── Add Tasks ───────────────────────────────────────────────
console.log(addTask("eating",   "High",   "2024-12-13"));
console.log(addTask("writing",  "Low",    "2024-12-14"));
console.log(addTask("reading",  "medium", "2024-12-15"));
console.log(addTask("sleeping", "high",   "2024-12-16"));
console.log(addTask("running",  "High",   "2024-12-17"));

// ─── List All Tasks ──────────────────────────────────────────
getAllTasks();

// ─── Complete Task #2 ────────────────────────────────────────
completeTask(2);

// ─── Updated Task List ───────────────────────────────────────
getAllTasks();