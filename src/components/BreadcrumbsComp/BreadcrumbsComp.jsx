import { Box, Breadcrumbs, Link as MatLink, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const BreadcrumbsComp = () => {
  return (
    <Box>
      <Breadcrumbs sx={{ fontSize: "12px" }}>
        <MatLink component={Link} to="/">
          Calculators
        </MatLink>
        <Typography sx={{ fontSize: "12px" }}>Available calculators</Typography>
      </Breadcrumbs>
    </Box>
  );
};
export default BreadcrumbsComp;
