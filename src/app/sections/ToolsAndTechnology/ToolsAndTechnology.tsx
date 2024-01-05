import SectionComponent from "@/app/components/SectionComponent/SectionComponent";
import SkillBadges from "@/app/components/SkillBadges/SkillBadges";
import { Box } from "@mui/material";
import Container from "@mui/material/Container";
import React from "react";

const ToolsAndTechnology = () => {
  return (
    <SectionComponent
      backgroundColor={"#FFFFFF"}
      mainHeading={"Tools and Technologies"}
      subHeading={
        "Our Pimary technology is JAvaScript and everything the eco system it lives in"
      }
    >
      <SkillBadges />
    </SectionComponent>
  );
};

export default ToolsAndTechnology;
