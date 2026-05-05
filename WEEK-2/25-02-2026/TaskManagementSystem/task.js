import {
  validateDueDate,
  validateTitle,
  validatepriority,
} from "./validator.js";

let tasks = [];

// 1. Add new task
export function addTask(title, priority, dueDate) {
  // Validate using imported functions
  if (
    !validateTitle(title) ||
    !validateDueDate(dueDate) ||
    !validatepriority(priority)
  ) {
    return "Invalid Task";
  }
  //push taskObj to array
  tasks.push({ title, priority, dueDate });
  // If valid, add to tasks array Return success/error message
  return "Task added succesfully";
}

// 2. Get all tasks
export function getAllTasks() {
  console.log("The tasks you should complete are:", tasks);
  return tasks;
}

//3.mark task as complete
export function completeTask(taskId) {
  if (tasks[taskId]) tasks.splice(taskId - 1, 1);
  return "Task completed";
}
