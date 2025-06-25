"use client";

import Wrapper from "@/components/attendee/home/Wrapper";
import { useGetallEvent } from "@/hooks/react-query/query-hooks/organizerHooks";

import { useGetArtistImageAndName } from "@/hooks/react-query/query-hooks/getartistimageandname";
import Loader from "@/components/Loader/Loader";
export default function Home() {
  const { data, isPending } = useGetallEvent();
  const { data: data2, isPending: isPending2 } = useGetArtistImageAndName();

  if (isPending || isPending2) {
    return <Loader />;
  }

  if (!data || !data2) {
    return null;
  }
  return (
    <>
      <Wrapper data={data} data2={data2} />
    </>
  );
}
