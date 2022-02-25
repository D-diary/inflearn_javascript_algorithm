// 가장 긴 문자열

// N 개의 문자열이 입력되면 그 중 가장 긴 문자열을 출력하는 프로그램을 작성하세요

// 입력 설명
// 첫 줄에 자연수 N이 주어진다. (3<=N<=30)
// 두 번째 줄부터 N개의 문자열이 주어진다. 문자열의 길이는 100을 넘지 않는다.
// 각 문자열의 길이는 서로 다르다.

// 출력 설명
// 첫 줄에 가장 긴 문자열을 출력한다.

// 입력 예제 1
// 5, teacher, time, student, beautiful, good

// 출력 예제 1
// beautiful

// 내 풀이

function solution(str) {
  let answer = '';
  let temp = Number.MIN_SAFE_INTEGER;

  for ( let i = 0; i < str.length; i++ ) {
    for ( let j = 0; j < str[i].length; j++) {
      // console.log(str[i][j], j, str.length, str[i].length)
      if ( temp < str[i].length ) {
        temp = str[i].length;
        answer = str[i];
      }
    }
  }

  return answer;
}

console.log(solution(["teacher", "time", "student", "beautiful", "good"]));

// 영상 답안

// function solution(s) {
//   let answer, max=Number.MIN_SAFE_INTEGER;
//   for ( let x of s ) {
//     if ( x.length > max ) {
//       max = x.length;
//       answer = x;
//     } 
//   }
//   return answer;
// }

// let str = ["teacher", "time", "student", "beautiful", "good"];
// console.log(solution(str))