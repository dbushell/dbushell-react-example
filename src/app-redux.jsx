/*! Redux App */

import React, {useContext, useMemo, useReducer} from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider, useDispatch, useSelector} from 'react-redux';

import {Count, CountTitle} from './app-common';
import reducer, {defaultState} from './reducer';

const initialState = {...defaultState, title: 'Redux'};

const store = createStore(reducer, initialState);

const useCounter = () => {
  const dispatch = useDispatch();
  const increment = () => dispatch({type: 'increment'});
  const decrement = () => dispatch({type: 'decrement'});
  const reset = () => dispatch({type: 'reset', newState: initialState});
  return {increment, decrement, reset};
};

const StoreProvider = ({children}) => {
  return <Provider store={store}>{children}</Provider>;
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
  const title = useSelector(state => state.title);
  const count = useSelector(state => state.count);
  return (
    <React.Fragment>
      <Count title={title} count={count} />
      <Actions />
    </React.Fragment>
  );
};

const ReduxApp = App;

export {StoreProvider as ReduxStoreProvider};
export default ReduxApp;
