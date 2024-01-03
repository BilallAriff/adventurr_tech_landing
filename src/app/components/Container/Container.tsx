import Box from "@mui/material/Box";
import React from "react";

const Container = (props: any) => {
  const { children } = props;
  return <Box sx={{ maxWidth: { md: 420 } }}>{children}</Box>;
};

export default Container;
