"use client";

import { getMedia } from "@/api/axiosInstance/axiosInstance";
import { Event } from "@/types";
import { Box, Card, CardActionArea, Chip, Typography } from "@mui/material";
import dayjs from "dayjs";
import Link from "next/link";
import React from "react";

const CardEvent = ({ event }: { event: Event }) => {
  const truncateText = (text: string, wordLimit: number): string => {
    const words = text.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + " ...";
    }
    return text;
  };
  return (
    <>
      <Card
        // Ensure each card has a unique key
        sx={{
          borderRadius: 3,
          overflow: "hidden",
          position: "relative",
          height: 300,
          width: {
            xl: "31%",
            lg: "31%",
            md: "31%",
            sm: "100%",
            xs: "100%",
          },
        }}
        key={event._id}
      >
        <Link href={`/attendee/singelevent/${event._id}`} key={event._id}>
          <CardActionArea
            sx={{
              width: "100%",
              height: "100%",
              position: "relative",
            }}
          >
            <Box
              sx={{
                backgroundImage: `url(${
                  event.images[0] && event.images[0]
                    ? getMedia(event.images[0])
                    : "/image 31.png"
                })`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100%",
                width: "100%",
                position: "absolute",
                top: 0,
                left: 0,
              }}
            />

            {/* Gradient overlay */}
            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                width: "100%",
                bgcolor: "rgba(0,0,0,0.6)",
                color: "#fff",
                px: 2,
                py: 2,
              }}
            >
              <Typography variant="body2">
                {dayjs(event.date).format("MMMM D, YYYY h:mm A")}
              </Typography>
              <Typography variant="body2" sx={{ mt: 0.5 }}>
                {truncateText(event.description, 10)}
              </Typography>
              <Typography
                variant="body2"
                sx={{ mt: 1, fontWeight: "bold", color: "#c3f35c" }}
              >
                Read More →
              </Typography>
            </Box>

            {/* Top-left label */}
            <Chip
              label={event.category}
              size="small"
              sx={{
                position: "absolute",
                top: 10,
                left: 10,
                bgcolor: "#d4f358",
                fontWeight: 600,
              }}
            />
          </CardActionArea>
        </Link>
      </Card>
    </>
  );
};

export default CardEvent;
