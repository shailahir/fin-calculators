import React from "react";
import { Box } from "@mui/material";
import { Header } from "../Header";

const Layout = ({ children }) => {
  return (
    <Box>
      <Box>
        <Header />
      </Box>
      <Box sx={{ mt: 7, p: 3 }}>{children}</Box>
      <Box sx={{ textAlign: "center", m: 2 }}>
        &copy; No copyright, You can use it, the way you want. without any
        guarntees offcourse.
      </Box>
    </Box>
  );
};
export default Layout;
