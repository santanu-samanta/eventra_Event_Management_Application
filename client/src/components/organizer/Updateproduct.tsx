"use client";
import React, { useEffect } from "react";
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
import {
  useSingelEvent,
  useUpdateEvent,
} from "@/hooks/react-query/query-hooks/organizerHooks";
import { useParams } from "next/navigation";
import djs from "dayjs";

const Updateproduct: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data } = useSingelEvent(id as string);
  const { mutate, isPending } = useUpdateEvent();

  const {
    register,
    handleSubmit,
    control,
    reset, // Import reset to set default values dynamically
    formState: { errors },
  } = useForm<createEvent>();

  // Use useEffect to reset the form values when data is loaded
  useEffect(() => {
    if (data) {
      reset({
        event_name: data.event_name,
        description: data.description,
        date: djs(data.date).format("YYYY-MM-DD"),
        time: data.time,
        type: data?.type,
        city: data?.location?.city,
        venue: data?.location?.venue,
        total_seats: data.total_seats,
        ticketPrice: data.ticketPrice,
        validAge: data.validAge,
        online_link: data.online_link,
        // images: data.images,
        artistname: data.artistname,
        artistrole: data.artistrole,
        category: data.category,
        // videos: data.videos,
      });
    }
  }, [data, reset]); // Run this effect whenever `data` changes

  const onSubmit: SubmitHandler<createEvent> = (formData) => {
    // Create a new FormData instance
    const formDataObj = new FormData();

    // Append simple fields to FormData
    formDataObj.append("event_name", formData.event_name);
    formDataObj.append("description", formData.description);
    formDataObj.append("date", formData.date);
    formDataObj.append("time", formData.time);
    formDataObj.append("city", formData.city);
    formDataObj.append("venue", formData.venue);
    formDataObj.append("total_seats", String(formData.total_seats));
    formDataObj.append("type", formData.type);
    formDataObj.append("ticketPrice", String(formData.ticketPrice));
    formDataObj.append("validAge", String(formData.validAge || false));
    formDataObj.append("artistname", formData.artistname);
    formDataObj.append("artistrole", formData.artistrole);
    formDataObj.append("category", formData.category);
    if (formData.online_link) {
      formDataObj.append("online_link", formData.online_link);
    }

    // Append images to FormData
    if (formData.images && formData.images.length > 0) {
      formData.images.forEach((file: File) => {
        formDataObj.append("images", file);
      });
    }

    // Append videos to FormData
    if (formData.videos && formData.videos.length > 0) {
      formData.videos.forEach((file: File) => {
        formDataObj.append("videos", file);
      });
    }

    mutate({ data: formDataObj, id: id as string });
  };

  return (
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
            Update Your Event
          </Typography>
          <Typography variant="body1" align="center" gutterBottom>
            Plan Big, Go Live, Make It Unforgettable
          </Typography>

          <Box noValidate autoComplete="off">
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Event Name */}
              <label htmlFor="event_name">Event Name</label>
              <TextField
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
                  required: true,
                  minLength: {
                    value: 3,
                    message: "Event name must be at least 3 characters",
                  },
                })}
                error={!!errors.event_name}
                helperText={errors.event_name ? "Event name is required" : ""}
              />

              {/* Description */}
              <label htmlFor="event_name">Description</label>
              <TextField
                fullWidth
                margin="normal"
                rows={2}
                placeholder="Write a short description..."
                InputLabelProps={{ style: { fontFamily: "Poppins" } }}
                inputProps={{
                  style: { fontFamily: "Poppins", backgroundColor: "white" },
                }}
                {...register("description", {
                  required: true,
                  minLength: {
                    value: 10,
                    message: "Description must be at least 10 characters",
                  },
                })}
                error={!!errors.description}
                helperText={errors.description ? "Description is required" : ""}
              />

              {/* Only 18+ Guests */}
              <FormControlLabel
                control={
                  <Checkbox
                    sx={{ color: "#A7BF00" }}
                    {...register("validAge")}
                    disabled={
                      data?.booked_seats && data?.booked_seats > 0
                        ? true
                        : false
                    }
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
                  <label htmlFor="event_name">Date</label>
                  <TextField
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
                    disabled={
                      data?.booked_seats && data?.booked_seats > 0
                        ? true
                        : false
                    }
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
                  <label htmlFor="event_name">Time</label>
                  <TextField
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
                    disabled={
                      data?.booked_seats && data?.booked_seats > 0
                        ? true
                        : false
                    }
                  />
                </Grid>
              </Grid>

              {/* City */}
              {data?.type === "offline" && (
                <>
                  <label htmlFor="event_name">City</label>
                  <TextField
                    fullWidth
                    margin="normal"
                    placeholder="City"
                    InputLabelProps={{ style: { fontFamily: "Poppins" } }}
                    inputProps={{
                      style: {
                        fontFamily: "Poppins",
                        backgroundColor: "white",
                      },
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
                    disabled={
                      data?.booked_seats && data?.booked_seats > 0
                        ? true
                        : false
                    }
                  />

                  {/* Address */}
                  <label htmlFor="event_name">Venue</label>
                  <TextField
                    fullWidth
                    margin="normal"
                    placeholder="Venue"
                    InputLabelProps={{ style: { fontFamily: "Poppins" } }}
                    inputProps={{
                      style: {
                        fontFamily: "Poppins",
                        backgroundColor: "white",
                      },
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
                    disabled={
                      data?.booked_seats && data?.booked_seats > 0
                        ? true
                        : false
                    }
                  />
                </>
              )}

              {data?.type === "online" && (
                <>
                  <label htmlFor="event_name">online link</label>
                  <TextField
                    fullWidth
                    margin="normal"
                    placeholder="online link"
                    InputLabelProps={{ style: { fontFamily: "Poppins" } }}
                    inputProps={{
                      style: {
                        fontFamily: "Poppins",
                        backgroundColor: "white",
                      },
                    }}
                    {...register("online_link", {
                      required: true,
                      minLength: {
                        value: 3,
                        message: "online link must be at least 3 characters",
                      },
                    })}
                    error={!!errors.online_link}
                    helperText={
                      errors.online_link ? "online link is required" : ""
                    }
                    disabled={
                      data?.booked_seats && data?.booked_seats > 0
                        ? true
                        : false
                    }
                  />
                </>
              )}

              {/* Total Seats */}
              <label htmlFor="event_name">Total Seats</label>
              <TextField
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
                  errors.total_seats ? "Total number of seats is required" : ""
                }
                disabled={
                  data?.booked_seats && data?.booked_seats > 0 ? true : false
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
                    <InputLabel id="type-label" sx={{ fontFamily: "Poppins" }}>
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
                      disabled={
                        data?.booked_seats && data?.booked_seats > 0
                          ? true
                          : false
                      }
                    >
                      <MenuItem value="offline" sx={{ fontFamily: "Poppins" }}>
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
              <label htmlFor="event_name">Ticket Price</label>
              <TextField
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
              <label htmlFor="event_name">Artist Name</label>
              <TextField
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
                helperText={errors.artistname ? "Artist name is required" : ""}
                disabled={
                  data?.booked_seats && data?.booked_seats > 0 ? true : false
                }
              />

              {/* Artist Role */}
              <label htmlFor="event_name">Artist Role</label>
              <TextField
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
                helperText={errors.artistrole ? "Artist role is required" : ""}
                disabled={
                  data?.booked_seats && data?.booked_seats > 0 ? true : false
                }
              />

              {/* Category */}
              <label htmlFor="event_name">Category</label>
              <TextField
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
                disabled={
                  data?.booked_seats && data?.booked_seats > 0 ? true : false
                }
              />

              {/* Videos */}
              <Controller
                name="videos"
                control={control}
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
  );
};

export default Updateproduct;
