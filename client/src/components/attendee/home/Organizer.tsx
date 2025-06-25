"use client";

import { getProfileImage } from "@/api/axiosInstance/axiosInstance";
import { Box, Container, Grid, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import React from "react";
import { useAllOrganizerEvent } from "@/hooks/react-query/query-hooks/getallorganizer";

const Organizer = () => {
  const { data } = useAllOrganizerEvent();

  return (
    <>
      <Box sx={{ textAlign: "center", mb: 4, position: "relative", zIndex: 9 }}>
        <Box
          component={"img"}
          src="/Groupss.png"
          sx={{
            position: "absolute",
            left: "0%",
            top: "0%",
            zIndex: -1,
            display: {
              xl: "block",
              lg: "block",
              md: "none",
              sm: "none",
              xs: "none",
            },
          }}
        />

        <Typography variant="h4" fontWeight={600} color="#5D6A00" mb={2}>
          Organizers
        </Typography>

        <Typography
          variant="h2"
          fontWeight={600}
          color="#000"
          mb={2}
          fontSize={{ xl: 50, lg: 40, md: 30, sm: 25, xs: 20 }}
          position={"relative"}
        >
          Meet our creative event <br /> organizers
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
          Behind every seamless event is a team of passionate minds and creative
          hearts <br />
          Our organizers bring innovation, precision, and personality to every
          detail
        </Typography>
      </Box>

      <Box
        sx={{
          py: { xl: 5, lg: 5, md: 5, sm: 5, xs: 5 },

          position: "relative",
          zIndex: 99,
        }}
      >
        <Container>
          <Grid container spacing={5} justifyContent="center">
            <Swiper
              spaceBetween={30}
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
              breakpoints={{
                1440: {
                  slidesPerView: 3, // Show 5 slides per view on large screens
                },
                1024: {
                  slidesPerView: 2, // Show 3 slides per view on medium screens
                },
                768: {
                  slidesPerView: 1, // Show 1 slide per view on mobile
                },
                640: {
                  slidesPerView: 1, // Show 1 slide per view on small screens
                },
                480: {
                  slidesPerView: 1, // Show 1 slide per view on extra small screens
                },
                414: {
                  slidesPerView: 1, // Show 1 slide per view on extra small screens
                },
                393: {
                  slidesPerView: 1, // Show 1 slide per view on extra small screens
                },
                384: {
                  slidesPerView: 1, // Show 1 slide per view on extra small screens
                },
                375: {
                  slidesPerView: 1, // Show 1 slide per view on extra small screens
                },
                360: {
                  slidesPerView: 1, // Show 1 slide per view on extra small screens
                },
                320: {
                  slidesPerView: 1, // Show 1 slide per view on extra small screens
                },
              }}
            >
              {data && data.length > 0 && (
                <>
                  {[...data].map((member) => {
                    return (
                      <SwiperSlide key={member._id}>
                        <Grid item xs={12} md={4} key={member._id}>
                          <Box
                            sx={{
                              backgroundColor: "#fff",
                              border: "30px solid #708000",
                              borderRadius: "40px",
                              textAlign: "center",
                              overflow: "hidden",
                            }}
                          >
                            <Box
                              component="img"
                              src={
                                member.image
                                  ? `${process.env.NEXT_PUBLIC_BASE_URL}/${member.image}`
                                  : getProfileImage(member._id)
                              }
                              alt={member.company_name || "Organizer Image"}
                              sx={{
                                width: "100%",
                                height: "300px",
                                objectFit: "cover",
                                borderTopLeftRadius: "10px",
                                borderTopRightRadius: "10px",
                              }}
                            />
                            <Box sx={{ py: 3 }}>
                              <Typography
                                sx={{
                                  fontWeight: 600,
                                  color: "#333a02",
                                  fontSize: "1.1rem",
                                  backgroundColor: "#eaf170",
                                  padding: "8px 20px",
                                  borderRadius: "50px",
                                  display: "inline-block",
                                }}
                              >
                                {member.company_name || "Organizer Name"}
                              </Typography>
                            </Box>
                          </Box>
                        </Grid>
                      </SwiperSlide>
                    );
                  })}
                </>
              )}
            </Swiper>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Organizer;
