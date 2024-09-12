import { useMutation, useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";

interface LoginData {
  username: string;
  password: string;
}

interface LoginResponse {
  token: string;
  user: {
    id: number;
    username: string;
  };
}

interface ProfileData {
  username: string;
}

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const useLogin = () => {
  return useMutation<LoginResponse, AxiosError, LoginData>({
    mutationFn: async (data: LoginData) => {
      const response = await axios.post(`${apiUrl}/login`, data);
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
