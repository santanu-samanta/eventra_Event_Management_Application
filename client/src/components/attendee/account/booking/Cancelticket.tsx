"use client";
import {
  Button,
  Container,
  Grid,
  Paper,
  Typography,
  Stack,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { useGetUserTicketList } from "@/hooks/react-query/query-hooks/attendeeHooks";
import { UserTicket } from "@/types";
import dayjs from "dayjs";

const EventCard = ({ item }: { item: UserTicket }) => {
  return (
    <Paper
      elevation={3}
      sx={{
        p: 2,
        borderRadius: 3,
        bgcolor: "#f9fde9",
        border: "1px solid #cdd8b0",
        boxShadow: "0px 4px 20px rgba(0,0,0,0.1)",
        width: "100%",
        my: 3,
      }}
    >
      {/* Top row: Event name, date, status */}
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent="space-between"
        alignItems={{ xs: "flex-start", sm: "center" }}
        spacing={1}
        alignContent={"center"}
      >
        <Typography variant="caption" color="textSecondary">
          {item.event_info.event_name}{" "}
          {item?.event_info.event_date
            ? dayjs(item.event_info.event_date).format("YYYY")
            : ""}
          <Typography variant="subtitle1" fontWeight="bold" mt={1}>
            {item.event_info.event_name}{" "}
            {item?.event_info.event_date
              ? dayjs(item.event_info.event_date).format("YYYY")
              : ""}
          </Typography>
          {/* Bottom row: Location */}
          <Stack direction="row" spacing={1} alignItems="center" mt={1}>
            <LocationOnIcon fontSize="small" color="success" />
            <Typography variant="body2">
              {item.event_info.event_location.city}
            </Typography>
          </Stack>
        </Typography>

        <Stack direction="row" spacing={1} alignItems="center">
          <CalendarMonthIcon fontSize="small" sx={{ color: "green" }} />
          <Typography variant="body2">
            {" "}
            {item?.event_info.event_date
              ? dayjs(item.event_info.event_date).format("DD MMMM YYYY, h:mm A")
              : ""}
          </Typography>
        </Stack>

        <Typography
          variant="body2"
          sx={{ color: "red", fontWeight: "bold", ml: { sm: 2 } }}
        >
          Cancelled
        </Typography>
      </Stack>

      {/* Sub-event name */}
    </Paper>
  );
};

interface FilterButtonProps {
  label: string;
}

const FilterButton = ({ label }: FilterButtonProps) => (
  <Button
    variant="outlined"
    sx={{
      borderRadius: 10,
      textTransform: "none",
      borderColor: "#333A02",
      color: "#333",
      bgcolor: "#f9fde9",
      px: 10,
      "&:hover": {
        borderColor: "#8d955f",
        bgcolor: "#eef6cc",
      },
      boxShadow: "0px 4px 30px rgba(0,0,0,0.1)",
    }}
  >
    {label}
  </Button>
);

const Cancelticket = () => {
  const { data: ticketList } = useGetUserTicketList();
  const filterCancelled = ticketList?.filter(
    (item: UserTicket) => item.isCancelled === true
  );

  return (
    <>
      <Container
        maxWidth="lg"
        sx={{ py: 5, bgcolor: "#f9fde9", minHeight: "100%" }}
      >
        {/* Filter Buttons */}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          mb={3}
          alignItems="center"
          justifyContent="space-between"
          display={{
            xl: "flex",
            lg: "flex",
            md: "none",
            xs: "flex",
            sm: "none",
          }}
        >
          <FilterButton label="Event Name" />
          <FilterButton label="Date" />
          <FilterButton label="Status" />
        </Stack>

        {/* Event Card */}
        <Grid container spacing={2} width={"100%"}>
          <Grid item xs={12} width={"100%"} sm={6} md={4}>
            {filterCancelled?.map((item: UserTicket) => (
              <EventCard item={item} key={item._id} />
            ))}
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Cancelticket;
