"use client";

import { AuthFormValues } from "@/types";
import {
  Box,
  IconButton,
  InputAdornment,
  MenuItem,
  TextField,
} from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";
const PersonalInformation = () => {
  const {
    control,
    formState: { errors },
    watch,
  } = useFormContext<AuthFormValues>();
  const password = watch("password");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  return (
    <>
      <Box sx={{ height: "280px", overflowY: "scroll" }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", gap: 2 }}>
          <Controller
            name="first_name"
            control={control}
            rules={{ required: "First name is required" }}
            render={({ field }) => (
              <TextField
                sx={{ backgroundColor: "white" }}
                {...field}
                label="First Name"
                fullWidth
                error={!!errors.first_name}
                helperText={errors.first_name?.message}
                value={field.value || ""}
              />
            )}
          />
          <Controller
            name="last_name"
            control={control}
            rules={{ required: "Last name is required" }}
            render={({ field }) => (
              <TextField
                sx={{ backgroundColor: "white" }}
                {...field}
                label="Last Name"
                fullWidth
                error={!!errors.last_name}
                helperText={errors.last_name?.message}
                value={field.value || ""}
              />
            )}
          />
        </Box>

        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, mt: 2 }}>
          <Controller
            name="gender"
            control={control}
            rules={{ required: "Gender is required" }}
            render={({ field }) => (
              <TextField
                sx={{ backgroundColor: "white" }}
                {...field}
                select
                label="Gender"
                fullWidth
                error={!!errors.gender}
                helperText={errors.gender?.message}
                value={field.value || ""} // This will use the default value if provided
              >
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </TextField>
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
                label="Phone Number"
                fullWidth
                error={!!errors.phone}
                helperText={errors.phone?.message}
                value={field.value || ""}
              />
            )}
          />
          <Controller
            name="dob"
            control={control}
            rules={{
              required: "Date of Birth is required",
              validate: (value) => {
                const selectedDate = new Date(value);
                const today = new Date();
                return selectedDate <= today || "Date cannot be in the future";
              },
            }}
            render={({ field }) => (
              <TextField
                sx={{ backgroundColor: "white" }}
                {...field}
                type="date"
                label="Date of Birth"
                InputLabelProps={{ shrink: true }}
                fullWidth
                error={!!errors.dob}
                helperText={errors.dob?.message}
                inputProps={{
                  max: new Date().toISOString().split("T")[0], // Set max to today's date
                }}
                value={field.value || ""}
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            rules={{
              required: "Password is required",
              minLength: { value: 6, message: "Min 6 characters" },
            }}
            render={({ field }) => (
              <TextField
                sx={{ backgroundColor: "white" }}
                {...field}
                label="Password"
                type={showPassword ? "text" : "password"}
                fullWidth
                error={!!errors.password}
                helperText={errors.password?.message}
                value={field.value || ""}
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
              validate: (value) =>
                value === password || "Passwords do not match",
            }}
            render={({ field }) => (
              <TextField
                sx={{ backgroundColor: "white" }}
                {...field}
                label="Confirm Password"
                type={showConfirmPassword ? "text" : "password"}
                fullWidth
                error={!!errors.confirm_password}
                helperText={errors.confirm_password?.message}
                value={field.value || ""}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowConfirmPassword((show) => !show)}
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
        </Box>
      </Box>
    </>
  );
};

export default PersonalInformation;
