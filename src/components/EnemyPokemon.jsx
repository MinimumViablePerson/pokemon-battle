export function EnemyPokemon ({ opponent }) {
  return (
    <div className='enemy-pokemon'>
      <img
        className='pokemon-image enemy-pokemon__image'
        src={opponent.transformedData.sprites.front}
        alt={opponent.transformedData.name}
      />
    </div>
  )
}
