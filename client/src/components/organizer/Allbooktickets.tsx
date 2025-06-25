"use client";

import { Typography, Box } from "@mui/material";
import EventIcon from "@mui/icons-material/Event";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { BookedTicket, Event } from "@/types";

import dayjs from "dayjs"; // Import dayjs for date formatting
import { useGetorganizerEvent } from "@/hooks/react-query/query-hooks/organizerHooks";
const Allbooktickets = () => {
  const { data } = useGetorganizerEvent();

  const filterisdelete = data?.filter((item: Event) => item.isDeleted == false);
  const getTicketData = filterisdelete
    ?.map((item: Event) => item.tickets_event)
    .flat();

  return (
    <>
      <div className="2xl:w-[67%] xl:w-[67%] lg:w-[67%] md:w-[100%] w-[100%] mx-auto">
        {getTicketData && getTicketData.length > 0 && (
          <>
            {[...getTicketData]?.reverse()?.map((item) => (
              <Box
                key={item?._id}
                sx={{
                  mt: 4,
                  width: "100%", // Ensures the card takes up full width of the screen
                  backgroundColor: "#FCFFEB",
                  borderRadius: 3,
                  p: 5,
                  boxShadow: 3,
                  mx: "auto", // Centers the card on the screen
                }}
              >
                <Typography variant="h5" sx={{ mb: 2 }}>
                  {item?.attendee_info?.name}
                </Typography>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  {item?.contact_info?.email}
                </Typography>
                <Typography sx={{ display: "flex", alignItems: "center" }}>
                  <EventIcon fontSize="small" sx={{ mr: 1 }} />
                  {dayjs(item?.sold_at).format("MMMM D, YYYY")}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mt: 2,
                    gap: { xl: 0, lg: 0, md: 0, sm: 4, xs: 4 },
                    flexWrap: "wrap",
                  }}
                >
                  <Typography sx={{ display: "flex", alignItems: "center" }}>
                    <LocationOnIcon fontSize="small" sx={{ mr: 1 }} />
                    {item?.event_info?.event_name}
                  </Typography>
                </Box>
              </Box>
            ))}
          </>
        )}
      </div>
    </>
  );
};

export default Allbooktickets;
