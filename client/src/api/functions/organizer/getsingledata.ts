import { axiosInstance } from "../../axiosInstance/axiosInstance";
import { endPoints } from "../../endPoints/endPoints";
import { Event } from "../../../types";
export const getsingeledata = async (id: string): Promise<Event> => {
  const { data: response } = await axiosInstance.get(
    `${endPoints.event.singeldata}/${id}`
  );

  return response.data as Event;
};
