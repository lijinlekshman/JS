//Given an array of forecasted maximum temperatures, the thermometer displays a string with the given temperatures.

// Example
// Input: [17, 21, 23]

const temperatures = [17, 21, 23];
const temp2 = [12, 5, -5, 0, 4];

for (let i = 0; i < temperatures.length; i++) {
  console.log(`... ${temperatures[i]}°C in ${i + 1} days`);
}

console.log(`... ${temperatures[0]}°C in 1 day
... ${temperatures[1]}°C in 2 days  ...${temperatures[2]}°C in 3 days...`);

// create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

const printForecast = function (arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str += `...${arr[i]} °C in ${i + 1} days `;
  }
  console.log(str);
  return str;
};
// Test the function with the given example
console.log(printForecast(temp2));
