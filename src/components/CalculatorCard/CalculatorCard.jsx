import React from "react";
import { Box, Card, CardContent, Icon, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const CalculatorCard = ({ title, subTitle, path, icon }) => {
  const navigate = useNavigate();

  const onClickGoToCalculatorPath = () => {
    console.log("card clicked");
    if (path) {
      navigate(path);
    }
  };

  return (
    <Card
      onClick={onClickGoToCalculatorPath}
      sx={{
        width: "350px",
        cursor: "pointer",
        height: "100%",
        borderRadius: "5px",
        position: "relative",
      }}
      variant="outlined"
      elevation={0}
    >
      <CardContent>
        {icon && (
          <Box
            position={"absolute"}
            zIndex={0}
            sx={{
              top: "-16px",
              right: "-8px",
            }}
          >
            <Icon sx={{ height: "100%", width: "100%", opacity: 0.3 }}>
              {icon}
            </Icon>
          </Box>
        )}

        <Box zIndex={10}>
          <Typography variant="body1" sx={{ fontWeight: "bold" }}>
            {title}
          </Typography>
        </Box>
        <Box sx={{ mt: 2 }}>
          <Typography variant="subtitle2">{subTitle}</Typography>
        </Box>
      </CardContent>
    </Card>
  );
};
export default CalculatorCard;
