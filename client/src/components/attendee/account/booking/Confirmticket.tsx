"use client";

import React from "react";
import {
  Box,
  Grid,
  Typography,
  Button,
  Card,
  CardContent,
} from "@mui/material";
import Image from "next/image";
import { useGetUserTicketList } from "@/hooks/react-query/query-hooks/attendeeHooks";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
import { UserTicket } from "@/types";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Link from "next/link";

const Confirmticket = () => {
  const { data: ticketList } = useGetUserTicketList();
  const filterCancelled = ticketList?.filter(
    (item: UserTicket) => item.isCancelled === false
  );

  const currentData = ticketList?.filter(
    (item) => item.isCancelled === false
  )[0];
  const selectedDate = currentData
    ? dayjs(currentData.event_info.event_date)
    : dayjs();
  const { user } = useSelector((state: RootState) => state.auth);
  const getdate = filterCancelled?.map(
    (item: UserTicket) => item?.event_info?.event_date
  )[0];
console.log("getdate", filterCancelled);
  // const completedEvent = getdate ? dayjs().isAfter(dayjs(getdate)) : true;

  return (
    <>
      <Grid>
        <Grid
          item
          md={10}
          sx={{ p: 3 }}
          width={{ xl: "65%", lg: "65%", md: "100%", sm: "100%", xs: "100%" }}
          margin={"auto"}
        >
          {/* Greeting Card */}

          <Card
            sx={{
              display: "flex",
              alignItems: "center",
              p: "15px 25px",
              mb: "25px",
              boxShadow: 3,
              width: "100%",
              backgroundColor: "#FCFFEB",
              borderRadius: "12px",
              border: "1px solid #333A02",
              fontFamily: '"Inter", sans-serif',
            }}
          >
            <Grid
              container
              spacing={2}
              alignItems="center"
              width={"100%"}
              justifyContent={"space-between"}
            >
              <Grid item>
                <Image width={60} height={60} src="/profile3.png" alt="user" />
              </Grid>

              <Grid item xs>
                <Typography
                  fontWeight="bold"
                  sx={{ fontFamily: '"Inter", sans-serif' }}
                >
                  Name - {user?.first_name} {user?.last_name}
                </Typography>
                <Typography
                  fontWeight={500}
                  sx={{ fontFamily: '"Inter", sans-serif' }}
                >
                  Age - {user?.dob ? dayjs().diff(dayjs(user.dob), "year") : ""}
                </Typography>
              </Grid>

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
                    fontFamily: '"Inter", sans-serif',
                  }}
                >
                  <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                    {getdate ? dayjs(getdate).format("DD") : ""} th
                  </Typography>
                  <Typography sx={{ color: "#3A3A00" }}>
                    {" "}
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
                    fontFamily: '"Inter", sans-serif',
                  }}
                >
                  <Typography variant="body1" sx={{ fontSize: "2rem" }}>
                    🎟️
                  </Typography>
                  <Typography sx={{ color: "#3A3A00" }}>
                    {" "}
                    {currentData?.noOfTicketsBought} Person
                  </Typography>
                </Box>
              </Grid>

              <Grid item xs={6}>
                <Box
                  sx={{
                    backgroundColor: "#FFEEEE",
                    padding: "20px",
                    borderRadius: "4px",
                    fontFamily: '"Inter", sans-serif',
                  }}
                >
                  <Typography>
                    {" "}
                    Venue: {currentData?.event_info.event_location.venue}
                  </Typography>
                  <Typography>
                    Time:{" "}
                    {currentData?.event_info.event_date
                      ? dayjs(currentData.event_info.event_date).format(
                          "DD MMMM YYYY, h:mm A"
                        )
                      : ""}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Card>

          {/* Event & Calendar */}
          <Grid container spacing={2} width={"100%"} justifyContent={"center"}>
            {/* Event Info */}
            <Grid item md={6} xs={12}>
              <Card
                sx={{
                  maxWidth: "520px",
                  width: "100%",
                  height: "100%",
                  backgroundColor: "#FCFFEB",
                  borderRadius: "12px",
                  padding: "30px",
                  marginBottom: "25px",
                  border: "1px solid #333A02",
                }}
                elevation={0}
              >
                <CardContent>
                  <Typography
                    align="center"
                    sx={{
                      fontWeight: "bold",
                      fontFamily: "Inter, sans-serif",
                      fontSize: "20px",
                      marginBottom: "8px",
                    }}
                  >
                    {currentData?.event_info.event_location.venue}{" "}
                    {currentData?.event_info.event_date
                      ? dayjs(currentData.event_info.event_date).format("YYYY")
                      : ""}
                  </Typography>
                  <Typography
                    align="center"
                    variant="h6"
                    sx={{
                      fontFamily: "Inter, sans-serif",
                      marginBottom: "16px",
                    }}
                  >
                    {currentData?.event_info.event_name}{" "}
                    {currentData?.event_info.event_date
                      ? dayjs(currentData.event_info.event_date).format("YYYY")
                      : ""}
                  </Typography>
                  <Typography
                    align="center"
                    sx={{
                      color: "#6c757d",
                      fontFamily: "Inter, sans-serif",
                      fontSize: "14px",
                      marginBottom: "20px",
                      display: "flex",
                    }}
                  >
                    <Image
                      width={20}
                      height={20}
                      src="/eventicon.png"
                      alt=""
                      style={{ verticalAlign: "middle", marginRight: 6 }}
                    />
                    {currentData?.event_info.event_date
                      ? dayjs(currentData.event_info.event_date).format(
                          "DD MMMM YYYY, h:mm A"
                        )
                      : ""}
                  </Typography>
                  <Typography
                    align="center"
                    sx={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "14px",
                      marginBottom: "20px",
                      display: "flex",
                    }}
                  >
                    <Image
                      width={20}
                      height={20}
                      src="/location.png"
                      alt=""
                      style={{ verticalAlign: "middle", marginRight: 6 }}
                    />
                    Eco Park
                  </Typography>
                  <Typography
                    align="center"
                    sx={{
                      color: "#6DB704",
                      fontWeight: 500,
                      fontFamily: "Inter, sans-serif",
                      fontSize: "15px",
                    }}
                  >
                    Your concert ticket has been confirmed
                  </Typography>
                  <Box textAlign="center" mt={2}>
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "#FA3030",
                        maxWidth: "100px",
                        width: "100%",
                        padding: "0 8px",
                        borderRadius: "10px",
                        textTransform: "none",
                        fontFamily: "Inter, sans-serif",
                        fontWeight: 500,
                        fontSize: "14px",
                        "&:hover": {
                          backgroundColor: "#4E8204",
                        },
                      }}
                    >
                      <Link
                        href={`/attendee/account/conform-cancel-ticket/${currentData?._id}`}
                      >
                        Cancel
                      </Link>
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            {/* Calendar */}
            <Grid item md={6} xs={12}>
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
            </Grid>
          </Grid>

          {/* Completed Events */}
          {/* <form onSubmit={handleSubmit(onSubmit)}>
          
          </form> */}

          {filterCancelled?.map((ticket) => (
            <Card
              key={ticket._id}
              sx={{
                width: "100%",
                backgroundColor: "#FCFFEB",
                borderRadius: 2,
                padding: 3,
                marginBottom: 3,
                border: "1px solid #333A02",
                mt: 3,
              }}
            >
              <Grid
                container
                justifyContent="space-between"
                alignItems="flex-start"
              >
                <Grid item>
                  <Typography sx={{ color: "#3E3F34", fontWeight: "bold" }}>
                    Event {ticket.event_info.event_name}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{ color: "#3E3F34", fontWeight: "bold" }}
                  >
                    Event Title {ticket.event_info.event_name}
                  </Typography>
                </Grid>
                {(() => {
                  const eventDate = dayjs(ticket.event_info.event_date);
                  const today = dayjs().startOf("day");
                  if (eventDate.isBefore(today, "day")) {
                    return (
                      <Typography sx={{ color: "#4E8204", fontWeight: "bold" }}>
                        Completed
                      </Typography>
                    );
                  } else if (eventDate.isSame(today, "day")) {
                    return (
                      <Typography sx={{ color: "#1976d2", fontWeight: "bold" }}>
                        Live
                      </Typography>
                    );
                  } else {
                    return (
                      <Typography sx={{ color: "#FFA500", fontWeight: "bold" }}>
                        Upcoming
                      </Typography>
                    );
                  }
                })()}
              </Grid>

              <Typography
                sx={{
                  color: "#3E3F34",
                  mt: 2,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Image
                  width={20}
                  height={20}
                  src="/eventicon.png"
                  alt=""
                  style={{ marginRight: 8 }}
                />
                {dayjs(ticket.event_info.event_date).format(
                  "DD MMMM YYYY, h:mm A"
                )}
              </Typography>
              <Typography
                sx={{
                  color: "#3E3F34",
                  mb: 2,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Image
                  width={20}
                  height={20}
                  src="/location.png"
                  alt=""
                  style={{ marginRight: 8 }}
                />
                {ticket.event_info.event_location.city}
              </Typography>

              {/* Feedback Form */}
              <Box sx={{ display: "flex", gap: 3 }}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#6DB704",
                    maxWidth: "200px",
                    width: "100%",
                    padding: "0 8px",
                    borderRadius: "10px",
                    textTransform: "none",
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 500,
                    fontSize: "14px",
                    "&:hover": {
                      backgroundColor: "#4E8204",
                    },
                  }}
                  disabled={
                    dayjs().isAfter(dayjs(ticket.event_info.event_date))
                      ? false
                      : true
                  }
                >
                  <Link
                    href={`/attendee/account/singel-event-data/${ticket._id}/${ticket.event_id}`}
                  >
                    Give Feedback
                  </Link>
                </Button>

                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#FA3030",
                    maxWidth: "100px",
                    width: "100%",
                    padding: "0 8px",
                    borderRadius: "10px",
                    textTransform: "none",
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 500,
                    fontSize: "14px",
                    "&:hover": {
                      backgroundColor: "#4E8204",
                    },
                  }}
                  disabled={
                    dayjs().isAfter(dayjs(ticket.event_info.event_date))
                      ? true
                      : false
                  }
                >
                  <Link
                    href={`/attendee/account/conform-cancel-ticket/${ticket._id}`}
                  >
                    Cancel
                  </Link>
                </Button>
              </Box>
            </Card>
          ))}
        </Grid>
      </Grid>
    </>
  );
};

export default Confirmticket;
