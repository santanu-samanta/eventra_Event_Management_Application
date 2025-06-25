"use client";

import { Typography, Button, Box } from "@mui/material";
import EventIcon from "@mui/icons-material/Event";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Event } from "@/types";
import Link from "next/link";
import dayjs from "dayjs"; // Import dayjs for date formatting
const Allevents = ({ data }: { data: Event[] }) => {
  const filterisdelete = data.filter((item) => item.isDeleted == false);

  if (data.length === 0) return null;
  return (
    <>
      {[...filterisdelete].reverse()?.map((item) => (
        <Box
          key={item._id}
          sx={{
            mt: 4,
            width: "100%", // Ensures the card takes up full width of the screen
            backgroundColor: "#FCFFEB",
            borderRadius: 3,
            p: 5,
            boxShadow: 3,
            mx: "auto", // Centers the card on the screen
          }}
        >
          <Typography variant="h5" sx={{ mb: 2 }}>
            {item.location.city}
          </Typography>
          <Typography variant="h6" sx={{ mb: 2 }}>
            {item.artistname}
          </Typography>
          <Typography sx={{ display: "flex", alignItems: "center" }}>
            <EventIcon fontSize="small" sx={{ mr: 1 }} />
            {dayjs(item.date).format("MMMM D, YYYY")}
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mt: 2,
              gap: { xl: 0, lg: 0, md: 0, sm: 4, xs: 4 },
              flexWrap: "wrap",
            }}
          >
            <Typography sx={{ display: "flex", alignItems: "center" }}>
              <LocationOnIcon fontSize="small" sx={{ mr: 1 }} />
              {item.location.venue}
            </Typography>
            <Box sx={{ display: "flex", gap: 2 }}>
              <Link href={`/organizers/organizer-event-edit/${item._id}`}>
                <Button
                  sx={{
                    backgroundColor: "#ABE657",
                    mr: 2,
                    px: 3,
                    borderRadius: 2,
                    color: "black",
                    width: "100%",
                  }}
                >
                  Edit
                </Button>
              </Link>
              <Link href={`/organizers/organizer-delete-event/${item._id}`}>
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
      ))}
    </>
  );
};

export default Allevents;
