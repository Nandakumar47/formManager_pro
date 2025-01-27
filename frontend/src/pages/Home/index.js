import React, { useEffect, useState } from "react";
import Navbar from "../../components/NavBar";
import { Box, Typography } from "@mui/material";
import axios from "axios";
import { useCommonContext } from "../../contexts/CommonContext/CommonContext";

function Home() {
  const [userEntries, setUserEntries] = useState([]);
  const { showAppNotification, toggleLoader } = useCommonContext();
  const getUserEntries = async () => {
    try {
      toggleLoader(true);
      const response = await axios.get("/api/getStoredData");
      toggleLoader(false);
      if (response.data.success && response.data.result) {
        setUserEntries(response.data.result);
      }

      console.log({ response });
    } catch (error) {}
  };
  useEffect(() => {
    getUserEntries();
  }, []);
  return (
    <Box
      width={"50%"}
      sx={{
        margin: "auto",
        marginTop: 4,
        height: "70vh",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        overflowY: "auto",
        padding: "8px 16px",
      }}
    >
      {userEntries?.length
        ? userEntries?.map((entry) => {
            return (
              <Box
                sx={{
                  width: "700px",
                  background: "white",
                  minHeight: "100px",
                  borderRadius: "10px",
                  padding: "8px 16px",
                  boxShadow: "5px 5px 31px 5px #e2e9f6",
                  textAlign: "left",
                  color: "#472183",
                }}
              >
                <Typography>
                  Name:
                  <Box component={"span"} sx={{ fontWeight: 600 }}>
                    {entry.providedData.name}
                  </Box>
                </Typography>
                <Typography>
                  Email :
                  <Box component={"span"} sx={{ fontWeight: 600 }}>
                    {entry.providedData.email}
                  </Box>
                </Typography>
                <Typography>
                  Contact :
                  <Box component={"span"} sx={{ fontWeight: 600 }}>
                    {entry.providedData.contact}
                  </Box>
                </Typography>
                <Typography>
                  Message :
                  <Box component={"span"} sx={{ fontWeight: 600 }}>
                    {entry.providedData.message}
                  </Box>
                </Typography>
              </Box>
            );
          })
        : null}
    </Box>
  );
}

export default Home;
