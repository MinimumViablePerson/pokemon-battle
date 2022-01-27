export function getMoveName (name) {
  return name.replace('-', ' ')
}

export function replaceMoveNameWithProper (move) {
  const moveCopy = JSON.parse(JSON.stringify(move))

  moveCopy.name = getMoveName(move.name)
  return moveCopy
}
