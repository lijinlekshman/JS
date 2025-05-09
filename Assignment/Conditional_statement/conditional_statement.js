//conditional statement
const age = 23;
age >= 18 ? console.log("you enter pub") : console.log("you need to wait");

const drink = age >= 18 ? "wine" : "water";
console.log(drink);

// if else statement
let drink2;
if (age >= 18) {
  drink2 = "wine 🍷";
} else {
  drink2 = "water 🥛";
}
console.log(drink2);

// template literals

console.log(`I like drink ${age >= 18 ? "wine" : "water"}`);

// Challenge 4
const bill = 275;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;

console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
);
