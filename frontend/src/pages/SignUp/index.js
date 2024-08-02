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

function SignUp() {
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
          width: "30%",
          padding: "24px",
          display: "flex",
          border: "1px solid lightgrey",
        }}
      >
        <Box>
          <Box>
            <Typography variant="h4" align="left">
              Create an Account
            </Typography>
            <Typography
              variant="body1"
              align="left"
              style={{ color: "grey", marginTop: "4px" }}
            >
              Already have an account?
              <span
                style={{
                  textDecoration: "underline",
                  marginLeft: "4px",
                  cursor: "pointer",
                  color: "green",
                }}
                onClick={() => navigate("/login")}
              >
                Log in
              </span>
            </Typography>
          </Box>
          <div style={{ marginTop: "24px" }}>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <TextField
                  type="text"
                  placeholder="First Name"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  type="text"
                  placeholder="Last Name"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type="email"
                  placeholder="Email"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <Typography
                  variant="body2"
                  align="left"
                  style={{ color: "grey", marginBottom: "4px" }}
                >
                  Use 8 or more characters with a mix of letters, numbers &
                  symbols
                </Typography>
                <TextField
                  type={showPassword ? "text" : "Password"}
                  placeholder="Password"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
            </Grid>
          </div>
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
          <Grid container alignItems="end" justifyContent="space-between">
            <Grid item xs={12}>
              <Button variant="contained" fullWidth color="success">
                Create an account
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Card>
    </div>
  );
}

export default SignUp;
