import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import React from "react";

const PricingCard = (props: any) => {
  const { title, price, description } = props;

  return (
    <Box
      className={"flex-all-center"}
      sx={{
        flexDirection: "column",
        textAlign: "center",
        backgroundColor: "#FFFFFF",
        width: "245px",
        height: "211px",
        boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.1)",
        borderRadius: "8px",
      }}
    >
      <Typography
        sx={{
          fontWeight: 900,
          fontSize: "32px",
          color: "#001AFF",
        }}
      >
        ${price}
      </Typography>
      <Typography
        sx={{
          fontWeight: 600,
          fontSize: "25px",
        }}
      >
        {title}
      </Typography>
      <Typography
        sx={{
          fontWeight: 300,
          fontSize: "12px",
          color: "rgba(0, 0, 0, 0.75)",
        }}
      >
        {description}
      </Typography>
    </Box>
  );
};

export default PricingCard;
