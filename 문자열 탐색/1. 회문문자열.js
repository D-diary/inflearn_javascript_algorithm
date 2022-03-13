/*
회문 문자열

앞에서 읽을 때나 뒤에서 읽을 때나 같은 문자열을 회문 문자열이라고 한다.
문자열이 입력되면 해당 문자열이 회문 문자열이면 'YES', 회문 문자열이 아니면 "NO"를 출력하는 프로그램을 작성하세요
단 회문을 검사할 때 대소문자를 구분하지 않습니다.

입력설명
첫 줄에 정수 길이 100을 넘지 않는 공백이 없는 문자열이 주어집니다.

출력설명
첫 번째 줄에 회문 문자열인지 결과를 YES 또는 NO를 출력합니다.

입력예제
gooG

출력예제
YES
*/

// 내 답안

function solution(str) {
  let str2 = ""
  str2 = str.toLowerCase();
  if ( str2 === str2.split('').reverse().join('') ) {
    return "yes";
  } else {
    return "no"
  }

}

console.log(solution("gooG"))


// 영상 답안

function solution(s) {
  let answer = "YES";
  s = s.toLowerCase();
  let len = s.length;
  for ( let i = 0; i < Math.floor(len/2); i++ ) {
    if ( s[i] !== s[len-i-1] ) return 'NO';
  }

  return answer;
}

let str = "gooG";
console.log(solution(str));