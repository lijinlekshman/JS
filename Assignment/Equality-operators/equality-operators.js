const age = 18;
if (age === 18) console.log("you are eligible for Passport (Strict)");

if (age == 18) console.log("you're in 18 (Loose)");

//prompt
// const fav = prompt("fav number?");
// console.log(fav);
// console.log(t ypeof fav);

const num = Number(prompt("Enter a number:"));

if (num === 23) {
  console.log("23 is a great number!");
} else if (num === 8) {
  console.log("8 returens");
} else {
  console.log("number is not 23 or 8");
}
