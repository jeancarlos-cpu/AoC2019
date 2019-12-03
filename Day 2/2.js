const fs = require("fs");

const file = fs
  .readFileSync("./input.txt", "utf8")
  .split(",")
  .map(Number);

for (let k = 0; k <= 99; k++) {
  for (let j = 0; j <= 99; j++) {
    let data = [...file];
    data[1] = k;
    data[2] = j;
    for (let i = 0; i <= file.length; i += 4) {
      const operation = data[i];
      if (operation === 99) break;
      const num1 = data[data[i + 1]];
      const num2 = data[data[i + 2]];
      const position = data[i + 3];
      data[position] = operation === 1 ? num1 + num2 : num1 * num2;
    }
    if (data[0] === 19690720) {
      console.log(100 * k + j);
    }
  }
}
