import React from "react";
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

function SignUp() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "rgb(237 245 237 / 47%)",
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
                }}
              >
                Log in
              </span>
            </Typography>
          </Box>
          <div style={{ margin: "24px 0" }}>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <TextField
                  type="text"
                  label="First Name"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  type="text"
                  label="Last Name"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type="email"
                  label="Email"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type="password"
                  label="Password"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
            </Grid>
          </div>
          <Grid container style={{ marginTop: "8px", color: "grey" }}>
            <Grid item xs={12}>
              <Typography variant="body2" align="left">
                Use 8 or more characters with a mix of letters, numbers &
                symbols
              </Typography>
            </Grid>
          </Grid>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox color="success" />}
              label="Show password"
            />
          </FormGroup>
          <Grid container alignItems="end" justifyContent="space-between">
            <Grid item xs={6}>
              <Typography
                align="left"
                style={{
                  textDecoration: "underline",
                  color: "grey",
                  cursor: "pointer",
                }}
              >
                Log in instead
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Button variant="contained" color="success">
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
