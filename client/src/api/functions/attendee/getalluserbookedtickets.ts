import { UserTicket } from "@/types";
import { axiosInstance } from "../../axiosInstance/axiosInstance";
import { endPoints } from "../../endPoints/endPoints";

export const getalluserbookedtickets = async (): Promise<UserTicket[]> => {
  const { data: response } = await axiosInstance.get(
    endPoints.user.getuserticketlist
  );
  return response.data as UserTicket[];
};
