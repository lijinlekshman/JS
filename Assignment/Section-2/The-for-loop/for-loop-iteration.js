// for loop keeps running  while the condition is true

// for loop syntax
for (let rep = 1; rep <= 10; rep++) {
  console.group(`Printing ${rep} times`);
}

// for loop syntax
const lijin = [
  "Lijin",
  "Lekshman",
  2025 - 1995,
  "Developer",
  ["Linu", "Akhil", "Plip"],
];

const types = [];

for (let i = 0; i < lijin.length; i++) {
  console.log(lijin[i]);
  types.push(typeof lijin[i]);
}
console.log(types);

// 1. Looping through an array
const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2025 - years[i]);
}

console.log(ages);

// continue and break

for (let i = 0; i < lijin.length; i++) {
  // continue; // skip the current iteration
  if (typeof lijin[i] !== "string") continue; // skip the current iteration
  console.log(lijin[i]);
}

// break; // exit the loop
for (let i = 0; i < lijin.length; i++) {
  if (typeof lijin[i] === "number") break; // exit the loop when its number")
  console.log(lijin[i]);
}
