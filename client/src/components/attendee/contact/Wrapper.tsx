"use client";

import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import Image from "next/image";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { useContact } from "@/hooks/react-query/query-hooks/contactHook";
import { ContactForm } from "@/types";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

const Wrapper = () => {
  const { mutate, isPending } = useContact();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ContactForm>();

  const onSubmit: SubmitHandler<ContactForm> = (data) => {
    mutate(data);
  };
const {isAuthenticated} = useSelector((state: RootState) => state.auth);
  return (
    <>
      <Box
        sx={{
          position: "relative",
          padding: "50px 0",
          background:
            "linear-gradient(to right, rgba(245, 255, 175, 0.25), rgba(250, 255, 218, 0.5))",
          backgroundRepeat: "no-repeat",
          boxShadow: 3,
          borderBottomLeftRadius: "20px",
          borderBottomRightRadius: "20px",
          overflow: "hidden",
        }}
      >
        <Container sx={{ position: "relative" }}>
          {/* Decorative swirl image on left */}
          <span
            style={{
              position: "absolute",
              top: "20%",
              left: 0,
              zIndex: 0,
            }}
          >
            <Image
              width={500}
              height={500}
              src="/leftElement.png"
              alt=""
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </span>

          <Grid
            container
            alignItems="center"
            justifyContent={"center"}
            spacing={2}
            sx={{ position: "relative", zIndex: 1 }}
          >
            {/* Text Column */}
            <Grid item xs={12} md={6}>
              <Typography
                variant="h2"
                sx={{
                  fontSize: "3rem",
                  fontWeight: 700,
                  color: "#1d1d1d",
                }}
              >
                Contact Us
              </Typography>
            </Grid>

            {/* Image Layout */}
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
                height: "320px",
              }}
            >
              {/* Left stacked images */}
              <Box
                sx={{
                  display: {
                    xl: "block",
                    lg: "block",
                    md: "none",
                    sm: "none",
                    xs: "none",
                  },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "15px",
                  }}
                >
                  {/* Top image (img3) */}
                  <Box
                    sx={{
                      width: "300px",
                      height: "170px",
                      borderRadius: "20px",
                      overflow: "hidden",
                      position: "relative",
                      zIndex: 1,
                    }}
                  >
                    <Image
                      src="/firstpic.png"
                      width={500}
                      height={500}
                      alt="Top Left"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </Box>

                  {/* Bottom image (img4) — made thinner and smaller, adjusted marginLeft */}
                  <Box
                    sx={{
                      width: "220px",
                      height: "65px",
                      borderRadius: "20px",
                      overflow: "hidden",
                      position: "relative",
                      zIndex: 1,
                      marginLeft: "5px", // Reduced marginLeft to move it left
                    }}
                  >
                    <Image
                      src="/thirdpic.png"
                      width={500}
                      height={500}
                      alt="Bottom Left"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </Box>
                </Box>

                {/* Overlapping image (img5) */}
                <Box
                  sx={{
                    position: "absolute",
                    top: "135px",
                    left: "230px",
                    width: "220px",
                    height: "110px",
                    borderRadius: "20px",
                    overflow: "hidden",
                    boxShadow: 3,
                    zIndex: 2,
                  }}
                >
                  <Image
                    src="/secondpic.png"
                    width={500}
                    height={500}
                    alt="Overlay"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box
        className="drop"
        sx={{
          backgroundImage: `url(${"/contactbg.png"})`,
          backgroundRepeat: "no-repeat",
          boxSizing: "border-box",
          py: 8,
          backgroundColor: "#fcffeb",
        }}
      >
        <Container>
          <Box textAlign="center">
            <Button
              className="btn-drop"
              sx={{
                backgroundColor: "#DBE58F",
                color: "#232802",
                border: "none",
                px: 10,
                py: 1,
                borderRadius: "50px",
                fontSize: { xs: "12px", sm: "15px" },
                fontWeight: 600,
                lineHeight: 2.5,
                fontFamily: "Poppins, sans-serif",
                mb: 4,
                "&:hover": {
                  backgroundColor: "#a7bf00",
                },
              }}
            >
              <Image
                src="/flower.png"
                width={20}
                height={20}
                alt="flower"
                style={{ marginRight: 8 }}
              />
              Drop Us A Message
            </Button>
            <Typography
              variant="h3"
              sx={{
                fontSize: "35px",
                fontWeight: 600,
                fontFamily: "Poppins, sans-serif",
                mb: 2,
              }}
            >
              Have A Question? Contact Us
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ fontFamily: "Inter, sans-serif" }}
            >
              We're here to help you bring your vision to life. Reach out—our
              team is just a message away.
            </Typography>
          </Box>

          <Grid container spacing={4} justifyContent="center" mt={4}>
            {/* Email */}
            <Grid item xs={12} md={3}>
              <Card
                className="contact-card"
                sx={{
                  backgroundColor: "#FAFFDA",
                  borderRadius: "15px",
                  padding: 2.5,
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <Box
                  className="icon-circle"
                  sx={{
                    backgroundColor: "#a7bf00",
                    borderRadius: "50%",
                    padding: "15px",
                    display: "inline-block",
                  }}
                >
                  <Image src="/email1.png" alt="Email" height={25} width={25} />
                </Box>
                <Box textAlign="start">
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: 20,
                      fontWeight: 500,
                      fontFamily: "Inter, sans-serif",
                      mb: 0.5,
                    }}
                  >
                    Our Email
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: 14,
                      fontWeight: 400,
                      fontFamily: "Inter, sans-serif",
                    }}
                    color="text.secondary"
                  >
                    eventra@gmail.com
                  </Typography>
                </Box>
              </Card>
            </Grid>

            {/* Call */}
            <Grid item xs={12} md={3}>
              <Card
                className="contact-card"
                sx={{
                  backgroundColor: "#FAFFDA",
                  borderRadius: "15px",
                  padding: 2.5,
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <Box
                  className="icon-circle"
                  sx={{
                    backgroundColor: "#a7bf00",
                    borderRadius: "50%",
                    padding: "15px",
                    display: "inline-block",
                  }}
                >
                  <Image src="/email1.png" alt="call" height={25} width={25} />
                </Box>
                <Box textAlign="start">
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: 20,
                      fontWeight: 500,
                      fontFamily: "Inter, sans-serif",
                      mb: 0.5,
                    }}
                  >
                    Call / Message
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: 14,
                      fontWeight: 400,
                      fontFamily: "Inter, sans-serif",
                    }}
                    color="text.secondary"
                  >
                    +1 123 456 789
                  </Typography>
                </Box>
              </Card>
            </Grid>

            {/* Location */}
            <Grid item xs={12} md={3}>
              <Card
                className="contact-card"
                sx={{
                  backgroundColor: "#FAFFDA",
                  borderRadius: "15px",
                  padding: 2.5,
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <Box
                  className="icon-circle"
                  sx={{
                    backgroundColor: "#a7bf00",
                    borderRadius: "50%",
                    padding: "15px",
                    display: "inline-block",
                  }}
                >
                  <Image src="/loc.png" alt="location" height={25} width={25} />
                </Box>
                <Box textAlign="start">
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: 20,
                      fontWeight: 500,
                      fontFamily: "Inter, sans-serif",
                      mb: 0.5,
                    }}
                  >
                    Our Location
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: 14,
                      fontWeight: 400,
                      fontFamily: "Inter, sans-serif",
                    }}
                    color="text.secondary"
                  >
                    1800 Abbot Kinney
                  </Typography>
                </Box>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box
        component="section"
        py={{ xl: 5, lg: 5, md: 5, sm: 0, xs: 0 }}
        sx={{ backgroundColor: "#fcffeb" }}
      >
        <Box
          className="container"
          justifyContent={"center"}
          display={"flex"}
          alignContent={"center"}
          width={"100%"}
          margin={"0 auto"}
        >
          <Grid container spacing={5} alignItems="stretch">
            {/* Left Image */}
            <Grid
              item
              md={6}
              sx={{
                display: { xs: "none", md: "block" },
                borderRadius: "20px",
                overflow: "hidden",
                maxWidth: "406px",
                minHeight: "575px",
              }}
            >
              <Box
                component="img"
                src="/conleady.png"
                alt="Contact"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "20px",
                }}
              />
            </Grid>

            {/* Right Form */}
            <Grid item xs={12} md={6}>
              <Box
                p={4}
                borderRadius={4}
                sx={{
                  backgroundColor: "#E9EFD5", // .totalForm background
                  height: "100%",
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                <Box pt={6}>
                  <Typography
                    variant="h5"
                    fontWeight={600}
                    align="center"
                    mb={4}
                    sx={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    Get In Touch Now
                  </Typography>

                  <Box
                    component="form"
                    onSubmit={handleSubmit(onSubmit)}
                    display="flex"
                    flexDirection="column"
                    justifyContent="space-between"
                    flexGrow={1}
                  >
                    {/* First + Last Name */}
                    <Grid container spacing={2} mb={3}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          placeholder="First Name"
                          variant="outlined"
                          {...register("first_name", {
                            required: "First name is required",
                          })}
                          error={!!errors.first_name}
                          helperText={errors.first_name?.message}
                          InputProps={{
                            sx: {
                              borderRadius: "50px",
                              backgroundColor: "#F6FFD0",
                              pr: "25px",
                            },
                          }}
                        />
                      </Grid>

                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          placeholder="Last Name"
                          variant="outlined"
                          {...register("last_name", {
                            required: "Last name is required",
                          })}
                          error={!!errors.last_name}
                          helperText={errors.last_name?.message}
                          InputProps={{
                            sx: {
                              borderRadius: "50px",
                              backgroundColor: "#F6FFD0",
                              pr: "25px",
                            },
                          }}
                        />
                      </Grid>
                    </Grid>

                    {/* Phone + Email */}
                    <Grid container spacing={2} mb={3}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          type="number"
                          placeholder="Phone Number"
                          variant="outlined"
                          {...register("phone", {
                            required: "Phone number is required",
                            pattern: {
                              value: /^[0-9]{10}$/,
                              message: "Enter a valid 10-digit phone number",
                            },
                          })}
                          error={!!errors.phone}
                          helperText={errors.phone?.message}
                          InputProps={{
                            sx: {
                              borderRadius: "50px",
                              backgroundColor: "#F6FFD0",
                              pr: "25px",
                            },
                          }}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          type="email"
                          placeholder="Email Address"
                          variant="outlined"
                          {...register("email", {
                            required: "Email is required",
                            pattern: {
                              value:
                                /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                              message: "Enter a valid email address",
                            },
                          })}
                          error={!!errors.email}
                          helperText={errors.email?.message}
                          InputProps={{
                            sx: {
                              borderRadius: "50px",
                              backgroundColor: "#F6FFD0",
                              pr: "25px",
                            },
                          }}
                        />
                      </Grid>
                    </Grid>

                    {/* Service Type */}
                    <Box mb={3}>
                      <TextField
                        fullWidth
                        placeholder="Service Type"
                        variant="outlined"
                        {...register("servicetype", {
                          required: "Service type is required",
                        })}
                        error={!!errors.servicetype}
                        helperText={errors.servicetype?.message}
                        InputProps={{
                          sx: {
                            borderRadius: "50px",
                            backgroundColor: "#F6FFD0",
                            pr: "25px",
                          },
                        }}
                      />
                    </Box>

                    {/* Message Box */}
                    <Box mb={3}>
                      <Controller
                        name="message"
                        control={control}
                        rules={{
                          required: "Message is required",
                          minLength: {
                            value: 10,
                            message: "Message must be at least 10 characters",
                          },
                        }}
                        render={({ field }) => (
                          <TextareaAutosize
                            {...field}
                            minRows={5}
                            placeholder="Your Message"
                            style={{
                              width: "100%",
                              padding: "16.5px 14px",
                              borderRadius: "16px",
                              borderColor: "#c4c4c4",
                              borderWidth: "1px",
                              borderStyle: "solid",
                              fontFamily: "Inter, sans-serif",
                              fontSize: "1rem",
                              backgroundColor: "#F6FFD0",
                            }}
                          />
                        )}
                      />
                      {errors.message && (
                        <Typography color="error" variant="body2">
                          {errors.message.message}
                        </Typography>
                      )}
                    </Box>

                    {/* Submit Button */}
                    <Box mt={4}>
                      <Button
                        type="submit"
                        variant="contained"
                        fullWidth
                        disabled={isPending || !isAuthenticated}
                        sx={{
                          borderRadius: "50px",
                          fontWeight: 600,
                          fontFamily: "Poppins, sans-serif",
                          fontSize: "15px",
                          backgroundColor: "#a7bf00",
                          color: "#232802",
                          lineHeight: 2.5,
                          padding: "5px 80px",
                          "&:hover": {
                            backgroundColor: "#5d6a00",
                            color: "#ffffff",
                          },
                        }}
                      >
                        Submit
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>

      <Box
        sx={{
          py: { xl: "100px", lg: "100px", md: "50px", sm: "50px", xs: "50px" },
          position: "relative",
          backgroundColor: "#fcffeb",
        }}
        className="map"
      >
        <Container>
          <Grid
            container
            spacing={4}
            display={"flex"}
            justifyContent="center"
            alignContent={"center"}
          >
            {/* Left: Subscription Box */}
            <Grid item xs={12} md={5} mb={5}>
              <Box
                className="subscription-box"
                sx={{
                  maxWidth: 400,
                  backgroundColor: "#FAFFDA",
                  borderRadius: "15px",
                  p: 4,
                  boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
                }}
              >
                <Box component="span">
                  <Image
                    width={100}
                    height={100}
                    src="/Logo (3).png"
                    alt="logo"
                  />
                </Box>
                <Box
                  component="p"
                  className="subscription-text"
                  sx={{
                    fontSize: 25,
                    fontWeight: 400,
                    mt: 2,
                    mb: 3,
                    ml: 5,
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  Interesting?
                  <br />
                  Let's Get Started
                </Box>

                <Box
                  className="formGroup"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    mt: 4,
                  }}
                >
                  <TextField
                    placeholder="Enter your email"
                    variant="outlined"
                    className="sub-inputF"
                    sx={{
                      backgroundColor: "#E8FEAF",
                      borderRadius: "10px",
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "10px",
                        padding: 0,
                        height: "40px", // Match button height
                        fontSize: "14px",
                      },
                      maxWidth: "200px",
                      width: "100%",
                    }}
                    InputProps={{
                      sx: { height: "40px", pl: 1 },
                    }}
                  />
                  <Button
                    className="subscribe-btn"
                    sx={{
                      height: "40px", // Match TextField height
                      backgroundColor: "#a7bf00",
                      color: "black",
                      px: 2,
                      borderRadius: "10px",
                      textTransform: "none",
                      "&:hover": {
                        backgroundColor: "#94a700",
                      },
                    }}
                  >
                    Subscribe
                  </Button>
                </Box>
              </Box>
            </Grid>

            {/* Right: Map Image */}
            <Grid item xs={12} md={6}>
              <Box
                className="mapImg shadow"
                sx={{ maxWidth: 440, width: "100%", borderRadius: "15px" }}
              >
                <Image
                  src="/map.png"
                  width={440}
                  height={440}
                  alt="Google Maps"
                  className="img-fluid"
                  style={{
                    width: "100%",
                    borderRadius: "15px",
                    boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
                  }}
                />
              </Box>
              <Box
                className="eleVector"
                sx={{ position: "absolute", top: "80%", left: "83%" }}
              >
                <Image
                  src="/Vector (5).png"
                  alt="vector"
                  width={40}
                  height={40}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Wrapper;
