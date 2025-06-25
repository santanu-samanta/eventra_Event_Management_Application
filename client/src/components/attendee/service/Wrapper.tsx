"use client";

import React from "react";
import {
  Typography,
  Container,
  Grid,
  Box,
  Card,
  CardActionArea,
  Chip,
} from "@mui/material";
import Image from "next/image";
import { useUpcomingEvent } from "@/hooks/react-query/query-hooks/upcomingeventHoik";
import Link from "next/link";
import { getMedia } from "@/api/axiosInstance/axiosInstance";

// Helper function to truncate text to 50 words
const truncateText = (text: string, wordLimit: number): string => {
  const words = text.split(" ");
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(" ") + " ...";
  }
  return text;
};

const Wrapper = () => {
  const { data } = useUpcomingEvent();

  return (
    <>
      <Box>
        {/* Services Section */}
        <Box
          sx={{
            position: "relative",
            padding: "50px 0",
            background:
              "linear-gradient(to right, rgba(245, 255, 175, 0.25), rgba(250, 255, 218, 0.5))",
            backgroundRepeat: "no-repeat",
            boxShadow: 3,
            borderBottomLeftRadius: "20px",
            borderBottomRightRadius: "20px",
            overflow: "hidden",
          }}
        >
          <Container sx={{ position: "relative" }}>
            {/* Decorative swirl image on left */}
            <span
              style={{
                position: "absolute",
                top: "20%",
                left: 0,
                zIndex: 0,
              }}
            >
              <Image
                width={500}
                height={500}
                src="/leftElement.png"
                alt=""
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </span>

            <Grid
              container
              alignItems="center"
              justifyContent={"center"}
              spacing={2}
              sx={{ position: "relative", zIndex: 1 }}
            >
              {/* Text Column */}
              <Grid item xs={12} md={6}>
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: "3rem",
                    fontWeight: 700,
                    color: "#1d1d1d",
                  }}
                >
                  Services
                </Typography>
              </Grid>

              {/* Image Layout */}
              <Grid
                item
                xs={12}
                md={6}
                sx={{
                  position: "relative",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  height: "320px",
                }}
              >
                {/* Left stacked images */}
                <Box
                  sx={{
                    display: {
                      xl: "block",
                      lg: "block",
                      md: "none",
                      sm: "none",
                      xs: "none",
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "15px",
                    }}
                  >
                    {/* Top image (img3) */}
                    <Box
                      sx={{
                        width: "300px",
                        height: "170px",
                        borderRadius: "20px",
                        overflow: "hidden",
                        position: "relative",
                        zIndex: 1,
                      }}
                    >
                      <Image
                        src="/firstpic.png"
                        width={500}
                        height={500}
                        alt="Top Left"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </Box>

                    {/* Bottom image (img4) — made thinner and smaller, adjusted marginLeft */}
                    <Box
                      sx={{
                        width: "220px",
                        height: "65px",
                        borderRadius: "20px",
                        overflow: "hidden",
                        position: "relative",
                        zIndex: 1,
                        marginLeft: "5px", // Reduced marginLeft to move it left
                      }}
                    >
                      <Image
                        src="/thirdpic.png"
                        width={500}
                        height={500}
                        alt="Bottom Left"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </Box>
                  </Box>

                  {/* Overlapping image (img5) */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: "135px",
                      left: "230px",
                      width: "220px",
                      height: "110px",
                      borderRadius: "20px",
                      overflow: "hidden",
                      boxShadow: 3,
                      zIndex: 2,
                    }}
                  >
                    <Image
                      src="/secondpic.png"
                      width={500}
                      height={500}
                      alt="Overlay"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
        {/* Crafted With Care Section */}
        <Box
          sx={{
            py: { xl: 15, lg: 10, md: 8, sm: 8, xs: 8 },
            backgroundColor: "#fcffeb",
          }}
        >
          <Container>
            <Grid
              container
              alignItems="center"
              justifyContent="center"
              spacing={{ xl: 15, lg: 10, md: 5, sm: 5, xs: 5 }}
              display={{
                xl: "flex",
                lg: "flex",
                md: "flex",
                sm: "flex",
                xs: "flex",
              }}
            >
              {/* Left: Image */}
              <Grid
                item
                xs={12}
                md={6}
                width={{ xl: "50%", lg: "50%", md: "100%", sm: "100%" }}
                display={"flex"}
                flexWrap={{
                  xl: "nowrap",
                  lg: "nowrap",
                  md: "wrap",
                  sm: "wrap",
                  xs: "wrap",
                }}
                gap={5}
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

              {/* Right: Text */}
              <Grid
                item
                xs={12}
                md={6}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: { xs: "center", md: "flex-start" },
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    color: "#232802",
                    fontSize: "35px",
                    mb: 2,
                    lineHeight: 1.3,
                  }}
                >
                  Crafted With Care. Executed <br /> With Excellence
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "14px",
                    color: "#6E6E6E",
                    mb: 3,
                    maxWidth: 450,
                  }}
                >
                  Whether it's a high-impact corporate gathering or a
                  sophisticated celebration, we bring your vision to
                  life—seamlessly and stylishly. Eventra offers end-to-end event
                  solutions with flawless attention to detail.
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* Upcoming Events Section */}
        <Box
          textAlign="center"
          sx={{
            backgroundColor: "#fcffeb",
            paddingBottom: "200px",
            pb: { xl: 10, lg: 10, md: 5, sm: 5, xs: 5 },
          }}
        >
          <Container>
            <Typography
              variant="h4"
              component="h2"
              sx={{
                fontSize: "35px",
                color: "#232802",
                fontFamily: "Poppins, sans-serif",
                fontWeight: 600,
              }}
            >
              Have A Look At Our Upcoming <br /> Events
            </Typography>

            <Typography
              variant="body1"
              sx={{
                mt: 3,
                mb: 5,
                fontSize: "14px",
                color: "#6E6E6E",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              Explore what's on the horizon with Eventra. From elegant corporate
              gatherings to unforgettable celebrations, there's always something
              exceptional in the works.
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: "20px",
                flexWrap: "wrap",
              }}
            >
              {data?.slice(0, 8).map((webinar) => (
                <Card
                  key={webinar._id}
                  sx={{
                    borderRadius: 3,
                    overflow: "hidden",
                    position: "relative",
                    height: 300,
                    width: {
                      xl: "23%",
                      lg: "23%",
                      md: "23%",
                      sm: "100%",
                      xs: "100%",
                    },
                  }}
                >
                  <Link href={`/attendee//singelevent/${webinar._id}`}>
                    <CardActionArea
                      sx={{
                        width: "100%",
                        height: "100%",
                        position: "relative",
                      }}
                    >
                      <Box
                        sx={{
                          backgroundImage: `url(${getMedia(
                            webinar.images[0]
                          )})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          height: "100%",
                          width: "100%",
                          position: "absolute",
                          top: 0,
                          left: 0,
                        }}
                      />

                      {/* Gradient overlay */}
                      <Box
                        sx={{
                          position: "absolute",
                          bottom: 0,
                          width: "100%",
                          bgcolor: "rgba(0,0,0,0.6)",
                          color: "#fff",
                          px: 2,
                          py: 2,
                        }}
                      >
                        <Typography variant="body2">{webinar.date}</Typography>
                        <Typography variant="body2" sx={{ mt: 0.5 }}>
                          {truncateText(webinar.description, 10)}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ mt: 1, fontWeight: "bold", color: "#c3f35c" }}
                        >
                          Read More →
                        </Typography>
                      </Box>

                      {/* Top-left label */}
                      <Chip
                        label={webinar?.category}
                        size="small"
                        sx={{
                          position: "absolute",
                          top: 10,
                          left: 10,
                          bgcolor: "#d4f358",
                          fontWeight: 600,
                        }}
                      />
                    </CardActionArea>
                  </Link>
                </Card>
              ))}
            </Box>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default Wrapper;
