"use client";

import React from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  InputAdornment,
  Button,
  Paper,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { forgorpasswordemailsend, resetLoading } from "@/store/auth/auth";
import Image from "next/image";
type Inputs = {
  email: string;
};

const ForgotPassword = () => {
  const { loading } = useSelector((state: RootState) => state.auth);
  const diapatch = useDispatch<AppDispatch>();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    diapatch(forgorpasswordemailsend(data))
      .then((res) => {
        if (res.payload) {
          reset();
        }
      })
      .finally(() => {
        diapatch(resetLoading());
      });
  };
  return (
    <>
      <Box
        sx={{
          position: "relative",
          height: { xs: "250px", sm: "300px", md: "400px" },
          width: "100%",
          overflow: "hidden",
        }}
      >
        {/* Background Image */}
        <Image
          src="/authbanner.png" // <-- Use your uploaded image
          alt="Meeting Banner"
          layout="fill"
          objectFit="cover"
          quality={100}
          style={{ filter: "brightness(0.5)" }}
        />

        {/* Overlay Text */}
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white",
            textAlign: "center",
          }}
        >
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{
              fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
            }}
          >
            From Meetings to Memories
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          py: 10,

          background: "#F9FFD1CF",
          fontFamily: "Poppins, sans-serif",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid container justifyContent="center" maxWidth="sm">
          <Grid item xs={12} sm={8} md={6} lg={4}>
            <Paper
              elevation={3}
              sx={{
                p: 5,
                borderRadius: 5,

                background: "#F9FFD1CF",
              }}
            >
              <Typography
                variant="h5"
                fontWeight="600"
                align="center"
                gutterBottom
                sx={{ fontFamily: "Poppins, sans-serif" }}
              >
                Forgot Password
              </Typography>

              <Typography
                variant="body2"
                color="text.secondary"
                align="center"
                mb={3}
                className="term"
                sx={{ fontSize: "14px !important" }}
              >
                Enter the email address associated with your account.
              </Typography>

              <Box>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Typography mb={1} sx={{ fontFamily: "Poppins, sans-serif" }}>
                    Email Address
                  </Typography>
                  <TextField
                    sx={{ backgroundColor: "white" }}
                    fullWidth
                    variant="outlined"
                    placeholder="Enter your email"
                    type="email"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <EmailIcon sx={{ color: "#A7BF00" }} />
                        </InputAdornment>
                      ),
                    }}
                    {...register("email", {
                      required: {
                        value: true,
                        message: "Email is required",
                      },
                      pattern: {
                        value:
                          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: "Invalid email address",
                      },
                    })}
                    error={!!errors.email}
                    helperText={errors.email ? "Email is required" : ""}
                  />

                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    disabled={loading}
                    sx={{
                      mt: 3,
                      py: 1.5,
                      backgroundColor: "#A7BF00",
                      color: "#fff",
                      "&:hover": {
                        backgroundColor: "#e24d4d",
                      },
                    }}
                  >
                    Continue
                  </Button>
                </form>

                <Typography align="center" mt={3}>
                  <Link href="/login"> Return to Login </Link>
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ForgotPassword;
