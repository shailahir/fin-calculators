import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { AVAILABLE_CALCULATORS } from "./constants";
import { BreadcrumbsComp } from "../../components/BreadcrumbsComp";
import { CalculatorCard } from "../../components/CalculatorCard";

const LandingPage = () => {
  return (
    <Box>
      <Box>
        <BreadcrumbsComp />
      </Box>
      <Box sx={{ mt: 2 }}>
        <Typography>Calculators</Typography>
      </Box>
      <Box sx={{ mt: 1 }}>
        <Grid container spacing={2}>
          {AVAILABLE_CALCULATORS.map((cal, index) => (
            <Grid key={index} item>
              <CalculatorCard
                title={cal?.title}
                subTitle={cal?.subTitle}
                path={cal?.path}
                icon={cal?.icon}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};
export default LandingPage;
