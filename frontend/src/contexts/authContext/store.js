import React, { createContext, useContext, useReducer } from "react";
import { authInitialState, authReducer } from "./authReducer";
const AuthDispatchContext = createContext({});
const AuthValueContext = createContext({});
export const useAuthDispatchContext = () => {
  const context = useContext(AuthDispatchContext);
  if (context === undefined) {
    throw new Error(
      "useAuthDispatchContext should be used inside auth context provider"
    );
  }
  return context;
};
export const useAuthValueContext = () => {
  const context = useContext(AuthValueContext);
  if (context === undefined) {
    throw new Error(
      "useAuthValueContext should be used inside auth context provider"
    );
  }
  return context;
};
export const AuthContextProvider = ({ children }) => {
  const [value, dispatch] = useReducer(authReducer, authInitialState);
  return (
    <AuthValueContext.Provider value={value}>
      <AuthDispatchContext.Provider value={dispatch}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthValueContext.Provider>
  );
};
