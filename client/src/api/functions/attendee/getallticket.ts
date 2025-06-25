import { axiosInstance } from "../../axiosInstance/axiosInstance";
import { endPoints } from "../../endPoints/endPoints";

export const getallticket = async () => {
  const { data: response } = await axiosInstance.get(
    endPoints.user.getallticket
  );
  return response;
};
