export const API_CONFIG = {
  BASE_URL: process.env.API_BASE_URL,
  ENDPOINTS: {
    AUTH: {
      REFRESH: "auth/refresh",
      LOGIN: "auth/login",
      LOGOUT: "auth/logout",
      ME: "auth/me",
      VERIFY_EMAIL: "auth/verifyEmail",
    },
  },
};
