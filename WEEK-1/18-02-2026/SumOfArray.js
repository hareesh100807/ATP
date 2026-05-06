/**
 * SumOfArray.js
 * --------------
 * Calculates the sum of all elements in a marks array
 * using a for loop.
 *
 * Concept: Array Iteration & Accumulator
 */

// Sample marks array
let marks = [90, 78, 65, 98];

// Accumulator variable
let sum = 0;

// Loop through the marks array and add each value to sum
for (let i = 0; i < marks.length; i++) {
    sum = sum + marks[i];
}

console.log("Sum of marks is:", sum); // Expected output: 331