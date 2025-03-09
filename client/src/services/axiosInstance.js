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
    debugger;
    const originalRequest = error.config;
    if (error?.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      if (error?.response?.data?.code === "tokenExpiry") {
        try {
          const refreshResponse = await axios.post(
            "http://localhost:6001/auth/token/refresh",
            {},
            { withCredentials: true }
          );
          const newAccessToken = refreshResponse?.data?.accessToken;
          debugger;
          if (newAccessToken) {
            sessionStorage.setItem("accessToken", newAccessToken);
            originalRequest.headers[
              "Authorization"
            ] = `Bearer ${newAccessToken}`;
            return axiosInstance(originalRequest);
          }
        } catch (refreshError) {
          debugger;
          console.error("Refresh token expired or invalid", refreshError);
          window.location.href = "/login";
          return Promise.reject(refreshError);
        }
      } else {
        window.location.href = "/login";
      }
    }
    return Promise.reject(error);
  }
);
export default axiosInstance;
