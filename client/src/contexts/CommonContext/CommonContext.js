import React, { createContext, useContext, useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import { Alert, Backdrop, Button, CircularProgress } from "@mui/material";
import Notification from "../../components/Notification";
import AppLoader from "../../components/AppLoader";

const TestContext = createContext({});
function CommonContext({ children }) {
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");
  const [notificationType, setNOtificationType] = useState("failure");
  const [showLoader, setShowLoader] = useState(false);
  const severity = {
    success: "success",
    failure: "error",
    info: "warning",
  };
  const showAppNotification = (message, type = "failure") => {
    setNotificationMessage(message);
    setNOtificationType(type);
    setShowNotification(true);
  };
  const toggleLoader = (showLoader) => {
    setShowLoader(showLoader);
  };
  const handleNotificationClose = () => {
    setShowNotification(false);
  };
  return (
    <div>
      {showNotification && (
        <Notification
          handleNotificationClose={handleNotificationClose}
          notificationType={notificationType}
          notificationMessage={notificationMessage}
          showNotification={showNotification}
        />
      )}
      <AppLoader showLoader={showLoader} />
      <TestContext.Provider
        value={{ showAppNotification, toggleLoader }}
        children={children}
      />
    </div>
  );
}
export const useCommonContext = () => {
  const context = useContext(TestContext);
  return context;
};
export default CommonContext;
