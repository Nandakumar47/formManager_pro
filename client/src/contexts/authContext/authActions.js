import axios from "axios";
import authService from "../../services/authServices";

export const doLogin = async (dispatch, loginDetails) => {
  try {
    const loggedUserDetails = await authService.login(loginDetails);
    if (loggedUserDetails?.success) {
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: { loggedUserDetails },
      });
      return true;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
};
export const doSignUp = async (dispatch, signUpDetails) => {
  try {
    const signedUpUserDetails = await authService.signup(signUpDetails);
    if (signedUpUserDetails?.success) {
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: { signedUpUserDetails },
      });
      return true;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
};
export const doLogout = async (dispatch) => {
  dispatch({
    type: "LOGOUT",
  });
  try {
    await authService.logout();
    return true;
  } catch (error) {
    return true;
  }
};
export const isUserAuthenticated = async (dispatch) => {
  try {
    const response = await axios.get("/auth/me");
    if (response?.data?.success) {
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: { loggedUserDetails: response },
      });
      return true;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
};
