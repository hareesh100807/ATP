// ASSIGNMENT 1:
// -------------
// You are building a shopping cart summary for an e-commerce website.

// Test Data : 
const cart = [
   { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
   { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
   { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
   { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
 ];

// Tasks:
//     1. Use filter() to get only inStock products
//     2. Use map() to create a new array with:  { name, totalPrice }
//     3. Use reduce() to calculate grand total cart value
//     4. Use find() to get details of "Mouse"
//     5. Use findIndex() to find the position of "Keyboard"

//to get only in stock products
const instock=cart.filter(element=>element.inStock===true)
console.log("The products which are available are: ",instock)
console.log("\n")

//to create a new array with {name, totalPrice}
let newArray=[]
newArray=cart.map(element=> ({name:element.name,totalPrice:element.price*element.quantity}))
console.log(newArray)
console.log("\n")

//calculate total cart value
const total=cart.reduce((acc,cartObj)=>acc+cartObj.price*cartObj.quantity,0)
console.log("Total cart value is: ",total)
console.log("\n")

//finding the details of the mouse
const details=cart.find(element=>element.name==="Mouse")
console.log(details)
console.log("\n")

//findindex of keyboard
const index=cart.findIndex(element=>element.name==="Keyboard")
console.log(index)