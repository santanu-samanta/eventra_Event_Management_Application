"use client";
import React from "react";
import { Box, Card, CardActionArea, Chip, Typography } from "@mui/material";
import { Event } from "@/types";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import { getMedia } from "@/api/axiosInstance/axiosInstance";
import dayjs from "dayjs";

const Populerevent = ({ data }: { data: Event[] }) => {
  const truncateText = (text: string, wordLimit: number): string => {
    const words = text.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + " ...";
    }
    return text;
  };

  const filterEvents = data.filter((event) => !event.isDeleted);

  return (
    <div className="relative">
      <Box
        component={"img"}
        src="/Curve Line.png"
        sx={{
          position: "absolute",
          top: 5,
          left: 0,
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
        component={"img"}
        src="/Arrow.png"
        sx={{
          position: "absolute",
          top: 5,
          right: 0,
          display: {
            xl: "block",
            lg: "block",
            md: "none",
            sm: "none",
            xs: "none",
          },
        }}
      />
      <Box sx={{ mt: { xl: 8, lg: 8, md: 6, sm: 6, xs: 6 } }}>
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Typography variant="h4" fontWeight={600} color="#5D6A00" mb={2}>
            Our Popular Events
          </Typography>
          <Typography
            variant="h2"
            fontWeight={600}
            color="#000"
            mb={2}
            fontSize={{ xl: 50, lg: 40, md: 30, sm: 25, xs: 20 }}
            sx={{
              position: "relative",
              width: "100%",
              textAlign: "center",
            }}
          >
            Where Moments Turn <br /> into Masterpieces
            <Box
              component={"img"}
              src="/Rectangle 38.png"
              sx={{
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: "translate(100%, -50%)",
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
        </Box>

        <Box sx={{ mt: { xl: 8, lg: 6, md: 4, sm: 3, xs: 3 } }}>
          <Swiper
            spaceBetween={10}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            slidesPerView={5}
            modules={[Autoplay]}
            className="mySwiper"
            breakpoints={{
              1440: {
                slidesPerView: 5, // Show 5 slides per view on large screens
              },
              1024: {
                slidesPerView: 3, // Show 3 slides per view on medium screens
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
            {filterEvents && filterEvents.length > 0 && (
              <>
                {[...filterEvents]?.reverse()?.map((event) => {
                  return (
                    <SwiperSlide key={event._id}>
                      <Card
                        sx={{
                          borderRadius: 3,
                          overflow: "hidden",
                          position: "relative",
                          height: 300,
                          mx: 1, // Add horizontal margin to create a gap between slides
                        }}
                      >
                        <CardActionArea
                          sx={{
                            width: "100%",
                            height: "100%",
                            position: "relative",
                          }}
                        >
                          <Box
                            sx={{
                              backgroundImage: `url(${
                                event.images[0]
                                  ? getMedia(event?.images[0])
                                  : "/image 3.png"
                              })`,
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
                            <Typography variant="body2">
                              {dayjs(event.date).format("YYYY MMM DD, hh:mm A")}
                            </Typography>
                            <Typography variant="body2" sx={{ mt: 0.5 }}>
                              {truncateText(event.description, 10)}
                            </Typography>
                            <Typography
                              variant="body2"
                              sx={{
                                mt: 1,
                                fontWeight: "bold",
                                color: "#c3f35c",
                              }}
                            >
                              Read More →
                            </Typography>
                          </Box>

                          {/* Top-left label */}
                          <Chip
                            label={event.category}
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
                      </Card>
                    </SwiperSlide>
                  );
                })}
              </>
            )}
          </Swiper>
        </Box>
      </Box>
    </div>
  );
};

export default Populerevent;
