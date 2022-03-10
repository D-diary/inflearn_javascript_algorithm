function solution(s) {
  let count = 0;
  const lower = 'abcdefghijklmnopqrstuvwxyz';
  const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  let answer = [];
  for ( let i = 0; i < s.length; i++ ) {
    if (s[i] === " ") {
      count = 0;
    }
    if (s[i]==="?" || s[i]==="!") {
      s[i]==="";
    }
    if (s[i]==="." || s[i]===",") {
      s[i]==="";
    }
    for ( let j = 0; j < lower.length; j++ ) {
      if ( s[i] === lower[j] ) {
        answer.push(s[i]);
      }
      if ( s[i] === upper[j] ) {
        answer.push(s[i]);
      }
    }
  }

  console.log(answer);
  

}

console.log(solution("Hello, World!?")); // ["olleH, dlroW"]