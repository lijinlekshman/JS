"use restrict";
//function declaration
function ageCalc(birthYear) {
  return 2025 - birthYear;
}

const age1 = ageCalc(1991);

//function expression
const calcAge2 = function (birthYear) {
  return 2025 - birthYear;
};
const age2 = calcAge2(1991);
//My code // const age2 = calcAge2(Number(prompt("Enter Your Birth Year")));

console.log(age1, age2);
