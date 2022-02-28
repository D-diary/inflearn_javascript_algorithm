/**
 * @param area {number}
 * @returns {number[]}
 */
function solution(area) {
  let w = Math.floor(Math.sqrt(area))
  while (area % w !== 0) w--
  return [w, area / w]
}

console.log(solution(4)); // [2, 2]
console.log(solution(41)); 
console.log(solution(122122)); 
console.log(solution(1)); 
console.log(solution(100000)); 
console.log(solution(7)); 