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
function Login(p) {
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
        </Box>

        <FormGroup>
          <FormControlLabel
            control={<Checkbox color="success" />}
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
