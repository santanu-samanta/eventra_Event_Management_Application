"use client";

import React from "react";
import { Box, Grid, Typography, Stack } from "@mui/material";
import Image from "next/image";

const Status = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#f9faef",
          px: { xs: 2, md: 8 },
          py: { xl: 10, lg: 8, md: 5, sm: 5, xs: 5 },
          position: "relative",
        }}
      >
        <Box
          component={"img"}
          src="/Group.png"
          sx={{
            position: "absolute",
            left: "80%",
            top: "10%",
            transform: "translate(-250%, -50%)",
            display: {
              xl: "block",
              lg: "block",
              md: "none",
              sm: "none",
              xs: "none",
            },
          }}
        />
        <Grid
          container
          spacing={8}
          alignItems="center"
          justifyContent={"center"}
        >
          {/* Phone Images */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                position: "relative",
                width: "100%",
              }}
            >
              <Image
                src="/Mobile.png" // Replace with your QR image
                alt="QR Code"
                width={500}
                height={500}
              />
            </Box>
          </Grid>

          {/* Text Content */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="subtitle2"
              color="#5D6A00"
              sx={{ fontWeight: 600, textTransform: "uppercase", mb: 1 }}
            >
              Download The App Today
            </Typography>

            <Typography variant="h5" fontWeight="bold" sx={{ mb: 2 }}>
              Your Event Journey Starts Here
            </Typography>

            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              From booking to coordination, the journey starts in the palm of{" "}
              <br />
              your hand. Download our app and never miss the thrill. Manage your{" "}
              <br />
              bookings, check in faster, discover speakers, planning, <br />
              after-party shows, and everything in between.
            </Typography>

            {/* QR + Store Buttons */}
            <Stack
              direction="row"
              spacing={2}
              alignItems="center"
              flexWrap="wrap"
            >
              <Image
                src="/QR & Play Store.png" // Replace with your QR image
                alt="QR Code"
                width={200}
                height={200}
              />
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Status;
