"use client";

import { Event } from "@/types";
import { Box, Card, Grid, Typography } from "@mui/material";
import dayjs from "dayjs";

interface Stat {
  label: string;
  value: string | number;
  bgColor: string;
}

const Dashboardtotaldata = ({ data }: { data: Event[] }) => {
  const filterisdelete = data.filter((item) => item.isDeleted == false);

  const getTotalseats = filterisdelete.reduce(
    (acc, event) => acc + event.total_seats,
    0
  );
  const getTotalAvailableSeats = filterisdelete.reduce(
    (acc, event) => acc + event.available_seats,
    0
  );

  const totalTicketsSold = getTotalseats - getTotalAvailableSeats;

  const totalRevenueGenerated = filterisdelete.reduce(
    (acc, event) => acc + event.booked_seats * event.ticketPrice,
    0
  );

  const converttoupcoming = data?.filter((event) => {
    const eventDateTime = dayjs(`${event.date}`);
    // Only include events that are not deleted and are in the future
    return !event.isDeleted && eventDateTime.isAfter(dayjs());
  }).length;

  const stats: Stat[] = [
    { label: "Tickets Sold", value: totalTicketsSold, bgColor: "#e6f9d5" },
    {
      label: "Revenue Generated",
      value: totalRevenueGenerated,
      bgColor: "#fdeaea",
    },
    { label: "Upcoming Events", value: converttoupcoming, bgColor: "#e6f9f9" },
  ];
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#f9fbe7",
          borderRadius: 3,
          p: 3,
          boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
          border: "1px solid #333A02",
          mt: 4,
        }}
      >
        <Grid
          container
          spacing={3}
          sx={{
            justifyContent: "space-between", // Add space between items
          }}
        >
          {stats.map((stat, idx) => (
            <Grid
              item
              xs={12} // Full width on extra-small screens
              sm={6} // Two items per row on small screens
              md={4} // Three items per row on medium screens
              lg={3} // Four items per row on large screens
              key={idx}
            >
              <Card
                sx={{
                  backgroundColor: stat.bgColor,
                  borderRadius: 3,
                  p: 2,
                  textAlign: "center",
                  boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                  width: "100%",
                }}
              >
                <Typography fontWeight="bold" fontSize="1.25rem">
                  {stat.value}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {stat.label}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Dashboardtotaldata;
