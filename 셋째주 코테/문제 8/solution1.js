function solution(arr) {
  arr.sort((a, b) => b - a);
  
  const square = arr.splice(0, 4);
  console.log(square);
  
  let total = 0;
  let max = 0;
  for ( let i = 0; i < square.length; i++) {
    total += Number(square[i]);
  }
  
  for ( let i = 0; i < square.length; i++) {
    if ( max < square[i] ) {
      max = square[i];
    }
  }
  
  if ( total - max > max ) {
    return total;
  } else {
    return 0;
  }
  
}

console.log(solution([3, 2, 3, 2]));