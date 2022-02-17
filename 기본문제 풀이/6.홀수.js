function solution(n) {
  let num = 0;
  const arr = [];
  const answer = [];
  
  for ( let i = 0; i < n.length; i++) {
    if ( n[i] % 2 !== 0 ) {
      num += n[i];
      arr.push(n[i]);
    }
  }

  answer.push(num)
  
  let min = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if ( min > arr[i] ) min = arr[i]; 
  }

  answer.push(min)
	
  return answer;
}

console.log(solution([12, 77, 38, 41, 53, 92, 85])) // 256 , 41