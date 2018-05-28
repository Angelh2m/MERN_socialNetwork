const initialState = {
  isAuthenticated: false,
  user: {}
};

// This will dispatch the action
export default function(state = initialState, action) {
  // console.log('InitialState: ', state, action);
  switch (action.type) {
    default:
      return state;
  }
}
