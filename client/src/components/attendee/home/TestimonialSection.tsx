"use client";

import React from "react";
import Testimonial from "../testimonial/Testimonial";
import { Box, Typography } from "@mui/material";

const TestimonialSection = () => {
  return (
    <>
      <Box sx={{ textAlign: "center", my:{xl: 10, lg: 8, md: 5, sm: 5, xs: 5}, position: "relative", zIndex: 9 }}>
        <Typography variant="h4" fontWeight={600} color="#5D6A00" mb={2}>
          Testimonials
        </Typography>

        <Typography
          variant="h2"
          fontWeight={600}
          color="#000"
          mb={2}
          fontSize={{ xl: 50, lg: 40, md: 30, sm: 25, xs: 20 }}
          position={"relative"}
        >
          Words That Inspire. <br /> Experiences That Matter
          <Box
            component={"img"}
            src="/Rectangle 38.png"
            sx={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              display: {
                xl: "block",
                lg: "block",
                md: "none",
                sm: "none",
                xs: "none",
              },
            }}
          />
        </Typography>

        <Typography variant="body1" fontWeight={200} color="#000" mb={2}>
          Every word shared is a testament to the moments we’ve created
          together.
        </Typography>

           <Testimonial />
      </Box>
   
    </>
  );
};

export default TestimonialSection;
