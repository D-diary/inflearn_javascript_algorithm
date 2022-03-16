function solution(s) {
  let count = 1;
  let arr = [];
  for ( let i = 0; i < s.length-1; i++ ) {
    if ( s[i] !== s[i+1] ) {
      count++;
    } else {
      arr.push(count);
      count = 0;
    }
  }
  arr.sort((a,b)=> a - b);
  return arr.pop()
}

console.log(solution("abssccbsbsv"));