/**
 * ArraySum.js
 * -----------
 * Calculates the sum of all elements in a given array
 * using a simple iterative approach.
 *
 * Concept: Loops & Accumulator Pattern
 */

/**
 * Returns the sum of all numeric elements in the array.
 * @param {number[]} arr - The array of numbers to sum.
 * @returns {number} The total sum of array elements.
 */
function SumOfArray(arr) {
    let sum = 0; // Initialize accumulator to zero

    // Iterate through each element and add it to the running total
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }

    return sum;
}

// --- Driver Code ---
let list = [10, 30, 49, 120, 348, 54, 13, 312];
console.log("Sum Of array is:", SumOfArray(list)); // Expected output: 936