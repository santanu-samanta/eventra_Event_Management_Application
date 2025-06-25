import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";

const Loader = () => {
  return (
    <>
      <Stack
        sx={{
          color: "grey.500",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "#2F3601DB",
          
        }}
        spacing={2}
        direction="row"
      >
        <CircularProgress sx={{ fontSize: "150px", color: "#BBD616" }} />
        <h2 style={{ color: "#BBD616", fontSize: "25px" }}>Loading......</h2>
      </Stack>
    </>
  );
};

export default Loader;
