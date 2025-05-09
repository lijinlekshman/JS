const friends = ["Noufal", "Akhil", "Plip"];
//--- Add elements ---
//push method

// friends.push("Linu");
console.log(friends); // ["Noufal", "Akhil", "Plip", "Linu"]

const newLength = friends.push("Linu");
console.log(newLength); // 5

//shift method
friends.unshift("Shanu");
console.log(friends); // ["Shanu", "Noufal", "Akhil", "Plip", "Linu"]

// --- Remove elements ---
friends.pop();
console.log(friends); //

//sotre the popped value in a variable
const popped = friends.pop();
console.log(popped); // Plip
console.log(friends);

//fisrt value of the array
friends.shift();
console.log(friends); // ["Noufal", "Akhil"]

console.log(friends.indexOf("Akhil")); // 1

// includes method
console.log(friends.includes("Akhil")); // true
console.log(friends.includes("Bob")); // false

if (friends.includes("Akhil")) {
  console.log("You have a friend called Akhil");
}
