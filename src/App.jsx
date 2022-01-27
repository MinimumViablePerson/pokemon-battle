import './App.css'
import usePokemon from './hooks/usePokemon'
import useDuel from './hooks/useDuel'
import { Screen } from './components/Screen'
import { Title } from './components/Title'

function App () {
  // states we need:
  // MVPS:
  // 1. Current pokemon + stats
  // 2. Pokemon we're fighting

  // Strech states:
  // 3. Total score (later)
  // 4. Inventory

  const player = usePokemon({ pokemonName: 'pikachu' })
  const opponent = usePokemon({ pokemonName: 'bulbasaur' })

  const duelLogic = useDuel({
    playerPokemon: player,
    opponentPokemon: opponent
  })

  if (
    !player ||
    !player.moves ||
    !player.transformedData ||
    !opponent ||
    !player.moves ||
    !opponent.transformedData
  )
    return 'Loading...'

  return (
    <div className='App'>
      <Title />
      <Screen opponent={opponent} player={player} duel={duelLogic} />
    </div>
  )
}

export default App
