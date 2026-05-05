/**
 * @file MinOfArray.js
 * @description Code assignment for MinOfArray
 * @author k. v. hareesh
 * @date 18-02-2026
 */

let marks = [90, 78, 65, 98];
let min = marks[0];
for (let j = 0; j < marks.length; j++) {
  if (marks[j] < min) {
    min = marks[j];
  }
}
console.log("Smallest element:", min);
