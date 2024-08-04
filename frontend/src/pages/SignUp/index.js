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
import authService from "../../services/authServices";

function SignUp() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState({
    fName: "",
    lName: "",
  });
  const handleCreateAccount = async () => {
    try {
      const signUpDetails = {
        name: `${fullName.fName} ${fullName.lName}`,
        email,
        password,
      };

      const isSignUpSucceed = await authService.signup(signUpDetails);
      if (isSignUpSucceed) {
        alert("Successfully created account");
      } else {
        alert("Something went wrong while creating your account");
      }
    } catch (err) {
      alert("Something went wrong while creating your account");
    }
  };
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
                  value={fullName.fName}
                  onChange={(evt) => {
                    setFullName((prev) => ({
                      ...prev,
                      fName: evt.target.value,
                    }));
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  type="text"
                  placeholder="Last Name"
                  variant="outlined"
                  fullWidth
                  value={fullName.lName}
                  onChange={(evt) => {
                    setFullName((prev) => ({
                      ...prev,
                      lName: evt.target.value,
                    }));
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type="email"
                  placeholder="Email"
                  variant="outlined"
                  fullWidth
                  value={email}
                  onChange={(evt) => {
                    setEmail(evt.target.value);
                  }}
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
                  value={password}
                  onChange={(evt) => {
                    setPassword(evt.target.value);
                  }}
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
              <Button
                variant="contained"
                fullWidth
                color="success"
                onClick={handleCreateAccount}
              >
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
