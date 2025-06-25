"use client";

import { AuthFormValues } from "@/types";
import { Grid, TextField } from "@mui/material";
import React, { useEffect, useRef } from "react";
import { Controller, useFormContext } from "react-hook-form";

const VerifyCode = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext<AuthFormValues>();

  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number
  ) => {
    const value = e.target.value;

    if (value.length === 1 && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  return (
    <Grid
      container
      spacing={2}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 5,
      }}
    >
      {(["code1", "code2", "code3", "code4"] as (keyof AuthFormValues)[]).map(
        (name, index) => (
          <Grid item xs={3} key={name}>
            <Controller
              name={name}
              control={control}
              rules={{ required: "Required" }}
              render={({ field }) => (
                <TextField
                  {...field}
                  value={field.value || ""} // Ensure the value is always a string
                  type="text"
                  sx={{
                    width: "47px",
                    borderRadius: "6px",
                    border: "1px solid #8A8888",
                    background: "white",
                  }}
                  inputRef={(el) => (inputRefs.current[index] = el)}
                  inputProps={{ maxLength: 1 }}
                  onChange={(e) => {
                    field.onChange(e);
                    handleInputChange(e, index);
                  }}
                />
              )}
            />
            <h6 className="text-[#ff0000] pt-2 text-[14px]">
              {errors[name]?.message}
            </h6>
          </Grid>
        )
      )}
    </Grid>
  );
};

export default VerifyCode;
