import { axiosInstance } from "@/api/axiosInstance/axiosInstance";
import { endPoints } from "@/api/endPoints/endPoints";

export const deleteaccount = async (data: { email: string | undefined }) => {
  const { data: response } = await axiosInstance.post(
    endPoints.event.delectaccount,
    data,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return response;
};
