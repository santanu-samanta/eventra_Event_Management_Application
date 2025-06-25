"use client";

import { Box, Typography, Grid, Chip, Link } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { SingelTestimonial } from "@/types";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay } from "swiper/modules";

const Review = ({
  testimonial,
}: {
  testimonial: SingelTestimonial[] | undefined;
}) => {
  const totalRatings = testimonial?.reduce(
    (acc, curr) => acc + (curr.rating || 0),
    0
  );
  const totalReviews = testimonial?.length || 0;
  const averageRating = totalRatings
    ? (totalRatings / totalReviews).toFixed(1)
    : "0.0";
  return (
    <>
      <Box sx={{ bgcolor: "#fcfdee", p: 4 }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm="auto">
            <Typography variant="h6" fontWeight="bold">
              Ratings & Reviews
            </Typography>
          </Grid>

          <Grid item>
            <Chip
              label={averageRating}
              icon={<StarIcon sx={{ color: "white" }} />}
              sx={{
                backgroundColor: "#5B9B01",
                color: "white",
                fontWeight: "bold",
              }}
            />
          </Grid>

          <Grid item>
            <Typography variant="body2" color="text.secondary">
              {totalRatings} ratings and {totalReviews} reviews
            </Typography>
          </Grid>
        </Grid>

        <Box mt={3}>
          <Swiper
            spaceBetween={30}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            slidesPerView={1}
            modules={[Autoplay]}
            className="mySwiper"
          >
            {testimonial &&
              testimonial.length > 0 &&
              testimonial.map((item) => (
                <>
                  <SwiperSlide>
                    <Grid container spacing={2} alignItems="flex-start">
                      <Grid item>
                        <Chip
                          label={item.rating || "5.0"}
                          icon={<StarIcon sx={{ color: "white" }} />}
                          sx={{
                            backgroundColor: "#5B9B01",
                            color: "white",
                            fontSize: "0.75rem",
                            height: "24px",
                          }}
                          size="small"
                        />
                      </Grid>
                      <Grid item xs>
                        <Typography variant="body2">
                          {item.commentdata ||
                            "Great event! Highly recommend attending."}
                        </Typography>
                        {/* <Typography
                          variant="caption"
                          display="block"
                          mt={1}
                          color="text.secondary"
                        >
                         {}, January 2025
                        </Typography> */}
                      </Grid>
                    </Grid>
                  </SwiperSlide>
                </>
              ))}
          </Swiper>
        </Box>

        <Box mt={2}>
          <Link href="#" color="error" underline="hover" fontSize="0.875rem">
            All {totalReviews} reviews
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default Review;
