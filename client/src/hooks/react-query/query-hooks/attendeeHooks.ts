import { USER, TICKET, TESTIMONIAL } from "../query-keys/querykeys";
import { useMutation, useQuery } from "@tanstack/react-query";
import { changePassword } from "@/api/functions/attendee/changepassword";
import { useGlobalHooks } from "@/hooks/globalhooks";
import toast from "react-hot-toast";
import axios from "axios";
import { deleteAccount } from "@/api/functions/attendee/deleteaccount";
import { logoutUser } from "@/store/auth/auth";
import { cancelticket } from "@/api/functions/attendee/cancelticket";
import { getallticket } from "@/api/functions/attendee/getallticket";
import { getalluserbookedtickets } from "@/api/functions/attendee/getalluserbookedtickets";
import { bookticket } from "@/api/functions/attendee/bookticket";
import { createTestimonial } from "@/api/functions/attendee/createtestimonial";
import { getsingelticket } from "@/api/functions/attendee/getsingelticket";

export const useGetAllTicket = () => {
  return useQuery({
    queryKey: [TICKET],
    queryFn: getallticket,
    staleTime: 300000,
  });
};

export const useGetUserTicketList = () => {
  const { queryClient } = useGlobalHooks();
  queryClient.invalidateQueries({ queryKey: [TICKET] });
  return useQuery({
    queryKey: [TICKET],
    queryFn: getalluserbookedtickets,
    staleTime: 300000,
  });
};

export const useBookTicket = () => {
  const { router } = useGlobalHooks();
  return useMutation({
    mutationFn: bookticket,
    mutationKey: [USER],
    onSuccess: (data) => {
      if (data?.message) {
        toast.success(data?.message);
        router.push("/attendee/events");
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

export const UseSingelTicket = (id: string) => {
  return useQuery({
    queryKey: [TICKET, id],
    queryFn: () => getsingelticket(id),
  });
};
export const useChangePassword = () => {
  return useMutation({
    mutationFn: changePassword,
    mutationKey: [USER],
    onSuccess: (data) => {
      if (data?.message) {
        toast.success(data?.message);
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

export const useCancelTicket = () => {
  const { router } = useGlobalHooks();
  return useMutation({
    mutationFn: cancelticket,
    mutationKey: [USER],
    onSuccess: (data) => {
      if (data?.message) {
        toast.success(data?.message);
        router.push("/attendee/account/confirm-ticket");
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

export const useCreateTestimonial = () => {
  const { router } = useGlobalHooks();
  return useMutation({
    mutationFn: createTestimonial,
    mutationKey: [TESTIMONIAL],
    onSuccess: (data) => {
      if (data?.message) {
        toast.success(data?.message);
        router.push("/attendee/account/confirm-ticket");
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

export const useDeleteAccount = () => {
  const { dispatch, router } = useGlobalHooks();
  return useMutation({
    mutationFn: deleteAccount,
    mutationKey: [USER],
    onSuccess: (data) => {
      if (data?.message) {
        toast.success(data?.message);
        dispatch(logoutUser());
        router.push("/login");
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
