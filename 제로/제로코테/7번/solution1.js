function solution(arr, Num) {
  const newArr = arr[0];

  for ( let i = 1; i < arr.length; i++ ) {
    newArr.concat(arr[i]);
  }
  console.log('n',newArr)
}

console.log(solution([[1, 2, 22], [3, 4, 23], [8, 9, 33]], 7)); // 22