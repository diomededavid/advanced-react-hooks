// useReducer: simple Counter - Traditional Dispatch Object
// http://localhost:3000/isolated/exercise/01.js
// 💯 traditional dispatch object with a type and switch statement

import * as React from "react";

function  countReducer(state, action) {
  switch (action.type) {
    case 'INCREMENT': {
      return {count: state.count + 1}
    }
    default: { throw new Error(`Unsupported action type; ${action.type}`)}
  }
}

function Counter({ initialCount = 0, step = 1 }) {
  const [state, dispatch] = React.useReducer(countReducer, {
    count: initialCount
  });

  const { count } = state;
  const increment = () => dispatch({type: "INCREMENT", step});
  return <button onClick={increment}>{count}</button>;
}

function App() {
  return <Counter />;
}

export default App;
