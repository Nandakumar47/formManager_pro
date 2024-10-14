export const authInitialState = { isLoggedIn: false };
export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return { ...state, ...action.payload, isLoggedIn: true };
    case "LOGOUT":
      return { ...state, ...action.payload, isLoggedIn: false };
    default:
      throw new Error(`Unhandled action type :${action.type}`);
  }
};
