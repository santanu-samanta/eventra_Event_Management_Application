"use client";

import { Box, Typography, Avatar } from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import StarIcon from "@mui/icons-material/Star";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useAllTestimonialEvent } from "@/hooks/react-query/query-hooks/alltestimonial";
const Testimonial = () => {
  const { data } = useAllTestimonialEvent();

  return (
    <>
      <Box
        sx={{
          position: "relative",
          mt: { xl: "200px", lg: 8, md: 5, sm: 5, xs: 5 },
        }}
      >
        <Box
          component={"img"}
          src="/WOMEN ClIENT.png"
          sx={{
            position: "absolute",
            left: "71%",
            top: "10%",
            transform: "translate(-50%, -50%)",
            display: {
              xl: "block",
              lg: "block",
              md: "none",
              sm: "none",
              xs: "none",
            },
            zIndex: 8,
          }}
        />

        <Box
          sx={{
            maxWidth: 463,
            mx: "auto",
            backgroundColor: "#fcffe6",
            borderRadius: "0 0 80px 0",
            px: 4,
            py: 5,
            textAlign: "center",
            boxShadow: 2,
            position: "relative",
            zIndex: 9,
          }}
        >
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            {data &&
              data.length > 0 &&
              data.map((item) => (
                <>
                  <SwiperSlide key={item._id}>
                    <Avatar
                      sx={{
                        bgcolor: "#a3cd39",
                        width: 50,
                        height: 50,
                        mx: "auto",
                        mb: 2,
                      }}
                    >
                      <FormatQuoteIcon sx={{ color: "#fff" }} />
                    </Avatar>

                    <Typography variant="h6" fontWeight="bold">
                      {item.user_first_name} {item.user_last_name}
                    </Typography>

                    <Typography
                      variant="body1"
                      fontStyle="italic"
                      color="text.secondary"
                      mt={2}
                    >
                      {item.commentdata}
                    </Typography>

                    <Box
                      mt={3}
                      display="flex"
                      justifyContent="center"
                      gap={0.5}
                    >
                      {[...Array(item.rating)].map((_, i) => (
                        <StarIcon key={i} sx={{ color: "#ffce00" }} />
                      ))}
                    </Box>
                  </SwiperSlide>
                </>
              ))}
          </Swiper>
        </Box>
      </Box>
    </>
  );
};

export default Testimonial;
