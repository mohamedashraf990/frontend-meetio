"use client";
import React from "react";
import ChartThree from "../Charts/ChartThree";
import ChartTwo from "../Charts/ChartTwo";
import ChatCard from "../Chat/ChatCard";
import MeetingsSummaryTable from "../Tables/MeetingsSummaryTable";
import MapOne from "../Maps/MapOne";
import DataStatsOne from "@/components/DataStats/DataStatsOne";
import ChartOne from "@/components/Charts/ChartOne";
import { useState } from "react";

const ECommerce: React.FC = () => {
  const [isRecording, setIsRecording] = useState(false);
  const handleRecord = () => {
    setIsRecording(!isRecording);
    // Add logic to start/stop recording from the microphone
  };
  return (
    <>
      <div className="rounded-[10px] border border-stroke bg-white shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card mb-4">
        <div className="border-b border-stroke px-6.5 py-4 dark:border-dark-3">
          <h3 className="font-medium text-dark dark:text-white">Record Now</h3>
        </div>
        <div className="flex flex-col gap-5.5 p-6.5">
          <div>
            <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
              Start your meeting recording and get instant notes in real-time{" "}
            </label>
            <button
              onClick={handleRecord}
              className={`w-full cursor-pointer rounded-[7px] border-[1.5px] border-stroke bg-transparent outline-none transition px-6.5 py-[13px] text-body-sm font-medium text-dark-5 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-dark dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary ${
                isRecording
                  ? "bg-red-500 text-white hover:bg-red-500"
                  : "hover:bg-primary hover:bg-opacity-30"
              }`}
            >
              {isRecording ? "Stop Recording" : "Start Recording"}
            </button>
          </div>
        </div>
      </div>
      {/* <DataStatsOne /> */}
      <div className="col-span-12 xl:col-span-8 mb-4 xl:mb-6 2xl:mb-9">
        <MeetingsSummaryTable />
      </div>
      <ChatCard />

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-9 2xl:gap-7.5">
        {/* <ChartOne /> */}
        {/* <ChartTwo /> */}
        {/* <ChartThree /> */}
        {/* <MapOne /> */}
      </div>
    </>
  );
};

export default ECommerce;
