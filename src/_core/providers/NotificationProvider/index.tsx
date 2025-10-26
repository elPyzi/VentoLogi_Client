"use client";

import { toaster } from "@core/config";
import { createContext } from "react";
import type { Notification } from "./types";

export type TNotificationContext = {
  success: (args: Notification) => void;
  warning: (args: Notification) => void;
  error: (args: Notification) => void;
  info: (args: Notification) => void;
  closeAll: () => void;
};

export const NotificationContext = createContext<TNotificationContext | undefined>(undefined);

export const NotificationProvider = ({ children }: { children: React.ReactNode }) => {
  const notification = {
    success: (args: Notification) => toaster.success(args),
    warning: (args: Notification) => toaster.warning(args),
    error: (args: Notification) => toaster.error(args),
    info: (args: Notification) => toaster.info(args),
    closeAll: () => toaster.dismiss(),
  };

  return (
    <NotificationContext.Provider value={notification}>{children}</NotificationContext.Provider>
  );
};
