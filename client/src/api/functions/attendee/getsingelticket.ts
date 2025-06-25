import { UserTicket } from "@/types";
import { axiosInstance } from "../../axiosInstance/axiosInstance";
import { endPoints } from "../../endPoints/endPoints";

export const getsingelticket = async (id: string): Promise<UserTicket> => {
  const { data: response } = await axiosInstance.get(
    `${endPoints.user.singelticket}/${id}`
  );
  return response.data as UserTicket;
};
