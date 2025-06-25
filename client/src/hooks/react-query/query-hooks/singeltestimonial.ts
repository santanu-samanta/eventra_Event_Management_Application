import { useQuery } from "@tanstack/react-query";
import { TESTIMONIAL } from "../query-keys/querykeys";
import { singeltestimonial } from "@/api/functions/singeltestimonial";

export const useSingelTestimonialEvent = (id: string) => {
  return useQuery({
    queryKey: [TESTIMONIAL, id],
    queryFn: () => singeltestimonial(id),
  });
};
