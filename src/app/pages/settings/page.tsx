import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import SettingBoxes from "@/components/SettingBoxes";
import ClientAuthWrapper from "@/components/ClientAuthWrapper/ClientAuthWrapper";

export const metadata: Metadata = {
  title: "Next.js Settings Page | NextAdmin - Next.js Dashboard c",
  description: "This is Next.js Settings page for NextAdmin Dashboard Kit",
};

const Settings = () => {
  return (
    <ClientAuthWrapper>
      <DefaultLayout>
        <div className="mx-auto w-full max-w-[1080px]">
          <Breadcrumb pageName="Settings" />
          <SettingBoxes />
        </div>
      </DefaultLayout>
    </ClientAuthWrapper>
  );
};

export default Settings;
