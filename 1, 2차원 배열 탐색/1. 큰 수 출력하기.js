// 큰 수 출력하기

// N(1<=N<=100)개의 정수를 입력받아, 자신의 바로 앞 수 보다 큰 수만 출력하는 프로그램을 작성하세요.(첫 번째 수는 무조건 출력한다)

// 입력 설명
// 첫 줄에 자연수 N이 주어지고, 그 다음 줄에 N개의 정수가 입력된다.

// 출력 설명
// 자신의 바로 앞 수 보다 큰 수만 한 줄로 출력한다.

// 입력 예제 1
// 7 3 9 5 6 12


// 출력 예제 1
// 7 9 6 12

// 내 풀이

// function solution(n) {
//   const answer = [];
//   answer.push(n[0]);

//   for ( let i = 0; i < n.length; i++ ) {
//     console.log()
//     if ( n[i] > n[i - 1] ) {
//       answer.push(n[i])
//     }
//   }
//   return answer;
// }

// console.log(solution([7,3,9,5,6,12])) 

// 영상 답안

function solution(arr) {
  let answer = [];
  answer.push(arr[0]);
  for ( let i = 1; i < arr.length; i++ ) {
    if ( arr[i] > arr[i-1] ) answer.push(arr[i]);
  }

  return answer;
}

let arr = [7,3,9,5,6,12];
console.log(solution(arr));