"use client";

import { AuthFormValues } from "@/types";
import {
  Checkbox,
  FormControlLabel,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import EmailIcon from "@mui/icons-material/Email";
const BasicInformation = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext<AuthFormValues>();
  return (
    <Controller
      name="email"
      control={control}
      rules={{
        required: "Email is required",
        pattern: {
          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          message: "Invalid email",
        },
      }}
      render={({ field }) => (
        <>
          <TextField
            sx={{ backgroundColor: "white" }}
            {...field}
            fullWidth
            placeholder="Enter your email"
            type="email"
            value={field.value || ""}
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon sx={{ color: "#A7BF00" }} />{" "}
                </InputAdornment>
              ),
            }}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
          <FormControlLabel
            control={<Checkbox />}
            label={
              <Typography sx={{ fontSize: "14px" }}>
                I've read and agree with Terms of Service & Our Privacy Policy
              </Typography>
            }
            sx={{ mt: 2 }}
          />
        </>
      )}
    />
  );
};

export default BasicInformation;
