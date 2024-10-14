import axios from "axios";
const authService = {
  login: async (loginDetails) => {
    try {
      const { email, password } = loginDetails;
      const response = await axios.post("/auth/login", {
        email,
        password,
      });
      if (response?.data?.success) {
        return { loginDetails, success: true };
      } else {
        return { success: false };
      }
    } catch (error) {
      return { success: false };
    }
  },
  signup: async (signUpDetails) => {
    try {
      const { email, password, name } = signUpDetails;
      const response = await axios.post("/auth/signup", {
        email,
        password,
        name,
      });
      if (response?.data?.success) {
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
      const response = await axios.post("/auth/logout");
      if (response.data.success) {
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
