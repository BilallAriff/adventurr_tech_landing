import PricingCard from "@/app/components/Cards/PricingCard";
import SectionComponent from "@/app/components/SectionComponent/SectionComponent";
import Box from "@mui/material/Box";
import React from "react";

const Pricing = () => {
  const prices = [
    {
      price: 50.0,
      title: "Brand Identity",
      description: "Get your brand a new identity, starting just from 100.00",
    },
    {
      price: 100.0,
      title: "Web Apps",
      description: "Turn your idea into reality, starting from $50.00",
    },
    {
      price: 100.0,
      title: "Mobile Apps",
      description:
        "Get a Hybrid mobile app that runs on both iOS, and Android starting from $100.00",
    },
    {
      price: 50.0,
      title: "UX/UI",
      description: "User Experience designa nd Ui Design starting from $50.00",
    },
  ];

  return (
    <SectionComponent
      //   backgroundColor={"#FFFFFF"}
      mainHeading={"Pricing"}
      subHeading={
        "We have just started keeping our prices low, but our quality and standards are much higher then our prices"
      }
    >
      <Box
        className="flex-all-center"
        sx={{
          //  border: "1px solid red",
          gap: 2.5,
          width: "100%",
        }}
      >
        {prices.map((price, index) => {
          return (
            <PricingCard
              key={index}
              price={price.price}
              title={price.title}
              description={price.description}
            />
          );
        })}
      </Box>
    </SectionComponent>
  );
};

export default Pricing;
