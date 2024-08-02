import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

function Login(p) {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card
        variant="outlined"
        style={{
          width: "24%",
          padding: "24px",
          border: "1px solid lightgrey",
        }}
      >
        <Box>
          <Typography variant="h4" align="left">
            Login
          </Typography>
        </Box>
        <Box mt={2} mb={2}>
          <Grid container rowGap={2}>
            <Grid item xs={12}>
              <TextField
                type="email"
                placeholder="Email"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                type={showPassword ? "text" : "Password"}
                placeholder="Password"
                variant="outlined"
                fullWidth
              />
            </Grid>
          </Grid>
          <Box style={{ color: "grey", marginTop: "8px" }} textAlign="left">
            Don't have an account?{" "}
            <span
              style={{
                color: "green",
                cursor: "pointer",
                textDecoration: "underline",
              }}
              onClick={() => navigate("/signup")}
            >
              Sign Up
            </span>
          </Box>
        </Box>

        <FormGroup>
          <FormControlLabel
            style={{ color: "grey" }}
            control={
              <Checkbox
                color="success"
                checked={showPassword}
                onChange={() => setShowPassword(!showPassword)}
              />
            }
            label="Show password"
          />
        </FormGroup>
        <Grid container alignItems="center" justifyContent="end">
          <Grid item xs={12}>
            <Button variant="contained" color="success" fullWidth>
              Login
            </Button>
          </Grid>
        </Grid>
        {/* <Box width={400}>
          <h1>dfsd</h1>
        </Box> */}
      </Card>
    </div>
  );
}

export default Login;
