// useReducer: simple Counter - simulate setState with an object
// http://localhost:3000/isolated/exercise/01.js
// 💯 simulate setState with an object

import * as React from 'react'

const countReducer = (state, action) => ({...state, ...action})
function Counter({initialCount = 0, step = 1}) {
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
