// 문자 찾기

// 한 개의 문자열을 입력 받고 특정 문자를 입력 받아 해당 특정 문자가 입력받은 문자열에 몇 개 존재하는지 알아내시오. 문자열의 길이는 100을 넘지 않습니다.

// 입력 설명 : 첫 줄에 문자열이 주어지고, 두번째 줄에 문자가 주어진다.

// 출력 설명 : 첫 줄에 해당 문자의 개수를 출력한다.

// 입력 예제 : COMPUTERPROGRAMMING / R

// 출력 예제 : 3

// 풀이 1

// function solution(s, c) {
//   let count = 0;
  
//   for ( let i = 0; i < s.length; i++) {
//     if ( s[i] === c ) count += 1;
//   }

//   return count
// }

// console.log(solution('COMPUTERPROGRAMMING', 'R')) // 3


// 풀이 2

// function solution(s, c) {
//   const arr = [];

//   for ( let i = 0; i < s.length; i++ ) {
//     if ( s[i] === c ) arr.push(s[i])
//   }
//   return arr.length;
// }

// console.log(solution('COMPUTERPROGRAMMING', 'R')) // 3

// 영상 답안 1

// function solution(s, t) {
//   let answer = 0;

//   for ( let x of s ) {
//     if ( x === t ) answer ++;
//   }
//   return answer;
// }

// let str = 'COMPUTERPROGRAMMING';
// console.log(solution(str, 'R'));

// 영상 답안 2

function solution(s, t) {
  let answer = s.split(t).length;

  return answer-1;
}

let str = 'COMPUTERPROGRAMMING';
console.log(solution(str, 'R'));