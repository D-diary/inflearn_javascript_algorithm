function solution(s) {
  if ( Math.abs(s) > 100000 ) {
    return 0;
  }
  let answer = 0;
  s = String(s);
  let flag = false;
  if ( s[0] === '-' ) {
    s = s.substring(1);
    flag = true;
  }
  answer += Number(s.split('').reverse().join(''));
  if ( flag ) {
    answer = answer *-1;
  }
  return answer;
}

console.log(solution(-587)); // -785
console.log(solution(340)); // -785