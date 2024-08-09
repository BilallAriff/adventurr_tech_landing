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
    <Box
      sx={{
        width: "180px",
        backgroundColor: "#FFFFFF",
        boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.1)",
        borderRadius: "8px",
      }}
    >
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
      <Box padding={1}>
        <Typography textAlign={"center"} fontWeight={200} fontSize={14}>
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

export default SerivceCard;

/* Rectangle 10 */

// position: absolute;
// width: 183px;
// height: 303px;
// left: 479px;
// top: 804px;

// background: #FFFFFF;
// box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
// border-radius: 8px;
