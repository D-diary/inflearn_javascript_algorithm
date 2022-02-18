// 일곱 난쟁이

// 난쟁이가 일곱명이어야 하는데 아홉명이다

// 아홉명의 난쟁이들은 모두 자신이 일곱 난쟁이의 주인공이라 주장

// 일곱 난쟁이 키의 합이 100

// 입력 설명 : 아홉 개의 줄에 걸쳐 난쟁이들의 키가 주어진다. 주어지는 키는 100을 넘지 않는 자연수이며,  아홉 난쟁이의 키는 모두 다르며, 가능한 정답이 여러가지인 경우에는 아무거나 출력한다.

// 출력 설명 : 입력된 순서대로 일곱 난쟁이의 키를 출력한다.

// 입력예제 1
// 20 7 23 19 10 15 8 13

// 출력예제 1
// 20 7 23 19 10 8 13

// function solution(arr) {
//   const answer = [];
//   let num = 0;

//   for ( let i = 0; i < arr.length; i++) {
//     num += arr[i]

//     for ( let j = i + 1; j < arr.length; j++) {
//       if ( num - (arr[i] + arr[j]) === 100 ) {
//         console.log(arr[i], arr[j])
//         console.log(num - (arr[i] + arr[j]))
//       }
//     }
//   }
//   console.log(num)
//   return answer;

// }

// console.log(solution([20, 7, 23, 19, 10, 15, 25, 8, 13]))

// 영상 답안

function solution(arr) {
  let answer = arr;
  let sum = arr.reduce((a, b) => a+b, 0);
  for ( let i = 0; i < arr[arr.length -1]; i++ ) {
    for (let j = i + 1; j < arr.length; j++ ) {
      if ( sum - ( arr[i] + arr[j] ) === 100 ) {
        arr.splice(j, 1);
        arr.splice(i, 1);
      }
    }
  }

  return answer;
}
let arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));