// "use client";
// import React, { useState } from "react";
// import ChartThree from "../Charts/ChartThree";
// import ChartTwo from "../Charts/ChartTwo";
// import ChatCard from "../Chat/ChatCard";
// import MeetingsSummaryTable from "../Tables/MeetingsSummaryTable";
// import MapOne from "../Maps/MapOne";
// import DataStatsOne from "@/components/DataStats/DataStatsOne";
// import ChartOne from "@/components/Charts/ChartOne";
// import BasicChart from "../Charts/BasicChart";
// import RecorderComponent from "./RecorderComponent";
// import MeetingDetailsPage from "./MeetingDetailsPage";

// const ECommerce: React.FC = () => {
//   return (
//     <div>
//       <RecorderComponent />
//       <div className="mt-4">
//         <BasicChart />
//       </div>
//       <div className="mt-4">
//         <MeetingsSummaryTable />
//       </div>
//       <div className="mt-4">
//         <ChatCard />
//       </div>
//       <div className="mt-4">
//         <MeetingDetailsPage />
//       </div>
//       <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-9 2xl:gap-7.5">
//         {/* <ChartOne /> */}
//         {/* <ChartTwo /> */}
//         {/* <ChartThree /> */}
//         {/* <MapOne /> */}
//       </div>
//     </div>
//   );
// };

// export default ECommerce;

"use client";

import React from "react";
import BasicChart from "../Charts/BasicChart";
import ChatCard from "../Chat/ChatCard";
import RecorderComponent from "./RecorderComponent";
import MeetingsSummaryTable from "../Tables/MeetingsSummaryTable";
import MeetingDetailsPage from "./MeetingDetailsPage";
import ChatBox from "../ChatRooms/ChatBox";

const ECommerce: React.FC = () => {
  return (
    <div>
      <RecorderComponent />
      <div className="mt-4 flex flex-wrap gap-4">
        <div className="flex-1 min-w-[300px] ">
          <BasicChart />
        </div>
        <div className="flex-1 min-w-[300px]">
          <ChatCard />
        </div>
      </div>
      <div className="mt-4">
        <MeetingsSummaryTable
          title="Recent Meetings"
          isDelete
          isView
          isDownlaod
        />
      </div>
      <div className="mt-4">
        <MeetingDetailsPage />
      </div>
      <div className="mt-4">
        <ChatBox />
      </div>
    </div>
  );
};

export default ECommerce;
