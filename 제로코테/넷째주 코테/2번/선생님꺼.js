// q2

function solution(orders, n) {
  let cancel = 0;

  for (let i = 0; i <= orders.length; i++) {
      for (let j = 1; j <= 1000; j++) {
          if (orders[i] > j) {
              console.log(orders[i], j);
              cancel += 1;
              break;
          }
      }

      if (cancel === n) {
          return orders[i] + 1;
      }
  }

  return 0;
}

console.log(solution([2, 4, 5, 7], 3)); // 6