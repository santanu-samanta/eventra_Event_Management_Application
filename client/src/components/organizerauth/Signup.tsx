"use client";

import React from "react";
import { Box, Container, Paper, Typography } from "@mui/material";
import Link from "next/link";
import StepperForm from "./stepperform/StepperForm";
import Image from "next/image";
const Signup = () => {
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
        py={10}
        sx={{
          background: "#F9FFD1CF", // login background
          fontFamily: '"Poppins", sans-serif',
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Container maxWidth="sm">
          <Paper
            elevation={3}
            sx={{
              borderRadius: 5,
              p: 5,
              background: "#F9FFD1CF", // fromBg background
            }}
          >
            <Typography
              variant="h5"
              align="center"
              fontWeight={600}
              mb={1}
              sx={{ fontFamily: '"Poppins", sans-serif' }}
            >
              Organizer Signup
            </Typography>

            <Typography align="center" color="textSecondary" mb={4}>
              Welcome! Let's create your account.
            </Typography>

            <StepperForm />

            <Typography align="center" mt={3} pb={2}>
              <Link href={"/organizer-login"}>
                {" "}
                Already have an account? Login{" "}
              </Link>
            </Typography>

            <Typography align="center">
              Do you want to register as an Attendee?{" "}
              <Typography
                component="span"
                sx={{
                  fontFamily: "'Poppins', sans-serif",
                  textDecoration: "none",
                  cursor: "pointer",
                }}
              >
                <Link href={"/signup"}>Signup</Link>
              </Typography>
            </Typography>
          </Paper>
        </Container>
      </Box>
    </>
  );
};

export default Signup;
