function solution(n) {
  let answer = 0;
  for ( let i = 0; i <= n; i++) {
    if ( Math.pow(i, 3) <= n ) {
      answer = Math.pow(i, 3);
    }
  }
  return answer;
}

console.log(solution(99)) // 64
