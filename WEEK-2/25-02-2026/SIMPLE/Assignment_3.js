// Assignment 3: Student Marks List
// --------------------------------
// Scenario : You receive marks from an exam system.

// Test data:
const marks = [78, 92, 35, 88, 40, 67, 25];

// Tasks:
//     1. filter() marks ≥ 40 (pass marks)
//     2. map() to add 5 grace marks to each student
//     3. reduce() to find highest mark
//     4. find() first mark below 40
//     5. findIndex() of mark 92

//marks>=40
const above40 = marks.filter((mark) => mark >= 40);
console.log("Marks above 40:", above40);
//add 5 marks to each student
const graceMarks = marks.map((mark) => mark + 5);
console.log("After adding grace marks:", graceMarks);
//finding highest marks
const highestMark = marks.reduce((acc, ele) => (acc > ele ? acc : ele));
console.log(highestMark);
//first marks below 40
const below40 = marks.find((mark) => mark < 40);
console.log("Mark below 40 :", below40);
//findIndex of 92
const index = marks.findIndex((mark) => mark === 92);
console.log("Index of marks 92:", index);
