import React from "react";
import Navbar from "../../components/NavBar";
import { Box, Typography } from "@mui/material";

function Documentation() {
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Typography variant="h4" sx={{ color: "#472183", margin: "8px" }}>
        Documentation
      </Typography>
      <Box
        sx={{
          width: "600px",
          height: "70vh",
          background: "white",
          borderRadius: "10px",
        }}
      >
        <Typography variant="h6">Usage</Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <Typography variant="p">
            <Box component={"span"} sx={{ fontWeight: "600" }}>
              API:{" "}
            </Box>
            http://localhost:6001/api/addFormData?apiKey="key here"
          </Typography>
          <Typography variant="p">
            <Box component={"span"} sx={{ fontWeight: "600" }}>
              Structure to be followed:{" "}
            </Box>
            {`{name:"username here","email:"email here",contact:"contact number",message:"message here"}`}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Documentation;
