import React from "react";
import Navbar from "./NavBar";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

function AppContainer() {
  return (
    <Box>
      <Navbar />
      <Outlet />
    </Box>
  );
}

export default AppContainer;
