"use client";

import { Box, Typography, Button, Grid } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { getMedia } from "@/api/axiosInstance/axiosInstance";
import { Autoplay } from "swiper/modules";
import Link from "next/link";
import { ArtistNameAndImage } from "@/types";
const Banner = ({ data2 }: { data2: ArtistNameAndImage[] }) => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        py: { xs: 8, md: 12 },
        px: { xs: 2, md: 10 },
        backgroundImage: "url('/image 14.png')", // Replace with your image
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#fff",
        height: {
          xl: "600px",
          lg: "600px",
          md: "500px",
          sm: "500px",
          xs: "500px",
        },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderBottomLeftRadius: "50px",
        borderBottomRightRadius: "50px",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          zIndex: 1,
          borderBottomLeftRadius: "50px",
          borderBottomRightRadius: "50px",
        }}
      ></Box>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: false,
        }}
        navigation={false}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {data2 && data2.length > 0 && (
          <>
            {[...data2]?.reverse()?.map((item) => (
              <SwiperSlide key={item._id}>
                <Grid
                  container
                  alignItems="center"
                  spacing={4}
                  justifyContent={"space-around"}
                  position={"relative"}
                  zIndex={99}
                >
                  {/* Text Column */}
                  <Grid item xs={12} md={6}>
                    <Typography
                      variant="h3"
                      fontWeight={700}
                      sx={{
                        mb: 2,
                        fontSize: { xl: 50, lg: 40, md: 35, sm: 35, xs: 35 },
                      }}
                    >
                      Feel the{" "}
                      <Box component="span" sx={{ color: "#E0FF00" }}>
                        Beat
                      </Box>
                      , Live <br />
                      the Night
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ maxWidth: 450, mb: 4, color: "#ccc" }}
                    >
                      Step into a night where music takes over, lights dance in
                      rhythm, and every moment pulses with energy. This isn't
                      just a concert — it's the vibe you've been waiting for.
                    </Typography>
                    <Link href={"/attendee/service"}>
                      <Button
                        variant="contained"
                        sx={{
                          bgcolor: "#E0FF00",
                          color: "#000",
                          borderRadius: 999,
                          px: 4,
                          py: 1.5,
                          textTransform: "none",
                          fontWeight: 600,
                          mb: 3,
                          "&:hover": {
                            bgcolor: "#c3ea00",
                          },
                        }}
                      >
                        Learn More
                      </Button>
                    </Link>

                    {/* Underline */}
                  </Grid>

                  {/* Image Column */}
                  <Grid
                    item
                    xs={12}
                    md={6}
                    sx={{
                      textAlign: "center",
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
                        width: {
                          xl: "420px",
                          lg: "420px",
                          md: "300px",
                          sm: "300px",
                          xs: "300px",
                        },
                        height: {
                          xl: "420px",
                          lg: "420px",
                          md: "300px",
                          sm: "300px",
                          xs: "300px",
                        },
                        borderRadius: "50%",
                        border: "1px dashed #AAC106",
                        p: 3,
                      }}
                    >
                      <Box
                        component={"img"}
                        src={
                          item.images && item.images.length > 0
                            ? getMedia(item.images[0])
                            : "/image 3.png"
                        }
                        sx={{
                          width: "370px",
                          height: "370px",
                          borderRadius: "50%",
                          objectFit: "cover",
                        }}
                      />
                    </Box>
                  </Grid>
                </Grid>
              </SwiperSlide>
            ))}
          </>
        )}
      </Swiper>
    </Box>
  );
};

export default Banner;
