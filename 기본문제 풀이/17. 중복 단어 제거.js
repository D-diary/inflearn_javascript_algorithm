// 중복 단어 제거

// N개의 문자열이 입력되면 중복된 문자열은 제거하고 출력하는 프로그램을 작성
// 출력하는 문자열은 원래의 입력순서를 유지

// 입력 설명
// 첫 줄에 자연수 N이 주어진다 (3<=N<=30)
// 두 번째 줄부터 N개의 문자열이 주어진다. 문자열의 길이는 100을 넘지 않는다

// 출력 설명
// 첫 줄 부터 중복이 제거된 문자열을 차례로 출력한다.

// 입력 예제 1
// 5 good time good time student

// 출력 예제 1
// good time student

// 내 풀이

// function solution(str) {
//   const answer = [];
//   for ( let i = 0; i < str.length; i++ ) {
//     if ( !answer.includes(str[i]) ) {
//       answer.push(str[i]);
//     }
//   }
//   return answer;
// }

// console.log(solution(["good", "time", "good", "time", "student"])) // [ 'good', 'time', 'student' ]


// 영상 답안

function solution(s) {
  let answer;
  
  answer=s.filter(function(v, i) {
    // if ( s.indexOf(v) === i ) return true;
    return s.indexOf(v)===i;
  });

  return answer;
}
console.log(solution(["good", "time", "good", "time", "student"]))
