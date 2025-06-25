import { useQuery } from "@tanstack/react-query";

import { upcomingEvent } from "@/api/functions/upcomingevent";
import { EVENT } from "../query-keys/querykeys";

export const useUpcomingEvent = () => {
  return useQuery({
    queryKey: [EVENT],
    queryFn: upcomingEvent,
  });
};
