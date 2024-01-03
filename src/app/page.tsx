import Image from "next/image";
import styles from "./page.module.css";
import { Box, Container, Grid, Typography } from "@mui/material";
import Navigation from "./sections/navigation/navigation";
import Header from "./sections/Header/Header";
import Services from "./sections/Services/Services";
import ToolsAndTechnology from "./sections/ToolsAndTechnology/ToolsAndTechnology";

export default function Home() {
  return (
    <>
      <Grid container>
        <Grid md={12}>
          <Container>
            <Navigation />
          </Container>
        </Grid>
        <Grid md={12}>
          <Container>
            <Header />
          </Container>
        </Grid>
        <Grid md={12}>
          <Services />
        </Grid>
        <Grid md={12}>
          <ToolsAndTechnology />
        </Grid>
      </Grid>
    </>
  );
}
