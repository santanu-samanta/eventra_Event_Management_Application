"use client";
import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const Aboutus = () => {
  return (
    <>
      <Box
        sx={{
          mt: { xl: 20, lg: 15, md: 10, sm: 10, xs: 10 },
        }}
      >
        <Box display={"flex"} justifyContent="center" gap={4} flexWrap={"wrap"}>
          {/* Left side - Image collage */}
          <Grid
            item
            xs={12}
            md={6}
            width={{ xl: "48%", lg: "48%", md: "100%", sm: "100%" }}
          >
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: 2,
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  overflow: "hidden",
                  borderRadius: "24px 0 0 24px",
                }}
              >
                <Image
                  src="/firstpic.png"
                  alt="event1"
                  width={300}
                  height={300}
                  style={{ width: "100%", height: "auto", objectFit: "cover" }}
                />
              </Box>

              <Box sx={{ display: "grid", gap: 2 }}>
                <Box
                  sx={{
                    overflow: "hidden",
                    borderRadius: "0 24px 0 0",
                  }}
                >
                  <Image
                    src="/thirdpic.png"
                    alt="event2"
                    width={150}
                    height={150}
                    style={{
                      width: "100%",
                      height: "auto",
                      objectFit: "cover",
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    overflow: "hidden",
                    borderRadius: "0 0 24px 0",
                  }}
                >
                  <Image
                    src="/secondpic.png"
                    alt="event3"
                    width={150}
                    height={150}
                    style={{
                      width: "100%",
                      height: "auto",
                      objectFit: "cover",
                    }}
                  />
                </Box>
              </Box>
            </Box>
          </Grid>

          {/* Right side - Text content */}
          <Grid
            item
            xs={12}
            md={6}
            width={{ xl: "48%", lg: "48%", md: "100%", sm: "100%" }}
            textAlign={{ xl: "left", lg: "left", md: "center", xs: "center" }}
            sx={{ position: "relative" }}
          >
            <Typography variant="h4" sx={{ color: "#5D6A00", mb: 1 }}>
              About eventra
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
              Turning Moments Into <br /> Masterpieces
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
        </Box>
      </Box>
    </>
  );
};

export default Aboutus;
