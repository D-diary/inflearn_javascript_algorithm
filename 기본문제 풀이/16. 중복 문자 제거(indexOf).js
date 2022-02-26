// 중복 문자 제거

// 소문자로 된 한 개의 문자열이 입력되면 중복된 문자를 제거하고 출력하는 프로그램을 작성하세요

// 제거된 문자열의 각 문자는 원래 문자열의 순서를 유지합니다

// 입력 설명

// 첫 줄에 문자열이 입력됩니다.

// 출력 설명

// 첫 줄에 중복 문자가 제거된 문자열을 출력합니다. 

// 입력 예제 1
// ksekkset

// 출력 예제 1
// kset

function solution(s) {
  const answer = [];
  for ( let i = 0; i < s.length; i++ ) {
    if ( !answer.includes(s[i] ) ) {
      answer.push(s[i]);
    }
  }
  return answer.join('');
}

console.log(solution('ksekkset')) // kset

// 영상 답안

// function solution(s) {
//   let answer = '';
//   for ( let i = 0; i < s.length; i++ ) {
//     if ( s.indexOf( s[i] === i ) ) answer += s[i];
//   }
//   return answer;
// }

// console.log(solution("ksekkset"));

// k가 몇개 인지 찾아보기

// function solution(s) {
//   let answer = 0;
//   let pos = s.indexOf('k');
//   while ( pos!== -1 ) {
//     answer++;
//     pos = s.indexOf('k', pos+1)
//   }
//   return answer;
// }
// console.log(solution("ksekkset"))