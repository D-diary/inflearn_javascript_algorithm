// 홀수

// 주어진 값 중 홀수인 자연수를 골라 그 합을 구하고 고른 홀수 중 최소값을 찾으세요

// 입력 설명 : 첫번째 줄에 자연수 7개가 주어진다. 주어지는 자연수는 100보다 작다. 홀수가 한개 이상 존재한다

// 출력 설명 : 첫번째 줄에 홀수들의 합을 출력하고 둘째 줄에 홀수들 중 최소값을 출력한다.

function solution(n) {
  let num = 0;
  const arr = [];
  const answer = [];
  
  for ( let i = 0; i < n.length; i++) {
    if ( n[i] % 2 !== 0 ) {
      num += n[i];
      arr.push(n[i]);
    }
  }

  answer.push(num)
  
  let min = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if ( min > arr[i] ) min = arr[i]; 
  }

  answer.push(min)
	
  return answer;
}

console.log(solution([12, 77, 38, 41, 53, 92, 85])) // 256 , 41

// 영상 답안

// function solution(arr) {
//   let answer = [];
//   let sum = 0; min = Number.MAX_SAFE_INTEGER;
//   for( let x of arr ) {
//     if (x % 2 === 1) {
//       sum += x;
//       if( x < min ) min = x;
//     }
//   }
//   answer.push(sum);
//   answer.push(min);
//   return answer;
// }

arr = [12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));

// 자료 답안

// function solution(arr){
//   let answer=[];
//   let sum=0, min=1000;
//   for(let x of arr){
//       if(x%2===1){
//           sum+=x;
//           if(x<min) min=x;
//       }
//   }
//   answer.push(sum);
//   answer.push(min);     
//   return answer;
// }

// arr=[12, 77, 38, 41, 53, 92, 85];
// console.log(solution(arr));