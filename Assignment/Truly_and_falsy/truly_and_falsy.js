//Truthy and Falsy
// Falsy values(5) = 0, " ", null, undefined, NaN.

console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN)); // false
console.log(Boolean("Jonas")); // true
console.log(Boolean({})); // true

const money = 0;
if (money) {
  console.log("Don't spend it all!");
} else {
  console.log("Get a Job !");
}

const moneyNew = 100;
if (moneyNew) {
  console.log("Don't spend it all!");
} else {
  console.log("Get a Job !");
}

//undefined
let height;

if (height) {
  console.log("Height Is desfined");
} else {
  console.log("Height is not defined");
}
