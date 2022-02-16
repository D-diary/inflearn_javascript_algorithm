function solution(a, b, c) {
  let answer = "";
  let total = a + b + c;
  let max = 0;
  if ( a > b ) max = a;
  else max = b;
  
  if ( c > max ) max = c;
  if ( total - max > max ) {
    return answer = "yes";
  } else {
  	return answer = "no";
  }
}

console.log(solution(6, 7, 11)); // yes
console.log(solution(13, 33, 17)); // no

// 답안

// function solution(a, b, c){
//     let answer="YES", max;
//     let tot=a+b+c;
//     if(a>b) max=a;
//     else max=b;
//     if(c>max) max=c;
//     if(tot-max<=max) answer="NO"; 
//     return answer;
// }

// console.log(solution(13, 33, 17));


