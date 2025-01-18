import React, { ReactNode } from "react";
import ClientSideWrapper from "../ClientAuthWrapper/ClientSideWrapper";

export default function DefaultLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen overflow-hidden">
      <ClientSideWrapper>{children}</ClientSideWrapper>
    </div>
  );
}
