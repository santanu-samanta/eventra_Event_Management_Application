"use client";

import { AuthFormValues } from "@/types";
import {
  Box,
  Button,
  IconButton,
  Input,
  InputAdornment,
  TextField,
} from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import { CameraAlt } from "@mui/icons-material";
import { useContextApi } from "@/context/ContextApi";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";
const PersonalInformation = () => {
  const {
    control,
    formState: { errors },
    watch,
  } = useFormContext<AuthFormValues>();
  const password = watch("password");
  const { setProfilePicture } = useContextApi();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  return (
    <>
      <Box sx={{ height: "280px", overflowY: "scroll" }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", gap: 2 }}>
          <Controller
            name="company_name"
            control={control}
            rules={{
              required: "First name is required",
              minLength: {
                value: 3,
                message: "First name must be at least 3 characters",
              },
              maxLength: {
                value: 20,
                message: "First name must be at most 20 characters",
              },
            }}
            render={({ field }) => (
              <TextField
                sx={{ backgroundColor: "white" }}
                {...field}
                value={field.value || ""} // Ensure the value is always a string
                label="First Name"
                fullWidth
                error={!!errors.company_name}
                helperText={errors.company_name?.message}
              />
            )}
          />
        </Box>

        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, mt: 2 }}>
          <Controller
            name="email"
            control={control}
            rules={{
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Invalid email address",
              },
            }}
            render={({ field }) => (
              <TextField
                sx={{ backgroundColor: "white" }}
                {...field}
                value={field.value || ""} // Ensure the value is always a string
                label="Email"
                fullWidth
                error={!!errors.email}
                helperText={errors.email?.message}
              />
            )}
          />

          <Controller
            name="phone"
            control={control}
            rules={{
              required: "Phone number is required",
              pattern: { value: /^\d{10}$/, message: "Invalid phone number" },
            }}
            render={({ field }) => (
              <TextField
                sx={{ backgroundColor: "white" }}
                {...field}
                value={field.value || ""} // Ensure the value is always a string
                label="Phone Number"
                fullWidth
                error={!!errors.phone}
                helperText={errors.phone?.message}
              />
            )}
          />

          <Controller
            name="password"
            control={control}
            rules={{
              required: "Password is required",
              minLength: { value: 6, message: "Min 6 characters" },
              maxLength: { value: 20, message: "Max 20 characters" },
            }}
            render={({ field }) => (
              <TextField
                sx={{ backgroundColor: "white" }}
                {...field}
                value={field.value || ""} // Ensure the value is always a string
                label="Password"
                type={showPassword ? "text" : "password"}
                fullWidth
                error={!!errors.password}
                helperText={errors.password?.message}
                InputProps={{
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
              />
            )}
          />
          <Controller
            name="confirm_password"
            control={control}
            rules={{
              required: "Confirm your password",
              minLength: { value: 6, message: "Min 6 characters" },
              maxLength: { value: 20, message: "Max 20 characters" },
              validate: (value) =>
                value === password || "Passwords do not match",
            }}
            render={({ field }) => (
              <TextField
                sx={{ backgroundColor: "white" }}
                {...field}
                value={field.value || ""} // Ensure the value is always a string
                label="Confirm Password"
                type={showConfirmPassword ? "text" : "password"}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowConfirmPassword((show) => !show)}
                        edge="end"
                        aria-label="toggle password visibility"
                      >
                        {showConfirmPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                fullWidth
                error={!!errors.confirm_password}
                helperText={errors.confirm_password?.message}
              />
            )}
          />
          <Controller
            name="image"
            control={control}
            rules={{ required: "Image is required" }}
            render={({ field }) => (
              <div style={{ width: "100%" }}>
                <Input
                  sx={{ display: "none", width: "100%" }}
                  id="profile-picture"
                  type="file"
                  inputProps={{ accept: "image/png,  image/jpeg , image/jpg" }}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    const file = event.target.files?.[0];

                    if (file) {
                      setProfilePicture(URL.createObjectURL(file));
                      field.onChange(URL.createObjectURL(file));
                    }
                  }}
                />
                <label
                  htmlFor="profile-picture"
                  className="text-#E9213F w-full"
                >
                  <Button
                    variant="outlined"
                    component="span"
                    startIcon={<CameraAlt />}
                    fullWidth
                    sx={{ border: "1px solid #A7BF00", color: "#A7BF00" }}
                  >
                    Upload Profile Picture
                  </Button>
                </label>
                {errors.image && (
                  <div style={{ color: "#D53838", paddingTop: "5px" }}>
                    {errors.image.message}
                  </div>
                )}
              </div>
            )}
          />
        </Box>
      </Box>
    </>
  );
};

export default PersonalInformation;
