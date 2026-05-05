/**
 * @file SearchArray.js
 * @description Code assignment for SearchArray
 * @author k. v. hareesh
 * @date 18-02-2026
 */

function Find(arr, key) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === key) return i;
  }
  return "Element not found";
}
let array = [13, 24, 53, 63, 654, 75];
console.log(Find(array, 654));
