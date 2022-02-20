// 배열 원소중에서 최소값 구해주는게 있다 Math라는 객체에 min라는 함수가 있음

// Math.min(3, 2, 5, 7, 1) 하면 1이 나옴
// Math.min(arr) 넣으면 안됨 배열을 넘길때는 펼쳐주어야함
// 스프레드 연산자 사용

function solution(arr) {
  let answer = Math.min(...arr);
  // let answer = Math.min.apply(null, arr);
  // apply의 첫번째 인자는 this의 객체, 두번째 배열
  console.log(Math.max(...arr)); // 최대값 11
  return answer;
}

let arr = [5, 7, 1, 3, 2, 9, 11];
console.log(solution(arr)); // 1

