export const authInitialState = {};
export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, ...action.payload, isLoggedIn: true };
    case "LOGOUT":
      return { ...state, ...action.payload, isLoggedIn: false };
    default:
      break;
  }
};
