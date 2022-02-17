// 10부제

// 자동차 번호의 일의 자리 숫자와 날짜의 일의 자리 숫자가 일치하면 해당 자동차 운행금지

// 10부제를 위반하는 자동차 대수를 세서 출력

function solution(a, b) {
  const arr = [];

  for ( let i = 0; i < b.length; i++) {
    if ( a === b[i][1] ) {
      arr.push([b[i]])
    }
  }
  return arr.length
}

console.log(solution(3, [25, 23, 11, 47, 53, 17, 33]))

// 영상 답안

function solution(day, arr) {
  let answer = 0;

  for(let x of arr) {
    if( x % 10 === day ) answer++;
  }

  return answer;
}

arr = [25, 23, 11, 47, 53, 17, 33];
console.log(solution(3, arr)); // 3