const calcAge = function (birthYear) {
  return 2025 - birthYear;
};

const yur = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} retired already`);
    return -1;
  }
};

console.log(yur(1991, "Lijin"));
console.log(yur(1950, "Var"));
