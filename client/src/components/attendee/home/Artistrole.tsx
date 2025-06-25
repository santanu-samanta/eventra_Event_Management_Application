"use client";

import { useGetArtistImageAndName } from "@/hooks/react-query/query-hooks/getartistimageandname";
import { Box, Grid, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import { getMedia } from "@/api/axiosInstance/axiosInstance";

const Artistrole = () => {
  const { data } = useGetArtistImageAndName();
  return (
    <>
      <Box sx={{ py: { xl: 0, lg: 0, md: 0, sm: 0 } }}>
        <Grid
          item
          xs={12}
          md={6}
          width={{ xl: "100%", lg: "100%", md: "100%", sm: "100%" }}
          textAlign={{ xl: "center", lg: "center", md: "center", xs: "center" }}
        >
          <Typography variant="h4" sx={{ color: "#5D6A00", mb: 1 }}>
            Our Artist
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
          <Typography variant="body1" sx={{ mb: 4, color: "text.secondary" }}>
            Our artists bring unmatched energy, turning every event into a
            lasting memory
          </Typography>
        </Grid>

        <Grid container spacing={4} justifyContent="center" pt={4}>
          <Swiper
            spaceBetween={30}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper"
            breakpoints={{
              1440: {
                slidesPerView: 4, // Show 5 slides per view on large screens
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
            {data && data.length > 0 && (
              <>
                {[...data]?.reverse()?.map((profile) => {
                  return (
                    <SwiperSlide key={profile._id}>
                      <Grid
                        item
                        xs={12}
                        sm={6}
                        md={4}
                        key={profile._id}
                        textAlign="center"
                      >
                        <Box
                          sx={{
                            mx: "auto",
                            width: 240,
                            height: 240,
                            borderRadius: "50%",
                            overflow: "hidden",
                            mb: 2,
                          }}
                        >
                          <Box
                            component="img"
                            src={
                              profile.images && profile.images.length > 0
                                ? getMedia(profile.images[0])
                                : "/image 3.png"
                            }
                            alt={profile.artistname}
                            sx={{
                              width: "100%",
                              height: "300px",
                              objectFit: "cover",
                              borderTopLeftRadius: "10px",
                              borderTopRightRadius: "10px",
                            }}
                          />
                        </Box>
                        <Typography variant="subtitle1" fontWeight="bold">
                          {profile.artistname}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {profile.artistrole}
                        </Typography>
                      </Grid>
                    </SwiperSlide>
                  );
                })}
              </>
            )}
          </Swiper>
        </Grid>
      </Box>
    </>
  );
};

export default Artistrole;
