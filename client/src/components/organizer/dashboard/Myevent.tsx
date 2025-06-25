"use client";

import { Event } from "@/types";
import { Box, Typography, Button, Card } from "@mui/material";
import djs from "dayjs";

const Myevent = ({ data }: { data: Event[] }) => {
  const getStatus = (date: string): string => {
    const eventDate = djs(date);
    const currentDate = djs();

    if (currentDate.isSame(eventDate, "minute")) {
      return "live";
    } else if (currentDate.isAfter(eventDate)) {
      return "completed";
    } else {
      return "upcoming";
    }
  };

  const getStatusColor = (status: string) => {
    if (status === "live") {
      return "#a6e75f";
    } else if (status === "upcoming") {
      return "#fff9b0";
    } else {
      return "#d8faff";
    }
  };

  const filterEvents = data.filter((event) => !event.isDeleted);

  return (
    <>
      {filterEvents && filterEvents.length > 0 ? (
        <Box
          sx={{
            borderRadius: 3,
            overflow: "hidden",
            backgroundColor: "#fcffe8",
            mt: 4,
            border: "1px solid #333A02",
            height: "290px",
            overflowY: "scroll",
          }}
        >
          <Typography
            variant="h6"
            align="center"
            fontWeight="bold"
            sx={{ py: 2, borderBottom: "1px solid #ccc" }}
          >
            My Events
          </Typography>
          <Card
            sx={{
              mt: 3,
              p: 2,
              bgcolor: "#FCFFEB",
              borderRadius: "12px",
            }}
          >
            {[...filterEvents]?.reverse()?.map((item, index) => {
              const status = getStatus(item.date); // Determine the status dynamically
              return (
                <Box
                  key={index}
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  borderTop={index !== 0 ? 1 : 0}
                  py={2}
                >
                  <Typography>
                    {item.location.city} -{" "}
                    {djs(item.date).format("MMMM D, YYYY")}
                  </Typography>
                  <Button
                    sx={{
                      bgcolor: getStatusColor(status),
                      color: "black",
                      borderRadius: "10px",
                      width: 100,
                      height: 36,
                      fontSize: "0.8rem",
                      pointerEvents: "none",
                      textTransform: "none",
                    }}
                  >
                    {status}
                  </Button>
                </Box>
              );
            })}
          </Card>
        </Box>
      ) : (
        ""
      )}
    </>
  );
};

export default Myevent;
