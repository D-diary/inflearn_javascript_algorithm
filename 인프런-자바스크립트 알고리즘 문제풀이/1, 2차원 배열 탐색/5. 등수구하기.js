/*
등수 구하기

N(1<=N<=100)명의 학생의 국어점수가 입력되면 각 학생의 등수를 입력된 순서대로 출력하는 프로그램을 작성하세요.

입력 설명
첫 줄에 N(3<=N<=1000)이 입력되고, 두번째 줄에 국어점수를 의미하는 N개의 정수가 입력된다. 같은 점수가 입력될 경우 높은 등수로 동일 처리한다. 즉 가장 높은 점수가 92점인데 92점이 3명 존재하면 1등이 3명이고 그 다음 학생은 4등이 된다.

출력 설명
입력된 순서대로 등수를 출력한다.

입력 예제 1
5
87 89 92 100 76

출력 예제 1
4 3 2 1 5
*/

// 다른 답안

function solution(arr) {
  let n = arr.length;
  let answer = [];

  for (let i = 0; i < n; i++) {
    answer.push(1);
  }

  for ( let i = 0; i < arr.length; i++ ) {
    for ( let j = 0; j < arr.length; j++ ) {
      if (arr[i] < arr[j]) {
        answer[i]++;
      }
    }
  }

  return arr;
}

console.log(solution([87, 89, 92, 100, 76])); // 4, 3, 2, 1, 5

// function solution(num) {
//   const nums = num
//   let answer = [];
//   let arr = [];
//   for ( let i = 0; i < num.length; i++ ) {
//     arr = num.sort(function(a, b) {
//       return b - a;
//     })
//   }
//   console.log(arr)
//   console.log(nums);
//   console.log(arr.indexOf(nums[0]));

//   return answer;
// }

// 답안

function solution(arr) {
  let n = arr.length;
  let answer = Array.from({length:n}, ()=>1);
  for ( let i = 0; i < arr.length; i++ ) {
    for ( let j = 0; j < arr.length; j++ ) {
      if (arr[i] < arr[j]) {
        answer[i]++;
      }
    }
  }

  return arr;
}

console.log(solution([87, 89, 92, 100, 76])); // 4, 3, 2, 1, 5