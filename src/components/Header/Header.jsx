import React from "react";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";

const Header = () => {
  return (
    <Box>
      <AppBar color="transparent" variant="outlined" elevation={0}>
        <Toolbar>
          <Typography variant="h6">Financial Planning Calculators</Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
