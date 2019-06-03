import React, { useReducer } from 'react'

const initialState = {
  count: 0
};

function reducer(state, action) {
  switch (action.type) {
    case 'ADD':
      return {
        count: state.count + action.value
      }
    case 'SUBTRACT':
      return {
        count: state.count - action.value
      }
    case 'RESET':
      return {
        count: initialState.count
      }
    default:
      return state;
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return(
    <div>
      <h3>{state.count}</h3>
      <button onClick={()=> dispatch({ type: 'ADD', value: 1 })}>+</button>
      <button onClick={()=> dispatch({ type: 'SUBTRACT', value: 1 })}>-</button>
      <button onClick={()=> dispatch({ type: 'RESET' })}>Reset</button>
    </div>
  );
};

export default Counter