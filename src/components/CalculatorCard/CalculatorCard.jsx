import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const CalculatorCard = ({ title, subTitle, path }) => {
  const navigate = useNavigate();

  const onClickGoToCalculatorPath = () => {
    if (path) {
      navigate(path);
    }
  };

  return (
    <Card
      onClick={onClickGoToCalculatorPath}
      sx={{ width: "350px" }}
      variant="outlined"
    >
      <CardContent>
        <Box>
          <Typography variant="body1" sx={{ fontWeight: "bold" }}>
            {title}
          </Typography>
        </Box>
        <Box>
          <Typography variant="subtitle2">{subTitle}</Typography>
        </Box>
      </CardContent>
    </Card>
  );
};
export default CalculatorCard;
