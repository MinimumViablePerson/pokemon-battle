export function Move ({ move, handleClick }) {
  return (
    <button onClick={handleClick} key={move.name} className='move'>
      {move.name}
    </button>
  )
}
