"use client";

import { useDeleteAccount } from "@/hooks/react-query/query-hooks/organizerHooks";
import { RootState } from "@/store/store";
import { Button, TextField, Typography, Paper, Box } from "@mui/material";

import { useSelector } from "react-redux";

const Deleteaccount = () => {
  const { user } = useSelector((state: RootState) => state.auth);
  const { mutate } = useDeleteAccount();
  const handleDelete = () => {
    const data = {
      email: user?.email,
    };
    mutate(data);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
      }}
    >
      <Paper
        elevation={4}
        sx={{
          p: 4,
          borderRadius: 2,
          textAlign: "center",
          bgcolor: "#FCFFEB",
          boxShadow: "4px 4px 4px 4px 4px rgba(90, 110, 63, 0.47)",
        }}
      >
        <Typography variant="h5" fontWeight="bold" color="#3e4e00" mb={2}>
          Delete Account
        </Typography>

        <TextField
          fullWidth
          disabled
          value={user?.email}
          variant="outlined"
          sx={{ mb: 3, bgcolor: "white", textAlign: "center" }}
          style={{ textAlign: "center" }}
        />

        <Typography variant="body1" color="textPrimary" mb={3}>
          Are You Sure You Want to Delete Your Account? This Action Cannot be
          Undone.
        </Typography>

        <Button
          variant="contained"
          fullWidth
          onClick={handleDelete}
          sx={{
            py: 1.2,
            fontWeight: "bold",
            borderRadius: 2,
            backgroundColor: "#FF2D2D",
          }}
        >
          Delete Account
        </Button>
      </Paper>
    </Box>
  );
};

export default Deleteaccount;
