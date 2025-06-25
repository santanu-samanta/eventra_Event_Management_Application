import { axiosInstance } from "../../axiosInstance/axiosInstance";
import { endPoints } from "../../endPoints/endPoints";

export const deleteevent = async (id: string) => {
  const { data: response } = await axiosInstance.get(
    `${endPoints.event.delete}/${id}`
  );
  return response;
};
