import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "http://localhost:6001",
  withCredentials: true,
});
axiosInstance.interceptors.request.use(
  function (config) {
    const token = sessionStorage.getItem("accessToken");
    debugger;
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error?.response?.status === 401 && !originalRequest?._retry) {
      originalRequest._retry = true;
      debugger;
      try {
        // Attempt to refresh the access token
        const response = await axios.post(
          "auth/token/refresh",
          {},
          { withCredentials: true }
        );
        debugger;
        const newAccessToken = response?.data?.accessToken;

        // Store the new access token
        sessionStorage.setItem("accessToken", newAccessToken);
        // Retry the original request
        originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        console.error("Refresh token expired or invalid", refreshError);
        // Redirect to login page
        window.location.href = "/login";
      }
    }
    return Promise.reject(error);
  }
);
export default axiosInstance;
