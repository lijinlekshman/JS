//while loop
let rep = 1;
while (rep < 6) {
  console.log(`Lifting Weights ${rep}`);
  rep++;
}

// --------------//
//checking a dice is 6 and if it;s 6 then the loop will break

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`Your Rolled ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) {
    console.log(`-----Loop is Ended ---`);
  }
}
