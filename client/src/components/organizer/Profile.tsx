"use client";

import { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  IconButton,
  TextField,
  Stack,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { useForm, Controller } from "react-hook-form";
import { useProfileUpdate } from "@/hooks/react-query/query-hooks/organizerHooks";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { getProfileImage } from "@/api/axiosInstance/axiosInstance";

interface ProfileForm {
  company_name: string;
  email: string;
  phone: string;
  dob: string;
  company_info: string;
  image: File | null;
}

const Profile = () => {
  const [editMode, setEditMode] = useState(false);
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);
  const { mutate, isPending } = useProfileUpdate();
  const { user } = useSelector((state: RootState) => state.auth);
  const {
    control,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<ProfileForm>({
    defaultValues: {
      company_name: user?.company_name,
      email: user?.email,
      phone: user?.phone,
      company_info: user?.company_info || "company_info",
      image: null,
    },
  });

  const toggleEdit = () => {
    setEditMode(!editMode);
    if (!editMode) {
      reset(); // Reset form values if canceling edit
    }
  };

  const handleAvatarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setValue("image", file); // Set the selected file in the form state
      setAvatarPreview(URL.createObjectURL(file)); // Create a preview URL for the avatar
    }
  };

  const onSubmit = (data: ProfileForm) => {
    const formdata = new FormData();
    formdata.append("company_name", data.company_name);
    formdata.append("email", data.email);
    formdata.append("phone", data.phone);
    formdata.append("company_info", data.company_info);
    formdata.append("image", data.image as File);
    mutate(formdata);
    if (!isPending) {
      toggleEdit();
    }
  };

  return (
    <Box
      sx={{
        bgcolor: "#FCFFEB",
        py: 6,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: { xs: "100%", sm: "100%", md: "100%", lg: "67%", xl: "67%" },
        margin: "0 auto",
        height: "100%",
      }}
    >
      <Box sx={{ position: "relative", mb: 4 }}>
        <Avatar
          src={avatarPreview || getProfileImage(user?.image)}
          sx={{
            width: 100,
            height: 100,
            mx: "auto",
            bgcolor: "green",
            cursor: "pointer",
          }}
          onClick={() =>
            editMode && document.getElementById("avatar-upload")?.click()
          } // Trigger file input on click
        />
        <input
          id="avatar-upload"
          type="file"
          accept="image/png,  image/jpeg , image/jpg"
          style={{ display: "none" }}
          onChange={handleAvatarChange}
        />
        <IconButton
          size="small"
          sx={{
            position: "absolute",
            bottom: 0,
            right: "calc(50% - 15px)",
            bgcolor: "#fff",
            boxShadow: 1,
          }}
          onClick={() =>
            editMode && document.getElementById("avatar-upload")?.click()
          } // Trigger file input on click
        >
          <CameraAltIcon fontSize="small" />
        </IconButton>
      </Box>

      <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
        <Stack spacing={6} width="100%">
          {[
            { label: "company_name", name: "company_name" },
            { label: "Email ID", name: "email" },
            { label: "Ph.no.", name: "phone" },
            { label: "company_info", name: "company_info", multiline: true },
          ].map((field) => (
            <Controller
              key={field.name}
              name={field.name as keyof ProfileForm}
              control={control}
              rules={{
                required: `${field.label} is required`,
                ...(field.name === "email" && {
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "Invalid email address",
                  },
                }),
                ...(field.name === "phone" && {
                  pattern: {
                    value: /^\d{10}$/,
                    message: "Invalid phone number",
                  },
                }),
              }}
              render={({ field: controllerField }) => (
                <TextField
                  {...controllerField}
                  label={field.label}
                  fullWidth
                  variant="outlined"
                  size="small"
                  multiline={field.multiline}
                  InputProps={{
                    readOnly: !editMode,
                    sx: {
                      bgcolor: "#FAFFED",
                      borderRadius: 2,
                      "& fieldset": { borderColor: "#d2e57f" },
                      height: `${field.name === "company_info" ? "100px" : ""}`,
                    },
                  }}
                  error={!!errors[field.name as keyof ProfileForm]}
                  helperText={
                    errors[field.name as keyof ProfileForm]?.message as string
                  }
                />
              )}
            />
          ))}
        </Stack>

        <Box mt={4} width="100%" display="flex" justifyContent="space-between">
          {editMode ? (
            <Button
              type="submit"
              variant="contained"
              sx={{
                bgcolor: "#a7df4f",
                color: "#000",
                px: 4,
                fontWeight: "bold",
                "&:hover": { bgcolor: "#97cc44" },
              }}
              disabled={isPending}
            >
              Save
            </Button>
          ) : (
            <Button
              variant="contained"
              sx={{
                bgcolor: "#a7df4f",
                color: "#000",
                px: 4,
                fontWeight: "bold",
                "&:hover": { bgcolor: "#97cc44" },
              }}
              disabled={!isPending}
            >
              Save
            </Button>
          )}

          <Button
            type="button"
            variant="contained"
            sx={{
              bgcolor: "#ABE657",
              color: "#333A02",
              px: 4,
              fontWeight: "bold",
              "&:hover": { bgcolor: "#97cc44" },
            }}
            onClick={toggleEdit}
            endIcon={<EditIcon />}
          >
            {editMode ? "Cancel" : "Edit"}
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default Profile;
