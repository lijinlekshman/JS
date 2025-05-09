const calcAverage = (a, b, c) => (a + b + c) / 3;

// const scoreDolphins = calcAverage(44, 23, 71);

// const scoreKoalas = calcAverage(65, 54, 49);

// changing the variables to let to change the values later
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dophins win 🏆 (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win 🏆 (${avgKoalas} vs. ${avgDolphins})`);
  } else if (avgDolphins * 2 === avgKoalas * 2) {
    console.log(`It's a draw (${avgDolphins} vs. ${avgKoalas})`);
  } else {
    console.log(`No team wins... 😥`);
  }
};

//replacing the values of the variables to test the function
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);

checkWinner(scoreDolphins, scoreKoalas);
