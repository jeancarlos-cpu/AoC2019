const fs = require("fs");

const data = fs
  .readFileSync("./input.txt", "utf8")
  .split(",")
  .map(Number);

data[1] = 12;
data[2] = 2;

const add = (a, b) => a + b;
const multi = (a, b) => a * b;

const calculate = (operation, num1, num2) => {
  if (operation === 1) return add(num1, num2);
  return multi(num1, num2);
};

for (let i = 0; i <= data.length; i = i + 4) {
  const operation = data[i];
  if (operation === 99) break;
  const num1 = data[data[i + 1]];
  const num2 = data[data[i + 2]];
  const position = data[i + 3];
  data[position] = calculate(operation, num1, num2);
}

console.log(data[0]);
