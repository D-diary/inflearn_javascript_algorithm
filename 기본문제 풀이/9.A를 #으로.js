// A를 #으로

// 대문자로 이루어진 영어단어가 입력되면 단어에 포함된 'A'를 모두 '#'으로 바꾸어 출력하는 프로그램을 작성하세요.

// 입력 설명 : 첫번째 줄에 문자열이 입력된다.

// 출력 설명 : 첫번째 줄에 바뀐 단어를 출력한다.

// function solution(n) {
//   const arr = [];
//   for ( let i = 0; i < n.length; i++) {
//     if ( n[i] !== 'A' ) arr.push(n[i])
//     if ( n[i] === 'A' ) arr.push('#')
//   }
//   return arr.join('')
// }

// console.log(solution('BANANA'))

// 영상 답안

function solution(s) {
  let answer = "";

  for ( let x of s ) {
    if ( x === 'A' ) answer +='#';
    else answer += x;
  }

  return answer;
}

let str = "BANANA";
console.log(solution(str));