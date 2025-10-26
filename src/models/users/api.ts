import type { User } from "./index";

export type UserRequest = User;
export type UserResponse = User;

export type VerifyEmailRequest = {
  code: string;
};

export type VerifyEmailResponse = {
  email: string;
};
