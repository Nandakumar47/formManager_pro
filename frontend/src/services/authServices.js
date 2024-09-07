import axiosInstance from "./axiosInstance";
const authService = {
  login: async (loginDetails) => {
    try {
      const { email, password } = loginDetails;
      const response = await axiosInstance.post(
        "http://localhost:6001/auth/login",
        {
          email,
          password,
        }
      );
      if (response.data.success) {
        sessionStorage.setItem("accessToken", response.data.accessToken);
        return true;
      } else {
        return false;
      }
    } catch (error) {
      return false;
    }
  },
  signup: async (signUpDetails) => {
    try {
      const { email, password, name } = signUpDetails;
      debugger;

      const response = await axiosInstance.post(
        "http://localhost:6001/auth/signup",
        {
          email,
          password,
          name,
        }
      );
      if (response.data.success) {
        sessionStorage.setItem("accessToken", response.data.accessToken);
        return true;
      } else {
        return false;
      }
    } catch (error) {
      return false;
    }
  },
  logout: async () => {
    try {
      const response = await axiosInstance.post(
        "http://localhost:6001/auth/logout"
      );
      if (response.data.success) {
        sessionStorage.removeItem("accessToken");
        return true;
      } else {
        return false;
      }
    } catch (error) {
      return false;
    }
  },
};
export default authService;
