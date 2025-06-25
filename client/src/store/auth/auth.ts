import { User } from "@/types";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import { axiosInstance } from "@/api/axiosInstance/axiosInstance";

interface AuthState {
  user: User | null;
  loading: boolean;
  resendLoading: boolean;
  isAuthenticated: boolean;
  email: string | null;
}

const initialState: AuthState = {
  user: null,
  loading: false,
  resendLoading: false,
  isAuthenticated: false,
  email: null,
};

export const register = createAsyncThunk(
  "auth/register",
  async (data: FormData) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/user/register`,
        data,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      if (response.data?.message) {
        toast.success(`${response.data?.message}`);
        return response.data;
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error.response?.data);
        if (error.response?.data?.message) {
          toast.error(error.response?.data?.message || "Registration failed");
        }
      }
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (data: { email: string; password: string }) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/user/login`,
        data,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      if (response.data) {
        toast.success(`${response.data?.message}`);
        Cookies.set("token", `${response.data?.token}`, {
          expires: 1 / 12,
        });
        return response.data;
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.data?.message) {
          toast.error(error.response?.data?.message || "Login failed");
        }
      }
    }
  }
);

export const otpsend = createAsyncThunk(
  "auth/otpsend",
  async (data: { email: string }) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/user/otpsend`,
        data,
        { headers: { "Content-Type": "application/json" } }
      );
      if (response.data) {
        toast.success(`${response.data?.message}`);
        return response.data;
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error.response?.data);
        if (error.response?.data?.message) {
          toast.error(error.response?.data?.message || "Registration failed");
        }
      }
    }
  }
);

export const otpsendforresendemail = createAsyncThunk(
  "auth/otpsendforresendemail",
  async (data: { email: string }) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/user/otpsend`,
        data,
        { headers: { "Content-Type": "application/json" } }
      );
      if (response.data) {
        toast.success(`${response.data?.message}`);
        return response.data;
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error.response?.data);
        if (error.response?.data?.message) {
          toast.error(error.response?.data?.message || "Registration failed");
        }
      }
    }
  }
);

export const otpverify = createAsyncThunk(
  "auth/otpverify",
  async (data: { email: string; otp: number }) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/user/otpverify`,
        data,
        { headers: { "Content-Type": "application/json" } }
      );
      if (response.data) {
        toast.success(`${response.data?.message}`);
        return response.data;
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error.response?.data);
        if (error.response?.data?.message) {
          toast.error(error.response?.data?.message || "Registration failed");
        }
      }
    }
  }
);

export const forgorpassword = createAsyncThunk(
  "auth/forgorpassword",
  async ({
    data,
    token,
  }: {
    data: { password: string; confirm_password: string };
    token: string;
  }) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/user/forgorpassword`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
            "x-access-token": token,
          },
        }
      );
      if (response.data) {
        toast.success(`${response.data?.message}`);
        return response.data;
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error.response?.data);
        if (error.response?.data?.message) {
          toast.error(error.response?.data?.message || "Registration failed");
        }
      }
    }
  }
);

export const getUserDetails = createAsyncThunk(
  "auth/getUserDetails",
  async (): Promise<User | undefined> => {
    try {
      const response = await axiosInstance.get(`/user/dashboard`);
      if (response.data) {
        return response.data.data as User;
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error.response?.data);
        if (error.response?.data?.message) {
          // toast.error(error.response?.data?.message || "Registration failed");
        }
      }
    }
  }
);

export const forgorpasswordemailsend = createAsyncThunk(
  "auth/forgorpasswordemailsend",
  async (data: { email: string }) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/user/forgorpassword-email-send`,
        data,
        { headers: { "Content-Type": "application/json" } }
      );
      if (response.data) {
        toast.success(`${response.data?.message}`);
        return response.data;
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error.response?.data);
        if (error.response?.data?.message) {
          toast.error(error.response?.data?.message || "Registration failed");
        }
      }
    }
  }
);

export const organizerregister = createAsyncThunk(
  "auth/organizerregister",
  async (data: FormData) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/organizer/register`,
        data,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      if (response.data?.message) {
        toast.success(`${response.data?.message}`);
        return response.data;
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error.response?.data);
        if (error.response?.data?.message) {
          toast.error(error.response?.data?.message || "Registration failed");
        }
      }
    }
  }
);

export const organizerlogin = createAsyncThunk(
  "auth/organizerlogin",
  async (data: { email: string; password: string }) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/organizer/login`,
        data,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      if (response.data) {
        toast.success(`${response.data?.message}`);
        Cookies.set("token", `${response.data?.token}`, {
          expires: 1 / 12,
        });
        return response.data;
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.data?.message) {
          toast.error(error.response?.data?.message || "Login failed");
        }
      }
    }
  }
);

export const organizerotpsend = createAsyncThunk(
  "auth/organizerotpsend",
  async (data: { email: string }) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/organizer/otpsend`,
        data,
        { headers: { "Content-Type": "application/json" } }
      );
      if (response.data) {
        toast.success(`${response.data?.message}`);
        return response.data;
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error.response?.data);
        if (error.response?.data?.message) {
          toast.error(error.response?.data?.message || "Registration failed");
        }
      }
    }
  }
);

export const organizerotpsendforresendemail = createAsyncThunk(
  "auth/organizerotpsendforresendemail",
  async (data: { email: string }) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/organizer/otpsend`,
        data,
        { headers: { "Content-Type": "application/json" } }
      );
      if (response.data) {
        toast.success(`${response.data?.message}`);
        return response.data;
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error.response?.data);
        if (error.response?.data?.message) {
          toast.error(error.response?.data?.message || "Registration failed");
        }
      }
    }
  }
);

export const organizerotpverify = createAsyncThunk(
  "auth/organizerotpverify",
  async (data: { email: string; otp: number }) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/organizer/otpverify`,
        data,
        { headers: { "Content-Type": "application/json" } }
      );
      if (response.data) {
        toast.success(`${response.data?.message}`);
        return response.data;
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error.response?.data);
        if (error.response?.data?.message) {
          toast.error(error.response?.data?.message || "Registration failed");
        }
      }
    }
  }
);

export const organizerforgorpassword = createAsyncThunk(
  "auth/organizerforgorpassword",
  async ({
    data,
    token,
  }: {
    data: { password: string; confirm_password: string };
    token: string;
  }) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/organizer/forgorpassword`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
            "x-access-token": token,
          },
        }
      );
      if (response.data) {
        toast.success(`${response.data?.message}`);
        return response.data;
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error.response?.data);
        if (error.response?.data?.message) {
          toast.error(error.response?.data?.message || "Registration failed");
        }
      }
    }
  }
);

export const organizerforgorpasswordemailsend = createAsyncThunk(
  "auth/organizerforgorpasswordemailsend",
  async (data: { email: string }) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/organizer/forgorpassword-email-send`,
        data,
        { headers: { "Content-Type": "application/json" } }
      );
      if (response.data) {
        toast.success(`${response.data?.message}`);
        return response.data;
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error.response?.data);
        if (error.response?.data?.message) {
          toast.error(error.response?.data?.message || "Registration failed");
        }
      }
    }
  }
);

export const getOrganizerDetails = createAsyncThunk(
  "auth/getOrganizerDetails",
  async (): Promise<User | undefined> => {
    try {
      const response = await axiosInstance.get(`/organizer/dashboard`);
      if (response.data) {
        console.log(response.data.data);
        return response.data.data as User;
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.data?.message) {
          // toast.error(error.response?.data?.message || "Registration failed");
        }
      }
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetLoading: (state) => {
      state.loading = false;
    },
    resetresendloading: (state) => {
      state.resendLoading = false;
    },
    setEmail: (state, action: PayloadAction<string | null>) => {
      state.email = action.payload;
    },
    logoutUser: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.loading = true;
      })
      .addCase(register.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(register.rejected, (state) => {
        state.loading = false;
      })
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state) => {
        state.loading = false;
        state.isAuthenticated = true;
      })
      .addCase(login.rejected, (state) => {
        state.loading = false;
      })

      .addCase(otpsend.pending, (state) => {
        state.loading = true;
      })
      .addCase(otpsend.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(otpsend.rejected, (state) => {
        state.loading = false;
      })
      .addCase(otpsendforresendemail.pending, (state) => {
        state.resendLoading = true;
      })
      .addCase(otpsendforresendemail.fulfilled, (state) => {
        state.resendLoading = false;
      })
      .addCase(otpsendforresendemail.rejected, (state) => {
        state.resendLoading = false;
      })
      .addCase(otpverify.pending, (state) => {
        state.loading = true;
      })
      .addCase(otpverify.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(otpverify.rejected, (state) => {
        state.loading = false;
      })
      .addCase(forgorpassword.pending, (state) => {
        state.loading = true;
      })
      .addCase(forgorpassword.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(forgorpassword.rejected, (state) => {
        state.loading = false;
      })
      .addCase(forgorpasswordemailsend.pending, (state) => {
        state.loading = true;
      })
      .addCase(forgorpasswordemailsend.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(forgorpasswordemailsend.rejected, (state) => {
        state.loading = false;
      })

      .addCase(getUserDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        getUserDetails.fulfilled,
        (state, action: PayloadAction<User | undefined>) => {
          state.loading = false;
          if (action.payload) {
            state.user = action.payload;
          }
        }
      )
      .addCase(getUserDetails.rejected, (state) => {
        state.loading = false;
      })

      .addCase(organizerregister.pending, (state) => {
        state.loading = true;
      })
      .addCase(organizerregister.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(organizerregister.rejected, (state) => {
        state.loading = false;
      })

      .addCase(organizerlogin.pending, (state) => {
        state.loading = true;
      })
      .addCase(organizerlogin.fulfilled, (state) => {
        state.loading = false;
        state.isAuthenticated = true;
      })
      .addCase(organizerlogin.rejected, (state) => {
        state.loading = false;
      })

      .addCase(organizerotpsend.pending, (state) => {
        state.loading = true;
      })
      .addCase(organizerotpsend.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(organizerotpsend.rejected, (state) => {
        state.loading = false;
      })

      .addCase(organizerotpsendforresendemail.pending, (state) => {
        state.resendLoading = true;
      })
      .addCase(organizerotpsendforresendemail.fulfilled, (state) => {
        state.resendLoading = false;
      })
      .addCase(organizerotpsendforresendemail.rejected, (state) => {
        state.resendLoading = false;
      })

      .addCase(organizerotpverify.pending, (state) => {
        state.loading = true;
      })
      .addCase(organizerotpverify.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(organizerotpverify.rejected, (state) => {
        state.loading = false;
      })

      .addCase(organizerforgorpassword.pending, (state) => {
        state.loading = true;
      })
      .addCase(organizerforgorpassword.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(organizerforgorpassword.rejected, (state) => {
        state.loading = false;
      })

      .addCase(organizerforgorpasswordemailsend.pending, (state) => {
        state.loading = true;
      })
      .addCase(organizerforgorpasswordemailsend.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(organizerforgorpasswordemailsend.rejected, (state) => {
        state.loading = false;
      })

      .addCase(getOrganizerDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        getOrganizerDetails.fulfilled,
        (state, action: PayloadAction<User | undefined>) => {
          state.loading = false;
          if (action.payload) {
            state.user = action.payload;
          }
        }
      )
      .addCase(getOrganizerDetails.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { resetLoading, resetresendloading, setEmail, logoutUser } =
  authSlice.actions;
export default authSlice.reducer;
