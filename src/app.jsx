/*! App */

import React, {useContext, useMemo, useReducer} from 'react';
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
  // const dispatchValue = useMemo(() => dispatch, [dispatch]);
  // const stateValue = useMemo(() => state, [state]);
  return (
    <Dispatch.Provider value={dispatch}>
      <Store.Provider value={state}>{children}</Store.Provider>
    </Dispatch.Provider>
  );
};

const CountTitle = React.memo(({title}) => {
  return <h1>{title}</h1>;
});

const Count = React.memo(props => {
  return (
    <div>
      <CountTitle title={props.title} />
      <h3>
        Count: <code>{props.count}</code>
      </h3>
    </div>
  );
});

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

export {StoreProvider};
export default App;
