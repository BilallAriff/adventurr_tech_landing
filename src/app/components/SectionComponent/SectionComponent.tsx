import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React from "react";

const SectionComponent = ({
  children,
  mainHeading,
  subHeading,
  backgroundColor = "#fafbfd",
}: any) => {
  return (
    <Box
      sx={{
        margin: "65px 0",
        padding: "100px 0",
        backgroundColor: backgroundColor,
      }}
    >
      <Container>
        <Grid container>
          <Grid md={12}>
            <Typography variant={"h4"} fontWeight={600} textAlign={"center"}>
              {mainHeading}
            </Typography>
          </Grid>
          <Grid md={12}>
            <Typography
              my={6}
              className={"section-sub-text"}
              textAlign={"center"}
            >
              {subHeading}
            </Typography>
          </Grid>
          {children}
        </Grid>
      </Container>
    </Box>
  );
};

export default SectionComponent;
