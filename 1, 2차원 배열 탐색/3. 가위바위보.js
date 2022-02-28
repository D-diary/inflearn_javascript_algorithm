// 가위 바위 보

// A, B 두 사람이 가위바위보 게임을 합니다. 총 N번의 게임을 하여 A가 이기면 A를 출력하고, B가 이기면 B를 출력합니다. 비길 경우에는 D를 출력합니다.

// 가위, 바위, 보의 정보는 1:가위, 2:바위, 3:보 로 정하겠습니다.
// 예를 들어 N = 5 이면
// 회수 / 1 / 2 / 3 / 4 / 5
// A    / 2 / 3 / 3 / 1 / 3
// B    / 1 / 1 / 2 / 2 / 3
// 승자 / A / B / A / B / D

// 두 사람의 각 회의 가위, 바위, 보 정보가 주어지면 각 회를 누가 이겼는지 출력하는 프로그램을 작성하세요

// 입력 설명
// 첫번째 줄에 게임 횟수인 자연수 N(1<=N<=100)이 주어집니다.
// 두번째 줄에 A가 낸 가위, 바위, 보 정보가 N개 주어집니다
// 세번째 줄에는 B가 낸 가위, 바위, 보 정보가 N개 주어집니다

// 출력 설명
// 각 줄에 각 회의 승자를 출력합니다. 비겼을 경우는 D를 출력합니다.

// 입력 예제
// 5
// 2 3 3 1 3
// 1 1 2 2 3

// 출력 예제
// A
// B
// A
// B
// D

// function solution(a, b) {
//   let result = '';
  
//   for ( let i = 0; i < a.length; i++ ) {
//     if ( a[i] === b[i] ) result += 'D';
//     if ( a[i] === 1 ) {
//       if ( b[i] === 2 ) {
//         result += 'B';
//       } else if ( b[i] === 3 ){
//         result += 'A';
//       }
//     }
//     if ( a[i] === 2 ) {
//       if ( b[i] === 3 ) {
//         result += 'B';
//       } else if ( b[i] === 1 ) {
//         result += 'A';
//       }
//     }
//     if ( a[i] === 3 ) {
//       if ( b[i] === 1 ) {
//         result += 'B';
//       } else if ( b[i] === 2 ) {
//         result += 'A';
//       }
//     }
//   }
//   return result;
// }

// console.log(solution([2, 3, 3, 1, 3],[1, 1, 2, 2, 3]))

// 답안

function solution(a, b){         
  let answer="";
  for(let i=0; i<a.length; i++){
      if(a[i]===b[i]) answer+="D ";
      else if(a[i]===1 && b[i]===3) answer+="A ";
      else if(a[i]===2 && b[i]===1) answer+="A ";
      else if(a[i]===3 && b[i]===2) answer+="A ";
      else answer+="B ";
  }
  
  return answer;
}

let a=[2, 3, 3, 1, 3];
let b=[1, 1, 2, 2, 3];
console.log(solution(a, b));