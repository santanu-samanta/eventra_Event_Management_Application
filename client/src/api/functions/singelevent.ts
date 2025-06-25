import { Event } from "@/types";
import { axiosInstance } from "../axiosInstance/axiosInstance";
import { endPoints } from "../endPoints/endPoints";

export const singelEvent = async (id: string): Promise<Event> => {
  const { data } = await axiosInstance.get(
    `${endPoints.singelevent.singelevent}/${id}`
  );
  return data.data as Event;
};
