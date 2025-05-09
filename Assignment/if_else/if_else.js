const age = 19;
const isOldEnough = age >= 18;

if (isOldEnough) {
  console.log("You are old enough to Driving Licence. 🚙");
} else {
  console.log("You are not old enough to Driving Licence.");
}

const ageNew = 15;

if (18 <= ageNew) {
  console.log("Sarah is old enough to Driving Licence. 🚙");
} else {
  const leftYears = 18 - ageNew;
  console.log(`Sarah is too young and ${leftYears} Years for Driving Licence.`);
}

const birthYear = 2012;

let century;

if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);

//Challenge 2
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const markBMI = massMark / heightMark ** 2;
const johnBMI = massJohn / (heightJohn * heightJohn);

if (markBMI > johnBMI) {
  console.log("Marks BMI is higher than John's BMI !");
} else {
  console.log("John's BMI is higher than Mark's BMI !.");
}

if (markBMI > johnBMI) {
  console.log(
    `Mark's BMI (${markBMI}) is higher than John's BMI (${johnBMI}) !`
  );
} else {
  console.log(
    `John's BMI (${johnBMI}) is higher than Mark's BMI (${markBMI}) !`
  );
}
