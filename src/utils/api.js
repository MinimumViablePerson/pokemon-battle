export const api_url = 'https://pokeapi.co/api/v2/pokemon'
import { getRandomIndexes } from './getRandomIndexes'
import { replaceMoveNameWithProper } from './getMoveName'

export async function getPokeMoves (pokemon) {
  const randomIndexes = getRandomIndexes(pokemon.moves, 4)
  const moveUrls = randomIndexes.map(index => pokemon.moves[index].move.url)

  const moves = await Promise.all(
    moveUrls.map(url => fetch(url).then(resp => resp.json()))
  )

  const movesWithProperNames = moves.map(replaceMoveNameWithProper)
  return movesWithProperNames
}

export async function fetchPokemon (pokemonName) {
  return fetch(`${api_url}/${pokemonName}`).then(resp => {
    if (resp.ok) return resp.json()
    else throw Error('Pokemon not found')
  })
}
