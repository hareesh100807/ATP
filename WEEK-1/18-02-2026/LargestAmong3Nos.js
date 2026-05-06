/**
 * LargestAmong3Nos.js
 * --------------------
 * Finds the largest among three numbers using the
 * ternary (conditional) operator in a single expression.
 *
 * Concept: Ternary Operator & Nested Conditionals
 */

// Declare three numbers
let x = 24;
let y = 5;
let z = 23;

// Nested ternary: first check if x is the greatest, then compare y and z
x > y && x > z
    ? console.log(x, " is greater")
    : y > z
        ? console.log(y, " is greater")
        : console.log(z, " is greater");