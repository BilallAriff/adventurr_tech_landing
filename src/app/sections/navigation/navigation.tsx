import AdventurrTechLogo from "@/app/components/AdventurrTechLogo/AdventurrTechLogo";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import React from "react";

const Navigation = () => {
  return (
    <Box className={"flex-row-center-justify-between"} sx={{ paddingY: 2 }}>
      <Box>
        <AdventurrTechLogo />
      </Box>
      <Box>
        <ul className="main-navigation">
          {items?.map((item, index) => {
            return (
              <>
                <li style={{ fontSize: "14px" }}>{item}</li>
                {items?.length === index + 1 ? (
                  <></>
                ) : (
                  <li
                    style={{
                      margin: "0 25px",
                      fontWeight: "200",
                      color: "#00000021",
                    }}
                  >
                    |
                  </li>
                )}
              </>
            );
          })}
        </ul>
      </Box>
      <Box>
        <Button
          sx={{
            textTransform: "none",
          }}
          variant="contained"
          size={"small"}
        >
          Bilal Arif
        </Button>
      </Box>
    </Box>
  );
};

export default Navigation;

const items = ["About", "Services", "Technologies", "Price", "Blog", "Contact"];
