const markWeight = 78; // kg
const markHeight = 1.69; // m
const johnWeight = 92; // kg
const johnHeight = 1.95; // m

const markBMS = markWeight / markHeight ** 2;

console.log(markBMS);

const johnBMS = johnWeight / johnHeight ** 2;
console.log(johnBMS);

const markHigherBMI = markBMS > johnBMS;
if (markBMS > johnBMS) {
  console.log("Marks BMI is higher than Johns BMI");
} else {
  console.log("Marks BMI is lower than JOhns BMI");
}
console.log(markHigherBMI);

console.log(`Is Marks BMI higher than Johns BMI? ${markHigherBMI}`); // Template literal
