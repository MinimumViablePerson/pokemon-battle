import './App.css'
import usePokemon from './hooks/usePokemon'
function App () {
  // states we need:
  // MVPS:
  // 1. Current pokemon + stats
  // 2. Pokemon we're fighting

  // Strech states:
  // 3. Total score (later)
  // 4. Inventory

  const { moves, transformedData } = usePokemon({ pokemonName: 'pikachu' })
  const opponent = usePokemon({ pokemonName: 'bulbasaur' })

  if (!moves) return 'Loading...'

  return (
    <div className='App'>
      <h1>Pokemon Battle</h1>
      <div className='screen'>
        <div className='top'>
          <div className='left'>
            <div className='bar-wrapper'>
              <div className='bar enemy-bar'>
                <span className='name'>Bulbasaur</span>
                <div className='hp'>
                  <span>HP</span>
                  <div className='hp__bar'>
                    <div
                      className='hp__bar__fill'
                      style={{ width: '20%' }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <div className='our-pokemon'>
              <img
                className='pokemon-image our-pokemon__image'
                src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/25.gif'
                alt='pikachu'
              />
            </div>
          </div>
          <div className='right'>
            <div className='enemy-pokemon'>
              <img
                className='pokemon-image enemy-pokemon__image'
                src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/1.gif'
                alt=''
              />
            </div>
            <div className='bar-wrapper'>
              <div className='bar our-bar'>
                <span className='name'>Pikachu</span>
                <div className='hp'>
                  <span>HP</span>
                  <div className='hp__bar'>
                    <div
                      className='hp__bar__fill'
                      style={{ width: '70%' }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='bottom'>
          <div className='message'>
            <p>What will Pikachu do?</p>
          </div>
          <div className='buttons'>
            {moves.map(move => (
              <button className='ability'>{move.name}</button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
