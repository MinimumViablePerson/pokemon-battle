export function getHpLevel (hp) {
  if (hp > 50) return 'high'
  if (hp > 25) return 'medium'
  return 'low'
}
