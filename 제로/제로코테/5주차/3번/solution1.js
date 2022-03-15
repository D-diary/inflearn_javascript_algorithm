function solution(s) {
  const numbers = "0123456789"
  let answer = [];
  let answer2 = "";
  for ( let i = 0; i < s.length; i++ ) {
    for ( let j = 0; j < numbers.length; j++ ) {
      if ( s[i] === numbers[j] ) {
        answer2 += s[i]
      }
    }
  }
  console.log(answer2);
  // for ( let i = 0; i < answer.length; i++ ) {

  // }

  // return answer;
}

console.log(solution("221123")); // 2 1 3 0 4 5 6 7 8 9 