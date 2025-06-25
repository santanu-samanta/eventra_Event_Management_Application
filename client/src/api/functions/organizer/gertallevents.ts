import { axiosInstance } from "../../axiosInstance/axiosInstance";
import { endPoints } from "../../endPoints/endPoints";
import { Event } from "../../../types";
export const getallevent = async (): Promise<Event[]> => {
  const { data: response } = await axiosInstance.get(endPoints.event.list);
  return response.data as Event[];
};
