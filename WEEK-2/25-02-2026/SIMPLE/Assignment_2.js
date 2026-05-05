// Assignment 2: Online Course Name Processor
// ------------------------------------------
// Scenario : You are preparing a course list for display on a website.

// Test data:
const courses = ["javascript", "react", "node", "mongodb", "express"];

// Tasks:
//     1. filter() courses with name length > 5
//     2. map() to convert course names to uppercase
//     3. reduce() to generate a single string:
//               "JAVASCRIPT | REACT | NODE | MONGODB | EXPRESS"

//     4. find() the course "react"
//     5. findIndex() of "node"

//----------------------------------------------------------------------------------------------------
//Courses with name length>5
const lengthOfNames = courses.filter((name) => name.length > 5);
console.log(lengthOfNames);
//Convert to uppercase
const uppercase = courses.map((name) => name.toUpperCase());
console.log(uppercase);
//generating a single string
const string = courses.reduce((acc, name) => acc + name + "|", "");
console.log(string.toUpperCase());
//finding course react
const search = courses.find((course) => course === "react");
console.log(search);
//index of node
const find = courses.findIndex((course) => course === "node");
console.log(find);
