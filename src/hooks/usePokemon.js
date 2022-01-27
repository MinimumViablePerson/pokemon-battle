import React from 'react'
import { transformPokemonData } from '../utils/transformPokemonData'
import { fetchPokemon, getPokeMoves } from '../utils/api'
import { getRandomPokemon } from '../utils/getRandomPokemon'

const initialStats = {
  hp: 100,
  energy: 100
}

const usePokemon = ({ pokemonName }) => {
  const [pokemon, setPokemon] = React.useState(null)
  const [moves, setMoves] = React.useState([])
  const [stats, setStats] = React.useState(initialStats)

  function fetchNextPokemon () {
    const randomPokemon = getRandomPokemon()
    fetchPokemon(randomPokemon).then(pokemon => setPokemon(pokemon))
    setStats(initialStats)
  }

  React.useEffect(() => {
    fetchPokemon(pokemonName).then(pokemon => setPokemon(pokemon))
  }, [pokemonName])

  React.useEffect(async () => {
    if (!pokemon) return

    const moves = await getPokeMoves(pokemon)
    setMoves(moves)
  }, [pokemon])

  const transformedData =
    pokemon && moves?.length
      ? transformPokemonData({ pokemon, moves, stats })
      : null

  function changeHP (newValue) {
    setStats({ ...stats, hp: newValue })
  }

  function heal (amount) {
    let newHP
    if (stats.hp + amount > 100) newHP = 100
    else newHP = stats.hp + amount

    changeHP(newHP)
  }

  function takeDamage (amount) {
    let newHP
    if (stats.hp - amount < 0) newHP = 0
    else newHP = stats.hp - amount

    changeHP(newHP)
  }

  function changeEnergy (newValue) {
    setStats({ ...stats, energy: newValue })
  }

  function restoreEnergy (amount) {
    let newEnergy
    if (stats.hp + amount > 100) newEnergy = 100
    else newEnergy = stats.hp + amount

    changeEnergy(newEnergy)
  }

  function useEnergy (amount) {
    let newEnergy
    if (stats.hp - amount < 0) newEnergy = 0
    else newEnergy = stats.hp - amount

    changeEnergy(newEnergy)
  }

  const isAlive = stats.hp > 0


  return {
    fetchNextPokemon,
    pokemon,
    isAlive,
    moves,
    transformedData,
    health: {
      heal,
      takeDamage
    },
    energy: {
      restore: restoreEnergy,
      use: useEnergy
    }
  }
}

export default usePokemon
