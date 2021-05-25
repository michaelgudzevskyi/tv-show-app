import { CombinedState, combineReducers } from 'redux';

import movie from './movie';

const reducers = combineReducers({
  movie,
});

// reset the state of a redux store
const rootReducer = (
  state: CombinedState<{ movie: never }> | undefined,
  action: { type: string; payload: string },
): any => {
  return reducers(state, action);
};

export default rootReducer;
