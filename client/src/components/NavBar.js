import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link, useNavigate } from "react-router-dom";
import authService from "../services/authServices";
import axios from "axios";
import { doLogout } from "../contexts/authContext/authActions";
import { useAuthDispatchContext } from "../contexts/authContext";

// Styled components

const Title = styled(Typography)({
  flexGrow: 1,
  textAlign: "center",
});

const NavButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(1),
}));

const Navbar = () => {
  const navigate = useNavigate();
  const authDispatch = useAuthDispatchContext();
  const handleLogout = async () => {
    try {
      const isLogoutSuccess = await doLogout(authDispatch);
      if (isLogoutSuccess) {
        navigate("/login");
      } else {
        // alert("failed to log out");
      }
    } catch (error) {
      // alert("failed to log out");
    }
  };
  const handleTest = async () => {
    try {
      const response = await axios.get("api/test");
    } catch (error) {}
  };
  return (
    <AppBar position="static" sx={{ background: "#7860cc" }}>
      <Toolbar>
        <Title variant="h6" sx={{ textAlign: "left", fontWeight: 600 }}>
          Form Manager Pro
        </Title>
        <NavButton color="inherit" component={Link} to="/home">
          Home
        </NavButton>
        <NavButton color="inherit" component={Link} to="/about">
          Documentation
        </NavButton>
        <NavButton color="inherit" onClick={handleTest}>
          About
        </NavButton>
        <NavButton color="inherit" onClick={handleLogout}>
          Logout
        </NavButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
