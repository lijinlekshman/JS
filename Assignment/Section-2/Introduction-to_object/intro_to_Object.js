"use strict";
//Array
const LijinArray = [
  "Lijin",
  "Lekshman",
  2025 - 1991,
  "Developer",
  ["Nou", "Aki", "Pli"],
];

//Object
const LijinObject = {
  firstName: "Lijin",
  lastName: "Lekshman",
  age: 2025 - 1991,
  job: "Developer",
  friends: ["Nou", "Aki", "Pli"],
};

//Dot Notation
console.log(LijinObject.firstName);

//Bracket Notation
console.log(LijinObject["firstName"]);

// Bracket notation with expression
const nameKey = "Name";
console.log(LijinObject["first" + nameKey]);
console.log(LijinObject["last" + nameKey]);

const inputter = prompt(
  "What do you want to know about Lijin? Choose between firstName, lastName, age, job, and friends"
);

console.log(LijinObject.inputter); // undefined

console.log(LijinObject[inputter]); //

//truthy and falsy values
if (LijinObject[inputter]) {
  console.log(LijinObject[inputter]);
} else {
  console.log("Sorry, wrong Request!");
}
