function solution(A, B) {
  let count = 0;
  for ( let i = 0; i < A.length; i++ ) {
    for ( let j = 0; j < A[i].length; j++ ) {
      if ( A[i][1] === B[0] ) {
        for ( let k = 0; k < A.length; k++ ) {
          if ( A[i][0] === A[k][0] ) {
            count++;
          }
        }
      }
    }
  }
  return count;
}

console.log(solution([["Game", "broadcast1"], ["Sport", "broadcast1"], ["Vlog", "broadcast1"], ["Game", "broadcast2"], ["Sport", "broadcast3"], ["Vlog", "broadcast4"]], ["broadcast1"]));