import isEmpty from '../validation/is-empty';
import { SET_CURRENT_USER } from '../actions/types';
const initialState = {
  isAuthenticated: false,
  user: {}
};

// This will dispatch the action
export default function(state = initialState, action) {
  // console.log('Set user trigered : ');
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      };
    default:
      return state;
  }
}
