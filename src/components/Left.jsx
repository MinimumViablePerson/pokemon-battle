import { EnemyBar } from './EnemyBar'
import { OurPokemon } from './OurPokemon'

export function Left ({ opponent, player }) {
  return (
    <div className='left'>
      <EnemyBar opponent={opponent} />
      <OurPokemon player={player} />
    </div>
  )
}
