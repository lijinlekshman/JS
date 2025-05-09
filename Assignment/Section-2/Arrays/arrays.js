"use strict";
// Arrays
//
const friends = ["Noufal", "Akhil", "Plip"];

//another way to create an array

const years = new Array(1990, 2000, 2010, 2020);

console.log(friends); //["Noufal", "Akhil", "Plip"]

console.log(years); // 1990, 2000, 2010, 2020

console.log(friends[0]); // Noufal
console.log(friends[2]); // Plip

//we can find the length of the array.

console.log(friends.length); // 3

// change / mutate the value of the array

friends[0] = "Linu";
console.log(friends); // ["Linu", "Akhil", "Plip"]

// Exercise 1

const calcAge = function (birthYear) {
  return 2023 - birthYear;
};

const years1 = [1991, 1990, 2000, 2008];

const age1 = calcAge(years1[0]);
const age2 = calcAge(years1[1]);
const age3 = calcAge(years1[years1.length - 1]);

console.log(age1, age2, age3); // 32 33 15

// expression in an array
const ages1 = [
  calcAge(years1[0]),
  calcAge(years[1]),
  calcAge(years1[years1.length - 1]),
];

console.log(ages1); // [32, 33, 15]
