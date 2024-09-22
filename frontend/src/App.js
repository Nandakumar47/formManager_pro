import { useEffect } from "react";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme/theme";
// import PrivateRoute from "./components/PrivateRoute";
// import PublicRoute from "./components/PublicRoute";
import About from "./pages/About";
import axiosInstance from "./services/axiosInstance";

function App() {
  const navigate = useNavigate();
  const getNewAccessToken = async () => {
    try {
      const refreshResponse = await axiosInstance.post(
        "http://localhost:6001/auth/token/refresh",
        {},
        { withCredentials: true }
      );

      if (refreshResponse.data.success) {
        const newAccessToken = refreshResponse?.data?.accessToken;
        return newAccessToken;
      } else {
        return null;
      }
    } catch (refreshError) {
      return null;
    }
  };
  const isUserAuthenticated = async () => {
    const accessToken = sessionStorage.getItem("accessToken");

    const isTokenExpired = (token) => {
      const decoded = JSON.parse(atob(token.split(".")[1])); // decode JWT
      return decoded.exp * 1000 < Date.now();
    };
    if (accessToken) {
      console.log(isTokenExpired(accessToken));
      if (!isTokenExpired(accessToken)) {
        return true;
      } else {
        const newAccessToken = await getNewAccessToken();
        if (newAccessToken) {
          sessionStorage.setItem("accessToken", newAccessToken);
          return true;
        } else {
          return false;
        }
      }
    } else {
      const newAccessToken = await getNewAccessToken();
      debugger;
      if (newAccessToken) {
        sessionStorage.setItem("accessToken", newAccessToken);
        return true;
      } else {
        return false;
      }
    }
  };

  useEffect(() => {
    debugger;
    handleRedirection();
  }, []);
  const handleRedirection = async () => {
    const isAuth = await isUserAuthenticated();
    if (isAuth) {
      navigate("/home");
    } else {
      navigate("/login");
    }
  };
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
