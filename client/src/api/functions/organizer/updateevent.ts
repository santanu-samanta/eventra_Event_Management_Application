import { axiosInstance } from "../../axiosInstance/axiosInstance";
import { endPoints } from "../../endPoints/endPoints";

export const updateevent = async ({
  data,
  id,
}: {
  data: FormData;
  id: string;
}) => {
  const { data: response } = await axiosInstance.put(
    `${endPoints.event.edit}/${id}`,
    data,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response;
};
