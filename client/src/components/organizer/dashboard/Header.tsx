"use client";

import { RootState } from "@/store/store";
import { Card, Typography, Box, Avatar } from "@mui/material";
import { useSelector } from "react-redux";

const Header = () => {
  const { user } = useSelector((state: RootState) => state.auth);

  return (
    <>
      <Card
        sx={{
          p: 2,
          mb: 3,
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "#FCFFEB",
          borderRadius: "12px",
          border: "1px solid #333A02",
        }}
      >
        <Box>
          <Typography variant="h6">
            Hello, {user?.company_name ?? "Organizer"}
          </Typography>
          <Typography color="text.secondary" sx={{ fontSize: 13 }}>
            {user?.company_info}
          </Typography>
        </Box>
        <Avatar
          variant="rounded"
          src="/Hello.png" // Use the image from the public directory
          alt="Greeting image"
          sx={{ width: 80, height: 80 }}
        />
      </Card>
    </>
  );
};

export default Header;
