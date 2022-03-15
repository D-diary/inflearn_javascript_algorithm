/* 

숫자만 추출

문자와 숫자가 섞여있는 문자열이 주어지면 그 중 숫자만 추출하여 그 순서대로 자연수를 만듭니다.

만약 "tge0a1h205er"에서 숫자만 추출하면 0, 1, 2, 0, 5이고 이것을 자연수를 만들면 1205이 됩니다.

추출하여 만들어지는 자연수는 100,000,000을 넘지 않습니다

입력 설명

첫 줄에 숫자가 쓰인 문자열이 주어집니다. 문자열의 길이는 50을 넘지 않습니다.

출력 설명

첫 줄에 자연수를 출력합니다.

입력 예제 1 
g0en2T0s8esoft

출력 예제 1
208


*/

function solution(str) {
  const number = "0123456789";
  let answer = "";
  
  console.log(str);
  
  for ( let i = 0; i < str.length; i++ ) {
    for ( let j = 0; j < number.length; j++ ) {
      if ( str[i]===number[j] ) {
        answer += str[i];
      }
    }
  }
  return Number(answer);
}

console.log(solution("g0en2T0s8eSoft"));

// 영상 답안

// function solution(str) {
//   let answer = "";
//   for ( let x of str ) {
//     if ( !isNaN(x)) answer += x;
//   }
//   return parseInt(answer);
// }

// let str = "g0e00n2%0s8eSoft";
// console.log(solution(str));
