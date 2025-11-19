import type {UserStore} from "@store/user/types";

export const userSelector = (state: UserStore) => state.user;
