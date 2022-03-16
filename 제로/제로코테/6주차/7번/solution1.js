function solution(A) {
  const arr = [];
  
  for ( let i = 0; i < A.length; i++ ) {
    arr.push(A[i].toString(2))
  }
  arr.sort()
  return arr;
}

console.log(solution([1, 2, 3, 4]));