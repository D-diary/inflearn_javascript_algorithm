// q5

function solution(s) {
  let result = '';
  for (let i = 0; i < s.length; i++) {
      if (s[i] === s[i + 1]) {
          i += 1;
      } else {
          result += s[i];
      }
  }

  return result;
}

console.log(solution('aacddefg')); // cefg