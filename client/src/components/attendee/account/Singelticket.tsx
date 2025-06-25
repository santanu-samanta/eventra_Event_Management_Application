"use client";

import React, { useState } from "react";
import { Box, Button, Card, Grid, TextField, Typography } from "@mui/material";
import dayjs from "dayjs";
import Image from "next/image";
import { useParams } from "next/navigation";
import {
  useCreateTestimonial,
  UseSingelTicket,
} from "@/hooks/react-query/query-hooks/attendeeHooks";
import { Star } from "@mui/icons-material";
import { useForm, SubmitHandler, Controller } from "react-hook-form";

type Inputs = {
  commentdata: string;
};

const Singelticket = () => {
  const { slug } = useParams<{ slug: string[] }>();
  const { data } = UseSingelTicket(slug[0] as string);

  // Local state for rating
  const [rating, setRating] = useState<number>(0);
  const { mutate } = useCreateTestimonial();
  // react-hook-form for comment
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<Inputs>();

  // Submit handler
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    // Here you would send { rating, comment: formData.commentdata } to your API
    const data = {
      rating: rating,
      commentdata: formData.commentdata,
      id: slug[1] as string, // Assuming the second part of slug is the event ID
    };
    mutate(data);
    reset();
    setRating(0);
  };

  return (
    <>
      <Box
        sx={{
          width: "100%",
          margin: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Card
          key={data?._id}
          sx={{
            width: { xl: "30%", lg: "40%", md: "50%", sm: "100%", xs: "100%" },
            margin: "auto",
            backgroundColor: "#FCFFEB",
            borderRadius: 2,
            padding: 3,
            marginBottom: 3,
            border: "1px solid #333A02",
            mt: 3,
          }}
        >
          <Grid
            container
            justifyContent="space-between"
            alignItems="flex-start"
          >
            <Grid item>
              <Typography sx={{ color: "#3E3F34", fontWeight: "bold" }}>
                Event {data?.event_info.event_name}
              </Typography>
              <Typography
                variant="h6"
                sx={{ color: "#3E3F34", fontWeight: "bold" }}
              >
                Event Title {data?.event_info.event_name}
              </Typography>
            </Grid>
          </Grid>

          <Typography
            sx={{
              color: "#3E3F34",
              mt: 2,
              display: "flex",
              alignItems: "center",
            }}
          >
            <Image
              width={20}
              height={20}
              src="/eventicon.png"
              alt=""
              style={{ marginRight: 8 }}
            />
            {dayjs(data?.event_info.event_date).format("DD MMMM YYYY, h:mm A")}
          </Typography>

          <Typography
            sx={{
              color: "#3E3F34",
              mb: 2,
              display: "flex",
              alignItems: "center",
            }}
          >
            <Image
              width={20}
              height={20}
              src="/location.png"
              alt=""
              style={{ marginRight: 8 }}
            />
            {data?.event_info.event_location.city}
          </Typography>

          {/* Review Form */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box display="flex" alignItems="center" mb={2}>
              {[1, 2, 3, 4, 5].map((value) => (
                <Star
                  key={value}
                  fontSize="large"
                  sx={{
                    color: value <= rating ? "#FBE015" : "#E0E0E0",
                    cursor: "pointer",
                  }}
                  onClick={() => setRating(value)}
                  data-testid={`star-${value}`}
                />
              ))}
            </Box>
            {rating === 0 && (
              <Typography sx={{ color: "red", fontSize: "0.875rem", mb: 1 }}>
                Please select a rating.
              </Typography>
            )}
            <Controller
              name="commentdata"
              control={control}
              rules={{
                required: "Feedback is required",
                minLength: {
                  value: 10,
                  message: "Feedback must be at least 10 characters long",
                },
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  multiline
                  fullWidth
                  rows={3}
                  placeholder="Write your experience"
                  sx={{
                    mb: 2,
                    backgroundColor: "#F1F6E6",
                    "& .MuiInputBase-root": {
                      backgroundColor: "#F1F6E6",
                    },
                  }}
                  error={!!errors.commentdata}
                  helperText={errors.commentdata?.message}
                />
              )}
            />
            <Box textAlign="right">
              <Button
                type="submit"
                variant="outlined"
                sx={{
                  color: "#4E8204",
                  fontWeight: "bold",
                  borderColor: "#4E8204",
                  "&:hover": {
                    textDecoration: "underline",
                    borderColor: "#4E8204",
                  },
                }}
                disabled={rating === 0}
              >
                Submit Feedback
              </Button>
            </Box>
          </form>
        </Card>
      </Box>
    </>
  );
};

export default Singelticket;
