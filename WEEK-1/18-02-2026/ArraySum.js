function SumOfArray(arr){
    let sum=0
    for(let i=0;i<arr.length;i++){
        sum=sum+arr[i]
    }
    return sum;
}
let list=[10,30,49,120,348,54,13,312]
console.log("Summ Of array is:",SumOfArray(list))