import { Organizer } from "@/types";
import { axiosInstance } from "../axiosInstance/axiosInstance";
import { endPoints } from "../endPoints/endPoints";

export const allOrganierdata = async (): Promise<Organizer[]> => {
  const { data } = await axiosInstance.get(
    endPoints.getorganizerdata.getorganizerdata
  );
  return data.data as Organizer[];
};
