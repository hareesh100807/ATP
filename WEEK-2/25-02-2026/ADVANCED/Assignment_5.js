// ASSIGNMENT 5: 
// -------------
// Bank Transaction Analyzer

// You are building a bank statement summary.

// Test data:
const transactions = [
 { id: 1, type: "credit", amount: 5000 },
 { id: 2, type: "debit", amount: 2000 },
 { id: 3, type: "credit", amount: 10000 },
 { id: 4, type: "debit", amount: 3000 }
];


// Tasks:
//     1. filter() all credit transactions
//     2. map() to extract only transaction amounts
//     3. reduce() to calculate final account balance
//     4. find() the first debit transaction
//     5. findIndex() of transaction with amount 10000


//Filter the credit transactions
const credit=transactions.filter(transaction=>transaction.type==='credit')
console.log("Credit Transactions are: ",credit)
console.log("\n")

//extract only transaction amounts
const amount=transactions.map(transaction=>transaction.amount)
console.log("The amounts of the transactions are: ",amount)
console.log("\n")

//final account balance
const accbalance=transactions.reduce((total,transaction)=>{
    if(transaction.type==='credit'){
        return total+transaction.amount
    } else {
        return total-transaction.amount
    }
},0)
console.log("The final account balance is: ",accbalance)
console.log("\n")

//first debit transaction
const debit=transactions.find(transaction=>transaction.type==='debit')
console.log(debit)
console.log("\n")

//index of transaction with amount 10000
const transAmount=transactions.findIndex(transaction=>transaction.amount===10000)
console.log("The index of the transaction of 10000Rs: ",transAmount)