// type conversion

const inputYear = "1991";

console.log(Number(inputYear), inputYear);

console.log(inputYear + 18); // 199118
console.log(Number(inputYear) + 18); // 2009 - string to Numeric conversion

console.log(String(23), 23); // 23 - Numeric to string conversion

//type coercion
console.log("I am " + 23 + " years old");

console.log("23" - "10" - 3);

console.log("23" + "10" + 3);

console.log("23" * "2");

console.log("23" / "2");

let n = "1" + 1;
n = n - 1;
console.log(n);
