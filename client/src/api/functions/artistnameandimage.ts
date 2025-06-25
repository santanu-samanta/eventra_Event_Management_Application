import { ArtistNameAndImage } from "@/types";
import { axiosInstance } from "../axiosInstance/axiosInstance";
import { endPoints } from "../endPoints/endPoints";

export const artistnameandimage = async (): Promise<ArtistNameAndImage[]> => {
  const { data: response } = await axiosInstance.get(
    endPoints.artistnameandimage.artistnameandimage
  );
  return response.data as ArtistNameAndImage[];
};
