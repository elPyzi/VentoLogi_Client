import type {RoleValue} from "@/models";

export type User = {
  id: number;
  fullname: string;
  email: string;
  roles: RoleValue;
};
