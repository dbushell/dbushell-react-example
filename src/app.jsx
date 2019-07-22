/*! App */

import React, {useState, useReducer} from 'react';
import ReactDOM from 'react-dom';

const Store = React.createContext();
const initialState = {title: 'Example', count: 0};

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return {...state, count: state.count + 1};
    case 'decrement':
      return {...state, count: state.count - 1};
    case 'reset': {
      return {...initialState};
    }
    default:
      throw new Error();
  }
};

const useCounter = () => {
  const {dispatch} = React.useContext(Store);
  const increment = () => dispatch({type: 'increment'});
  const decrement = () => dispatch({type: 'decrement'});
  const reset = () => dispatch({type: 'reset'});
  return {increment, decrement, reset};
};

const StoreProvider = ({children}) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const value = {state, dispatch};
  return <Store.Provider value={value}>{children}</Store.Provider>;
};

const Count = props => {
  return (
    <h3>
      Count: <code>{props.count}</code>
    </h3>
  );
};

const Actions = () => {
  const {increment, decrement, reset} = useCounter();
  return (
    <div>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

const App = props => {
  const {state} = React.useContext(Store);
  const heading = <h1>{state.title}</h1>;
  return (
    <React.Fragment>
      {heading}
      <Count count={state.count} />
      <Actions />
    </React.Fragment>
  );
};

export {StoreProvider};
export default App;
