import { CombinedState, combineReducers } from 'redux';

import preview from './preview';
import episodes from './episodes';

const reducers = combineReducers({
  preview,
  episodes,
});

// reset the state of a redux store
const rootReducer = (
  state: CombinedState<{ preview: never; episodes: never }> | undefined,
  action: { type: string; payload: string },
): any => {
  return reducers(state, action);
};

export default rootReducer;
