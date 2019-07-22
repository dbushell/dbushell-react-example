/*! App */

import React, {useContext, useReducer} from 'react';
import ReactDOM from 'react-dom';

const initialState = {title: 'Example', count: 0};

const reducer = (state, action = {}) => {
  switch (action.type) {
    case 'increment':
      return {...state, count: state.count + 1};
    case 'decrement':
      return {...state, count: state.count - 1};
    case 'reset':
      return {...initialState};
    default:
      return state;
  }
};

const Store = React.createContext();
const Dispatch = React.createContext();

const useStore = () => useContext(Store);
const useDispatch = () => useContext(Dispatch);

const useCounter = () => {
  const dispatch = useDispatch();
  const increment = () => dispatch({type: 'increment'});
  const decrement = () => dispatch({type: 'decrement'});
  const reset = () => dispatch({type: 'reset'});
  return {increment, decrement, reset};
};

const StoreProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Dispatch.Provider value={dispatch}>
      <Store.Provider value={state}>{children}</Store.Provider>
    </Dispatch.Provider>
  );
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
  const state = useStore();
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
