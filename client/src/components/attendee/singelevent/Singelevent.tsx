"use client";

import { Box, Typography, Grid, Button, Stack } from "@mui/material";

import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useParams } from "next/navigation";
import { useSingleEvent } from "@/hooks/react-query/query-hooks/singelevent";
import Link from "next/link";
import { getMedia, videoUrl } from "@/api/axiosInstance/axiosInstance";
import dayjs from "dayjs";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import Review from "./Review";
import { useSingelTestimonialEvent } from "@/hooks/react-query/query-hooks/singeltestimonial";
const Singelevent = () => {
  const { id } = useParams<{ id: string }>();
  const { data } = useSingleEvent(id);
  const { user, isAuthenticated } = useSelector(
    (state: RootState) => state.auth
  );
  const { data: testimonial } = useSingelTestimonialEvent(id);

  return (
    <>
      <Box sx={{ position: "relative", width: "100%", bgcolor: "#f5f5f5" }}>
        <Box
          sx={{
            width: "100%",
            height: { xs: 220, sm: 300, md: 400 },
            position: "relative",
          }}
        >
          {data?.images && Array.isArray(data.images) && data.images[0] && (
            <Box
              component="img"
              src={getMedia(data?.images[0])}
              sx={{ height: "100%", width: "100%", objectFit: "cover" }}
            />
          )}

          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.8)",
              zIndex: 1,
            }}
          ></Box>
        </Box>

        {/* Date Overlay */}
        <Box
          sx={{
            position: "absolute",
            bottom: -20,
            left: "50%",
            transform: "translateX(-50%)",
            bgcolor: "#d6ff00",
            px: 4,
            py: 1.5,
            borderRadius: 10,
            boxShadow: 3,
            zIndex: 5,
          }}
        >
          <Typography fontWeight={600} textAlign="center" color="#000">
            {dayjs(data?.date).format("MMM D, YYYY")}
          </Typography>
        </Box>
      </Box>

      <Box sx={{ px: { xs: 2, md: 8 }, py: 6, backgroundColor: "#f9faef" }}>
        {/* Workshop Text */}
        <Box sx={{ mb: 3 }}>
          <Typography variant="subtitle2" color="text.secondary">
            {data?.event_name}
          </Typography>
          <Typography variant="h6" fontWeight="bold" sx={{ mb: 1 }}>
            {data?.artistname}
          </Typography>
          <Typography variant="body1">
            ₹ <strong>{data?.ticketPrice}</strong>{" "}
            <Typography variant="caption" component="span">
              / Person
            </Typography>
          </Typography>
        </Box>

        {/* Images Grid */}
        <Grid container spacing={2}>
          {/* Image 1 */}
          <Grid
            item
            xs={12}
            sm={6}
            width={{ xl: "48%", lg: "48%", md: "100%", sm: "100%", xs: "100%" }}
          >
            <Box
              sx={{
                borderRadius: "30px",
                overflow: "hidden",
                width: "100%",
                height: { xl: 400, lg: 400, md: 300, sm: 300, xs: 300 },
                position: "relative",
              }}
            >
              {data?.images && Array.isArray(data.images) && data.images[0] && (
                <Box
                  component="img"
                  src={getMedia(data?.images[0])}
                  sx={{ height: "100%", width: "100%", objectFit: "cover" }}
                />
              )}
            </Box>
          </Grid>

          {/* Image 2 with Play Icon */}
          <Grid
            item
            xs={12}
            sm={6}
            width={{ xl: "48%", lg: "48%", md: "100%", sm: "100%", xs: "100%" }}
          >
            <Box
              sx={{
                borderRadius: "30px",
                overflow: "hidden",
                width: "100%",
                height: { xl: 400, lg: 400, md: 300, sm: 300, xs: 300 },
                position: "relative",
                backgroundColor: "#000",
              }}
            >
              {data?.videos && Array.isArray(data.videos) && data.videos[0] && (
                <video
                  src={videoUrl(data.videos[0])}
                  controls
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              )}
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          px: { xl: 8, lg: 8, md: 8, sm: 4, xs: 4 },
          py: { xl: 6, lg: 6, md: 6, sm: 2, xs: 2 },
          backgroundColor: "#f9faef",
        }}
      >
        {/* Title */}
        <Typography variant="h6" fontWeight={600} mb={1}>
          {data?.event_name} 2025
        </Typography>

        {/* Date and Location */}
        <Stack direction="row" alignItems="center" spacing={1} mb={1}>
          <CalendarMonthIcon fontSize="small" sx={{ color: "#7aa12f" }} />
          <Typography variant="body1">{data?.date}</Typography>
        </Stack>

        <Stack direction="row" alignItems="center" spacing={1} mb={3}>
          <LocationOnIcon fontSize="small" sx={{ color: "#7aa12f" }} />
          <Typography variant="body1">{data?.location?.venue}</Typography>
        </Stack>

        {/* Event Description */}
        <Typography variant="subtitle1" fontWeight={600} mb={1}>
          Event Details
        </Typography>
        <Typography variant="body2" color="text.secondary" mb={4}>
          {data?.description}
        </Typography>

        {/* CTA Button */}
        {isAuthenticated && user?.role !== "organizer" && (
          <Link href={`/attendee/ticketbooking/${id}`}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#a4c400",
                color: "#000",
                px: 5,
                py: 1.5,
                fontWeight: 600,
                borderRadius: 999,
                "&:hover": {
                  backgroundColor: "#8ca600",
                },
              }}
            >
              Book Now
            </Button>
          </Link>
        )}
      </Box>

      <Review testimonial={testimonial} />
    </>
  );
};

export default Singelevent;
