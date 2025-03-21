import { useEffect, useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme/theme";
import AppContainer from "./components/AppContainer";
import { Box } from "@mui/material";
import axios from "axios";
import {
  useAuthDispatchContext,
  useAuthValueContext,
} from "./contexts/authContext";
import { isUserAuthenticated } from "./contexts/authContext/authActions";
import UseCommon from "./contexts/CommonContext/WithCommons";
import { useCommonContext } from "./contexts/CommonContext/CommonContext";
import Documentation from "./pages/Documentation";

function App() {
  const navigate = useNavigate();
  const [isAuthChecking, setIsAuthChecking] = useState(true);
  const authDispatch = useAuthDispatchContext();
  const authUserDetails = useAuthValueContext();
  const { showAppNotification, toggleLoader } = useCommonContext();
  useEffect(() => {
    defineAxiosRequestInterceptor();
    defineAxiosResponseInterceptor();
    handleRedirection();
  }, []);
  const handleRedirection = async () => {
    toggleLoader(true);
    const isAuth = await isUserAuthenticated(authDispatch);
    toggleLoader(false);
    setIsAuthChecking(false);
    if (isAuth) {
      navigate("/home");
    } else {
      navigate("/login");
      window.history.pushState(null, null, window.location.href);
      window.onpopstate = () => {
        window.history.pushState(null, null, window.location.href);
      };
    }
  };
  const defineAxiosRequestInterceptor = () => {
    axios.interceptors.request.use(
      (config) => {
        config.baseURL = process.env.REACT_APP_URL || "http://localhost:6002";
        config.withCredentials = true;
        return config;
      },
      function (error) {
        return Promise.reject(error);
      }
    );
  };
  const defineAxiosResponseInterceptor = () => {
    axios.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (
          error?.response?.status === 401 ||
          error?.response?.status === 403
        ) {
          authDispatch({
            type: "LOGOUT",
          });
          navigate("/login");
        }
        return Promise.reject(error);
      }
    );
  };
  if (isAuthChecking) {
    return null;
  }
  return (
    <Box className="App">
      <ThemeProvider theme={theme}>
        <Routes>
          {authUserDetails?.isLoggedIn ? (
            <>
              <Route element={<AppContainer />}>
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<Documentation />} />
                <Route path="*" element={<Navigate to="/home" replace />} />
              </Route>
            </>
          ) : (
            <>
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
            </>
          )}
        </Routes>
      </ThemeProvider>
    </Box>
  );
}

export default UseCommon(App);
