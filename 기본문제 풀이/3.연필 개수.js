function solution(n) {
  let answer = 0;
  answer = Math.ceil( n / 12 );
  return answer;
}

console.log(solution(25)); // 3
console.log(solution(178)); // 15

// 답안


// function solution(n){
//     let answer;
//     answer=Math.ceil(n/12);
//     return answer;
// }

// console.log(solution(178));

// 영상 답안

// function solution(n){
//   let answer = Math.ceil(n/12);
  
//   return answer;
// }

// console.log(solution(178));