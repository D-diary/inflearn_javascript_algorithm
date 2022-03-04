let result;

function recursive(number) {
  if (number == 1 || number == 0) {
    return number
  }
  return recursive(number - 1) + recursive(number -2);
}

// 이전값과 이전전 값을 더한 값이 현재의 값