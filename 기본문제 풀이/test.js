function solution(a, b, c) {
  let answer = "yes"
  let total = a + b + c;
  let max = 0;

  if (a > b) max = a;
  else max = b;

  if (c > max) max = c;

  if (total - max <= max) {
    return answer = "no"
  }
  return answer;
}

console.log(solution(6, 7, 11));
console.log(solution(13, 33, 17));


