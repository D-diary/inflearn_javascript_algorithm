let result;

function recursive(number) {
  if (number === 1) {
    return number;
  }
  // 5 4 3 2 1
  return recursive(number - 1) * number
}

result = recursive(5); // 5! => 5 X 4 X 3 X 2 X 1