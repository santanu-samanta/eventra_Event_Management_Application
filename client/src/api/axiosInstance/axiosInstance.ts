import axios, { AxiosResponse, InternalAxiosRequestConfig } from "axios";
import Cookies from "js-cookie";

export const getMedia = (media: string | null | undefined) => {
  return `https://eventra-server.onrender.com/uploads/images/${media}`;
};

export const getProfileImage = (media: string | null | undefined) => {
  return `https://eventra-server.onrender.com/${media}`;
};

export const videoUrl = (media: string | null | undefined) => {
  return `https://eventra-server.onrender.com/uploads/videos/${media}`;
};

export const baseUrl: string = `${process.env.NEXT_PUBLIC_BASE_URL}`;

export const axiosInstance = axios.create({
  baseURL: baseUrl,
});

axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = Cookies.get("token");
    if (token) {
      config.headers["x-access-token"] = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);
