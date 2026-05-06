/**
 * MaxOf3Nos.js
 * -------------
 * Finds the maximum of three numbers using a function
 * with if-else logic.
 *
 * Concept: Functions & Conditional Logic
 */

/**
 * Returns the maximum of three numbers.
 * @param {number} a - First number
 * @param {number} b - Second number
 * @param {number} c - Third number
 * @returns {number} The largest of the three values
 */
function Max(a, b, c) {
    if (a > b && a > c) return a;    // a is the largest
    else if (b > c) return b;         // b is the largest
    else return c;                    // c is the largest
}

// --- Driver Code ---
let large = Max(100, 240, 520);
console.log(`${large} is greater`); // Expected output: 520 is greater