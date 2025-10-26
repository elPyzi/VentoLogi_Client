import { $api } from "@/_core/config/axios";
import { API_CONFIG } from "@/constants/api.config";
import type { UserResponse, VerifyEmailRequest } from "@/models";

export const refresh = async () => $api.get(API_CONFIG.ENDPOINTS.AUTH.REFRESH);

export const logout = async () => $api.get(API_CONFIG.ENDPOINTS.AUTH.LOGOUT);

export const me = async (): Promise<UserResponse> => $api.get(API_CONFIG.ENDPOINTS.AUTH.ME);

export const verifyEmail = async (code: VerifyEmailRequest) =>
  $api.post(API_CONFIG.ENDPOINTS.AUTH.VERIFY_EMAIL, code);

export const login = async () => {};

export const register = async () => {};
