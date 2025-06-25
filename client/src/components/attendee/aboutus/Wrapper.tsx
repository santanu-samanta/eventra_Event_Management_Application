"use client";

import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { getProfileImage } from "@/api/axiosInstance/axiosInstance";
import { useAllOrganizerEvent } from "@/hooks/react-query/query-hooks/getallorganizer";

const Wrapper = () => {
  const { data } = useAllOrganizerEvent();
  return (
    <>
      <Box sx={{ overflow: "hidden" }}>
        {/* About Section */}
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
                  About Us
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

        {/* Moments Section */}
        <Box
          sx={{
            backgroundImage: `url(${"/aboutbg.png"})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            boxSizing: "border-box",
            pt: { xs: "50px", md: "100px" }, // section_padding from CSS
            bgcolor: "var(--bg-color)", // fallback bg color
            backgroundColor: "#fdffef",
          }}
        >
          <Container>
            <Grid
              container
              alignItems="center"
              spacing={4}
              justifyContent={"center"}
            >
              <Grid
                item
                md={6}
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
                <Image
                  src="/conference.png"
                  width={500}
                  height={500}
                  alt="Conference"
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                />
              </Grid>
              <Grid item md={6}>
                <Image
                  src="/ladysinger.png"
                  width={500}
                  height={500}
                  alt="Singer"
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                />
                <Box
                  sx={{
                    mt: {
                      xl: "100px",
                      lg: "100px",
                      md: "50px",
                      sm: "50px",
                      xs: "50px",
                    }, // moments-content
                    maxWidth: "576px",
                    width: "100%",
                    textAlign: {
                      xl: "left",
                      lg: "left",
                      md: "center",
                      sm: "center",
                      xs: "center",
                    },
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: "30px",
                      fontWeight: 600,
                      lineHeight: 1.2,
                      color: "var(--title-color)",
                      fontFamily: '"Poppins", sans-serif',
                    }}
                  >
                    Crafting Unforgettable Moments
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{
                      fontSize: "30px",
                      fontWeight: 600,
                      lineHeight: 1.2,
                      color: "var(--title-color)",
                      fontFamily: '"Poppins", sans-serif',
                    }}
                  >
                    Into Timeless Masterpieces
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: {
                        xl: "17px",
                        lg: "17px",
                        md: "16px",
                        sm: "14px",
                        xs: "14px",
                      },
                      fontWeight: 400,
                      lineHeight: 1.6,
                      color: "var(--title-color)",
                      fontFamily: '"Inter", sans-serif',
                      mt: 4,
                    }}
                  >
                    Our programs are designed to support every step of your
                    health journey. Whether you're managing a condition, aiming
                    for a fitness goal, or simply trying to eat better, we've
                    got you covered. We combine expert guidance, personalized
                    plans, and real-life support to help you stay motivated and
                    make lasting changes. Our programs are designed to support
                    every step of your health journey. Whether you're managing a
                    condition, aiming for a fitness goal, or simply trying to
                    eat better, we've got you covered. We combine expert
                    guidance, personalized plans, and real-life support to help
                    you stay motivated and make lasting changes.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
        {/* Slider Section */}

        <div className="scroller 2xl:mt-[50px] xl:mt-[40px] lg:mt-[30px] md:mt-[20px] sm:mt-[10px] mt-[40px]">
          <div className="scroller1 2xl:text-[120px] xl:text-[100px] lg:text-[80px] md:text-[60px] sm:text-[50px] text-[40px]">
            <h4>Concert </h4>
            <h4>*</h4>
            <h4>Webinar</h4>
            <h4>*</h4>
            <h4>Workshop</h4>
            <h4>*</h4>
            <h4>Conference</h4>
            <h4>*</h4>
            <h4>Concert </h4>
          </div>

          <div className="scroller1">
            <h4>Concert </h4>
            <h4>*</h4>
            <h4>Webinar</h4>
            <h4>*</h4>
            <h4>Workshop</h4>
            <h4>*</h4>
            <h4>Conference</h4>
            <h4>*</h4>
            <h4>Concert </h4>
          </div>
        </div>

        {/* Meet Section */}
        <Box
          sx={{
            backgroundImage: `url(${"/meetElement.png"})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            py: { xl: 10, lg: 10, md: 5, sm: 5, xs: 5 }, // section_padding from CSS
            backgroundColor: "#fdffef",
          }}
        >
          <Container>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                alignItems: "center",
                justifyContent: "space-between",
                gap: 4,
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 600,
                  flex: 1,
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                Meet Our Incredible Organizers
              </Typography>

              <Typography
                sx={{
                  flex: 2,
                  textAlign: { xs: "center", md: "left" },
                  width: {
                    xl: "30%",
                    lg: "30%",
                    md: "100%",
                    sm: "100%",
                    xs: "100%",
                  },
                  fontSize: {
                    xl: "17px",
                    lg: "17px",
                    md: "16px",
                    sm: "14px",
                    xs: "14px",
                  },
                }}
              >
                At the heart of every Eventra experience is a team of visionary
                organizers who blend creativity with precision. Calm, composed,
                and detail-driven, they bring structure to even the most
                ambitious ideas, ensuring each event flows with effortless
                elegance. From strategic planning to flawless execution, our
                team crafts immersive experiences that leave lasting
                impressions—turning every moment into a timeless masterpiece.
              </Typography>
            </Box>
          </Container>
        </Box>

        {/* Team Section */}
        <Box
          sx={{
            py: { xl: 10, lg: 10, md: 5, sm: 5, xs: 5 },
          }}
        >
          <Container>
            <Swiper
              spaceBetween={30}
              slidesPerView={3}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Navigation]}
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
                  {[...data]?.map((member) => {
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
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default Wrapper;
