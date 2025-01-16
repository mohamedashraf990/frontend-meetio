"use client";
import React, { useState } from "react";
import { AudioRecorderWithVisualizer } from "./ui/audio-recorder-with-visualizer";
import { TooltipProvider } from "./ui/tooltip";
import { PageHeaderDescription, PageHeaderHeading } from "./ui/page";

const RecorderComponent: React.FC = () => {
  return (
    <TooltipProvider>
      <div className="rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 dark:shadow-lg mb-6 p-6">
        <h4 className="text-body-2xlg font-bold text-dark dark:text-white">
          Record and get real-time reports
        </h4>
        <PageHeaderDescription className="mt-2">
          Never miss a single detail again. Get instant, AI-generated reports
          for your calls and meetings, powered by state-of-the-art models such
          as GPT-4, Bard and Llama. Save 70% of time needed for manual work.
        </PageHeaderDescription>
        {/* Increased margin-top to move it down */}
        <AudioRecorderWithVisualizer className="mt-15 w-full max-w-full" />
      </div>
    </TooltipProvider>
  );
};

export default RecorderComponent;
