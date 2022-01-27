import { getHpLevel } from '../utils/getHpLevel'
import { EnemyPokemon } from './EnemyPokemon'
import { OurBar } from './OurBar'

export function Right ({ opponent, player }) {
  return (
    <div className='right'>
      <EnemyPokemon opponent={opponent} />
      <OurBar player={player} />
    </div>
  )
}
