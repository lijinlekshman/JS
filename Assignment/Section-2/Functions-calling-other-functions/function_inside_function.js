"use strict";

function cutFruite(fruit) {
  return fruit * 3;
}

function juiceJar(apples, oranges) {
  const applePieces = cutFruite(apples);
  const orangePieces = cutFruite(oranges);
  return `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
}

console.log(juiceJar(2, 3));

//My code -- with Prompt
// console.log(
//   juiceJar(Number(prompt("Enter Apple")), Number(prompt("Enter Orange")))
// );
