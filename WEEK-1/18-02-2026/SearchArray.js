/**
 * SearchArray.js
 * ---------------
 * Performs a linear search to find the index of a
 * given key in an array.
 *
 * Concept: Linear Search Algorithm
 */

/**
 * Searches for a key in the array and returns its index.
 * @param {Array} arr - The array to search through.
 * @param {*} key - The value to search for.
 * @returns {number|string} Index of the key, or a "not found" message.
 */
function Find(arr, key) {
    // Iterate through each element
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === key)  // Strict equality check
            return i;
    }
    return "Element not found";
}

// --- Driver Code ---
let array = [13, 24, 53, 63, 654, 75];
console.log(Find(array, 654)); // Expected output: 4 (index of 654)