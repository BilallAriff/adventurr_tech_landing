// import skill_badges from "@/app/store/skill_badges";
import Tooltip from "@mui/material/Tooltip";
import Box from "@mui/material/Box";
import React from "react";
import CircularProgress from "@mui/material/CircularProgress";

const SkillBadges = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {skill_badges.map((badge, index) => {
        return (
          <>
            <Tooltip title={badge?.name}>
              <Box sx={{ marginRight: 2 }} key={index}>
                <img width={"100%"} alt="" src={badge?.icon} />
              </Box>
            </Tooltip>
          </>
        );
      })}
      <Box>
        <Tooltip title={"Learning more . . . "}>
          <CircularProgress size={30} />
        </Tooltip>
      </Box>
    </Box>
  );
};

export default SkillBadges;

const skill_badges = [
  { name: "Bootstrap", icon: "/skillbadges/bootstrap_round.png" },
  { name: "CSS3", icon: "/skillbadges/css_round.png" },
  { name: "ExpressJs", icon: "/skillbadges/express_round.png" },
  { name: "HTML5", icon: "/skillbadges/html_round.png" },
  { name: "Javascript", icon: "/skillbadges/javascript_round.png" },
  { name: "Material UI", icon: "/skillbadges/material_ui_round.png" },
  { name: "Nestjs", icon: "/skillbadges/nestjs_round.png" },
  { name: "Nodejs", icon: "/skillbadges/nodejs_round.png" },
  { name: "React", icon: "/skillbadges/react_round.png" },
  { name: "TailwindCSS", icon: "/skillbadges/tailwindcss_round.png" },
  { name: "MySQL", icon: "/skillbadges/mysql_round.png" },
  { name: "PostgressSQL", icon: "/skillbadges/postgress_round.png" },
  { name: "MongoDB", icon: "/skillbadges/mongodb_round.png" },
  { name: "Figma", icon: "/skillbadges/figma_round.png" },
  { name: "Adobe XD", icon: "/skillbadges/xd_round.png" },
  { name: "UI", icon: "/skillbadges/ui_round.png" },
  { name: "UX", icon: "/skillbadges/ux_round.png" },
  { name: "Jira", icon: "/skillbadges/jira_round.png" },
  { name: "Agile Project Development", icon: "/skillbadges/agile_round.png" },
];
