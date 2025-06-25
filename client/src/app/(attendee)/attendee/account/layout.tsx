"use client";

import Sidebar from "@/components/attendee/account/Sidebar";
import { useContextApi } from "@/context/ContextApi";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  const { toggele } = useContextApi();
  return (
    <div>
      <div className="flex justify-between flex-wrap h-[90vh] overflow-y-auto 2xl:px-0  px-4">
        <div
          className={`2xl:w-[15%] xl:w-[15%] lg:w-[15%] md:w-[60%] w-[60%] fixed top-23 left-0 z-[9] 2xl:block xl:block lg:block ${
            !toggele && "hidden"
          }`}
        >
          <Sidebar />
        </div>

        <div className="w-[100%] bg-[#FCFFEB] mt-4 ">{children}</div>
      </div>
    </div>
  );
};

export default layout;
