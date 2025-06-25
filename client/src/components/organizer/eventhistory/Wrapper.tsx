"use client";

import React from "react";
import Profile from "./Profile";
import Eventcards from "./Eventcards";
import { useGetorganizerEvent } from "@/hooks/react-query/query-hooks/organizerHooks";
import Allevents from "./Allevents";
import Calender from "./Calender";
import Image from "next/image";
const Wrapper = () => {
  const { data } = useGetorganizerEvent();
  const filterDeleted = data?.filter((item) => !item.isDeleted);
  const totalevents = filterDeleted?.length;
  const getdate = filterDeleted?.reverse()?.map((item) => item.date)[0];

  if (!data) return null;
  return (
    <div>
      <div className="flex gap-4 flex-wrap 2xl:w-[67%] xl:w-[67%] lg:w-[67%] md:w-[100%] w-[100%] mx-auto">
        <div className="2xl:w-[48%] xl:w-[48%] lg:w-[48%] md:w-[100%] w-[100%]">
          <div className="w-full">
            <Profile totalevents={totalevents} />
            <Eventcards data={data} />
          </div>
        </div>
        <div className="2xl:w-[48%] xl:w-[48%] lg:w-[48%] md:w-[100%] w-[100%]">
          <div className="w-full">
            <Calender getdate={getdate} />
            <Image
              src="/Mask group.png"
              width={500}
              height={500}
              alt="Picture of the author"
              objectFit="contain"
              className="2xl:block xl:block lg:block md:hidden hidden"
            />
          </div>
        </div>
      </div>
      <div className="2xl:w-[67%] xl:w-[67%] lg:w-[67%] md:w-[100%] w-[100%] mx-auto">
        <Allevents data={data} />
      </div>
    </div>
  );
};

export default Wrapper;
