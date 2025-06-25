import { useQuery } from "@tanstack/react-query";
import { ORGANIZER } from "../query-keys/querykeys";
import { allOrganierdata } from "@/api/functions/getorganizerdata";

export const useAllOrganizerEvent = () => {
  return useQuery({
    queryKey: [ORGANIZER],
    queryFn: allOrganierdata,
  });
};
