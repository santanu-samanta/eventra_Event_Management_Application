import { useQuery } from "@tanstack/react-query";
import { TESTIMONIAL } from "../query-keys/querykeys";
import { alltestimonialdata } from "@/api/functions/alltestimonialdata";

export const useAllTestimonialEvent = () => {
  return useQuery({
    queryKey: [TESTIMONIAL],
    queryFn: alltestimonialdata,
  });
};
