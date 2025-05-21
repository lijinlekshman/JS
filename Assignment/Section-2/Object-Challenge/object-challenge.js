"use strict";

//Jonas has 3 friends, and his best friend is called Michael.

const Jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2025 - 1991,
  job: "Teacher",
  friends: ["Michael", "Peter", "Steven"],
};

console.log(
  `${Jonas.firstName} has ${Jonas.friends.length} friends, and his best friend is called ${Jonas.friends[0]}`
);
// Output:- Jonas has 3 friends, and his best friend is called Michael.

const lijin = {
  firstName: "Lijin",
  lastName: "Lekshman",
  birthYear: 1991,
  job: "Software Engineer",
  friends: ["Linu", "Akhil", "Plip"],
  isLicenced: true,
  //   calcAge: function (birthYear) {
  //     return 2025 - birthYear;
  //   },

  //   calcAge: function () {
  //     return 2025 - this.birthYear;
  //   },

  calcAge: function () {
    this.age = 2025 - this.birthYear;
    return this.agel;
  },
  getSummary: function () {
    this.drivingLicence = function () {
      if (this.isLicenced) {
        return "a driving";
      } else {
        return "no driving";
      }
    };
    return `${this.firstName} is a ${this.age} year's old ${
      this.job
    }, and he has ${this.drivingLicence()} (${
      this.isLicenced ? "a driving" : "no driving"
    })license.`;
  },
};
// console.log(lijin.calcAge(1991));
// console.log(lijin["calcAge"](1991));

console.log(lijin.calcAge());
console.log(lijin.age);
// Output:- 34

// -------------------------------

// Object Challenge 2
//"Lijin is a 34 year old Developer, and he has a/no driving license (true)".

console.log(lijin.getSummary());
