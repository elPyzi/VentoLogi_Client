import type { Metadata } from "next";
import {inter} from "@/_core/config";
import {ConfigProvider} from "@/_core/providers";
import '@core/styles/globals.scss'

export const metadata: Metadata = {
  title: "VentoLogi",
  description: "Simply delivery by VentoLogi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body>
      <ConfigProvider>{children}</ConfigProvider>
      </body>
    </html>
  );
}
