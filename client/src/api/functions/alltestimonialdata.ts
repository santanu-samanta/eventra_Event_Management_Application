import { Testimonial } from "@/types";
import { axiosInstance } from "../axiosInstance/axiosInstance";
import { endPoints } from "../endPoints/endPoints";

export const alltestimonialdata = async (): Promise<Testimonial[]> => {
  const { data } = await axiosInstance.get(endPoints.testimonial.testimonial);
  return data.data as Testimonial[];
};
