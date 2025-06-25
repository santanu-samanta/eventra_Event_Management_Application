"use client";

import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const Service = () => {
  return (
    <>
      <Box
        sx={{
          py: { xl: 20, lg: 15, md: 10, sm: 7, xs: 8 },
          px: { xs: 2, md: 10 },
          position: "relative",
        }}
      >
        <Box
          component={"img"}
          src="/Group.png"
          sx={{
            position: "absolute",
            left: "50%",
            bottom: "20%",
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
        <Box display={"flex"} justifyContent="center" gap={4} flexWrap={"wrap"}>
          <Grid
            item
            xs={12}
            md={6}
            width={{ xl: "40%", lg: "40%", md: "100%", sm: "100%" }}
            textAlign={{ xl: "left", lg: "left", md: "center", xs: "center" }}
          >
            <Typography variant="h4" sx={{ color: "#5D6A00", mb: 1 }}>
              Our Services
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
              What We Do, Done <br /> Exceptionally Wel
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
              Our programs are designed to support every step of your health
              journey. Whether you're managing a condition, aiming for a fitness
              goal, or simply trying to eat better, we’ve got you covered. We
              combine expert guidance, personalized plans, and real-life support
              to help you stay motivated and make lasting changes.
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
          {/* Left side - Image collage */}
          <Grid
            item
            xs={12}
            md={6}
            width={{ xl: "50%", lg: "50%", md: "100%", sm: "100%" }}
            gap={5}
            display={"flex"}
            flexWrap={{ xl: "nowrap", lg: "nowrap", md: "wrap", sm: "wrap" }}
          >
            <Box>

              <Box
                sx={{
                  position: "relative",
                  width: 300,
                  height: 220,
                  borderTopLeftRadius: "40px",
                  overflow: "hidden",
                  bgcolor: "black", // fallback
                  mb: 4,
                }}
              >
                <div className=" opacity-[0.2] absolute w-full h-full bg-white top-0 left-0 z-999"></div>
                {/* Background Image */}
                <Image
                  src="/image 3.png" // Replace with your image
                  alt="Concert"
                  layout="fill"
                  objectFit="cover"
                  quality={100}
                />

                {/* Overlay content */}
                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    background: "rgba(0,0,0,0.4)", // dark overlay for readability
                    color: "#fff",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    px: 2,
                  }}
                >
                  <Box
                    sx={{
                      bgcolor: "#a0c900",
                      width: 32,
                      height: 32,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: 1,
                    }}
                  >
                    {/* Icon placeholder - replace with actual icon */}
                    <Typography fontSize={18}>🎵</Typography>
                  </Box>
                  <Typography fontWeight="bold" fontSize={14}>
                    Concert Management
                  </Typography>
                  <Typography fontSize={12}>
                    From artist coordination to stage production, we create
                    unforgettable live music experiences.
                  </Typography>
                </Box>
              </Box>

              <Box
                sx={{
                  position: "relative",
                  width: 300,
                  height: 220,
                  borderBottomLeftRadius: "40px",
                  overflow: "hidden",
                  bgcolor: "black", // fallback
                }}
              >
                <div className=" opacity-[0.2] absolute w-full h-full bg-white top-0 left-0 z-999"></div>
                {/* Background Image */}
                <Image
                  src="/image 4.png" // Replace with your image
                  alt="Concert"
                  layout="fill"
                  objectFit="cover"
                  quality={100}
                />

                {/* Overlay content */}
                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    background: "rgba(0,0,0,0.4)", // dark overlay for readability
                    color: "#fff",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    px: 2,
                  }}
                >
                  <Box
                    sx={{
                      bgcolor: "#a0c900",
                      width: 32,
                      height: 32,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: 1,
                    }}
                  >
                    {/* Icon placeholder - replace with actual icon */}
                    <Typography fontSize={18}>🎵</Typography>
                  </Box>
                  <Typography fontWeight="bold" fontSize={14}>
                    Concert Management
                  </Typography>
                  <Typography fontSize={12}>
                    From artist coordination to stage production, we create
                    unforgettable live music experiences.
                  </Typography>
                </Box>
              </Box>

            </Box>

            <Box
              sx={{
                display: {
                  xl: "block",
                  lg: "block",
                  md: "none",
                  sm: "none",
                  xs: "none",
                },
                mt: -7,
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: 300,
                  height: 220,
                  borderTopLeftRadius: "40px",
                  overflow: "hidden",
                  bgcolor: "black", // fallback
                  mb: 4,
                }}
              >
                <div className=" opacity-[0.2] absolute w-full h-full bg-white top-0 left-0 z-999"></div>
                {/* Background Image */}
                <Image
                  src="/image 5.png" // Replace with your image
                  alt="Concert"
                  layout="fill"
                  objectFit="cover"
                  quality={100}
                />

                {/* Overlay content */}
                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    background: "rgba(0,0,0,0.4)", // dark overlay for readability
                    color: "#fff",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    px: 2,
                  }}
                >
                  <Box
                    sx={{
                      bgcolor: "#a0c900",
                      width: 32,
                      height: 32,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: 1,
                    }}
                  >
                    {/* Icon placeholder - replace with actual icon */}
                    <Typography fontSize={18}>🎵</Typography>
                  </Box>
                  <Typography fontWeight="bold" fontSize={14}>
                    Concert Management
                  </Typography>
                  <Typography fontSize={12}>
                    From artist coordination to stage production, we create
                    unforgettable live music experiences.
                  </Typography>
                </Box>
              </Box>

              <Box
                sx={{
                  position: "relative",
                  width: 300,
                  height: 220,
                  borderBottomLeftRadius: "40px",
                  overflow: "hidden",
                  bgcolor: "black", // fallback
                }}
              >
                <div className=" opacity-[0.2] absolute w-full h-full bg-white top-0 left-0 z-999"></div>
                {/* Background Image */}
                <Image
                  src="/image 6.png" // Replace with your image
                  alt="Concert"
                  layout="fill"
                  objectFit="cover"
                  quality={100}
                />

                {/* Overlay content */}
                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    background: "rgba(0,0,0,0.4)", // dark overlay for readability
                    color: "#fff",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    px: 2,
                  }}
                >
                  <Box
                    sx={{
                      bgcolor: "#a0c900",
                      width: 32,
                      height: 32,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: 1,
                    }}
                  >
                    {/* Icon placeholder - replace with actual icon */}
                    <Typography fontSize={18}>🎵</Typography>
                  </Box>
                  <Typography fontWeight="bold" fontSize={14}>
                    Concert Management
                  </Typography>
                  <Typography fontSize={12}>
                    From artist coordination to stage production, we create
                    unforgettable live music experiences.
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>

          {/* Right side - Text content */}
        </Box>
      </Box>
    </>
  );
};

export default Service;
