import { Backdrop, CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
function AppLoader({ showLoader }) {
  const [container] = useState(() => document.createElement("div"));
  useEffect(() => {
    document.body.appendChild(container);
    return () => {
      document.body.removeChild(container);
    };
  }, []);
  return ReactDOM.createPortal(
    <Backdrop
      sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })}
      open={showLoader}
    >
      <CircularProgress color="inherit" />
    </Backdrop>,
    container
  );
}

export default AppLoader;
