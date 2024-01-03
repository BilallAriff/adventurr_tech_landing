import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ServiceCard from "@/app/components/ServiceCard/SerivceCard";

const Services = () => {
  return (
    <Box className={"section"}>
      <Container>
        <Grid container>
          <Grid md={12}>
            <Typography variant={"h4"} fontWeight={600} textAlign={"center"}>
              Next Generation Web and Mobil Mobile App <br />
              Development Services
            </Typography>
          </Grid>
          <Grid md={12}>
            <Typography
              my={6}
              className={"section-sub-text"}
              textAlign={"center"}
            >
              Currently we are providing following services
            </Typography>
          </Grid>
          <Grid md={12} container>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
                gap: 3,
              }}
            >
              <ServiceCard
                image={"/services/brand_identity.png"}
                title={"Brand Identity"}
                description={
                  "We design more then just a logo, a complete Brand Identity package for you"
                }
              />
              <ServiceCard
                image={"/services/web_apps.png"}
                title={"Web Apps"}
                description={
                  "Full-fledge Web Apps to landing pages, we develop all using Reactjs, Nextjs, MUI and Bootstrap"
                }
              />
              <ServiceCard
                image={"/services/mobile_apps.png"}
                title={"Mobile Apps"}
                description={
                  "Hybrid Mobile applications that work using ReactNative for both Android and iOS"
                }
              />
              <ServiceCard
                image={"/services/ux_ui.png"}
                title={"UX/UI"}
                description={
                  "Modern sleek and responsive User Interfaces and engaging user friendly Experiences we are here to help"
                }
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
