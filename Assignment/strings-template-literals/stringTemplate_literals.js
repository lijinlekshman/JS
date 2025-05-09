const firstName = "John";
const job = "developer";
const birthYear = 1990;
const year = 2037;

const jonas =
  "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
console.log(jonas);

const jonasNew = ` I'm ${firstName}, a ${year - birthYear} year old ${job} !`;

console.log(jonasNew);
