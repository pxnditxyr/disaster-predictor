import { createSignal } from 'solid-js'

export const HomeMap = () => {

  const [ counter, setCounter ] = createSignal( 10 )

  return (
    <div>
      <h1>HomeMap</h1>
      <button onClick={ () => setCounter( counter() + 1 ) }>Increment</button>
      <button onClick={ () => setCounter( counter() - 1 ) }>Decrement</button>
      <p>{ counter() }</p>
    </div>
  )
}
