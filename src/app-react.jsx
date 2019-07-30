/*! React App */

import React, {useContext, useMemo, useReducer} from 'react';
import ReactDOM from 'react-dom';

import {Count, CountTitle} from './app-common';
import reducer, {defaultState} from './reducer';

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
  const [state, dispatch] = useReducer(reducer, defaultState);
  return (
    <Dispatch.Provider value={dispatch}>
      <Store.Provider value={state}>{children}</Store.Provider>
    </Dispatch.Provider>
  );
};

const Actions = React.memo(() => {
  const {increment, decrement, reset} = useCounter();
  return (
    <div>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
});

const App = props => {
  const state = useStore();
  return (
    <React.Fragment>
      <Count title={state.title} count={state.count} />
      <Actions />
    </React.Fragment>
  );
};

const ReactApp = App;

export {StoreProvider as ReactStoreProvider};
export default ReactApp;
