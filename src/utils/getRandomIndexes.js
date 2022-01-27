export function getRandomIndexes (array, numberOfIndexes) {
  let indexes = []
  
  for (let i = 0; i < numberOfIndexes; i++) {
    let randomIndex = Math.floor(Math.random() * array.length)
    if (!indexes.includes(randomIndex)) {
      indexes.push(randomIndex)
    } else {
      i--
    }
  }
  return indexes
}
