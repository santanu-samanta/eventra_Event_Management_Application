import { axiosInstance } from "../../axiosInstance/axiosInstance";
import { endPoints } from "../../endPoints/endPoints";

export const bookticket = async (data: {
  event_id: string;
  noOfTicketsBought: number;
}) => {
  const { data: response } = await axiosInstance.post(
    endPoints.user.bookticket,
    data,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response;
};
