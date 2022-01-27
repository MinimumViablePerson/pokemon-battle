export function OurPokemon ({ player }) {
  return (
    <div className='our-pokemon'>
      <img
        className='pokemon-image our-pokemon__image'
        src={player.transformedData.sprites.back}
        alt={player.transformedData.name}
      />
    </div>
  )
}
