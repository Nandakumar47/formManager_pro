import React, { useEffect, useState } from "react";
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
import { doLogin } from "../../contexts/authContext/authActions";
import { useAuthDispatchContext } from "../../contexts/authContext";
import { useCommonContext } from "../../contexts/CommonContext/CommonContext";

function Login(p) {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const authDispatchContext = useAuthDispatchContext();
  const { showAppNotification, toggleLoader } = useCommonContext();

  const handleLogIn = async () => {
    try {
      const loginDetails = {
        email,
        password,
      };
      toggleLoader(true);
      const isLoginSucceed = await doLogin(authDispatchContext, loginDetails);
      toggleLoader(false);
      if (isLoginSucceed) {
        navigate("/home");
      } else {
        showAppNotification(
          "Something went wrong while logging in to your account"
        );
      }
    } catch (err) {
      showAppNotification(
        "Something went wrong while logging in to your account"
      );
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
          width: "24%",
          padding: "24px",
          border: "1px solid lightgrey",
        }}
      >
        <Box>
          <Typography
            variant="h4"
            align="left"
            sx={{ fontWeight: 600, fontSize: "1.5rem" }}
          >
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
                onChange={(evt) => {
                  setEmail(evt.target.value);
                }}
                value={email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                type={showPassword ? "text" : "Password"}
                placeholder="Password"
                variant="outlined"
                value={password}
                onChange={(evt) => {
                  setPassword(evt.target.value);
                }}
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
            <Button
              variant="contained"
              color="success"
              fullWidth
              onClick={handleLogIn}
            >
              Login
            </Button>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
}

export default Login;
