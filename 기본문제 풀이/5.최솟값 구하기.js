function solution(n) {
  let min = 1000;
  for (let i = 0; i < n.length; i++) {
    if ( min > n[i] ) {
      min = n[i];
    }
  }
  return min;
}

console.log(solution([5, 3, 7, 11, 2, 15, 17])); // 2