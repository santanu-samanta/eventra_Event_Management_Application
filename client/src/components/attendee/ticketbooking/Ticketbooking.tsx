"use client";

import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  Grid,
  TextField,
  Typography,
  IconButton,
} from "@mui/material";
import { Add, Remove } from "@mui/icons-material";
import { useParams } from "next/navigation";
import { useBookTicket } from "@/hooks/react-query/query-hooks/attendeeHooks";
import { useSingleEvent } from "@/hooks/react-query/query-hooks/singelevent";
import { getMedia } from "@/api/axiosInstance/axiosInstance";
const Ticketbooking = () => {
  const params = useParams<{ id: string }>();
  const { data } = useSingleEvent(params.id);
  const [ticketCount, setTicketCount] = useState<number>(1); // Ticket count is a number
  const { mutate, isPending } = useBookTicket();
  const handleIncrement = (): void => {
    setTicketCount((prev) => prev + 1);
  };

  const handleDecrement = (): void => {
    if (ticketCount > 1) {
      setTicketCount((prev) => prev - 1);
    }
  };

  const handleSubmit = (): void => {
    const data = {
      noOfTicketsBought: ticketCount,
      event_id: params.id,
    };
    mutate(data);
  };

  return (
    <>
      <Box
        component="form"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "90vh",
          backgroundImage: `url(${"/background.png"})`,
          backgroundSize: {
            xl: "contain",
            lg: "contain",
            md: "cover",
            sm: "cover",
            xs: "cover",
          },
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          fontFamily: "Inter, sans-serif",
          mt: { xl: 5, lg: 5, md: 3, sm: 2, xs: 2 },
        }}
      >
        <Card
          sx={{
            width: 500,
            backgroundColor: "transparent",
            boxShadow: "none",
            p: 4,
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: "bold",
              textAlign: "center",
              mb: 1,
            }}
          >
            Tickets to the Greatest Event
          </Typography>

          <Typography
            variant="body2"
            sx={{
              fontFamily: "Inter, sans-serif",
              color: "text.secondary",
              textAlign: "center",
              mb: 4,
            }}
          >
            Get tickets today before it's too late!
          </Typography>

          <Grid
            container
            spacing={8}
            alignItems="center"
            mb={4}
            justifyContent={"center"}
          >
            <Grid item xs={7}>
              <Typography
                variant="h6"
                fontWeight="bold"
                fontFamily="Poppins, sans-serif"
              >
                {data?.artistname}
              </Typography>
              <Typography variant="body2" sx={{ my: 1 }}>
                <strong>Time:</strong>{" "}
                {data?.time
                  ? `${data.time} ${
                      Number(data.time.split(":")[0]) >= 12 ? "PM" : "AM"
                    }`
                  : "N/A"}
              </Typography>
              <Typography variant="body2">
                <strong>Location</strong>
              </Typography>
              <Typography variant="body2" sx={{ my: 1 }}>
                <strong>City:</strong> {data?.location.city}
              </Typography>
              <Typography variant="body2">
                <strong>Address:</strong>
                {data?.location.venue}
              </Typography>
            </Grid>

            <Grid item xs={5}>
              <Box
                component="img"
                src={getMedia(data?.images[0]) || "/arijit.png"}
                alt="Performer"
                sx={{
                  width: 150,
                  height: 150,
                  borderRadius: "15%",
                }}
              />
            </Grid>
          </Grid>

          <Grid container alignItems="center" spacing={2} mb={4}>
            <Grid item xs={8}>
              <Typography fontWeight="bold" fontFamily="Poppins, sans-serif">
                Select the number of tickets you want to buy
              </Typography>
            </Grid>

            <Grid
              item
              xs={4}
              display="flex"
              alignItems="center"
              className="inCri"
            >
              <IconButton
                onClick={handleDecrement}
                sx={{
                  border: "1px solid #ccc",
                  color: "black",
                  width: "40px",
                  height: "40px",
                }}
              >
                <Remove />
              </IconButton>
              <TextField
                value={ticketCount}
                size="small"
                inputProps={{
                  style: { textAlign: "center", fontWeight: "bold" },
                  readOnly: true,
                }}
                sx={{
                  width: 60,
                  mx: 1,
                  backgroundColor: "white",
                  "& input": { p: 1 },
                }}
              />
              <IconButton
                onClick={handleIncrement}
                sx={{
                  border: "1px solid #ccc",
                  color: "black",
                  width: "40px",
                  height: "40px",
                }}
              >
                <Add />
              </IconButton>
            </Grid>
          </Grid>

          <Box mb={4}>
            <Typography>
              <strong>Total Amount:</strong> $
              {ticketCount * (data?.ticketPrice ?? 0)}
            </Typography>
          </Box>

          <Box textAlign="center">
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#A7BF00",
                color: "white",
                borderRadius: "50px",
                py: 1,
                px: 4,
                fontWeight: "bold",
                fontFamily: "Poppins, sans-serif",
                "&:hover": {
                  backgroundColor: "#8DA200",
                  borderColor: "#A7BF00",
                },
              }}
              disabled={isPending}
              onClick={handleSubmit}
            >
              SUBMIT
            </Button>
          </Box>
        </Card>
      </Box>
    </>
  );
};

export default Ticketbooking;
