import { axiosInstance } from "../axiosInstance/axiosInstance";
import { endPoints } from "../endPoints/endPoints";

export const contact = async (data: {
  first_name: string;
  last_name: string;
  email: string;
  phone: number;
  servicetype: string;
  message: string;
}) => {
  const { data: response } = await axiosInstance.post(
    endPoints.contact.contact,
    data,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response;
};
