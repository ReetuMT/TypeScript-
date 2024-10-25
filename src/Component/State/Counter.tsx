import { useReducer } from "react";

type CounterState = {
  count: number;
};

type CountAction = {
  type: 'increment' | 'decrement' | 'reset';
  payload?: number;
};

const initialState: CounterState = { count: 0 };

function reducer(state: CounterState, action: CountAction): CounterState {
  switch (action.type) {
    case 'increment':
      return { count: state.count + (action.payload || 0) };
    case 'decrement':
      return { count: state.count - (action.payload || 0) };
    case 'reset':
      return initialState;
    default:
      return state;
  }
}

export const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment', payload: 10 })}>
        Increment
      </button><br />
      <button onClick={() => dispatch({ type: 'decrement', payload: 10 })}>
        Decrement
      </button><br />
      <button onClick={() => dispatch({ type: 'reset' })}>
        Reset
      </button>
    </>
  );
};
