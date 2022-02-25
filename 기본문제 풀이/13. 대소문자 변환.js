// 대소문자 변환

// 대문자와 소문자가 같이 존재하는 문자열을 입력 받아 대문자는 소문자로 소문자는 대문자로 변환하여 출력하는 프로그램을 작성하세요

// 입력 설명 : 첫 줄에 문자열이 입력된다. 문자열의 길이는 100을 넘지 않는다.

// 출력 설명 : 첫 줄에 대문자는 소문자로, 소문자는 대문자로 변환된 문자열 출력

function solution(s) {
  let answer = '';

  for ( let i = 0; i < s.length; i++) {
    if ( s[i] === s[i].toUpperCase() ) {
      answer += s[i].toLowerCase();
    } else if ( s[i] === s[i].toLowerCase() ) {
      answer += s[i].toUpperCase();
    }
  }
  return answer;
}

console.log(solution('StuDY')); // sTUdy