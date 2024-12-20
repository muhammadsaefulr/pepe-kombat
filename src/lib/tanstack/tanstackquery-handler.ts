import { useMutation, useQuery } from "@tanstack/react-query";
import axios, { AxiosError, AxiosResponse } from "axios";
import { WebAppUser } from '@twa-dev/types';

interface LoginResponse {
  token: string;
  user: {
    id: number;
    username: string;
  };
}

interface UserPepeRes {
  telegram_id: bigint;
  username: string;
}

interface FriendListResponse {
  data: UserPepeRes[];
}

interface SessionResponse {
  exp: number,
  expires: string,
  iat: number,
  user: {
    telegramId: BigInt
    username: string,
  }
}

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const useLogin = () => {
  return useMutation<LoginResponse, AxiosError, WebAppUser>({
    mutationFn: async (data: WebAppUser) => {
      const response = await axios.post<LoginResponse>(`/api/auth/telegram`, data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response.data;
    },
    onError: (error: AxiosError) => {
      console.error('Login gagal', error.response?.data);
    },
  });
};

export const useGetSession = () => {
  return useQuery<SessionResponse | null>({
    queryKey: ['getSession'],
    queryFn: async () => {
      const resp = await axios.get(`${apiUrl}/session`);
      return resp.data.data;
    },
  });
};

export const useGetProfile = ({ uid }: { uid: string }) => {
  return useQuery({
    queryKey: ["getProfile", uid],
    queryFn: async () => {
      if (uid) {
        const response = await axios.get(`${apiUrl}/users/info/${uid}`);
        return response.data;
      }
    },
  });
};

export const useAddFriendList = ({ reffId }: { reffId: string }) => {
  return useQuery({
    queryKey: ["addFriendList", reffId],
    queryFn: async () => {
      const response = await axios.put(`${apiUrl}/friendlist?uid=${reffId}`);
      return response.data;
    },
  });
}

export const useGetFriendlist = () => {
  return useQuery<FriendListResponse | null>({
    queryKey: ["getFriendlist"],
    queryFn: async () => {
      const response = await axios.get(`${apiUrl}/friendlist`);
      return response.data
    }
  })
}
