import type {UserState, UserStore} from "@store/user/types";
import {create} from "zustand";
import type {User} from "@/models";

const initialState: UserState = {
  user: undefined,
};

export const useUserStore = create<UserStore>((set) => ({
  ...initialState,
  actions: {
    setUser: (user: User) => set({ user: user }),
    removeUser: () => {},
  },
}));
