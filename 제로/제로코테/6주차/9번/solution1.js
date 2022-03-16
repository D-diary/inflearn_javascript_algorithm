function solution(A) {
  let count = 0;
  
  for ( let i = 0; i < A.length; i++ ) {   
    let aa = A[i].reverse();
    for ( let j = i + 1; j < A.length; j++) {
      // console.log('re',A[i].reverse());
      // console.log(A[j]);
      for ( let k = 0; k < A[i].length; k++ ) {
        if ( aa[k] == A[j][k] ) {
          count++;
          console.log(A[i].reverse());
          console.log(A[j]);

      }
      }
    }
  }
  return count;
}

// console.log(solution([["철수", "영희"], ["영희", "철수"], ["진수", "동수"], ["진수", "진호"]]));
console.log(solution([["철수", "영희"], ["영희", "진수"], ["진수", "동수"], ["진수", "진호"]]));