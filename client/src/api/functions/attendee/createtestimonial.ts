import { axiosInstance } from "../../axiosInstance/axiosInstance";
import { endPoints } from "../../endPoints/endPoints";

export const createTestimonial = async ({
  commentdata,
  rating,
  id,
}: {
  commentdata: string;
  rating: number;
  id: string;
}) => {
  const { data: response } = await axiosInstance.post(
    `${endPoints.user.createtestimonial}/${id}`,
    {
      commentdata,
      rating,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response;
};
