/**
 * ASSIGNMENT.JS
 * --------------
 * Demonstrates array manipulation on an employee dataset
 * using Array.splice() for inserting, removing, and
 * updating objects in an array.
 *
 * Concepts: Arrays of Objects, splice() method
 */

// Employee dataset: each employee has an eno, name, and marks array
const employees = [
    { eno: 101, name: "Ravi",   marks: [78, 82, 91] },
    { eno: 102, name: "Bhanu",  marks: [65, 70, 68] },
    { eno: 103, name: "Sneha",  marks: [88, 92, 95] },
    { eno: 104, name: "Kiran",  marks: [55, 60, 58] },
    { eno: 105, name: "Anitha", marks: [90, 85, 87] },
];

// --- Task 1: Insert a new employee at the 2nd position (index 2) ---
// splice(startIndex, deleteCount, newElement)
employees.splice(2, 0, { eno: 108, name: "Hareesh", marks: [12, 32, 64] });
console.log("After inserting Hareesh at index 2:");
console.log(employees);

// --- Task 2: Remove the employee named "Kiran" ---
// After the insertion above, Kiran is now at index 4
employees.splice(4, 1);
console.log("\nAfter removing Kiran:");
console.log(employees);

// --- Task 3: Update Sneha's last mark from 95 to 75 ---
// Replace the object at Sneha's current position with updated marks
employees.splice(3, 1, { eno: 103, name: "Sneha", marks: [88, 92, 75] });
console.log("\nAfter updating Sneha's last mark to 75:");
console.log(employees);
