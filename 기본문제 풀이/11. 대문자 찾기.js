// 대문자 찾기

// 한 개의 문자열을 입력받아 해당 문자열에 알파벳 대문자가 몇 개 있는지 알아내는 프로그램 을 작성하세요.

// 입력 설명 : 첫 줄에 문자열이 입력된다. 문자열의 길이는 100을 넘지 않는다.

// 출력 설명 : 첫 줄에 대문자의 개수를 출력한다.

// 입력 예제 : KoreaTimeGood

// 출력 예제 : 3

function solution(str) {
  const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let count = 0;
  for ( let i = 0; i < str.length; i++) {
    for (let j = 0; j < upper.length; j++) {
      if ( upper[j] === str[i] ) {
        count++;
      }
    }

  }
  return count;
}

console.log(solution('KoreaTimeGood'));
