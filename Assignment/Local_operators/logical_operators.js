//AND operator

const hasValue = true;
const hasVision = true;

console.log(hasValue && hasVision); // true

const isValue = true;
const isVision = false;
console.log(isValue && isVision); // false

// OR operator

const hasLicence = true;
const hasDrive = true;

console.log(hasLicence || hasDrive); // true

// Not operator
const hasCar = true;
const hasBike = false;

console.log(!hasCar); // false
console.log(!hasBike); // true

// ===============
const hasSkill = true;
const hasAbility = false;

const hasTest = hasSkill && hasAbility;

if (hasTest) {
  console.log("Sarah Can Drive!");
} else {
  console.log("Anyone else can Dirve..");
}

// AND another
const hasSkill1 = true;
const hasAbility1 = true;

if (hasSkill1 && hasAbility1) {
  console.log("Sarah Can Drive!");
} else {
  console.log("Anyone else can Dirve..");
}

// AND & NOT
const hasSkill2 = true;
const hasAbility2 = true;
const hasTired = true;

if (hasSkill2 && hasAbility2 && !hasTired) {
  console.log("Sarah Can Drive!");
} else {
  console.log("Anyone else can Dirve..");
}

// ->
const hasSkill3 = true;
const hasAbility3 = true;
const hasTired1 = false;

if (hasSkill3 && hasAbility3 && !hasTired1) {
  console.log("Sarah Can Drive!");
} else {
  console.log("Anyone else can Dirve..");
}
// ---------------- >
// ===============

const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;

if (scoreDolphins > scoreKoalas) {
  console.log("Dolphins win the trophy!");
} else if (scoreKoalas > scoreDolphins) {
  console.log("Koalas win the trophy!");
} else {
  console.log("No one wins the trophy!");
}

// with AND operator

const scoreDolphins1 = (96 + 108 + 89) / 3;
const scoreKoalas1 = (88 + 91 + 110) / 3;

if (scoreDolphins1 > scoreKoalas1 && scoreDolphins1 >= 100) {
  console.log("Dolphins win the trophy!");
} else if (scoreKoalas1 > scoreDolphins1 && scoreKoalas1 >= 100) {
  console.log("Koalas win the trophy!");
} else if (
  scoreDolphins === scoreKoalas &&
  scoreDolphins >= 100 &&
  scoreKoalas >= 100
) {
  console.log("Both win the trophy!");
} else {
  console.log("No one wins the trophy!");
}
