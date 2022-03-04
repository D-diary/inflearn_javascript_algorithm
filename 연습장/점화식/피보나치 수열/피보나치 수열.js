let result;

function recursive(number) {
  if (number == 1 || number == 0) {
    return number
  }
  return recursive(number - 1) + recursive(number -2);
}

result = recursive(5);
console.log(result);

// 이전값과 이전전 값을 더한 값이 현재의 값

/*
f(5) = f(4) + f(3)
f(4) = f(3) + f(2)
f(3) = f(2) + f(1)
f(2) = f(1) + f(0)
f(1) = 1 (4번줄 if문의 조건에 해당되어 1리턴)
f(0) = 0 (4번줄 if문의 조건에 해당되어 1리턴)

f(2) = 1 + 0 = 1
f(3) = 1 + 1 = 2
f(4) = 2 + 1 = 3 
f(5) = 3 + 2 = 5
*/

// 값이 저장되어 있으면 내려갔다 올라올 필요 없으니 이미 계산한 값을 메모리에 저장하고 
// 그 값을 바로 반환 하는게 메모리제이션을 이용한 다이나믹 프로그래밍
// 뎁스 과정을 거치지 않고 산출한 값을 재활용할 수 있기 때문에 빨리 답을 산출 가능
// 속도 최적화에 보통 많이 활용됨