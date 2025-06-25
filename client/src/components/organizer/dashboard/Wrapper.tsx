"use client";

import React from "react";
import Header from "./Header";
import Profile from "./Profile";
import Createevent from "./Createevent";
import Recentmessage from "./Recentmessage";
import Upcomingevents from "./Upcomingevents";
import Completedevents from "./Completedevents";
import Dashboardtotaldata from "./Dashboardtotaldata";
import Myevent from "./Myevent";
import { useGetorganizerEvent } from "@/hooks/react-query/query-hooks/organizerHooks";
import CircularProgress from "@mui/material/CircularProgress";

const Wrapper = () => {
  const { data, isPending } = useGetorganizerEvent();

  if (isPending)
    return (
      <div className="w-full h-full flex justify-center items-center text-2xl gap-3">
        <CircularProgress sx={{ fontSize: "150px", color: "#BBD616" }} />
        Loading...
      </div>
    );

  if (!data) return null;

  return (
    <div className="w-full h-full bg-[#FCFFEB] mt-4">
      <div className="flex gap-8 flex-wrap  justify-end">
        <div className="2xl:w-[65%] xl:w-[65%] lg:w-[65%] md:w-[100%] w-[100%] flex flex-col items-end">
          <div className="2xl:w-[80%] xl:w-[80%] lg:w-[80%] md:w-[100%]">
            <Header />
            <Upcomingevents data={data} />
            <Completedevents data={data} />
            <Dashboardtotaldata data={data} />
            <Myevent data={data} />
          </div>
        </div>
        <div className="2xl:w-[30%] xl:w-[30%] lg:w-[30%] md:w-[100%] w-[100%] flex flex-col ">
          <Profile data={data} />
          <Createevent />
          <Recentmessage />
        </div>
      </div>
    </div>
  );
};

export default Wrapper;
