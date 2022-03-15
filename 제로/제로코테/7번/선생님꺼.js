// q7

function solution(arr, n) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
      result = result.concat(arr[i]);
  }
  // console.log(result);

  result.sort((a, b) => a - b);
  // console.log(result);

  return result[n - 1];
}

console.log(solution([[1, 2, 22], [3, 4, 23], [8, 9, 33]], 7)); // 22