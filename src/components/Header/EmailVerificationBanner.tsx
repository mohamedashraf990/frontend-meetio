import React from "react";
import { AlertTriangle } from "lucide-react";

const BannerContainer = ({ children }: { children: React.ReactNode }) => (
  <div
    className="flex items-center bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-3 mb-4 mt-2 ml-2 mr-2 rounded-md shadow-md"
    role="alert"
  >
    {children}
  </div>
);

const BannerIcon = () => (
  <div className="flex-shrink-0">
    <AlertTriangle className="h-6 w-6 text-yellow-500" aria-hidden="true" />
  </div>
);

const BannerContent = ({ children }: { children: React.ReactNode }) => (
  <div className="ml-3">{children}</div>
);

const BannerTitle = ({ children }: { children: React.ReactNode }) => (
  <p className="text-sm font-bold">{children}</p>
);

const BannerMessage = ({ children }: { children: React.ReactNode }) => (
  <p className="text-sm">{children}</p>
);

export default function EmailVerificationBanner() {
  return (
    <BannerContainer>
      <BannerIcon />
      <BannerContent>
        <BannerTitle>Email Verification Required</BannerTitle>
        <BannerMessage>
          Please verify your email address to access all features.
        </BannerMessage>
      </BannerContent>
    </BannerContainer>
  );
}
