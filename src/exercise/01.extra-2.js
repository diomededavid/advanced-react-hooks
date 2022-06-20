// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

const [state, setState] = React.useReducer(countReducer, {
  count: initialCount,
})

function Counter({step = 1, initialCount = 0}) {
  const [state, setState] = React.useReducer(countReducer, {
    count: initialCount,
  })

  const {count} = state
  const increment = () => setState({count: count + step})
  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
