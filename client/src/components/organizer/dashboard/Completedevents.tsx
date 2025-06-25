"use client";

import { Box, Typography, Card, CardContent, Chip } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Event } from "@/types";

const Completedevents = ({ data }: { data: Event[] }) => {
  const converttocomplited = data?.filter(
    (event) => event.status === "Completed"
  );

  // Slider settings
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Default to 2 slides per view
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Set autoplay speed to 3 seconds
    dots: false, // Disable dots
    responsive: [
      {
        breakpoint: 768, // For screens smaller than 768px
        settings: {
          slidesToShow: 1, // Show 1 slide per view on smaller screens
        },
      },
    ],
  };

  return (
    <>
      {converttocomplited && converttocomplited?.length > 0 ? (
        <Box sx={{ mt: 4 }}>
          <Typography variant="h6" fontWeight="bold" mb={3}>
            Completed Events
          </Typography>

          <Slider {...settings}>
            {converttocomplited?.map((event, index) => (
              <Box key={index} px={1}>
                <Card
                  sx={{
                    backgroundColor: "#f9fbe7",
                    borderRadius: 3,
                    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                    p: 2,
                    height: "100%",
                    border: "1px solid #333A02",
                  }}
                >
                  <CardContent>
                    <Typography fontWeight="bold" sx={{ mb: 1 }}>
                      {event?.location.address || "Event Location"}
                    </Typography>
                    <Box display="flex" alignItems="center" mb={2}>
                      <CalendarMonthIcon sx={{ fontSize: 18, mr: 1 }} />
                      <Typography variant="body2" color="text.secondary">
                        {event?.date || "Event Date"}
                      </Typography>
                    </Box>
                    <Chip
                      label="Completed"
                      sx={{
                        backgroundColor: "#e0f7fa",
                        fontWeight: "bold",
                        px: 2,
                        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                      }}
                    />
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Slider>
        </Box>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default Completedevents;
