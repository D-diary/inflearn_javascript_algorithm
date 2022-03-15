function solution(orders, n) {
  const arr = [];
  
  const arr2 = [];
  
  let max = 0;
  
  for ( let i = 0; i < orders.length; i++ ) {
    if ( orders[i] > max ) {
      max = orders[i];
    }
  }
	console.log(max);
  console.log(orders[0]);
  for ( let i = 1; i <= max; i++) {
  	arr.push(i);
  }
  console.log(arr);
  
  for ( let i = 0; i < arr.length; i++ ) {
    for ( let j = 0; j < orders.length; j++ ) {
      if ( arr[i] !== orders[j] ) {
        // arr2.push(arr[i])
        console.log('arr[i]',arr[i])
        break;
      }
    }
  }
}

console.log(solution([2, 4, 5, 7], 3)) // 6