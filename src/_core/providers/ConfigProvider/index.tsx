"use client";

import {ChakraProvider, defaultSystem} from "@chakra-ui/react";
import {queryClient, Toaster} from "@core/config";
import {NotificationProvider} from "@core/providers/NotificationProvider";
import {QueryClientProvider} from "@tanstack/react-query";
import {ThemeProvider} from "next-themes";
import type React from "react";

type Props = {
  children: React.ReactNode;
};

export const ConfigProvider = ({ children }: Props) => (
  <QueryClientProvider client={queryClient}>
    <ChakraProvider value={defaultSystem}>
      <ThemeProvider attribute="class" disableTransitionOnChange defaultTheme="system" enableSystem>
        <NotificationProvider>
          {children}
          <Toaster />
        </NotificationProvider>
      </ThemeProvider>
    </ChakraProvider>
  </QueryClientProvider>
);
