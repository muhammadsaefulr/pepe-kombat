import { useMutation, useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { WebApp } from '@twa-dev/types'

declare global {
  interface Window {
    Telegram?: {
      WebApp: WebApp
    }
  }
}

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const useLogin = () => {
  return useMutation<any, AxiosError, WebApp>({
    mutationFn: async (data: WebApp) => {
      const response = await axios.post(`${apiUrl}/auth/telegram`, data);
      return response.data;
    },
  });
};

export const useGetProfile = ({ uid }: { uid: string }) => {
  return useQuery({
    queryKey: ["getProfile", uid],
    queryFn: async () => {
      console.log("tes uid in tanstack: ",uid);
      if (uid) {
        const response = await axios.get(`${apiUrl}/users/info/${uid}`);
        return response.data;
      }
    },
  });
};
