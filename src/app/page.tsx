import ECommerce from "@/components/Dashboard/E-commerce";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import ClientAuthWrapper from "@/components/ClientAuthWrapper/ClientAuthWrapper";

export default function Home() {
  return (
    <ClientAuthWrapper>
      <DefaultLayout>
        <ECommerce />
      </DefaultLayout>
    </ClientAuthWrapper>
  );
}
