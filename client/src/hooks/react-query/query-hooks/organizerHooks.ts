import { createevent } from "@/api/functions/organizer/createEvent";
import { EVENT, AllEVENT } from "../query-keys/querykeys";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";
import { useGlobalHooks } from "@/hooks/globalhooks";
import { getallevent } from "@/api/functions/organizer/gertallevents";
import { deleteevent } from "@/api/functions/organizer/deleteevent";
import { updateevent } from "@/api/functions/organizer/updateevent";
import { updateprofile } from "@/api/functions/organizer/editeprofile";
import { getOrganizerDetails, logoutUser } from "@/store/auth/auth";
import { deleteaccount } from "@/api/functions/organizer/deleteaccount";
import Cookies from "js-cookie";
import { getsingeledata } from "@/api/functions/organizer/getsingledata";
import { getorganizerevent } from "@/api/functions/organizer/getorganizerevent";

export const useCreateEvent = () => {
  const { router, queryClient } = useGlobalHooks();
  return useMutation({
    mutationFn: createevent,
    mutationKey: [EVENT],
    onSuccess: (data) => {
      if (data?.message) {
        toast.success(data?.message);
        queryClient.invalidateQueries({
          queryKey: [EVENT],
        });
        router.push("/organizers/organizer-history");
      }
    },
    onError: (error) => {
      if (axios.isAxiosError(error)) {
        if (error?.response?.data?.error) {
          toast.error(error?.response?.data?.error);
        }
      }
    },
  });
};

export const useGetallEvent = () => {
  return useQuery({
    queryKey: [AllEVENT],
    queryFn: getallevent,
    staleTime: 1200000,
  });
};

export const useGetorganizerEvent = () => {
  return useQuery({
    queryKey: [EVENT],
    queryFn: getorganizerevent,
    staleTime: 1200000,
  });
};

export const useSingelEvent = (id: string) => {
  return useQuery({
    queryKey: [EVENT, id],
    queryFn: () => getsingeledata(id),
    staleTime: 300000,
  });
};

export const useUpdateEvent = () => {
  const { queryClient, router } = useGlobalHooks();
  return useMutation({
    mutationFn: updateevent,
    mutationKey: [EVENT],
    onSuccess: (data) => {
      console.log(data);
      if (data?.message) {
        toast.success(data?.message);
        queryClient.invalidateQueries({
          queryKey: [EVENT],
        });
        router.push("/organizers/organizer-history");
      }
    },

    onError: (error) => {
      console.log(error);
      if (axios.isAxiosError(error)) {
        if (error?.response?.data?.message?.type?.message) {
          toast.error(error?.response?.data?.message?.type?.message);
        }
      }
    },
  });
};

export const useDeleteEvent = () => {
  const { queryClient, router } = useGlobalHooks();
  return useMutation({
    mutationFn: deleteevent,
    mutationKey: [EVENT],
    onSuccess: (data) => {
      if (data?.message) {
        toast.success(data?.message);
        router.push("/organizers/organizer-history");
        queryClient.invalidateQueries({
          queryKey: [EVENT],
        });
      }
    },
    onError: (error) => {
      console.log(error);
      if (axios.isAxiosError(error)) {
        if (error?.response?.data?.message?.type?.message) {
          toast.error(error?.response?.data?.message?.type?.message);
        }
      }
    },
  });
};

export const useProfileUpdate = () => {
  const { dispatch } = useGlobalHooks();
  return useMutation({
    mutationFn: updateprofile,
    mutationKey: [EVENT],
    onSuccess: (data) => {
      if (data?.message) {
        toast.success(data?.message);
        dispatch(getOrganizerDetails());
      }
    },
    onError: (error) => {
      if (axios.isAxiosError(error)) {
        if (error?.response?.data?.message?.type?.message) {
          toast.error(error?.response?.data?.message?.type?.message);
        }
      }
    },
  });
};

export const useDeleteAccount = () => {
  const { dispatch, router } = useGlobalHooks();
  return useMutation({
    mutationFn: deleteaccount,
    mutationKey: [EVENT],
    onSuccess: (data) => {
      if (data?.message) {
        toast.success(data?.message);
        dispatch(getOrganizerDetails());
        dispatch(logoutUser());
        Cookies.remove("token", { path: "/" });
        router.push("/organizer-login");
      }
    },
    onError: (error) => {
      if (axios.isAxiosError(error)) {
        if (error?.response?.data?.message?.type?.message) {
          toast.error(error?.response?.data?.message?.type?.message);
        }
      }
    },
  });
};
