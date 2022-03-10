function solution(s) {
  let count = 0;
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
  }

  answer = s.split(" ")
  console.log(answer);
  

}

console.log(solution("Hello, World!?")); // ["olleH, dlroW"]