function solution(n) {
  let num = 1;
  let arr = [];
  for ( let i = 1; i <= n; i++ ) {
    arr.push(num);
    num ++;
  }
  console.log(arr)

  num = 0;
  const answer = [];
  let a = 0; b = 0;
  for ( let i = 0; i < arr.length; i++ ) {
    num += arr[i]
  }
  console.log(num);
}

console.log(solution(15));

// function solution(n) {
//   let num = 1;

//   for (let i = 2; i <= n; i++) {
//     num += i;
//     console.log('i', i, 'num',num);
//   }
//   return num;
// }

// console.log(solution(6));
// console.log(solution(10));

function solution(arr) {
  const answer = [];
  let num = 0;
  let a = 0, b = 0;

  for ( let i = 0; i < arr.length; i++) {
    num += arr[i]
  }
  console.log(num);

  for ( let i = 0; i < arr.length; i++) {
    for ( let j = i + 1; j < arr.length; j++) {
      if ( num - (arr[i] + arr[j]) === 100 ) {
        a = arr[i];
        b = arr[j];
      }
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if ( arr[i] !== a && arr[i] !== b) {
      answer.push(arr[i]);
    }
  }
  console.log(a,b)
  return answer;

}

console.log(solution([20, 7, 23, 19, 10, 15, 25, 8, 13]));

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