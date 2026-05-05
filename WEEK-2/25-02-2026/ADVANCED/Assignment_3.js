// ASSIGNMENT 3:
// -------------
// Employee Payroll Processor

// You are building a salary processing module in a company HR app.

// Test data:
const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" },
];

// Tasks:
//     1. filter() employees from IT department
//     2. map() to add:
//             netSalary = salary + 10% bonus

//     3. reduce() to calculate total salary payout
//     4. find() employee with salary 30000
//     5. findIndex() of employee "Neha"

//Details of Employees from IT dept
const details = employees.filter((emp) => emp.department === "IT");
console.log(
  "The details of the employees working in IT department are:",
  details,
);
console.log("\n");

//Adding the netsalary to the employees array of objects
const netSalary = employees.map((emp) => {
  emp.netSalary = emp.salary + emp.salary * 0.1;
  return emp;
});
console.log(netSalary);
console.log("\n");

//calculate total salaries
const totalSalary = employees.reduce((acc, emp) => acc + emp.netSalary, 0);
console.log("Total salary payouts:", totalSalary);
console.log("\n");

//find employee with salary of 30000
const detail = employees.find((emp) => emp.salary === 30000);
console.log("Details of the employee with salary 30000:", detail);
console.log("\n");

//find index of employee Neha
const index = employees.findIndex((emp) => emp.name === "Neha");
console.log("Index of the employee Neha:", index);
