/**
 * Считает сумму всех значений в объекте
 * @param {Object} scores Объект
 * @returns {number} Сумма всех значений
 */
function getScore(scores) {
  let count = 0
  for (const value of Object.values(scores)) {
    count += value
  }
  return count
}

const scores = {
  Anna: 10,
  Olga: 1,
  Ivan: 5
}

getScore(scores)
