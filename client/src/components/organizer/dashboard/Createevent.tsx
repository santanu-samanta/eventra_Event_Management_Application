"use client";

import { Box, Typography } from "@mui/material";
import Link from "next/link";

const Createevent = () => {
  return (
    <>
      <Link href="/organizers/organizer-create-product">
        <Box
          sx={{
            backgroundColor: "#b2fefa",
            borderRadius: 3,
            mt: 4,
            width: { xs: "100%", sm: "100%", md: "100%", lg: "250px", xl: "250px" },
            height: 120,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
            transition: "transform 0.2s",
            "&:hover": {
              transform: "scale(1.03)",
            },
            border: "1px solid #333A02",
          }}
        >
          <Typography fontWeight="bold" color="text.primary">
            + Create New Event
          </Typography>
        </Box>
      </Link>
    </>
  );
};

export default Createevent;
