import { Buttons } from './Moves'
import { Message } from './Message'

export function Bottom ({ player, duel }) {
  return (
    <div className='bottom'>
      <Message />
      <Buttons player={player} duel={duel} />
    </div>
  )
}
