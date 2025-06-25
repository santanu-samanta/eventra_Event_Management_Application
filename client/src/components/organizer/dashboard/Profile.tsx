"use client";

import { RootState } from "@/store/store";
import { Event } from "@/types";
import { Card, CardContent, Typography, Box, Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import djs from "dayjs";
const Profile = ({ data }: { data: Event[] }) => {
  const { user } = useSelector((state: RootState) => state.auth);
  const totalEvents = data.filter((item) => !item.isDeleted).length;
  const converttoupcoming = data?.filter((event) => {
    const eventDateTime = djs(`${event.date}`);
    // Only include events that are not deleted and are in the future
    return !event.isDeleted && eventDateTime.isAfter(djs());
  });

  return (
    <>
      <Card
        sx={{
          width: {
            xs: "100%",
            sm: "100%",
            md: "100%",
            lg: "250px",
            xl: "250px",
          },
          borderRadius: 3,
          backgroundColor: "#FCFFEB",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          p: 2,
          textAlign: "center",
          border: "1px solid #333A02",
        }}
      >
        <CardContent>
          <Box
            sx={{
              borderRadius: 2,
              p: 1,
              display: "flex",
              justifyContent: "center",
              mb: 2,
            }}
          >
            <Avatar
              src={`${process.env.NEXT_PUBLIC_BASE_URL}/${user?.image}`}
              alt={""}
              sx={{ width: 100, height: 100 }}
            />
          </Box>
          <Typography fontWeight="bold">
            Name -{" "}
           {user?.company_name ?? "Organizer"}
          </Typography>

          <Box
            sx={{
              backgroundColor: "#e0ffe0",
              borderRadius: 2,
              mt: 3,
              p: 2,
            }}
          >
            <Typography variant="body2" fontWeight="bold">
              Total Events
            </Typography>
            <Typography variant="body2">Created - {totalEvents}</Typography>
          </Box>

          <Box
            sx={{
              backgroundColor: "#ffe6ea",
              borderRadius: 2,
              mt: 2,
              p: 2,
            }}
          >
            <Typography variant="body2" fontWeight="bold">
              Upcoming
            </Typography>
            <Typography variant="body2">
              Events - {converttoupcoming?.length}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </>
  );
};

export default Profile;
