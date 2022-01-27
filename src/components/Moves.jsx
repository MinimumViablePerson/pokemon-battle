import { Move } from './Move'
import { PLAYER_TURN } from '../hooks/useDuel'

export function Buttons ({ player, duel }) {
  return (
    <div className='moves'>
      {player.moves.map((move, index) => (
        <Move
          move={move}
          handleClick={() => duel.performAttack(PLAYER_TURN, index)}
        />
      ))}
    </div>
  )
}
