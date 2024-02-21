import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <Box>
      <AppBar color="transparent" variant="outlined">
        <Toolbar>
          <Typography variant="h6">Financial Planning Calculators</Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
