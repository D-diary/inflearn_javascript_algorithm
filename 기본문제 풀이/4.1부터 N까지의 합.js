function solution(n) {
  let num = 1;

  for (let i = 2; i <= n; i++) {
    num += i;
    console.log('i', i, 'num',num);
  }
  return num;
}

console.log(solution(6));
console.log(solution(10));

// 영상 답안, 자료 답안

// function solution(n) {
//   let answer = 0;
//   for (let i = 1; i <= n; i++) {
//     answer = answer + i;
//   }
//   return answer;
// }

// console.log(solution(6));


