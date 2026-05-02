// Assignment 1: Daily Temperature Analyzer
// ----------------------------------------
// Scenario : You are analyzing daily temperatures recorded by a weather app.

// Test data:
// const temperatures = [32, 35, 28, 40, 38, 30, 42];

// Tasks:
//     1. filter() temperatures above 35
//     2. map() to convert all temperatures from Celsius → Fahrenheit
//     3. reduce() to calculate average temperature
//     4. find() first temperature above 40
//     5. findIndex() of temperature 28


const temperatures = [32, 35, 28, 40, 38, 30, 42]
//filter temp above 35
const t35=temperatures.filter((value=>value>35))
console.log("Temperatures above 35 are:",t35)
//map() to convert temp to farenheit
const fah=temperatures.map(value=>(value*1.8)+32)
console.log("Temperatures after converting to fahrenheit",fah)
//reduce() to calculate average of temperaters
const averageTemperatures=temperatures.reduce((acc,temp)=>acc+temp)
console.log("Average of temperatures:",(averageTemperatures/temperatures.length))
//find() first temperature above 40
const temp=temperatures.find(temp=>temp>40)
console.log("Temperature above 40:",temp)
//findIndex() of temperature 28
const temp28=temperatures.findIndex(temp=>temp===28)
console.log("index of temperature 28:",temp28)