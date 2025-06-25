"use client";

import {
  Box,
  Card,
  CardContent,
  Typography,
  Divider,
  Chip,
} from "@mui/material";

interface Message {
  name: string;
  message: string;
  date: string;
}

const Recentmessage = () => {
  const messages: Message[] = [
    {
      name: "Jhon Doe",
      message: "Looking Forward to the Conference",
      date: "April 28, 2025",
    },
    {
      name: "Michale Brown",
      message: "Hi, Any group discounts?",
      date: "April 29, 2025",
    },
  ];
  return (
    <>
      <Card
        sx={{
          borderRadius: 3,
          backgroundColor: "#f9fbe7",
          p: 2,
          width: {
            xs: "100%",
            sm: "100%",
            md: "100%",
            lg: "250px",
            xl: "250px",
          },
          boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
          mt: 4,
          border: "1px solid #333A02",
        }}
      >
        <CardContent sx={{ p: 0 }}>
          <Chip
            label="Recent Messages"
            sx={{ backgroundColor: "#e6f4ea", fontWeight: "bold", mb: 2 }}
          />

          {messages.map((msg, index) => (
            <Box key={index}>
              <Typography fontWeight="bold">{msg.name}</Typography>
              <Typography variant="body2" color="text.secondary">
                {msg.message}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                {msg.date}
              </Typography>
              {index < messages.length - 1 && <Divider sx={{ my: 2 }} />}
            </Box>
          ))}
        </CardContent>
      </Card>
    </>
  );
};

export default Recentmessage;
