import axios from "axios";
const authService = {
  login: async (loginDetails) => {
    try {
      const { email, password } = loginDetails;
      const response = await axios.post("http://localhost:6001/api/login", {
        email,
        password,
      });
      if (response.data.success) {
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

      const response = await axios.post("http://localhost:6001/api/signup", {
        email,
        password,
        name,
      });
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
