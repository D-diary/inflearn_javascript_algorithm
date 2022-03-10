function solution(s) {
  let answer = [];

  
  answer = s.split(".").join('');
  console.log(answer);
  answer = answer.split("!").join('');
  answer = answer.split("?").join('');
  answer = answer.split(",").join('');
  answer = answer.split(" ")
  
  for ( let i = 0; i < answer.length; i++ ) {
    answer[i] = answer[i].split('').reverse().join('');
  }

  return answer;  
}

console.log(solution("Hello, World!?")); // ["olleH, dlroW"]


  // for ( let i = 0; i < answer.length; i++ ) {
  //   for ( let j = 0; j < answer[i].length; j++ ) {
  //     if ( answer[i][j] === "," ) {
  //       answer[i][j] = answer[i][j].substr(0,1)
  //     }
  //     if ( answer[i][j] === "." ) {
  //       answer[i][j] = answer[i][j].substr(0,1)
  //     }
  //     if ( answer[i][j] === "!" ) {
  //       answer[i][j] = answer[i][j].substr(0,1)
  //     }
  //     if ( answer[i][j] === "?" ) {
  //       answer[i][j] = answer[i][j].substr(0,1)
  //     }
  //   }
  // }