/**
 * task.js
 * --------
 * Core task module for the Task Management System.
 * Manages an in-memory task list — add, list, and complete tasks.
 *
 * Concepts: ES6 Modules, Array manipulation, Input validation
 */

import { validateDueDate, validateTitle, validatepriority } from "./validator.js";

// In-memory task storage
let tasks = [];

/**
 * Adds a new task after validating inputs via the validator module.
 * @param {string} title    - Task title (min 3 chars).
 * @param {string} priority - Priority level ('low' | 'medium' | 'high').
 * @param {string} dueDate  - Due date in YYYY-MM-DD format.
 * @returns {string} Success or error message.
 */
export function addTask(title, priority, dueDate) {
    // Validate all inputs before adding
    if (!validateTitle(title) || !validateDueDate(dueDate) || !validatepriority(priority)) {
        return "Invalid Task";
    }
    // Push a new task object into the array
    tasks.push({ title, priority, dueDate });
    return "Task added successfully";
}

/**
 * Returns and logs all tasks in the list.
 * @returns {Array} The current tasks array.
 */
export function getAllTasks() {
    console.log("The tasks you should complete are:", tasks);
    return tasks;
}

/**
 * Marks a task as complete by removing it from the array.
 * @param {number} taskId - 1-based index of the task to complete.
 * @returns {string} Completion message.
 */
export function completeTask(taskId) {
    if (tasks[taskId])
        tasks.splice(taskId - 1, 1);
    return "Task completed";
}