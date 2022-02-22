// 대문자로 통일

// 대문자와 소문자가 같이 존재하는 문자열을 입력받아 대문자로 모두 통일하여 문자열을 출력하는 프로그램을 작성하세요

// 입력설명 : 첫 줄에 문자열이 입력된다. 문자열의 길이는 100을 넘지 않는다.

// 출력설명 : 첫 줄에 대문자로 통일된 문자열이 출력된다.

// 입력예제 : ItisTimeToStudy 

// 출력예제 : ITISTIMETOSTUDY

// 내 답안

// function solution(str) {
//   let answer = '';
//   for( let i = 0; i < str.length; i++ ) {
//     if( str[i] === str[i].toUpperCase() ) {
//       answer += str[i];
//     } else if ( str[i] !== str[i].toUpperCase() ) {
//       answer += str[i].toUpperCase();
//     }
//   }
//   return answer;
// }

// console.log(solution('ItisTimeToStudy')); // ITISTIMETOSTUDY

// 영상 답안

function solution(s) {
  let answer = "";
  for ( let x of s ) {
    if ( x === x.toLowerCase() ) answer += x.toUpperCase();
    else answer += x;
  }
  return answer;
}

console.log(solution('ItisTimeToStudy'))