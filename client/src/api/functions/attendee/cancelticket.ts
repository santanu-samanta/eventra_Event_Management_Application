import { axiosInstance } from "../../axiosInstance/axiosInstance";
import { endPoints } from "../../endPoints/endPoints";

export const cancelticket = async (id: string) => {
  const { data: response } = await axiosInstance.post(
    `${endPoints.user.cancelticket}/${id}`,

    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response;
};
