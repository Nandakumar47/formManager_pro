import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link, useNavigate } from "react-router-dom";
import authService from "../services/authServices";
import axiosInstance from "../services/axiosInstance";

// Styled components
const CustomAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.success.main,
}));

const Title = styled(Typography)({
  flexGrow: 1,
  textAlign: "center",
});

const NavButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(1),
}));

const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      const isLogoutSuccess = await authService.logout();
      if (isLogoutSuccess) {
        navigate("/login");
      } else {
        alert("failed to log out");
      }
    } catch (error) {
      alert("failed to log out");
    }
  };
  const handleTest = async () => {
    try {
      const response = await axiosInstance.get("api/test");
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
