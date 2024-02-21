import React from "react";
import { Box, Typography } from "@mui/material";
import { Header } from "../Header";

const Layout = ({ children }) => {
  return (
    <Box>
      <Box>
        <Header />
      </Box>
      <Box sx={{ mt: 7, p: 3, position: "relative" }}>{children}</Box>
      <Box
        sx={{ textAlign: "center", m: 2, bottom: "0px", position: "relative" }}
      >
        <Typography variant="caption">
          &copy; No copyright, You can use it, the way you want. without any
          guarntees offcourse.
        </Typography>
      </Box>
    </Box>
  );
};
export default Layout;
