import { Bottom } from './Bottom'
import { Top } from './Top'

export function Screen ({ opponent, player, duel }) {
  return (
    <div className='screen'>
      <Top player={player} opponent={opponent} duel={duel} />
      <Bottom player={player} duel={duel} />
    </div>
  )
}
