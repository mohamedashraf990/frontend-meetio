import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import ProfileBox from "@/components/ProfileBox";
import ClientAuthWrapper from "@/components/ClientAuthWrapper/ClientAuthWrapper";

export const metadata: Metadata = {
  title: "Next.js Profile Page | NextAdmin - Next.js Dashboard Kit",
  description: "This is Next.js Profile page for NextAdmin Dashboard Kit",
};

const Profile = () => {
  return (
    <ClientAuthWrapper>
      <DefaultLayout>
        <div className="mx-auto w-full max-w-[970px]">
          <Breadcrumb pageName="Profile" />

          <ProfileBox />
        </div>
      </DefaultLayout>
    </ClientAuthWrapper>
  );
};

export default Profile;
