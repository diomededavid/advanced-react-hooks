// useReducer: simple Counter - simulate setState with an object OR function
// http://localhost:3000/isolated/exercise/01.js
// 💯 simulate setState with an object OR function

import * as React from 'react'

const countReducer =  (state, action) => action(state)

// const [state, setState] = React.useReducer(countReducer, {
//   count: initialCount,
// })

function Counter({initialCount = 0, step = 1 }) {
  const [state, setState] = React.useReducer(countReducer, {
    count: initialCount,
  })

  const {count} = state
  const increment = () => setState(currentState => ({count: currentState.count + step}))
  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
