import { getHpLevel } from '../utils/getHpLevel'

export function EnemyBar ({ opponent }) {
  return (
    <div className='bar-wrapper'>
      <div className='bar enemy-bar'>
        <span className='name'>{opponent.transformedData.name}</span>
        <div className='hp'>
          <span>HP</span>
          <div className={`hp__bar ${getHpLevel(opponent.transformedData.hp)}`}>
            <div
              className='hp__bar__fill'
              style={{ width: opponent.transformedData.hp + '%' }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  )
}
