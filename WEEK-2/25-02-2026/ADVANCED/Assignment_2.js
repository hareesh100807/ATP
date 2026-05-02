// ASSIGNMENT 2:
// -------------
// Student Performance Dashboard

// You are working on a college result analysis system.

// Test Data:
const students = [
 { id: 1, name: "Ravi", marks: 78 },
 { id: 2, name: "Anjali", marks: 92 },
 { id: 3, name: "Kiran", marks: 35 },
 { id: 4, name: "Sneha", marks: 88 },
 { id: 5, name: "Arjun", marks: 40 }
 ];

// Tasks:
//     1. filter() students who passed (marks ≥ 40)
//     2. map() to add a grade field
//               ≥90 → A
//               ≥75 → B
//               ≥60 → C
//               else → D

//    3. reduce() to calculate average marks
//    4. find() the student who scored 92
//    5. findIndex() of student "Kiran"


//Details of students who passed the examination
const pass=students.filter(student=>student.marks>=40)
console.log(pass)
console.log("\n")

//To add the grades for the marks
const stu=students.map(student=>{
    if(student.marks>=90){
        student.grade="A"
    } else if(student.marks>=75){
        student.grade="B"
    } else if(student.marks>=60){
        student.grade="C"
    } else {
        student.grade="D"
    }
    return student
})
console.log(stu)
console.log("\n")

//Calculating average of the marks
const average=students.reduce((a,b)=>a+b.marks,0)
console.log("average of marks:",average/students.length)
console.log("\n")

//Details of student who secured 92 marks
const details=students.find(std=>std.marks===92)
console.log(details)
console.log("\n")

//Index of student Kiran
const index= students.findIndex(std=>std.name==='Kiran')
console.log("Index of the student Kiran:",index)