"use client";
import React from "react";
import Image from "next/image";
import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Checkbox,
  FormControlLabel,
  Grid,
  Select,
  MenuItem,
  Button,
  FormControl,
  InputLabel,
  Input,
} from "@mui/material";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { CameraAlt } from "@mui/icons-material";
import { createEvent } from "@/types";
import { useCreateEvent } from "@/hooks/react-query/query-hooks/organizerHooks";

const Createproduct: React.FC = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<createEvent>();

  const { mutate, isPending } = useCreateEvent();

  const onSubmit: SubmitHandler<createEvent> = async (data) => {
    // Create a new FormData instance
    const formData = new FormData();

    // Append simple fields to FormData
    formData.append("event_name", data.event_name);
    formData.append("description", data.description);
    formData.append("date", data.date);
    formData.append("time", data.time);
    formData.append("city", data.city);
    formData.append("venue", data.venue);
    formData.append("total_seats", String(data.total_seats));
    formData.append("type", data.type);
    formData.append("ticketPrice", String(data.ticketPrice));
    formData.append("validAge", String(data.validAge || false));
    formData.append("artistname", data.artistname);
    formData.append("artistrole", data.artistrole);
    formData.append("category", data.category);

    // Append images to FormData
    if (data.images && data.images.length > 0) {
      data.images.forEach((file: File) => {
        formData.append("images", file); // Append each file to the "images[]" key
      });
    }

    // Append videos to FormData
    if (data.videos && data.videos.length > 0) {
      data.videos.forEach((file: File) => {
        formData.append("videos", file); // Append each file to the "videos[]" key
      });
    }
console.log(formData);
    mutate(formData);
  };

  return (
    <>
      <Box
        sx={{
          Height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          bgcolor: "#FCFFEB",
          fontFamily: "Poppins, sans-serif",
          p: 2,
          height: "100%",
        }}
      >
        <Card
          sx={{
            p: 4,
            borderRadius: 4,
            boxShadow: 6,
            maxWidth: {
              xs: "100%",
              sm: "100%",
              md: "100%",
              lg: "68%",
              xl: "68%",
            },
            width: "100%",
            bgcolor: "#FAFFED",
          }}
        >
          <CardContent>
            <Typography
              variant="h4"
              align="center"
              gutterBottom
              sx={{
                fontWeight: 600,
                fontSize: {
                  xs: "1.5rem",
                  sm: "1.5rem",
                  md: "1.5rem",
                  lg: "2rem",
                  xl: "2rem",
                },
              }}
            >
              Create Your Event
            </Typography>
            <Typography variant="body1" align="center" gutterBottom>
              Plan Big, Go Live, Make It Unforgettable
            </Typography>

            <Box noValidate autoComplete="off">
              <form onSubmit={handleSubmit(onSubmit)}>
                {/* Event Name */}
                <TextField
                  label="Event Name"
                  fullWidth
                  margin="normal"
                  placeholder="Enter event name"
                  InputLabelProps={{
                    style: {
                      fontFamily: "Poppins",
                      backgroundColor: "#FAFFED",
                    },
                  }}
                  inputProps={{
                    style: { fontFamily: "Poppins", backgroundColor: "white" },
                  }}
                  {...register("event_name", {
                    required: "Event name is required",
                    minLength: {
                      value: 3,
                      message: "Event name must be at least 3 characters",
                    },
                  })}
                  error={!!errors.event_name}
                  helperText={errors.event_name?.message}
                />

                {/* Description */}
                <TextField
                  label="Description of your event"
                  fullWidth
                  margin="normal"
                  rows={2}
                  placeholder="Write a short description..."
                  InputLabelProps={{ style: { fontFamily: "Poppins" } }}
                  inputProps={{
                    style: { fontFamily: "Poppins", backgroundColor: "white" },
                  }}
                  {...register("description", {
                    required: "Description is required",
                    minLength: {
                      value: 10,
                      message: "Description must be at least 10 characters",
                    },
                  })}
                  error={!!errors.description}
                  helperText={errors.description?.message}
                />

                {/* Only 18+ Guests */}
                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{ color: "#A7BF00" }}
                      {...register("validAge")}
                    />
                  }
                  label="Only 18+ Guests"
                  sx={{
                    mt: 1,
                    ".MuiFormControlLabel-label": { fontFamily: "Poppins" },
                  }}
                />

                {/* Date and Time */}
                <Grid
                  container
                  spacing={2}
                  sx={{
                    mt: 1,
                    width: {
                      xs: "100%",
                      sm: "100%",
                      md: "100%",
                      lg: "50%",
                      xl: "50%",
                    },
                  }}
                >
                  <Grid
                    sx={{
                      width: {
                        xs: "100%",
                        sm: "100%",
                        md: "100%",
                        lg: "50%",
                        xl: "50%",
                      },
                    }}
                  >
                    <TextField
                      label="Date"
                      type="date"
                      fullWidth
                      InputLabelProps={{
                        shrink: true,
                        style: {
                          fontFamily: "Poppins",
                        },
                      }}
                      inputProps={{
                        min: new Date().toISOString().split("T")[0], // Set the minimum date to today
                        style: {
                          fontFamily: "Poppins",
                          backgroundColor: "white",
                        },
                      }}
                      {...register("date", {
                        required: "Date is required",
                      })}
                      error={!!errors.date}
                      helperText={errors.date?.message}
                    />
                  </Grid>
                  <Grid
                    sx={{
                      width: {
                        xs: "100%",
                        sm: "100%",
                        md: "100%",
                        lg: "50%",
                        xl: "50%",
                      },
                    }}
                  >
                    <TextField
                      label="Time"
                      type="time"
                      fullWidth
                      InputLabelProps={{
                        shrink: true,
                        style: { fontFamily: "Poppins" },
                      }}
                      inputProps={{
                        style: {
                          fontFamily: "Poppins",
                          backgroundColor: "white",
                        },
                      }}
                      {...register("time", { required: true })}
                      error={!!errors.time}
                      helperText={errors.time ? "Time is required" : ""}
                    />
                  </Grid>
                </Grid>

                {/* City */}
                <TextField
                  label="City"
                  fullWidth
                  margin="normal"
                  placeholder="City"
                  InputLabelProps={{ style: { fontFamily: "Poppins" } }}
                  inputProps={{
                    style: { fontFamily: "Poppins", backgroundColor: "white" },
                  }}
                  {...register("city", {
                    required: true,
                    minLength: {
                      value: 3,
                      message: "City must be at least 3 characters",
                    },
                  })}
                  error={!!errors.city}
                  helperText={errors.city ? "City is required" : ""}
                />

                {/* Address */}
                <TextField
                  label="Venue"
                  fullWidth
                  margin="normal"
                  placeholder="Venue"
                  InputLabelProps={{ style: { fontFamily: "Poppins" } }}
                  inputProps={{
                    style: { fontFamily: "Poppins", backgroundColor: "white" },
                  }}
                  {...register("venue", {
                    required: true,
                    minLength: {
                      value: 3,
                      message: "Venue must be at least 3 characters",
                    },
                  })}
                  error={!!errors.venue}
                  helperText={errors.venue ? "Venue is required" : ""}
                />

                {/* Total Seats */}
                <TextField
                  label="Total Number of Seats"
                  type="number"
                  fullWidth
                  margin="normal"
                  placeholder="Enter total seats"
                  InputLabelProps={{ style: { fontFamily: "Poppins" } }}
                  inputProps={{
                    style: { fontFamily: "Poppins", backgroundColor: "white" },
                  }}
                  {...register("total_seats", {
                    required: true,
                    valueAsNumber: true,
                  })}
                  error={!!errors.total_seats}
                  helperText={
                    errors.total_seats
                      ? "Total number of seats is required"
                      : ""
                  }
                />

                {/* Type */}
                <Grid container spacing={2} alignItems="center" sx={{ mt: 1 }}>
                  <Grid
                    item
                    xs={6}
                    sx={{
                      width: {
                        xs: "100%",
                        sm: "100%",
                        md: "100%",
                        lg: "50%",
                        xl: "50%",
                      },
                    }}
                  >
                    <FormControl fullWidth>
                      <InputLabel
                        id="type-label"
                        sx={{ fontFamily: "Poppins" }}
                      >
                        Type
                      </InputLabel>
                      <Select
                        labelId="type-label"
                        defaultValue="offline"
                        label="Type"
                        sx={{
                          fontFamily: "Poppins",
                          width: {
                            xs: "100%",
                            sm: "100%",
                            md: "100%",
                            lg: "200px",
                            xl: "200px",
                          },
                        }}
                        {...register("type", { required: true })}
                        error={!!errors.type}
                      >
                        <MenuItem
                          value="offline"
                          sx={{ fontFamily: "Poppins" }}
                        >
                          offline
                        </MenuItem>
                        <MenuItem value="online" sx={{ fontFamily: "Poppins" }}>
                          online
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>

                {/* Ticket Price */}
                <TextField
                  label="Ticket Price"
                  type="number"
                  fullWidth
                  margin="normal"
                  placeholder="Enter ticket price"
                  InputLabelProps={{ style: { fontFamily: "Poppins" } }}
                  inputProps={{
                    style: { fontFamily: "Poppins", backgroundColor: "white" },
                  }}
                  {...register("ticketPrice", { required: true })}
                  error={!!errors.ticketPrice}
                  helperText={
                    errors.ticketPrice ? "Ticket price is required" : ""
                  }
                />

                {/* Images */}
                <Controller
                  name="images"
                  control={control}
                  rules={{ required: "At least one image is required" }}
                  render={({ field }) => (
                    <div style={{ width: "100%" }}>
                      <Input
                        sx={{ display: "none", width: "100%" }}
                        id="image-upload"
                        type="file"
                        inputProps={{
                          accept: "image/png, image/jpeg, image/jpg", // Accept only image files
                          multiple: true, // Allow multiple file selection
                        }}
                        onChange={(
                          event: React.ChangeEvent<HTMLInputElement>
                        ) => {
                          const files = event.target.files;
                          if (files) {
                            const fileArray = Array.from(files); // Convert FileList to an array
                            field.onChange(fileArray); // Pass the array of File objects to the field
                          }
                        }}
                      />
                      <label
                        htmlFor="image-upload"
                        className="text-#E9213F w-full"
                      >
                        <Button
                          variant="outlined"
                          component="span"
                          startIcon={<CameraAlt />}
                          fullWidth
                          sx={{
                            border: "1px solid #A7BF00",
                            color: "#A7BF00",
                            mt: 1,
                          }}
                        >
                          Upload Images
                        </Button>
                      </label>

                      {/* Display uploaded images */}
                      {field.value && field.value.length > 0 && (
                        <div
                          style={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: "10px",
                            marginTop: "10px",
                          }}
                        >
                          {field.value.map((file: File, index: number) => (
                            <div key={index}>
                              <Image
                                src={URL.createObjectURL(file)} // Create a preview URL for the image
                                alt={`Uploaded Image ${index + 1}`}
                                width={100}
                                height={100}
                                style={{
                                  width: "100px",
                                  height: "100px",
                                  objectFit: "cover",
                                  borderRadius: "8px",
                                }}
                              />
                            </div>
                          ))}
                        </div>
                      )}

                      {errors.images && (
                        <div style={{ color: "#D53838", paddingTop: "5px" }}>
                          {errors.images.message}
                        </div>
                      )}
                    </div>
                  )}
                />

                {/* Artist Name */}
                <TextField
                  label="Artist Name"
                  fullWidth
                  margin="normal"
                  placeholder="Enter artist name"
                  InputLabelProps={{ style: { fontFamily: "Poppins" } }}
                  inputProps={{
                    style: { fontFamily: "Poppins", backgroundColor: "white" },
                  }}
                  {...register("artistname", {
                    required: true,
                    minLength: {
                      value: 2,
                      message: "Artist name must be at least 2 characters",
                    },
                  })}
                  error={!!errors.artistname}
                  helperText={
                    errors.artistname ? "Artist name is required" : ""
                  }
                />

                {/* Artist Role */}
                <TextField
                  label="Artist Role"
                  fullWidth
                  margin="normal"
                  placeholder="Enter artist role"
                  InputLabelProps={{ style: { fontFamily: "Poppins" } }}
                  inputProps={{
                    style: { fontFamily: "Poppins", backgroundColor: "white" },
                  }}
                  {...register("artistrole", {
                    required: true,
                    minLength: {
                      value: 2,
                      message: "Artist role must be at least 2 characters",
                    },
                  })}
                  error={!!errors.artistrole}
                  helperText={
                    errors.artistrole ? "Artist role is required" : ""
                  }
                />

                {/* Category */}
                <TextField
                  label="Category"
                  fullWidth
                  margin="normal"
                  placeholder="Enter category"
                  InputLabelProps={{ style: { fontFamily: "Poppins" } }}
                  inputProps={{
                    style: { fontFamily: "Poppins", backgroundColor: "white" },
                  }}
                  {...register("category", {
                    required: true,
                    minLength: {
                      value: 2,
                      message: "Category must be at least 2 characters",
                    },
                  })}
                  error={!!errors.category}
                  helperText={errors.category ? "Category is required" : ""}
                />

                {/* Videos */}
                <Controller
                  name="videos"
                  control={control}
                  rules={{ required: "At least one video is required" }}
                  render={({ field }) => (
                    <div style={{ width: "100%" }}>
                      <Input
                        sx={{ display: "none", width: "100%" }}
                        id="video-upload"
                        type="file"
                        inputProps={{
                          accept: "video/mp4, video/avi, video/mkv", // Accept only video files
                          multiple: true, // Allow multiple file selection
                        }}
                        onChange={(
                          event: React.ChangeEvent<HTMLInputElement>
                        ) => {
                          const files = event.target.files;
                          if (files) {
                            const fileArray = Array.from(files); // Convert FileList to an array
                            field.onChange(fileArray); // Pass the array of File objects to the field
                          }
                        }}
                      />
                      <label
                        htmlFor="video-upload"
                        className="text-#E9213F w-full"
                      >
                        <Button
                          variant="outlined"
                          component="span"
                          startIcon={<CameraAlt />}
                          fullWidth
                          sx={{
                            border: "1px solid #A7BF00",
                            color: "#A7BF00",
                            mt: 1,
                          }}
                        >
                          Upload Videos
                        </Button>
                      </label>

                      {/* Display uploaded videos */}
                      {field.value && field.value.length > 0 && (
                        <div
                          style={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: "10px",
                            marginTop: "10px",
                          }}
                        >
                          {field.value.map((file: File, index: number) => (
                            <div key={index}>
                              <video
                                src={URL.createObjectURL(file)} // Create a preview URL for the video
                                controls
                                style={{
                                  width: "200px",
                                  height: "150px",
                                  objectFit: "cover",
                                  borderRadius: "8px",
                                }}
                              />
                            </div>
                          ))}
                        </div>
                      )}

                      {errors.videos && (
                        <div style={{ color: "#D53838", paddingTop: "5px" }}>
                          {errors.videos.message}
                        </div>
                      )}
                    </div>
                  )}
                />

                {/* Submit Button */}
                <Box textAlign="center" mt={3}>
                  <Button
                    disabled={isPending}
                    type="submit"
                    variant="contained"
                    sx={{
                      backgroundColor: "#A7BF00",
                      borderRadius: "999px",
                      py: 1.5,
                      px: 5,
                      fontWeight: "bold",
                      fontFamily: "Poppins",
                      textTransform: "none",
                      "&:hover": {
                        backgroundColor: "#92A800",
                        borderColor: "#A7BF00",
                      },
                    }}
                  >
                    Create Event
                  </Button>
                </Box>
              </form>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

export default Createproduct;
