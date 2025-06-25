"use client";
import { useContext, createContext, useState, useEffect } from "react";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";
import { logoutUser } from "@/store/auth/auth";

interface ContextApiType {
  picture: string;
  setProfilePicture: React.Dispatch<React.SetStateAction<string>>;
  toggele: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
  isLoadingLoader: boolean;
  setIsLoadingLoader: React.Dispatch<React.SetStateAction<boolean>>;
}
const ContextApi = createContext<ContextApiType | null>(null);

export const ContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [picture, setProfilePicture] = useState<string>("");
  const [toggele, setToggle] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();
  const [isLoadingLoader, setIsLoadingLoader] = useState(false);
  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      console.log("Token from Cookies:", token);
    } else {
      console.log("No token found in Cookies");
      dispatch(logoutUser());
      Cookies.remove("token");
    }
  }, []);

  return (
    <ContextApi.Provider
      value={{
        picture,
        setProfilePicture,
        toggele,
        setToggle,
        isLoadingLoader,
        setIsLoadingLoader,
      }}
    >
      {children}
    </ContextApi.Provider>
  );
};

export const useContextApi = (): ContextApiType => {
  const context = useContext(ContextApi);
  if (!context) {
    throw new Error("useContextApi must be used within a ContextProvider");
  }
  return context;
};
