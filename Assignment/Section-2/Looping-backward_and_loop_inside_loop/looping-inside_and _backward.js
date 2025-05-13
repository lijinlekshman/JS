const lijin = [
  "Lijin",
  "Lekshman",
  2025 - 1991,
  "Developer",
  ["Linu", "Noufal", "Akhil", "Plip"],
];

//backward loop

for (i = lijin.length - 1; i >= 0; i--) {
  console.log(i, lijin[i]);
}

//loop inside loop
for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`-----------Starting Exercise ${exercise}.`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Excercise ${exercise} : Lifting weight repetition ${rep} 🏋️‍♂️`);
  }
}
