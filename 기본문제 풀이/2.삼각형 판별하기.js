// 삼각형 판별하기

// 길이가 서로 다른 A, B, C 세 개의 막대 길이가 주어지면 이 세 막대로 삼각형을 만들 수 있으면 "YES" 아니면 "NO"

// 입력 설명 : 첫번째 줄에 100이하의 서로 다른 A, B, C 막대의 길이가 주어진다.

// 출력 설명 : 첫번째 줄에 "YES", "NO"를 출력한다.

function solution(a, b, c) {
  let answer = "";
  let total = a + b + c;
  let max = 0;
  if ( a > b ) max = a;
  else max = b;
  
  if ( c > max ) max = c;
  if ( total - max > max ) {
    return answer = "yes";
  } else {
  	return answer = "no";
  }
}

console.log(solution(6, 7, 11)); // yes
console.log(solution(13, 33, 17)); // no

// 답안

// function solution(a, b, c){
//     let answer="YES", max;
//     let tot=a+b+c;
//     if(a>b) max=a;
//     else max=b;
//     if(c>max) max=c;
//     if(tot-max<=max) answer="NO"; 
//     return answer;
// }

// console.log(solution(13, 33, 17));


