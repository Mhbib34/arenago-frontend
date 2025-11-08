import { create } from "zustand";
import axiosInstance from "@/lib/axiosInstance";
import { showSuccess } from "@/lib/sonner";
import { User } from "@/types/user-type";
import { isErrorResponse } from "@/utils/error-response";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";

type AuthStore = {
  user: User | null;
  loading: boolean;
  fetchUser: () => void;
  logout: () => Promise<void>;
  setUser: (user: User | null) => void;
};

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  loading: true,
  setUser: (user) => set({ user }),
  fetchUser: () => {},
  logout: async () => {
    try {
      const res = await axiosInstance.delete("/auth/logout", {
        withCredentials: true,
      });
      set({ user: null, loading: false });
      showSuccess(res.data.message);
    } catch (error) {
      set({ loading: false });
      isErrorResponse(error, "Logout failed. Please try again.");
    }
  },
}));

export function useFetchUser() {
  const queryClient = useQueryClient();
  const setUser = useAuthStore((s) => s.setUser);

  const query = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await axiosInstance.get("/profile", {
        withCredentials: true,
      });
      console.log(res.data.data);
      return res.data.data as User;
    },
    retry: false,
    refetchOnWindowFocus: false,
    refetchOnMount: true,
    staleTime: Infinity,
  });

  // Handle success/error dengan useEffect
  useEffect(() => {
    if (query.isSuccess && query.data) {
      setUser(query.data);
      useAuthStore.setState({ loading: false });
    }

    if (query.isError) {
      setUser(null);
      useAuthStore.setState({ loading: false });
    }
  }, [query.isSuccess, query.isError, query.data, setUser]);

  // Set fetchUser function
  useEffect(() => {
    useAuthStore.setState({
      fetchUser: () => queryClient.invalidateQueries({ queryKey: ["user"] }),
    });
  }, [queryClient]);

  return query;
}
