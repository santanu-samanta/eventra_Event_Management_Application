import { axiosInstance } from "../../axiosInstance/axiosInstance";
import { endPoints } from "../../endPoints/endPoints";

export const deleteAccount = async (data: { email: string | undefined }) => {
  const { data: response } = await axiosInstance.post(
    endPoints.user.delectaccount,
    data,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response;
};
