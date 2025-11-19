import type {User} from "@/models";

export type UserState = {
  user?: User;
};

export type UserActions = {
  setUser: (user: User) => void;
  removeUser: () => void;
};

export type UserStore = UserState & {
  actions: UserActions;
};
