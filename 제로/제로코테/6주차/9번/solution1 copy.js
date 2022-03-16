function solution(A) {
  let count = 0;
  
  for ( let i = 0; i < A.length; i++ ) {   
    for ( let j = i + 1; j < A.length; j++) {
      // console.log('re',A[i].reverse());
      // console.log(A[j]);
        if ( A[i].reverse() == A[j] ) {
          count++;
          console.log(A[i].reverse());
          console.log(A[j]);
      }
    }
  }
  return count;
}

console.log(solution([["철수", "영희"], ["영희", "철수"], ["진수", "동수"], ["진수", "진호"]]));