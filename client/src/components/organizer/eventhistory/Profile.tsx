"use client";

import { getProfileImage } from "@/api/axiosInstance/axiosInstance";
import { RootState } from "@/store/store";
import {
  Avatar,
  Box,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { useSelector } from "react-redux";

const Profile = ({ totalevents }: { totalevents: number | undefined }) => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const { user } = useSelector((state: RootState) => state.auth);
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: isSmall ? "column" : "row",
          alignItems: "center",
          gap: 2,
          backgroundColor: "#fcffe8",
          border: "1px solid #2d4200",
          borderRadius: 3,
          p: 3,
          maxWidth: "100%",

          boxShadow: "0px 4px 10px rgba(0,0,0,0.06)",
        }}
      >
        <Box
          sx={{
          
            borderRadius: 2,
            p: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minWidth: 100,
            minHeight: 100,
          }}
        >
          <Avatar
            src={getProfileImage(user?.image)} // Replace with your actual image
            alt="Veer Mehta"
            sx={{ width: 80, height: 80 }}
          />
        </Box>

        <Box>
          <Typography fontWeight="bold">{user?.company_name}</Typography>
          <Typography color="text.secondary">
            Total Events Created - {totalevents}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Profile;
