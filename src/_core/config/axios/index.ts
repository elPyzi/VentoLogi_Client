import {logout, refresh} from "@api/auth";
import {API_CONFIG} from "@constants/api.config";
import axios, {HttpStatusCode} from "axios";

export const $api = axios.create({
  baseURL: API_CONFIG.BASE_URL,
  withCredentials: true,
});

$api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response?.status === HttpStatusCode.Unauthorized &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true;
      try {
        const response = await refresh();

        if (response.status !== HttpStatusCode.Ok) {
          throw new Error("Error refresh token");
        }

        originalRequest._isRetry = false;

        return $api.request(originalRequest);
      } catch (error) {
        // biome-ignore lint/suspicious/noConsole: <check error msg>
        console.log(error);
        await logout();
      }
    } else if (
      error.response?.status === HttpStatusCode.BadGateway &&
      error.config &&
      error.config.isLongPolling
    ) {
      return $api.request(originalRequest);
    }
    throw error;
  },
);
