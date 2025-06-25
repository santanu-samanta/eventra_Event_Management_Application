import { artistnameandimage } from "@/api/functions/artistnameandimage";
import { useQuery } from "@tanstack/react-query";
import { ARTIST } from "../query-keys/querykeys";

export const useGetArtistImageAndName = () => {
  return useQuery({
    queryKey: [ARTIST],
    queryFn: artistnameandimage,
    staleTime: 1200000,
  });
};
