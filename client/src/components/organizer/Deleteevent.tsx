"use client";

import {
  Box,
  Button,
  Typography,
  Paper,
  TextField,
  Alert,
  Stack,
} from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PlaceIcon from "@mui/icons-material/Place";
import { useParams } from "next/navigation";
import {
  useDeleteEvent,
  useSingelEvent,
} from "@/hooks/react-query/query-hooks/organizerHooks";
import { useForm, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";

interface DeleteEventForm {
  eventName: string;
}

const Deleteevent = () => {
  const { id } = useParams<{ id: string }>();
  const { data } = useSingelEvent(id as string);
  const geteventname = data?.event_name;
  const { mutate } = useDeleteEvent();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DeleteEventForm>();

  const onSubmit: SubmitHandler<DeleteEventForm> = (formData) => {
    if (formData.eventName === geteventname) {
      mutate(id as string);
    } else {
      toast.error("Event name does not match. Please try again.");
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
        width: { xs: "100%", sm: "100%", md: "100%", lg: "67%", xl: "67%" },
        margin: "auto",
        height: "100%",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          p: 4,
          borderRadius: 4,
          bgcolor: "#FCFFEB",
          textAlign: "center",
        }}
      >
        <Box sx={{ width: { xs: "100%", sm: "100%", md: "100%", lg: "60%", xl: "60%" }, margin: "auto" }}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Delete Event
          </Typography>
          <Typography variant="body2" color="text.secondary" mb={3}>
            This action cannot be undone
          </Typography>

          <Box
            sx={{
              bgcolor: "#f0ffcf",
              p: 2,
              borderRadius: "14px",
              mb: 3,
              border: "1px solid #d0e38c",
            }}
          >
            <Typography fontSize="14px" fontWeight="bold">
              {data?.location.city}
            </Typography>
            <Typography fontSize="16px" fontWeight="bold" my={1}>
              {data?.artistname}
            </Typography>
            <Stack
              direction="row"
              spacing={1}
              alignItems="center"
              justifyContent="center"
            >
              <CalendarTodayIcon fontSize="small" />
              <Typography fontSize="14px">
                {data?.date} {data?.time}
              </Typography>
            </Stack>
            <Stack
              direction="row"
              spacing={1}
              alignItems="center"
              justifyContent="center"
              mt={1}
            >
              <PlaceIcon fontSize="small" />
              <Typography fontSize="14px">{data?.location.venue}</Typography>
            </Stack>
          </Box>

          <Alert
            severity="error"
            variant="outlined"
            sx={{
              mb: 3,
              bgcolor: "#ffeaea",
              border: "1px solid #f99",
              textAlign: "left",
              py: 4,
              borderRadius: "14px",
            }}
          >
            <strong>Warning</strong> — Deleting this event is{" "}
            <strong>PERMANENT</strong>. All Event data, attendees, and materials
            will be lost.
          </Alert>

          <form onSubmit={handleSubmit(onSubmit)}>
            <Typography fontSize="14px" mb={1}>
              Type this <span className="font-bold">{geteventname}</span> to
              confirm deletion
            </Typography>
            <TextField
              fullWidth
              size="small"
              sx={{
                bgcolor: "#FCFFEB",
                boxShadow: "4px 4px 4px 4px 4px #5A6E3F78",
                borderRadius: 1,
                mb: 4,
                mt: 2,
                "& fieldset": {
                  borderColor: "#ccc",
                },
              }}
              {...register("eventName", {
                required: "Event name is required",
                validate: (value) =>
                  value === geteventname || "Event name does not match",
              })}
              error={!!errors.eventName}
              helperText={errors.eventName?.message}
            />

            <Stack direction="row" justifyContent="center" spacing={2}>
              <Button
                variant="contained"
                sx={{
                  bgcolor: "#ABE657",
                  color: "#333A02",
                  fontWeight: "bold",
                  "&:hover": { bgcolor: "#97cc44" },
                }}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                variant="contained"
                sx={{
                  fontWeight: "bold",
                  backgroundColor: "#FF2D2D",
                  color: "#fff",
                }}
              >
                Delete
              </Button>
            </Stack>
          </form>
        </Box>
      </Paper>
    </Box>
  );
};

export default Deleteevent;
