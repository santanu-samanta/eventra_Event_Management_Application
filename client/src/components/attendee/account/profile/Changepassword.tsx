import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Paper,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useForm, SubmitHandler } from "react-hook-form";
import { useChangePassword } from "@/hooks/react-query/query-hooks/attendeeHooks";

// ...existing code...

const Changepassword: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ChangePasswordForm>();

  const newPassword = watch("password");
  const { mutate, isPending } = useChangePassword();

  // State for password visibility
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const onSubmit: SubmitHandler<ChangePasswordForm> = (data) => {
    mutate(data);
  };

  return (
    <>
      <Container
        maxWidth="sm"
        sx={{
          minHeight: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "#f9fde9",
        }}
      >
        <Paper
          elevation={6}
          sx={{
            p: 4,
            width: "100%",
            bgcolor: "#f9fde9",
            borderRadius: 2,
            boxShadow: "0px 4px 20px rgba(0,0,0,0.1)",
          }}
        >
          <Typography
            variant="h6"
            align="center"
            fontWeight="bold"
            gutterBottom
          >
            Change Password
          </Typography>
          <Box
            component="form"
            noValidate
            autoComplete="off"
            sx={{ display: "flex", flexDirection: "column", gap: 3, mt: 3 }}
            onSubmit={handleSubmit(onSubmit)}
          >
            {/* Current Password */}
            <TextField
              label="Current Password"
              type={showCurrent ? "text" : "password"}
              fullWidth
              variant="outlined"
              size="small"
              InputProps={{
                sx: { borderRadius: 2, bgcolor: "white" },
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowCurrent((show) => !show)}
                      edge="end"
                      aria-label="toggle current password visibility"
                    >
                      {showCurrent ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              {...register("current_password", {
                required: "Current Password is required",
              })}
              error={!!errors.current_password}
              helperText={errors.current_password?.message}
            />

            {/* New Password */}
            <TextField
              label="New Password"
              type={showNew ? "text" : "password"}
              fullWidth
              variant="outlined"
              size="small"
              InputProps={{
                sx: { borderRadius: 2, bgcolor: "white" },
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowNew((show) => !show)}
                      edge="end"
                      aria-label="toggle new password visibility"
                    >
                      {showNew ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              {...register("password", {
                required: "New Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters long",
                },
              })}
              error={!!errors.password}
              helperText={errors.password?.message}
            />

            {/* Confirm New Password */}
            <TextField
              label="Confirm New Password"
              type={showConfirm ? "text" : "password"}
              fullWidth
              variant="outlined"
              size="small"
              InputProps={{
                sx: { borderRadius: 2, bgcolor: "white" },
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowConfirm((show) => !show)}
                      edge="end"
                      aria-label="toggle confirm password visibility"
                    >
                      {showConfirm ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              {...register("confirm_password", {
                required: "Confirm New Password is required",
                validate: (value) =>
                  value === newPassword || "Passwords do not match",
              })}
              error={!!errors.confirm_password}
              helperText={errors.confirm_password?.message}
            />

            {/* Submit Button */}
            <Button
              type="submit"
              variant="contained"
              fullWidth
              disabled={isPending}
              sx={{
                mt: 2,
                bgcolor: "#9DDB4E",
                color: "#333A02",
                fontWeight: "bold",
                borderRadius: 2,
                "&:hover": { bgcolor: "#8BC34A" },
              }}
            >
              Change Password
            </Button>
          </Box>
        </Paper>
      </Container>
    </>
  );
};

export default Changepassword;
