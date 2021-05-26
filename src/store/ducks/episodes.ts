import { Dispatch } from 'redux';
import api from 'services/api';

export const Types = {
  SET_ERRORS: 'ui/SET_ERRORS',
  CLEAR_ERRORS: 'ui/CLEAR_ERRORS',
  LOADING_UI: 'ui/LOADING_UI',
  SET_EPISODES: 'movie/SET_EPISODES',
};

const initialState = {
  episodes: null,
  loading: false,
};

export default function reducer(
  state = initialState,
  action: { type: string; payload: string },
): any {
  switch (action.type) {
    case Types.SET_EPISODES:
      return {
        ...state,
        episodes: action.payload,
      };
    default:
      return state;
  }
}

export const Creators = {
  getAllEpisodes: () => (dispatch: Dispatch) => {
    dispatch({ type: Types.LOADING_UI });
    api
      .get('/episodes/SHOW123.json')
      .then(resp => {
        dispatch({
          type: Types.SET_EPISODES,
          payload: resp.data,
        });
        dispatch({ type: Types.CLEAR_ERRORS });
      })
      .catch(err => {
        dispatch({
          type: Types.SET_ERRORS,
          payload: err,
        });
      });
  },
};
