const fs = require("fs");

const input = fs
  .readFileSync("./input2.txt", "utf8")
  .split(",")
  .map(Number);

let i = 0;

while (i < input.length) {
  const opcode = input[i];

  const DE = opcode % 100;
  const C = Math.floor((opcode / 100) % 10);
  const B = Math.floor((opcode / 1000) % 10);
  const A = Math.floor((opcode / 10000) % 10);

  const num1 = C === 0 ? input[input[i + 1]] : input[i + 1];
  const num2 = B === 0 ? input[input[i + 2]] : input[i + 2];
  const position = A === 0 ? input[i + 3] : i + 3;

  switch (DE) {
    case 1:
      input[position] = num1 + num2;
      i += 4;
      break;
    case 2:
      input[position] = num1 * num2;
      i += 4;
      break;
    case 3:
      input[input[i + 1]] = 5;
      i += 2;
      break;
    case 4:
      console.log(input[input[i + 1]]);
      i += 2;
      break;
    case 5:
      if (num1 !== 0) i = num2;
      else i += 3;
      break;
    case 6:
      if (num1 === 0) i = num2;
      else i += 3;
      break;
    case 7:
      input[position] = num1 < num2 ? 1 : 0;
      i += 4;
      break;
    case 8:
      input[position] = num1 === num2 ? 1 : 0;
      i += 4;
      break;
    case 99:
      process.exit();
    default:
      throw new Error("invalid opcode");
  }
}
