function logger() {
  console.log("Hello World");
}

logger(); // calling | running | invoking

logger();
logger();

function fruitJar(apples, oranges) {
  console.log(apples, oranges); // not neccessary
  const juice = `The Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

const juiceJar = fruitJar(5, 0);
console.log(juiceJar);

const mixJuice = fruitJar(4, 2);
console.log(mixJuice);
