"use client";

import { RootState } from "@/store/store";
import { Typography, Box, Card, Avatar, Grid } from "@mui/material";
import Image from "next/image";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { useGetUserTicketList } from "@/hooks/react-query/query-hooks/attendeeHooks";
import { UserTicket } from "@/types";
const Dashboard = () => {
  const { data } = useGetUserTicketList();
  const filterCancelled = data?.filter(
    (item: UserTicket) => item.isCancelled === false
  );
  const currentData = filterCancelled?.map((item) => item)[0];
  const getdate = filterCancelled?.map(
    (item: UserTicket) => item?.event_info?.event_date
  )[0];

  const { user } = useSelector((state: RootState) => state.auth);
  const selectedDate = getdate ? dayjs(getdate) : dayjs();

  return (
    <>
      <Box sx={{ flexGrow: 1, mb: { xl: 0, lg: 0, md: 4, sm: 4, xs: 4 } }}>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 2,
            justifyContent: "center",
          }}
        >
          {/* Greeting + Calendar */}
          <Box
            sx={{
              width: {
                xl: "55%",
                lg: "55%",
                md: "100%",
                sm: "100%",
                xs: "100%",
              },
            }}
          >
            {/* Greeting */}
            <Card
              sx={{
                width: {
                  xl: "90%",
                  lg: "90%",
                  md: "100%",
                  sm: "100%",
                  xs: "100%",
                }, // Adjust this value as needed
                p: 2,
                mb: 3,
                display: "flex",
                justifyContent: "space-between",
                backgroundColor: "#FCFFEB",
                borderRadius: "12px",
                border: "1px solid black",
              }}
            >
              <Box>
                <Typography variant="h6">
                  Hello, {user?.first_name} {user?.last_name}
                </Typography>
              </Box>
              <Image
                width={100}
                height={100}
                src="/Hello.png"
                alt="Hello"
                style={{ height: 60 }}
              />
            </Card>

            {/* Calendar */}
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer
                components={["DateCalendar", "DateCalendar"]}
                sx={{ width: "100%" }}
              >
                <DemoItem sx={{ width: "100%" }}>
                  <DateCalendar
                    value={selectedDate} // Set the selected date
                    sx={{ width: "100%" }}
                  />
                </DemoItem>
              </DemoContainer>
            </LocalizationProvider>
          </Box>

          {/* Profile */}
          <Box
            sx={{
              backgroundColor: "#FCFFEB",
              borderRadius: "20px",
              padding: "20px",
              minHeight: "100%",
              maxWidth: {
                xl: "100%",
                lg: "100%",
                md: "100%",
                sm: "100%",
                xs: "100%",
              },
              textAlign: "center",
              border: "1px solid #333A02",
              fontFamily: "Inter, sans-serif",
              marginTop: { xs: 2, md: 0 },
            }}
          >
            <Avatar
              src="/Mask group (15).png"
              alt="User Image"
              sx={{
                width: "100px",
                height: "100px",
                margin: "25px auto 16px",
              }}
            />
            <Typography variant="h6" sx={{ my: 3 }}>
              Name - {user?.first_name} {user?.last_name}
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Age - {user?.dob ? dayjs().diff(dayjs(user.dob), "year") : ""}
            </Typography>

            <Grid container spacing={1} sx={{ mb: 4 }}>
              <Grid item xs={6}>
                <Box
                  sx={{
                    backgroundColor: "#EAFFFD",
                    border: "1px solid #0074A2",
                    borderRadius: "4px",
                    textAlign: "center",
                    padding: "10px",
                    height: "106px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                    {getdate ? dayjs(getdate).format("DD") : ""} th
                  </Typography>
                  <Typography sx={{ color: "#3A3A00" }}>
                    {getdate ? dayjs(getdate).format("MMMM, YYYY") : ""}
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box
                  sx={{
                    backgroundColor: "#E8FFD9",
                    borderRadius: "4px",
                    textAlign: "center",
                    padding: "10px",
                    height: "106px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="body1" sx={{ fontSize: "2rem" }}>
                    🎟️
                  </Typography>
                  <Typography sx={{ color: "#3A3A00" }}>
                    {currentData?.noOfTicketsBought} Person
                  </Typography>
                </Box>
              </Grid>
            </Grid>

            <Box
              sx={{
                backgroundColor: "#FFEEEE",
                padding: "20px",
              }}
            >
              <Typography sx={{ mb: 1 }}></Typography>
              <Typography>
                Venue: {currentData?.event_info.event_location.venue}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Dashboard;
