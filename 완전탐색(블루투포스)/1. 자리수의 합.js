/*

자릿수의 합

N개의 자연수가 입력되면 각 자연수의 자릿수의 합을 구하고, 그 합이 최대인 자연수를 출력하는 프로그램을 작성하세요. 자릿수의 합이 같은 경우 원래 숫자가 큰 숫자를 답으로 합니다.

만약 235와 1234가 동시에 답이 될 수 있다면 1234를 답으로 출력해야 합니다.

입력설명
첫 줄에 자연수의 개수 N(3<=N<=100)이 주어지고, 그 다음 줄에 N개의 자연수가 주어진다.
각 자연수의 크기는 10,000,000를 넘지 않는다.

출력설명
자릿수의 합이 최대인 자연수를 출력한다.

입력예제

128 460 603 40 521 137 123

출력예제
137

*/

function solution(n, arr) {
  let answer = [];
  let num = 0;

  for ( let i = 0; i < n; i++ ) {
    let str = String(arr[i])
    for ( let j = 0; j < str.length; j++ ) {
      num += Number(str[j])
      // console.log('yy', num, str[j], str[j+1])
    }
    answer.push(num);
    num = 0;
  }
  console.log(answer);
}

console.log(solution(7, [128, 460, 603, 40, 521, 137, 123]));

// 영상 답안

function solution(n, arr) {
  let answer, max = Number.MIN_SAFE_INTEGER;
  for ( let x of arr ) {
    let sum = 0, tmp = x;
    while ( tmp ) {
      // let t = tmp % 10;
      // sum += t;
      sum += (tmp%10);
      tmp = Math.floor(tmp/10);
    }
    if ( sum > max ) {
      max = sum;
      answer = x;
    } else if ( sum === max ) {
      if ( x > answer ) {
        answer = x;
      }
    }

  }

  return answer;
}

let arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr)); // 137

// 영상 답안 2

function solution(n, arr) {
  let answer, max = Number.MIN_SAFE_INTEGER;
  for ( let x of arr ) {
    let sum = x.toString().split('').reduce((a, b) => a + Number(b), 0);
    if ( sum > max ) {
      max = sum;
      answer = x;
    } else if ( sum === max ) {
      if ( x > answer ) {
        answer = x;
      }
    }

  }

  return answer;
}

let arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr)); // 137