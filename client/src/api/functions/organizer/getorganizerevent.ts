import { axiosInstance } from "../../axiosInstance/axiosInstance";
import { endPoints } from "../../endPoints/endPoints";
import { Event } from "../../../types";
export const getorganizerevent = async (): Promise<Event[]> => {
  const { data: response } = await axiosInstance.get(
    endPoints.event.getorganizerevent
  );
  return response.data as Event[];
};
