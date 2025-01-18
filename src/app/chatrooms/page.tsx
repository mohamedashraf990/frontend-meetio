import ChatBox from "@/components/ChatRooms/ChatBox";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import ClientAuthWrapper from "@/components/ClientAuthWrapper/ClientAuthWrapper";

export default function ChatRoomsPage() {
  return (
    <ClientAuthWrapper>
      <DefaultLayout>
        <ChatBox />
      </DefaultLayout>
    </ClientAuthWrapper>
  );
}
