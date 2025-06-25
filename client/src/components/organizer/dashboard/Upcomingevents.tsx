"use client";

import { Box, Card, Typography, CardContent, Chip } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { Event } from "@/types";
import djs from "dayjs";

// import required modules

const getStatusColor = (status: string) => {
  if (status === "live") {
    return "#a6e75f";
  } else if (status === "upcoming") {
    return "#fff9b0";
  } else {
    return "#d8faff";
  }
};

const Upcomingevents = ({ data }: { data: Event[] }) => {
  // Filter upcoming events based on the current date and time
  const converttoupcoming = data?.filter((event) => {
    const eventDateTime = djs(`${event.date}`);
    // Only include events that are not deleted and are in the future
    return !event.isDeleted && eventDateTime.isAfter(djs());
  });

  return (
    <>
      {converttoupcoming && converttoupcoming.length > 0 ? (
        <Box sx={{ mt: 4 }}>
          <Typography variant="h6" fontWeight="bold" mb={3}>
            Upcoming Events
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 2,
              overflowY: "scroll",
              maxHeight: "300px",
              width: "100%",
            }}
          >
            {[...converttoupcoming]?.reverse()?.map((event) => (
              <Card
                sx={{
                  backgroundColor: "#f9fbe7",
                  borderRadius: 3,
                  boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                  p: 2,
                  height: "100%",
                  border: "1px solid #333A02",
                  width: {
                    xl: "49%",
                    lg: "49%",
                    md: "49%",
                    sm: "100%",
                    xs: "100%",
                  },
                }}
                key={event._id}
              >
                <CardContent>
                  <Typography
                    variant="subtitle1"
                    fontWeight="bold"
                    gutterBottom
                  >
                    {event?.location?.city}
                  </Typography>
                  <Box display="flex" alignItems="center" mb={2}>
                    <CalendarMonthIcon fontSize="small" sx={{ mr: 1 }} />
                    <Typography variant="body2">
                      {djs(event.date).format("MMMM D, YYYY")}, {event.time}
                    </Typography>
                  </Box>
                  <Chip
                    label="Upcoming"
                    sx={{
                      backgroundColor: getStatusColor("upcoming"),
                      fontWeight: "bold",
                    }}
                  />
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>
      ) : (
        <Typography variant="body1" sx={{ mt: 4 }}>
          No upcoming events.
        </Typography>
      )}
    </>
  );
};

export default Upcomingevents;
