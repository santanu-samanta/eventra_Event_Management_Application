"use client";

import * as React from "react";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

const Calender = ({ getdate }: { getdate: string | undefined }) => {
  // Convert getdate to a dayjs object
  const selectedDate = getdate ? dayjs(getdate) : dayjs();

  return (
    <>
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
    </>
  );
};

export default Calender;
