// 1부터 N까지의 합 출력하기

// 자연수 N 이 입력되면 1부터 N까지의 합을 출력하는 프로그램을 작성하세요

// 입력설명 : 첫번째 줄에 20이하의 자연수 N이 입력된다.

// 출력설명 : 첫번째 줄에 1부터 N까지의 합을 출력한다.

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


