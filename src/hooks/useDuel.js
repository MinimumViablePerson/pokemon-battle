import React from 'react'

export const PLAYER_TURN = 'player'
export const OPPONENT_TURN = 'opponent'

function getRandomTurn () {
  const random = Math.floor(Math.random() * 2)
  return random === 0 ? OPPONENT_TURN : PLAYER_TURN
}

function useDuel ({ playerPokemon, opponentPokemon }) {
  const [turn, setTurn] = React.useState(getRandomTurn())
  const [score, setScore] = React.useState(0)

  const arePlayerButtonsDisabled = turn !== PLAYER_TURN

  const isOpponentAlive = opponentPokemon.isAlive

  const toggleTurn = React.useCallback(() => {
    setTurn(turn === PLAYER_TURN ? OPPONENT_TURN : PLAYER_TURN)
  }, [setTurn, turn])

  // effect - when opponent is dead -> fetch a new one
  React.useEffect(() => {
    if (isOpponentAlive) return

    opponentPokemon.fetchNextPokemon()

    playerPokemon.health.heal(20)
    playerPokemon.energy.restore(20)
  }, [isOpponentAlive])

  //todo: finisher function
  const fleeFromBattle = () => {}

  const isGameOver = !playerPokemon.isAlive

  // when a player is done - make the computer do their move (after a delay?)
  React.useEffect(() => {
    if (turn === PLAYER_TURN) return
    setTimeout(() => {
      console.log('Bulbasaur attacked with his thing')
      performAttack(OPPONENT_TURN, 0)
    }, 1000)
  }, [turn])

  const performAttack = (who, _index) => {
    if (who === PLAYER_TURN) {
      const dmg = playerPokemon.moves[_index].pp
      opponentPokemon.health.takeDamage(dmg)
    } else {
      const dmg = opponentPokemon.moves[_index].pp
      playerPokemon.health.takeDamage(dmg)
    }
    toggleTurn()
  }

  console.log('current turn is ', turn)

  return {
    turn,
    toggleTurn,
    arePlayerButtonsDisabled,
    isGameOver,
    performAttack
  }
}

export default useDuel
