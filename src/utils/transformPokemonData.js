import { capitalise } from './capitalise'

// todo: add level login
export const getPokemonLevel = ({ pokemon, xp }) => {
  return 69
}

export function transformPokemonData ({
  pokemon,
  moves,
  stats: { hp, energy }
}) {
  return {
    // tood: add hp logic
    hp,
    energy,
    level: getPokemonLevel({ pokemon, xp: 99 }),
    name: capitalise(pokemon.name),
    sprites: {
      front:
        pokemon.sprites.versions['generation-v']['black-white'].animated
          .front_default,
      back:
        pokemon.sprites.versions['generation-v']['black-white'].animated
          .back_default
    }
  }
}
