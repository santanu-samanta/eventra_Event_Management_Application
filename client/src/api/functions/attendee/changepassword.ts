import { axiosInstance } from "../../axiosInstance/axiosInstance";
import { endPoints } from "../../endPoints/endPoints";

export const changePassword = async (data: {
  current_password: string;
  password: string;
  confirm_password: string;
}) => {
  const { data: response } = await axiosInstance.post(
    endPoints.user.changepassword,
    data,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response;
};
