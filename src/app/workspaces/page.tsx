"use state";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import MeetingsSummaryTable from "@/components/Tables/MeetingsSummaryTable";

export default function WorkspacesPage() {
  return (
    <DefaultLayout>
      <div className="mb-4">
        <MeetingsSummaryTable
          title="Tech Team"
          isChat
          isDelete
          isAssign
          isAddCollaboratorInvite
          isDeleteWorkspace
        />
      </div>
      <div className="mb-4">
        <MeetingsSummaryTable
          title="Marketing Team"
          isChat
          isDelete
          isAssign
          isAddCollaboratorInvite
          isDeleteWorkspace
        />
      </div>
      <div className="mb-4">
        <MeetingsSummaryTable
          title="Product Design Team"
          isChat
          isDelete
          isAssign
          isAddCollaboratorInvite
          isDeleteWorkspace
        />
      </div>
      <div className="mb-4">
        <MeetingsSummaryTable
          title="Human Resoruce Team"
          isChat
          isDelete
          isAssign
          isAddCollaboratorInvite
          isDeleteWorkspace
        />
      </div>
    </DefaultLayout>
  );
}
