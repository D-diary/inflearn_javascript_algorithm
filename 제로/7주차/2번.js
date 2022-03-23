function solution(A, K) {
  let count = 0;
  for ( let i = 0; i < A.length; i++ ) {
    console.log('i',i);
    if ( A[i] + A[i+1] <= 100 ) {
      count++;
      i++;
      console.log('count',count);
    }
    else if ( A[i] + A[i+1] > 100 ) {
      count++;
      count++;
      console.log('count2',count);
      i++;
    }
  }
  return count;
}

console.log(solution([45, 50, 51, 49, 90, 70], 100));