"use client";
import React from "react";
import { getMedia } from "@/api/axiosInstance/axiosInstance";
import { Event } from "@/types";
import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import dayjs from "dayjs";
import Link from "next/link";
import EventIcon from "@mui/icons-material/Event";
import RoomIcon from "@mui/icons-material/Room";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

const ExperienceCard = ({ event }: { event: Event }) => {
  const { user, isAuthenticated } = useSelector(
    (state: RootState) => state.auth
  );
  return (
    <>
      <Card
        sx={{
          borderRadius: 4,
          backgroundColor: "#f0f9bd",
          overflow: "hidden",
          width: {
            xl: "31%",
            lg: "31%",
            md: "100%",
            sm: "100%",
            xs: "100%",
          },
          mx: "auto",
          borderTopRightRadius: "100px",
          borderBottomLeftRadius: "100px",

          mt: 6,
        }}
        key={event._id}
      >
        <Link href={`/attendee/singelevent/${event._id}`}>
          <Box
            component="img"
            src={getMedia(event.images[0] && event.images[0])}
            alt={event.event_name}
            sx={{
              width: "100%",
              height: 200,
              objectFit: "cover",
            }}
          />

          <CardContent sx={{ p: 2, mt: 1 }}>
            <Typography
              variant="subtitle1"
              fontWeight="bold"
              textAlign="center"
            >
              {event.type}
            </Typography>

            <Typography
              variant="body1"
              fontWeight="bold"
              sx={{ mt: 1 }}
              textAlign="center"
            >
              {event.event_name}
            </Typography>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                mt: 2,
                color: "text.secondary",
                justifyContent: "center",
              }}
            >
              <EventIcon fontSize="small" />
              <Typography variant="body2">
                {dayjs(event.date).format("MMMM D, YYYY h:mm A")}
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                mt: 1,
                color: "text.secondary",
                justifyContent: "center",
              }}
            >
              <RoomIcon fontSize="small" />
              <Typography variant="body2">{event.location.venue}</Typography>
            </Box>

            {user?.role !== "organizer" ||
              (!isAuthenticated && (
                <Link href={`/attendee/ticketbooking/${event._id}`}>
                  <Box sx={{ mt: 3, textAlign: "center" }}>
                    <Button
                      variant="contained"
                      sx={{
                        bgcolor: "#c6e83f",
                        color: "#000",
                        borderRadius: 5,
                        fontWeight: 600,
                        "&:hover": {
                          bgcolor: "#bde030",
                        },
                      }}
                    >
                      Book Now
                    </Button>
                  </Box>
                </Link>
              ))}
          </CardContent>
        </Link>
      </Card>
    </>
  );
};

export default ExperienceCard;
