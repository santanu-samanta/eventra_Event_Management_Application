"use client";

import React from "react";
import { Box, Grid, Typography, Button, Card, TextField } from "@mui/material";
import Image from "next/image";
import { Star } from "@mui/icons-material";
import { Controller, Control, FieldErrors } from "react-hook-form";

interface CompletedCardProps {
  id: number;
  rating: number;
  commentdata: string;
  control: Control<any>;
  errors: FieldErrors<any>;
  handleRatingClick: (id: number, value: number) => void;
}

const CompletedCard: React.FC<CompletedCardProps> = ({
  id,
  rating,
  commentdata,
  control,
  errors,
  handleRatingClick,
}) => {
  return (
    <Card
      sx={{
        width: "100%",
        backgroundColor: "#FCFFEB",
        borderRadius: 2,
        padding: 3,
        marginBottom: 3,
        border: "1px solid #333A02",
        mt: 3,
      }}
    >
      <Grid container justifyContent="space-between" alignItems="flex-start">
        <Grid item>
          <Typography sx={{ color: "#3E3F34", fontWeight: "bold" }}>
            Event {id}
          </Typography>
          <Typography
            variant="h6"
            sx={{ color: "#3E3F34", fontWeight: "bold" }}
          >
            Event Title {id}
          </Typography>
        </Grid>
        <Typography sx={{ color: "#4E8204", fontWeight: "bold" }}>
          Completed
        </Typography>
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
        Sunday, 25th April 2025, 6:00 PM
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
        Eco Park
      </Typography>

      {/* Feedback Form */}
      <Typography sx={{ fontWeight: "bold", color: "#3E3F34" }}>
        Rating & Feedback
      </Typography>
      <Box display="flex" alignItems="center" mb={2}>
        {[1, 2, 3, 4, 5].map((value) => (
          <Star
            key={value}
            fontSize="small"
            sx={{
              color: value <= rating ? "#FBE015" : "#E0E0E0",
              fontSize: "1.5rem",
              cursor: "pointer",
            }}
            onClick={() => handleRatingClick(id, value)}
          />
        ))}
      </Box>
      {errors?.rating && (
        <Typography sx={{ color: "red", fontSize: "0.875rem", mb: 1 }}>
          {errors.rating?.message}
        </Typography>
      )}
      <Controller
        name={`feedbacks.${id - 1}.commentdata`}
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
            error={!!errors?.commentdata}
            helperText={errors?.commentdata?.message}
          />
        )}
      />
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
      >
        Submit All Feedback
      </Button>
    </Card>
  );
};

export default CompletedCard;
