import SectionComponent from "@/app/components/SectionComponent/SectionComponent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import React from "react";

const Blogs = () => {
  return (
    <SectionComponent
      mainHeading={"Blogs"}
      subHeading={
        "Here are our featured blogs to help you understand about different technologies we offer"
      }
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignContent: "center",
          gap: 2,
        }}
      >
        {blogPosts.map((blog, index) => {
          return (
            <Box
              key={index}
              sx={{
                width: "180px",
                backgroundColor: "#FFFFFF",
                boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.1)",
                borderRadius: "8px",
                textAlign: "center",
              }}
            >
              <Box
                className={"flex-all-center"}
                overflow={"hidden"}
                maxHeight={"180px"}
                textAlign={"center"}
              >
                <img width={"200%"} src={blog.image} />
              </Box>
              <Typography
                sx={{
                  paddingX: 2,
                  my: 2,
                  textAlign: "center",
                  fontWeight: 800,
                  fontSize: 18,
                }}
              >
                {blog.title}
              </Typography>
              <Typography
                paddingX={2}
                textAlign={"center"}
                fontWeight={200}
                fontSize={14}
              >
                {blog.description}
              </Typography>
            </Box>
          );
        })}
      </Box>
    </SectionComponent>
  );
};

export default Blogs;

const blogPosts = [
  {
    image:
      "https://blog.hubspot.com/hs-fs/hubfs/react.png?width=595&height=400&name=react.png",

    url: "https://blog.hubspot.com/website/react-js",
    title: "What is Reactjs",
    description:
      "React.js is a front-end library that has gradually become the go-to framework for modern web development within the JavaScript community.",
  },
  {
    image:
      "https://procoders.tech/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2020/11/Jordan-Walke.png.webp",

    url: "https://procoders.tech/blog/advantages-of-using-reactjs/",
    title: "8 Reasons to choose React",
    description:
      "eactJS was created by Jordan Walke, an engineer at Facebook, in 2011. Its purpose was to be an open-source JavaScript library to facilitate front-end web application development.",
  },
];
