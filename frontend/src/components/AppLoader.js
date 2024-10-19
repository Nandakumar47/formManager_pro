import { Backdrop, CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";

function AppLoader({ showLoader }) {
  const [container] = useState(() => {
    document.createElement("div");
  });
  useEffect(() => {
    document.body.appendChild(container);
    return () => {
      document.body.removeChild(container);
    };
  }, []);
  return (
    <Backdrop
      sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })}
      open={showLoader}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}

export default AppLoader;
