import { useMutation } from "@tanstack/react-query";
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

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const useLogin = () => {
  return useMutation<LoginResponse, AxiosError, LoginData>({
    mutationFn: async (data: LoginData) => {
      const response = await axios.post(`${apiUrl}/login`, data);
      return response.data;
    },
  });
};
