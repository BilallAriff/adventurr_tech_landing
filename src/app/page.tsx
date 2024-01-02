import Image from "next/image";
import styles from "./page.module.css";
import { Box, Typography } from "@mui/material";

export default function Home() {
  return (
    <>
      <Box className="flex-all-center full-screen">
        <Typography variant={"h2"}>AdventurrTech</Typography>
      </Box>
    </>
  );
}
