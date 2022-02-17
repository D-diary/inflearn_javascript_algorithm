function solution(n) {
  let min = 1000;
  for (let i = 0; i < n.length; i++) {
    if ( min > n[i] ) {
      min = n[i];
    }
  }
  return min;
}

console.log(solution([5, 3, 7, 11, 2, 15, 17])); // 2

// 영상 답안

// min을 가장 큰 값으로 지정하고 반복

// function solution(arr) {
//   let answer, min = Number.MAX_SAFE_INTEGER;

//   for ( let i = 0; i < arr.length; i++) {
//     if ( arr[i] < min ) min = arr[i];
//   }
//   answer = min;
//   return answer;
// }

// let arr = [5, 7, 1, 3, 2, 9, 11];
// console.log(solution(arr)); // 1

// min을 배열의 첫번째로 지정 1번 인덱스부터 반복

// function solution(arr) {
//   let answer, min = arr[0];

//   for ( let i = 1; i < arr.length; i++) {
//     if ( arr[i] < min ) min = arr[i];
//   }
//   answer = min;
//   return answer;
// }

// let arr = [5, 7, 1, 3, 2, 9, 11];
// console.log(solution(arr)); // 1