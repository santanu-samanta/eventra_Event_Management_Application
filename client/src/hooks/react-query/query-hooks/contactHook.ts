import { useMutation } from "@tanstack/react-query";

import toast from "react-hot-toast";
import axios from "axios";
import { contact } from "@/api/functions/contact";

export const useContact = () => {
  return useMutation({
    mutationFn: contact,
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
