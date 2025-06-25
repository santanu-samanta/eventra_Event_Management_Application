"use client";

import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const Upcomingevent = () => {
  return (
    <>
      <Box
        sx={{
          my: { xl: 10, lg: 8, md: 5, sm: 5, xs: 5 },
          position: "relative",
        }}
      >
        <Box
          component={"img"}
          src="/Groupbig.png"
          sx={{
            position: "absolute",
            right: "0%",
            bottom: "-20%",
            transform: "translate(-250%, -50%)",
            display: {
              xl: "block",
              lg: "block",
              md: "none",
              sm: "none",
              xs: "none",
            },
          }}
        />
        <Box
          display={"flex"}
          justifyContent="center"
          gap={4}
          flexWrap={"wrap"}
          alignContent={"center"}
        >
          {/* Left side - Image collage */}
          <Grid
            item
            xs={12}
            md={6}
            width={{ xl: "48%", lg: "48%", md: "100%", sm: "100%" }}
            display={"flex"}
            justifyContent={"center"}
          >
            <Box
              sx={{
                width: {
                  xl: "548px",
                  lg: "548px",
                  md: "400px",
                  sm: "300px",
                  xs: "300px",
                },
                height: {
                  xl: "548px",
                  lg: "548px",
                  md: "400px",
                  sm: "300px",
                  xs: "300px",
                },
                borderRadius: "50%",
                border: "1px dashed #AAC106",
                p: 3,
              }}
            >
              <Image
                src="/image 31.png"
                alt="event1"
                width={300}
                height={300}
                style={{
                  width: "548px",
                  height: "auto",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
              />
            </Box>
          </Grid>

          {/* Right side - Text content */}
          <Grid
            item
            xs={12}
            md={6}
            width={{ xl: "48%", lg: "48%", md: "100%", sm: "100%" }}
            textAlign={{ xl: "left", lg: "left", md: "center", xs: "center" }}
            display={"flex"}
            justifyContent={"center"}
            flexDirection={"column"}
          >
            <Typography variant="h4" sx={{ color: "#5D6A00", mb: 1 }}>
              Upcoming Events
            </Typography>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                mb: 2,
                fontSize: { xl: 50, lg: 40, md: 30, sm: 25, xs: 20 },
                position: "relative",
              }}
            >
              The Stage Is Set <br /> Don’t Miss Out
              <Box
                component={"img"}
                src="/Rectangle 38.png"
                sx={{
                  position: "absolute",
                  left: "0%",
                  top: "0%",

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
            <Typography variant="body1" sx={{ mb: 4, color: "text.secondary" }}>
              The stage is set, and the spotlight is waiting. Be there to
              witness unforgettable moments come alive. From powerful
              performances to immersive experiences, Each event is crafted to
              leave a lasting impression. Feel the energy, live the vibe, and be
              part of the story. Because at Eventra, every moment is made to
              shine.
            </Typography>
            <Link href="/attendee/aboutus">
              <Button
                variant="contained"
                sx={{
                  bgcolor: "#a0c900",
                  color: "black",
                  borderRadius: 999,
                  px: 4,
                  py: 1.5,
                }}
              >
                Learn More
              </Button>
            </Link>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Upcomingevent;
