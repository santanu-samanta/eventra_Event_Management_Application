"use client";

import {
  Avatar,
  Box,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

interface FieldProps {
  label: string;
  value: string;
}

const Field: FC<FieldProps> = ({ label, value }) => {
  return (
    <Box>
      <Typography variant="body2" sx={{ fontWeight: 500, mb: 0.5 }}>
        {label}
      </Typography>
      <TextField
        variant="filled"
        fullWidth
        size="small"
        value={value}
        InputProps={{
          readOnly: true,
          disableUnderline: true,
          sx: {
            bgcolor: "#f0f7b2",
            borderRadius: 2,
            px: 1.5,
            fontSize: 14,
            color: "#333",
          },
        }}
      />
    </Box>
  );
};

// Helper function to calculate age
const calculateAge = (dob: string): number => {
  const birthDate = new Date(dob);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }
  return age;
};

// Helper function to format date as DD.MM.YYYY
const formatDate = (dob: string): string => {
  const birthDate = new Date(dob);
  const day = String(birthDate.getDate()).padStart(2, "0");
  const month = String(birthDate.getMonth() + 1).padStart(2, "0"); // Months are 0-based
  const year = birthDate.getFullYear();
  return `${day}.${month}.${year}`;
};

const Profile: FC = () => {
  const { user } = useSelector((state: RootState) => state.auth);

  // Calculate the user's age
  const age = user?.dob ? calculateAge(user.dob) : "N/A";

  // Format the user's date of birth
  const formattedDob = user?.dob ? formatDate(user.dob) : "N/A";

  return (
    <>
      <Container
        maxWidth="lg"
        sx={{ py: 5, bgcolor: "#f9fde9", minHeight: "100%" }}
      >
        <Grid
          container
          spacing={3}
          alignItems="flex-start"
          justifyContent="center"
        >
          {/* Left Card */}
          <Grid
            item
            xs={12}
            sm={4}
            width={{ xl: "30%", lg: "30%", md: "100%", sm: "100%", xs: "100%" }}
          >
            <Paper
              elevation={6}
              sx={{
                p: 3,
                textAlign: "center",
                borderRadius: 2,
                bgcolor: "#f9fde9",
                boxShadow: "0px 4px 20px rgba(0,0,0,0.1)",
              }}
            >
              <Avatar
                sx={{ bgcolor: "#d2e88f", width: 70, height: 70, mx: "auto" }}
              >
                <PersonIcon sx={{ fontSize: 40, color: "#333" }} />
              </Avatar>
              <Typography
                variant="subtitle1"
                sx={{ mt: 2, fontWeight: "bold" }}
              >
                {user?.first_name} {user?.last_name}
              </Typography>
              <Typography variant="body2">Age - {age}</Typography>
            </Paper>
          </Grid>

          {/* Right Details */}
          <Grid
            item
            xs={12}
            sm={8}
            width={{ xl: "65%", lg: "65%", md: "100%", sm: "100%", xs: "100%" }}
          >
            <Paper
              elevation={6}
              sx={{
                p: 3,
                borderRadius: 2,
                bgcolor: "#f9fde9",
                boxShadow: "0px 4px 20px rgba(0,0,0,0.1)",
              }}
            >
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <Field
                  label="Full Name"
                  value={`${user?.first_name} ${user?.last_name}`}
                />
                <Field label="Email ID" value={user?.email || "N/A"} />
                <Field label="Gender" value={user?.gender || "N/A"} />
                <Field label="Ph.no." value={user?.phone || "N/A"} />
                <Field label="Date of Birth" value={formattedDob} />
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Profile;
