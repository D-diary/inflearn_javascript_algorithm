/**
 * @param cards {number[]}
 * @returns {number}
 */
function solution(cards) {
  while (cards.length > 1) {
    // 정렬
    cards.sort((a, b) => a - b)
    battle(cards)
  }

  return cards.length ? cards[0] : 0
}

function battle(cards) {
  const life1 = cards.pop()
  const life2 = cards.pop()

  const leftLife = Math.abs(life1 - life2)

  // 남은 카드 추가
  if (leftLife) cards.push(leftLife)
}

solution
