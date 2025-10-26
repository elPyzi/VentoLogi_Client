import { create } from "zustand";
import type { User } from "@/models";

type UserStoreState = {
  user: User | undefined;
  addUser: (user: User) => void;
  removeUser: (user: User) => void;
};

export const useUserStore = create<UserStoreState>((set) => ({
  user: undefined,
  addUser: async (user) => await set({ user }),
  removeUser: async () => await set({ user: undefined }),
}));
