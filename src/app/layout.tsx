import "jsvectormap/dist/css/jsvectormap.css";
import "flatpickr/dist/flatpickr.min.css";
import "@/css/satoshi.css";
import "@/css/style.css";
import React from "react";
import ClientLoaderWrapper from "@/components/ClientAuthWrapper/ClientLoaderWrapper";
import { useAuth } from "@/hooks/useAuth";
import EmailVerificationBanner from "@/components/Header/EmailVerificationBanner";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <ClientLoaderWrapper>{children}</ClientLoaderWrapper>
      </body>
    </html>
  );
}
