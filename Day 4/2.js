const min = 231832;
const max = 767346;

const isTidy = number => {
  const x = number.toString();
  for (i = 0; i < x.length; i++) {
    if (x[i] > x[i + 1]) {
      return false;
    }
  }
  return true;
};

const getTidyNumbers = (min, max) => {
  result = [];
  for (let i = min; i <= max; i++) {
    if (isTidy(i)) result.push(i);
  }
  return result;
};

const hasAdjacent = data => {
  const result = [];
  for (let i = 0; i < data.length; i++) {
    const x = data[i].toString();
    for (let j = 0; j < x.length; j++) {
      if (x[j] === x[j + 1] && x[j + 1] !== x[j + 2] && x[j] !== x[j - 1]) {
        result.push(Number(x));
        break;
      }
    }
  }
  return result;
};

const tidy = getTidyNumbers(min, max);
const adjacent = hasAdjacent(tidy);

console.log(adjacent.length);
