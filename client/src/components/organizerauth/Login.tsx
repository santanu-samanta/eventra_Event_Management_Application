"use client";
import React, { useState } from "react";

import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  InputAdornment,
  TextField,
  Typography,
  Paper,
  IconButton,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import {
  getOrganizerDetails,
  organizerlogin,
  resetLoading,
} from "@/store/auth/auth";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Visibility, VisibilityOff } from "@mui/icons-material";
type Inputs = {
  email: string;
  password: string;
};
const Login: React.FC = () => {
  const { loading } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    dispatch(organizerlogin(data))
      .then((res) => {
        if (res.payload) {
          reset();
          dispatch(getOrganizerDetails());
          router.push("/organizers");
        }
      })
      .finally(() => {
        dispatch(resetLoading());
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
        className="login"
        sx={{
          py: 10,

          background: "#F9FFD1CF",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Container maxWidth="sm">
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
              align="center"
              fontWeight={600}
              gutterBottom
            >
              Organizer Login
            </Typography>
            <Typography
              variant="body2"
              align="center"
              color="text.secondary"
              mb={3}
              sx={{ fontSize: 14 }}
            >
              Welcome back! Please login to your account.
            </Typography>

            <Box>
              <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                  sx={{ backgroundColor: "white" }}
                  type="email"
                  label="Email Address"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  placeholder="Enter your email"
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
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: "Invalid email address",
                    },
                  })}
                  error={!!errors.email}
                  helperText={errors.email ? "Email is required" : ""}
                />

                <TextField
                  sx={{ backgroundColor: "white" }}
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  placeholder="Password"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockIcon sx={{ color: "#A7BF00" }} />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => setShowPassword((show) => !show)}
                          edge="end"
                          aria-label="toggle password visibility"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Password is required",
                    },
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                    maxLength: {
                      value: 20,
                      message: "Password must be at most 20 characters",
                    },
                  })}
                  error={!!errors.password}
                  helperText={errors.password ? "Password is required" : ""}
                />

                <Grid
                  container
                  alignItems="center"
                  justifyContent="space-between"
                  mt={1}
                >
                  <Grid item>
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Remember Me"
                    />
                  </Grid>
                  <Link href={"/organizer-forgotpassword"}>
                    <Typography
                      sx={{
                        fontFamily: "'Poppins', sans-serif",
                        textDecoration: "none",
                        cursor: "pointer",
                      }}
                    >
                      Forgot Password
                    </Typography>
                  </Link>
                </Grid>

                <Button
                  type="submit"
                  variant="contained"
                  color="error"
                  fullWidth
                  disabled={loading}
                  sx={{
                    mt: 3,
                    py: 1.5,
                    borderRadius: 2,
                    backgroundColor: "#A7BF00",
                    color: "#fff",
                    fontWeight: 600,
                    "&:hover": {
                      backgroundColor: "#e14e4e",
                    },
                  }}
                >
                  Login
                </Button>
              </form>

              <Typography align="center" mt={3}>
                <Link href={"/organizer-signup"}>
                  Don't have an account? Sign Up
                </Link>
              </Typography>
              <Typography align="center" mt={1}>
                <Link href={"/login"}>
                  Do you want to Login as an Attendee ? Login
                </Link>
              </Typography>
            </Box>
          </Paper>
        </Container>
      </Box>
    </>
  );
};

export default Login;
