import { GET_ERRORS } from '../actions/types';

const initialState = {};

/**
 *  IF THERE ARE ANY ERRORS
 */
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ERRORS:
      return action.payload;
    default:
      return state;
  }
}
