import { combineReducers } from 'redux';

// State reducers
const sets = (sets = [], action) => {
  switch (action.type) {
    case 'INITIALISE_SETS':
      return action.sets;
    default:
      return sets;
  }
};

export default combineReducers({
  sets
});
