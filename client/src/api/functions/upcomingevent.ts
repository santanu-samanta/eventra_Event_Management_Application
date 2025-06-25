import { Event } from "@/types";
import { axiosInstance } from "../axiosInstance/axiosInstance";
import { endPoints } from "../endPoints/endPoints";

export const upcomingEvent = async (): Promise<Event[]> => {
  const { data } = await axiosInstance.get(
    endPoints.upcomingevent.upcomingevent
  );
  return data.data as Event[];
};
