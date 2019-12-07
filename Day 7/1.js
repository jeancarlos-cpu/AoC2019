const fs = require("fs");

const seq = fs
  .readFileSync("./input.txt", "utf8")
  .split(",")
  .map(Number);

const arr = [0, 1, 2, 3, 4];
let max = 0;

const program = (input, inputSignal, ampSetting) => {
  let i = 0;
  let output = 0;
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
        input[input[i + 1]] = i === 0 ? inputSignal : ampSetting;
        i += 2;
        break;
      case 4:
        output = input[input[i + 1]];
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
        return output;
      default:
        throw new Error("invalid opcode");
    }
  }
};

const runProgram = (sequence, ampSettings, input = 0, count = 0) => {
  const output = program(sequence, ampSettings[count], input);
  return count < ampSettings.length - 1
    ? runProgram(sequence, ampSettings, output, ++count)
    : output;
};

const permArr = [],
  usedChars = [];

const permute = input => {
  let i, ch;
  for (i = 0; i < input.length; i++) {
    ch = input.splice(i, 1)[0];
    usedChars.push(ch);
    if (input.length == 0) {
      permArr.push(usedChars.slice());
    }
    permute(input);
    input.splice(i, 0, ch);
    usedChars.pop();
  }
  return permArr;
};

const ampSettings = permute(arr);

for (let i = 0; i < ampSettings.length; i++) {
  output = runProgram(seq, ampSettings[i]);
  if (max < output) max = output;
}

console.log(max);
