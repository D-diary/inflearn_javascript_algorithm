function solution(s) {
  const num = '0123456789';
  
  let max = Number.MIN_SAFE_INTEGER;

  let count = 0;

  const arr = [];

  for ( let i = 0; i < num.length; i++ ) {
    for ( let j = 0; j < s.length; j++ ) {
      if ( num[i] === s[j] ) {
        count++;
      }
    }
    arr.push([i, count]);
    // arr.push(count);
    count = 0;
  }

  // for ( let i = 0; i < arr.length; i++ ) {
  //   for ( let j = 0; j < arr[0].length; j++) {
  //     if ( max > arr[] )
  //   }
  // }

  return arr;
}

console.log(solution("104001100"));