function solution(arr) {
  arr.sort((a, b) => b - a);
  
  const triangle = arr.splice(0, 3);
  console.log(triangle);
  
  let total = 0;
  let max = 0;
  for ( let i = 0; i < triangle.length; i++) {
    total += Number(triangle[i]);
  }
  
  for ( let i = 0; i < triangle.length; i++) {
    if ( max < triangle[i] ) {
      max = triangle[i];
    }
  }
  
  if ( total - max > max ) {
    return total;
  } else {
    return 0;
  }
  
}

// console.log(solution([3, 2, 3]));
// console.log(solution([3, 2, 3])); // 8
// console.log(solution([4, 1, 1])); // 0
// console.log(solution([100, 1, 1])); // 0
// console.log(solution([100, 1, 1, 30, 20, 60])); // 0
console.log(solution([100, 1, 1, 30, 20, 60, 70])); // 230