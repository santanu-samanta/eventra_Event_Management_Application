import { SingelTestimonial } from "@/types";
import { axiosInstance } from "../axiosInstance/axiosInstance";
import { endPoints } from "../endPoints/endPoints";

export const singeltestimonial = async (
  id: string
): Promise<SingelTestimonial[]> => {
  const { data } = await axiosInstance.get(
    `${endPoints.singeltestimonial.singeltestimonial}/${id}`
  );
  return data.data as SingelTestimonial[];
};
