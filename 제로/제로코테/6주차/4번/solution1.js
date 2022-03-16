function solution(S) {
  s = parseInt(Number(S),2);
  let count = 0;

  while (s) {
    if ( s % 2 === 0 ) {
      s = s / 2;
      count++
    }
    if ( s & 2 !== 0 ) {
      s = s - 1;
      count++
    }
  }
  return count;
}

console.log(solution("1101"));