import { Dispatch } from 'redux';
import api from 'services/api';

export const Types = {
  SET_ERRORS: 'ui/SET_ERRORS',
  CLEAR_ERRORS: 'ui/CLEAR_ERRORS',
  LOADING_UI: 'ui/LOADING_UI',
  SET_PREVIEW: 'movie/SET_PREVIEW',
};

const initialState = {
  countryList: false,
  error: false,
  loading: false,
};

export default function reducer(
  state = initialState,
  action: { type: string; payload: string },
): any {
  switch (action.type) {
    case Types.SET_PREVIEW:
      return {
        ...state,
        countryList: action.payload,
      };
    default:
      return state;
  }
}

export const Creators = {
  getMoviePreview: () => (dispatch: Dispatch) => {
    dispatch({ type: Types.LOADING_UI });
    api
      .get('/tv-shows/SHOW123.json')
      .then(resp => {
        dispatch({
          type: Types.SET_PREVIEW,
          payload: resp.data,
        });
        dispatch({ type: Types.CLEAR_ERRORS, payload: false });
      })
      .catch(err => {
        dispatch({
          type: Types.SET_ERRORS,
          payload: err,
        });
      });
  },
};
