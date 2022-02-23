import { LOGIN, LOGOUT, REGISTER } from "./ActionTypes";

const initialState = {
  user: null,
  response: null,
};

const authenticationReducer = (state = initialState, action) => {
  const payload = action?.payload;
  switch (action.type) {
    case LOGIN:
      return { ...state, user: payload };
    case LOGOUT:
      return initialState;
    case REGISTER:
      return { ...state, user: payload };
    default:
      return state;
  }
};

export default authenticationReducer;
