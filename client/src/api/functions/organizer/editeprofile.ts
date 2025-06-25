import { axiosInstance } from "../../axiosInstance/axiosInstance";
import { endPoints } from "../../endPoints/endPoints";

export const updateprofile = async (data: FormData) => {
  const { data: response } = await axiosInstance.post(
    endPoints.event.updateprofile,
    data,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return response;
};
