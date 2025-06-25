import { useQuery } from "@tanstack/react-query";

import { EVENT } from "../query-keys/querykeys";
import { singelEvent } from "@/api/functions/singelevent";

export const useSingleEvent = (id: string) => {
  return useQuery({
    queryKey: [EVENT,id],
    queryFn: () => singelEvent(id),
  });
};
