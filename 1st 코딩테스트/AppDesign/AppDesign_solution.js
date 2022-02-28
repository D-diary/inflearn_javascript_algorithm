function solution(area) {
  const answer = [];
  if ( area % 2 === 0 ) {
    answer.push(area/2);
    answer.push(area/2);
  } else {
    answer.push(Math.floor(area/2));
    answer.push(Math.ceil(area/2));
  }
  return answer;
}

console.log(solution(4)); // [2, 2]
console.log(solution(41)); 
console.log(solution(122122)); 
console.log(solution(1)); 
console.log(solution(100000)); 
console.log(solution(7)); 