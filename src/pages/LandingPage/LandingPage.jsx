import { Box, Typography } from "@mui/material";
import React from "react";
import { BreadcrumbsComp } from "../../components/BreadcrumbsComp";

const LandingPage = () => {
  return (
    <Box>
      <Box>
        <BreadcrumbsComp />
      </Box>
      <Box sx={{ mt: 2 }}>
        <Typography>Calculators</Typography>
      </Box>
      <Box sx={{ mt: 1 }}>List of the Calculators</Box>
    </Box>
  );
};
export default LandingPage;
