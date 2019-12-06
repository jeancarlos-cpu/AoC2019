const fs = require("fs");

const data = fs.readFileSync("./input1.txt", "utf8");

const formatInput = data => {
  return data.split(",").map(Number);
};

let input = formatInput(data);

let i = 0;

while (i < input.length) {
  const opcode = input[i];

  if (opcode === 99) {
    process.exit();
  }

  const DE = opcode % 100;
  const C = Math.floor((opcode / 100) % 10);
  const B = Math.floor((opcode / 1000) % 10);
  const A = Math.floor((opcode / 10000) % 10);

  console.log(A, B, C, DE, opcode);

  const num1 = C === 0 ? input[input[i + 1]] : input[i + 1];
  const num2 = B === 0 ? input[input[i + 2]] : input[i + 2];
  const position = A === 0 ? input[i + 3] : i + 3;

  if (DE === 1) input[position] = num1 + num2;
  else if (DE === 2) input[position] = num1 * num2;
  else if (DE === 3) input[input[i + 1]] = 1;
  else console.log(input[input[i + 1]]);

  DE <= 2 ? (i += 4) : (i += 2);
}
