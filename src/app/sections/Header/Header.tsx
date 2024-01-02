import Text from "@/app/components/Text/Text";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import React from "react";
import Button from "@mui/material/Button";

const Header = () => {
  return (
    <Box className={"flex-all-center"} sx={{ paddingY: 5 }}>
      <Box sx={{ width: "65%" }}>
        <Typography variant={"h2"}>
          Your Personal{" "}
          <span style={{ fontWeight: 800, color: "#001AFF" }}>Tech Team</span>
        </Typography>
        <Typography variant={"h2"}>We Design UX/UI</Typography>
        <Typography my={4}>
          We are team of professional designers developers and tech enthusiasts,
          if you have an idea and need someone to turn into reality then you are
          at the right place
        </Typography>
        <Button variant="contained" size={"small"}>
          Connect for free consultation
        </Button>
      </Box>
      <Box
        sx={{
          width: "35%",
          display: "flex",
          justifyContent: "flex-start",
          //   alignItems: "center",
          flexWrap: "wrap",
          gap: 4,
          //   paddingLeft: 3,
          //   paddingRight: 1,
        }}
      >
        <img src={"/hero_header/brand_identity.png"} alt={"image"} />
        <img src={"/hero_header/web_app.png"} alt={"image"} />
        <img src={"/hero_header/mobile_app.png"} alt={"image"} />
        <img src={"/hero_header/ux_ui.png"} alt={"image"} />
      </Box>
    </Box>
  );
};

export default Header;
