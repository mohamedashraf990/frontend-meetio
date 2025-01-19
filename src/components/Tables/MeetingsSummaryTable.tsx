import { MEETING } from "@/types/brand";
import Image from "next/image";
import ActionButtons from "./ActionButtons";
import { ScrollArea } from "../Dashboard/ui/scroll-area";
import ButtonDefault from "../Buttons/ButtonDefault";
import { ArrowLeft, ArrowRight, Trash2 } from "lucide-react";

const meetingData: MEETING[] = [
  {
    hostImage: "/images/user/user-01.png",
    host: "Mo",
    collaborators: 2,
    meetingTotalTime: "20 Min",
    meetingType: "Recruitment",
    notesLink: "Link will be added",
  },
  {
    hostImage: "/images/user/user-02.png",
    host: "Celine",
    collaborators: 3,
    meetingTotalTime: "56 Min",
    meetingType: "Business Meeting",
    notesLink: "Link will be added",
  },
  {
    hostImage: "/images/user/user-03.png",
    host: "Niklas",
    collaborators: 2,
    meetingTotalTime: "44 Min",
    meetingType: "Phone Call",
    notesLink: "Link will be added",
  },
  {
    hostImage: "/images/user/user-04.png",
    host: "Marius",
    collaborators: 1,
    meetingTotalTime: "54 Min",
    meetingType: "Clasroom Notes",
    notesLink: "Link will be added",
  },
  {
    hostImage: "/images/user/user-05.png",
    host: "Jordan",
    collaborators: 4,
    meetingTotalTime: "17 Min",
    meetingType: "Medical Notes",
    notesLink: "Link will be added",
  },
  {
    hostImage: "/images/user/user-05.png",
    host: "Jordan",
    collaborators: 4,
    meetingTotalTime: "17 Min",
    meetingType: "Medical Notes",
    notesLink: "Link will be added",
  },
  {
    hostImage: "/images/user/user-05.png",
    host: "Jordan",
    collaborators: 4,
    meetingTotalTime: "17 Min",
    meetingType: "Medical Notes",
    notesLink: "Link will be added",
  },
  {
    hostImage: "/images/user/user-05.png",
    host: "Jordan",
    collaborators: 4,
    meetingTotalTime: "17 Min",
    meetingType: "Medical Notes",
    notesLink: "Link will be added",
  },
];
interface MeetingsSummaryTableProps {
  title?: string;
  isView?: boolean;
  isDownlaod?: boolean;
  isDelete?: boolean;
  isChat?: boolean;
  isAssign?: boolean;
  isAddCollaboratorInvite?: boolean;
  isDeleteWorkspace?: boolean;
}

const MeetingsSummaryTable: React.FC<MeetingsSummaryTableProps> = ({
  title,
  isView = false,
  isDownlaod = false,
  isDelete = false,
  isChat = false,
  isAssign = false,
  isAddCollaboratorInvite = false,
  isDeleteWorkspace = false,
}) => {
  return (
    <div className="rounded-[10px] bg-white px-7.5 pb-4 pt-7.5 shadow-1 dark:bg-gray-dark dark:shadow-card">
      <div className="flex justify-between items-center mb-8">
        <h4 className="mb-5.5 text-body-2xlg font-bold text-dark dark:text-white">
          {title ? title : "Recent Meetings"}
        </h4>
        {isAddCollaboratorInvite && isDeleteWorkspace && (
          <div className="flex items-center">
            <ButtonDefault
              label="Add Collaborators"
              link="/"
              customClasses="border border-primary text-primary rounded-[8px] px-5 py-2 transition-transform transform hover:scale-105 hover:bg-primary hover:text-white "
            />
            <>
              <Trash2 className="ml-4 mr-2" size={20} />
            </>
          </div>
        )}
      </div>

      <div className="flex flex-col">
        <div className="grid grid-cols-3 sm:grid-cols-5">
          <div className="px-2 pb-3.5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Host
            </h5>
          </div>
          <div className="px-2 pb-3.5 text-center">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Collaborators
            </h5>
          </div>
          <div className="px-2 pb-3.5 text-center">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Total Time
            </h5>
          </div>
          <div className="hidden px-2 pb-3.5 text-center sm:block">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Meeting Type
            </h5>
          </div>
          <div className="hidden px-2 pb-3.5 text-center sm:block">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Actions
            </h5>
          </div>
        </div>
        <ScrollArea className="h-[400px]">
          {meetingData.map((meeting, key) => (
            <div
              className={`grid grid-cols-3 sm:grid-cols-5 ${
                key === meetingData.length - 1
                  ? ""
                  : "border-b border-stroke dark:border-dark-3"
              }`}
              key={key}
            >
              <div className="flex items-center gap-3.5 px-2 py-4">
                <div className="flex-shrink-0">
                  <Image
                    src={meeting.hostImage}
                    alt="Brand"
                    width={48}
                    height={48}
                  />
                </div>
                <p className="hidden font-medium text-dark dark:text-white sm:block">
                  {meeting.host}
                </p>
              </div>

              <div className="flex items-center justify-center px-2 py-4">
                <p className="font-medium text-dark dark:text-white">
                  {meeting.collaborators}
                </p>
              </div>

              <div className="flex items-center justify-center px-2 py-4">
                <p className="font-medium text-green-light-1">
                  {meeting.meetingTotalTime}
                </p>
              </div>

              <div className="hidden items-center justify-center px-2 py-4 sm:flex">
                <p className="font-medium text-dark dark:text-white">
                  {meeting.meetingType}
                </p>
              </div>

              <div className="hidden items-center justify-center px-2 py-4 sm:flex">
                <p className="font-medium text-dark dark:text-white">
                  {/* {meeting.notesLink} */}
                  <ActionButtons
                    isView={isView}
                    isDelete={isDelete}
                    isDownlaod={isDownlaod}
                    isChat={isChat}
                    isAssign={isAssign}
                  />
                </p>
              </div>
            </div>
          ))}
        </ScrollArea>
      </div>
    </div>
  );
};

export default MeetingsSummaryTable;
