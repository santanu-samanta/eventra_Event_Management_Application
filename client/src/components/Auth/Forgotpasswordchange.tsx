"use client";

import React, { useState } from "react";

import {
  Box,
  Button,
  Container,
  Grid,
  InputAdornment,
  TextField,
  Typography,
  Paper,
  IconButton,
} from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { forgorpassword, resetLoading } from "@/store/auth/auth";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { Visibility, VisibilityOff } from "@mui/icons-material";
type Inputs = {
  password: string;
  confirm_password: string;
};

const Forgotpasswordchange = () => {
  const { loading } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch<AppDispatch>();
  const params = useParams<{ token: string }>();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const password = watch("password");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    dispatch(forgorpassword({ data: data, token: params.token }))
      .then((res) => {
        if (res.payload) {
          reset();
          router.push("/login");
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
              Change Password
            </Typography>
            <Typography
              variant="body2"
              align="center"
              color="text.secondary"
              mb={3}
              sx={{ fontSize: 14 }}
            >
              Welcome back! Please enter your new password.
            </Typography>

            <Box>
              <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                  sx={{ backgroundColor: "white" }}
                  type={showPassword ? "text" : "password"}
                  label=" Password"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  placeholder="Enter your password"
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

                <TextField
                  sx={{ backgroundColor: "white" }}
                  label="confirm password"
                  type={showConfirmPassword ? "text" : "password"}
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  placeholder="confirm password"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockIcon sx={{ color: "#A7BF00" }} />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() =>
                            setShowConfirmPassword((show) => !show)
                          }
                          edge="end"
                          aria-label="toggle password visibility"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  {...register("confirm_password", {
                    required: {
                      value: true,
                      message: "confirm password is required",
                    },
                    minLength: {
                      value: 6,
                      message: "confirm password must be at least 6 characters",
                    },
                    maxLength: {
                      value: 20,
                      message: "confirm_password must be at most 20 characters",
                    },
                    validate: (value) =>
                      value === password || "Passwords do not match",
                  })}
                  error={!!errors.confirm_password}
                  helperText={
                    errors.confirm_password ? "Password is required" : ""
                  }
                />

                <Grid
                  container
                  alignItems="center"
                  justifyContent="space-between"
                  mt={1}
                ></Grid>

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
                  Change Password
                </Button>
              </form>
            </Box>
          </Paper>
        </Container>
      </Box>
    </>
  );
};

export default Forgotpasswordchange;
