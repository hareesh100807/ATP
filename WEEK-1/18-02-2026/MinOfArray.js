/**
 * MinOfArray.js
 * --------------
 * Finds the smallest (minimum) element in an array
 * by iterating and tracking the current minimum.
 *
 * Concept: Array Traversal & Min-Tracking
 */

// Sample array of marks
let marks = [90, 78, 65, 98];

// Assume the first element is the minimum
let min = marks[0];

// Compare each element with current min and update if smaller
for (let j = 0; j < marks.length; j++) {
    if (marks[j] < min) {
        min = marks[j];
    }
}

console.log("Smallest element:", min); // Expected output: 65