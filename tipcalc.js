const readlineSync = require("readline-sync");

// Get the total amount on the bill.

const totalAmount = readlineSync.questionFloat("What is the total amount of the bill: $")

// Get the party size form the user.

const totalPartySize = readlineSync.questionInt("How many people are in your party?")

// Get the % of the tip form user.

const tipPercentage = readlineSync.questionFloat("What percentage will you like to pay?")



// Repeat all of those things back to the user.

console.log(totalAmount);
console.log(totalPartySize);
console.log(tipPercentage);

// The bill tip is the tipPercentage devided by 100.

// Total bill is the bill plus the tip.

// Get the total amount of the bill devided by the totla amount of pepole. 

// Calculate how much everyone is paying.
