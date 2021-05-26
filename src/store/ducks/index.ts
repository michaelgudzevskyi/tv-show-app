import { CombinedState, combineReducers } from 'redux';

import preview from './preview';

const reducers = combineReducers({
  preview,
});

// reset the state of a redux store
const rootReducer = (
  state: CombinedState<{ preview: never }> | undefined,
  action: { type: string; payload: string },
): any => {
  return reducers(state, action);
};

export default rootReducer;
