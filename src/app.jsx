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

const StoreProvider = props => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const value = {state, dispatch};
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
};

const Counter = props => {
  return (
    <h3>
      Count: <code>{props.count}</code>
    </h3>
  );
};

const Actions = () => {
  const {dispatch} = React.useContext(Store);
  const handleIncrement = () => dispatch({type: 'increment'});
  const handleDecrement = () => dispatch({type: 'decrement'});
  const handleReset = () => dispatch({type: 'reset'});
  return (
    <div>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

const App = props => {
  const {state} = React.useContext(Store);
  return (
    <React.Fragment>
      <h1>{state.title}</h1>
      <Counter count={state.count} />
      <Actions />
    </React.Fragment>
  );
};

export {StoreProvider};
export default App;
