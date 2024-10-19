import { Alert, Snackbar } from "@mui/material";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
function Notification(props) {
  const {
    showNotification,
    handleNotificationClose,
    notificationType,
    notificationMessage,
  } = props;
  const [container] = useState(() => document.createElement("div"));
  const severity = {
    success: "success",
    failure: "error",
    info: "warning",
  };
  useEffect(() => {
    document.body.appendChild(container);
    return () => {
      document.body.removeChild(container);
    };
  }, []);
  return ReactDOM.createPortal(
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      open={showNotification}
      autoHideDuration={3000}
      onClose={handleNotificationClose}
      key={"top"}
    >
      <Alert
        icon={false}
        onClose={handleNotificationClose}
        severity={severity[notificationType]}
        variant="filled"
        sx={{ width: "100%" }}
      >
        {notificationMessage}
      </Alert>
    </Snackbar>,
    container
  );
}

export default Notification;
