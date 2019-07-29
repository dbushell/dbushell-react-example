/*! Reducer */

const defaultState = {title: 'React', count: 0};

const reducer = (state = defaultState, action = {}) => {
  switch (action.type) {
    case 'increment':
      return {...state, count: state.count + 1};
    case 'decrement':
      return {...state, count: state.count - 1};
    case 'reset':
      return {...(action.newState || defaultState)};
    default:
      return state;
  }
};

export {defaultState};
export default reducer;
