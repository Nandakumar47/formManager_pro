import React from "react";
import Navbar from "../../components/NavBar";
import { Box, Typography } from "@mui/material";

function Home() {
  return (
    <Box
      width={"50%"}
      sx={{
        margin: "auto",
        marginTop: 4,
        height: "80vh",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }}
    >
      <Box
        sx={{
          width: "700px",
          background: "white",
          minHeight: "100px",
          borderRadius: "10px",
          padding: "8px",
          boxShadow: "5px 5px 31px 5px #e2e9f6",
        }}
      >
        <Typography>Name:dfsfgfs</Typography>
        <Typography>Email</Typography>
        <Typography>Contact</Typography>
        <Typography>Message</Typography>
      </Box>
      <Box
        sx={{
          width: "700px",
          background: "white",
          minHeight: "100px",
          borderRadius: "10px",
          padding: "8px",
          boxShadow: "5px 5px 31px 5px #e2e9f6",
        }}
      >
        <Typography>Name:dfsfgfs</Typography>
        <Typography>Email</Typography>
        <Typography>Contact</Typography>
        <Typography>Message</Typography>
      </Box>
    </Box>
  );
}

export default Home;
