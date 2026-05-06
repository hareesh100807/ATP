/**
 * validator.js
 * -------------
 * Validation module for the Task Management System.
 * Provides input validation for task title, priority, and due date.
 *
 * Concepts: Input validation, Date comparison, ES6 Modules
 */

/**
 * Validates the task title.
 * @param {string} title - The task title to validate.
 * @returns {boolean|string} True if valid, error message otherwise.
 */
function validateTitle(title) {
    if (!title) {
        return "Title required";
    }
    if (title.length <= 3)
        return "Minimum 3 characters required";
    else
        return true;
}

/**
 * Validates the task priority level.
 * Accepted values: 'low', 'medium', 'high' (case-sensitive).
 * @param {string} priority - The priority level.
 * @returns {boolean|string} True if valid, error message otherwise.
 */
function validatepriority(priority) {
    if (priority === 'low' || priority === 'medium' || priority === 'high')
        return true;
    else
        return "Invalid priority";
}

/**
 * Validates the due date for the task.
 * Compares against a hardcoded reference date.
 * @param {string} date - The due date string (format: YYYY-MM-DD).
 * @returns {boolean|string} True if valid, error message otherwise.
 */
function validateDueDate(date) {
    let dueDate = new Date('2024-10-20'); // Reference date (YYYY-MM-DD)
    let today = new Date();
    if (dueDate > today)
        return "Invalid due date";
    return true;
}

export { validateDueDate, validateTitle, validatepriority }