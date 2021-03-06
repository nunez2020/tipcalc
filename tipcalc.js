const readlineSync = require("readline-sync");

// Get the total amount on the bill.

const totalAmount = readlineSync.questionFloat("What is the total amount of the bill: $")

// Get the party size form the user.

const totalPartySize = readlineSync.questionInt("How many people are in your party?")

let tipPercentage;

if (totalPartySize >= 6) {
  // If the party is six or more people then skip
  // over the percentage and force it to be 18%.
  tipPercentage = 18;
  console.log(
    "If party six is greater than 5, an automatic 18% tip will be applied."
  );
} else {
  // Get the % of the tip from the user
  tipPercentage = readlineSync.questionFloat(
    "What % would you like to tip? "
  );
}

// Repeat all of those things back to the user.

console.log(`The total amount of your bill is $${totalAmount.toFixed(2)}`);
console.log(`The total party size is ${totalPartySize}`);
console.log(`With a tip of ${tipPercentage}%`);

// The bill tip is the (totalAmount * tipPercentage divided by 100)

let percentage = tipPercentage / 100;
let totalAmountToTip = totalAmount * percentage;

// Total bill is the bill plus the tip.

let billWithTip = totalAmount + totalAmountToTip;

// Get the total amount of the bill devided by the totla amount of pepole. 

let totalPerPerson = billWithTip / totalPartySize;

// Calculate how much everyone is paying.

console.log(`The tip should be $${totalAmountToTip.toFixed(2)}`);
console.log(`The total check should be $${billWithTip.toFixed(2)}`);
console.log(`Each person should pay $${totalPerPerson.toFixed(2)}`);