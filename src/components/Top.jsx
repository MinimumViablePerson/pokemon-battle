import { Left } from './Left'
import { Right } from './Right'

export function Top ({ player, opponent, duel }) {
  return (
    <div className='top'>
      <Left player={player} opponent={opponent} />
      <Right player={player} opponent={opponent} />
    </div>
  )
}
