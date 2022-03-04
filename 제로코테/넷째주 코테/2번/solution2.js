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
  for ( let i = 0; i <= max; i++) {
  	if ( orders[i] )  {
      arr.push(i);
    }
  }
  console.log(arr);
  
  
}

console.log(solution([2, 4, 5, 7], 3)) // 6