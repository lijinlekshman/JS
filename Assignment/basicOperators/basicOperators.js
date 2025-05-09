//Math operators
// +, -, *, /, **, %
const ageLijin = 1995 + 2025;
const ageWife = 1999 - 2025;

const now = 2025;
const ageNowLijin = now - 1995;
const ageNowWife = now - 1999;

console.log(ageLijin, ageWife, ageNowLijin, ageNowWife);

console.log(ageLijin * 2, ageWife / 2);

console.log(ageLijin ** 2, ageWife ** 2);

// assignment operators
let x = 10 + 5;
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1 = 101
x--; // x = x - 1 = 100
console.log(x);

// comparison operators
// >, <, >=, <=, ==, ===, !=, !==
const ageLijina = 18;
const ageWifey = 16;
console.log(ageLijina > ageWifey); // true

console.log(ageLijina < ageWifey); // false

console.log(ageWifey >= 18); // true

const isFullAge = ageWifey >= 18; // true

console.log(now - 1991 > now - 2018); // true
