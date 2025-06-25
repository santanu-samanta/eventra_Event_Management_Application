"use client";

import Populerevent from "./Populerevent";
import Aboutus from "./Aboutus";
import Service from "./Service";
import Organizer from "./Organizer";
import Upcomingevent from "./Upcomingevent";
import Banner from "./Banner";
import Status from "./Status";
import Artistrole from "./Artistrole";
import TestimonialSection from "./TestimonialSection";
import { ArtistNameAndImage, Event } from "@/types";

const Wrapper = ({
  data,
  data2,
}: {
  data: Event[];
  data2: ArtistNameAndImage[];
}) => {
  return (
    <div>
      <Banner data2={data2} />
      <Populerevent data={data} />

      <div className=" xxl:w-[80%] xl:w-[80%] lg:w-[80%] md:w-[100%] sm:w-[100%] m-auto xxl:px-0 xl:px-0 lg:px-0 md:px-4 px-4">
        <Aboutus />
        <Service />
        <Artistrole />
        <Upcomingevent />
        <Organizer />
        <TestimonialSection />
        <Status />
      </div>
    </div>
  );
};

export default Wrapper;
