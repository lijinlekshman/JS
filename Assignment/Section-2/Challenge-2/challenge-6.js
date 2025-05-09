const bills = [125, 555, 44];

const calcTip = function (bill) {
  const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
  return tip;
};
const tips = [
  calcTip(bills[0]),
  calcTip(bills[1]),
  calcTip(bills[bills.length - 1]),
];

const totals = [
  bills[0] + tips[0],
  bills[1] + tips[1],
  bills[bills.length - 1] + tips[tips.length - 1],
];

console.log(
  `The bills are ${bills}, the tips are ${tips}, and the totals are ${totals}`
);

const bill1 = function () {
  return `the bill is ${bills[0]} and the tip is ${tips[0]} and the total is ${
    bills[0] + tips[0]
  }`;
};
const bill2 = function () {
  return `the bill is ${bills[1]} and the tip is ${tips[1]} and the total is ${
    bills[1] + tips[0]
  }`;
};
const bill3 = function () {
  return `the bill is ${bills[bills.length - 1]} and the tip is ${
    tips[tips.length - 1]
  } and the total is ${bills[bills.length - 1] + tips[tips.length - 1]}`;
};

console.log(bill1(), bill2(), bill3());

console.log(`Th bills are`);

calcTip(125);

// Exercise 2
