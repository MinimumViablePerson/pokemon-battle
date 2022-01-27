import { getHpLevel } from '../utils/getHpLevel'

export function OurBar ({ player }) {
  return (
    <div className='bar-wrapper'>
      <div className='bar our-bar'>
        <span className='name'>{player.transformedData.name}</span>
        <div className='hp'>
          <span>HP</span>
          <div className={`hp__bar ${getHpLevel(player.transformedData.hp)}`}>
            <div
              className='hp__bar__fill'
              style={{ width: player.transformedData.hp + '%' }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  )
}
