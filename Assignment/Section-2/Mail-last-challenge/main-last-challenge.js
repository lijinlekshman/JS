const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(bills[i] + tip);

  console.log(`Bill: ${bills[i]}, Tip: ${tip}, Total: ${bills[i] + tip}`);
}
console.log(bills, tips, totals);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    // sum = sum + arr[i];
    sum += arr[i];
  }
  return sum / arr.length;
};

const averageTip = calcAverage(tips);
const averageTotal = calcAverage(totals);
const averageBill = calcAverage(bills);
console.log(`Average Tip: ${averageTip}`);
console.log(`Average Total: ${averageTotal}`);
console.log(`Average Bill: ${averageBill}`);
