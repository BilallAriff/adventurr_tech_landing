import Image from "next/image";
import styles from "./page.module.css";
import { Box, Container, Grid, Typography } from "@mui/material";
import Navigation from "./sections/navigation/navigation";
import Header from "./sections/Header/Header";

export default function Home() {
  return (
    <>
      <Container>
        <Grid container>
          <Grid md={12}>
            <Navigation />
          </Grid>
          <Grid md={12}>
            <Header />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
