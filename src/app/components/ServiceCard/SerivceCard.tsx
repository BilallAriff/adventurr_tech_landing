import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";

const SerivceCard = (props: {
  image: string;
  title: string;
  description: string;
}) => {
  const { image, title, description } = props;

  return (
    <Box sx={{ width: "180px" }}>
      <Box>
        <img width={"100%"} src={image} />
      </Box>
      <Box>
        <Typography
          sx={{ my: 2, textAlign: "center", fontWeight: 800, fontSize: 18 }}
        >
          {title}
        </Typography>
      </Box>
      <Box>
        <Typography textAlign={"center"} fontWeight={200} fontSize={14}>
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

export default SerivceCard;
