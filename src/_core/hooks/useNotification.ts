import { NotificationContext, type TNotificationContext } from "@core/providers";
import { useContext } from "react";

export const useNotification = (): TNotificationContext => {
  const context = useContext(NotificationContext);
  if (context === undefined) {
    throw new Error("useNotification must be used within a NotificationProvider");
  }
  return context;
};
