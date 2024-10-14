import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link, useNavigate } from "react-router-dom";
import authService from "../services/authServices";
import axios from "axios";
import { doLogout } from "../contexts/authContext/authActions";
import { useAuthDispatchContext } from "../contexts/authContext";

// Styled components
const CustomAppBar = styled(AppBar)(({ theme }) => ({}));

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
    <CustomAppBar position="static">
      <Toolbar>
        <Title variant="h6">MyApp</Title>
        <NavButton color="inherit" component={Link} to="/home">
          Home
        </NavButton>
        <NavButton color="inherit" component={Link} to="/about">
          About
        </NavButton>
        <NavButton color="inherit" onClick={handleTest}>
          Contact
        </NavButton>
        <NavButton color="inherit" onClick={handleLogout}>
          Logout
        </NavButton>
      </Toolbar>
    </CustomAppBar>
  );
};

export default Navbar;
