"use client";

import { Typography, Button, Box } from "@mui/material";
import EventIcon from "@mui/icons-material/Event";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Event } from "@/types";
import Link from "next/link";
import dayjs from "dayjs"; // Import dayjs for date formatting

const Eventcards = ({ data }: { data: Event[] }) => {
  const selectfastdata = [...data].reverse()[0];
  if (data.length === 0) return null;

  // Format the date using dayjs
  const formattedDate = dayjs(selectfastdata.date).format("MMMM D, YYYY"); // Example: May 28, 2025

  return (
    <>
      <Box
        sx={{
          mt: 4,
          width: "100%", // Ensures the card takes up full width of the screen
          maxWidth: "1200px", // Limits the max width for a controlled layout
          backgroundColor: "#FCFFEB",
          borderRadius: 3,
          p: 5,
          boxShadow: 3,
          mx: "auto", // Centers the card on the screen
          display:{ xs: "none", sm: "none", md: "none", lg: "block", xl: "block" },
        }}
      >
        <Typography variant="h5" sx={{ mb: 2 }}>
          {selectfastdata.location.city}
        </Typography>
        <Typography variant="h6" sx={{ mb: 2 }}>
          {selectfastdata.artistname}
        </Typography>
        <Typography sx={{ display: "flex", alignItems: "center" }}>
          <EventIcon fontSize="small" sx={{ mr: 1 }} />
          {formattedDate} {/* Display the formatted date */}
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
          <Typography sx={{ display: "flex", alignItems: "center" }}>
            <LocationOnIcon fontSize="small" sx={{ mr: 1 }} />
            {selectfastdata.location.venue}
          </Typography>
          <Box>
            <Link
              href={`/organizers/organizer-event-edit/${selectfastdata._id}`}
            >
              <Button
                sx={{
                  backgroundColor: "#ABE657",
                  mr: 2,
                  px: 3,
                  borderRadius: 2,
                  color: "black",
                }}
              >
                Edit
              </Button>
            </Link>
            <Link
              href={`/organizers/organizer-delete-event/${selectfastdata._id}`}
            >
              <Button
                sx={{
                  backgroundColor: "#FF2D2D",
                  px: 3,
                  borderRadius: 2,
                  color: "white",
                }}
              >
                Delete
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Eventcards;
