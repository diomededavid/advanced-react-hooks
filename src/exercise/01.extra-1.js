// useReducer: simple Counter - accept the step as the action
// http://localhost:3000/isolated/exercise/01.js
// 💯 accept the step as the action

import * as React from 'react'

function countReducer(count, step) {
  return count + step
}

function Counter({step = 1, initialCount = 0}) {
  // 🐨 replace React.useState with React.useReducer.
  // 💰 React.useReducer(countReducer, initialCount)
  const [count, changeCount] = React.useReducer(countReducer, {
    count: initialCount,
  })

  // 💰 you can write the countReducer function, so you don't have to make any
  // changes to the next two lines of code! Remember:
  // The 1st argument is called "state" - the current value of count
  // The 2nd argument is called "newState" - the value passed to setCount
  const increment = () => changeCount(step)
  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
