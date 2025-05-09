// Arrow Functions
const ageCalc = (birthYear) => 2025 - birthYear;

const age = ageCalc(1991);
const dynAge = ageCalc(Number(prompt("Enter your birth year"))); // Prompting user for their birth year and calculating age - my code

console.log(age, dynAge);

const retirementAge = (birthYear) => {
  const age1 = 2025 - birthYear;
  const retirement = 65 - age1;
  return retirement;
};
console.log(retirementAge(1991));

//with 2 parametes
const ruy = (birthYear, firstName) => {
  const age = 2025 - birthYear;
  const retirement1 = 65 - age;
  return `${firstName} retires in ${retirement1}`;
};

console.log(ruy(1991, "Jonas"));
console.log(ruy(1980, "Lijin"));
