// src/theme/theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", // Replace this with your desired primary color
    },
    secondary: {
      main: "#dc004e", // Replace this with your desired secondary color
    },
  },
  spacing: 8, // Default spacing is 8px. You can customize it.
});

export default theme;
