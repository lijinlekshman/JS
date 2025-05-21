function calcBMI() {
  bmi = weight / (height * height);
  return bmi;
}

const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

const markBMI = mark.calcBMI();
const johnBMI = john.calcBMI();

if (markBMI > johnBMI) {
  console.log(
    `${mark.fullName}'s BMI (${markBMI}) is higher than ${john.fullName}'s (${johnBMI})!`
  );
} else if (johnBMI > markBMI) {
  console.log(
    `${john.fullName}'s BMI (${johnBMI}) is higher than ${mark.fullName}'s (${markBMI})!`
  );
}
