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
          Start now and get real-time reports
        </h4>
        <PageHeaderDescription className="mt-5">
          Never miss a single detail again. Get instant, AI-generated reports
          for your calls and meetings, powered by state-of-the-art models such
          as GPT-4, Bard and Llama. Save 70% of time needed for manual work.
        </PageHeaderDescription>
        <div className="mt-8 flex justify-around">
          <ButtonWithImage
            imageSrc="/images/meetings/googlemeet.svg"
            altText="Icon 1"
            buttonText="Google Meet"
          />
          <ButtonWithImage
            imageSrc="/images/meetings/zoom.svg"
            altText="Icon 2"
            buttonText="Zoom Meet"
          />
          <ButtonWithImage
            imageSrc="/images/meetings/microsoft-teams.svg"
            altText="Icon 3"
            buttonText="Microsoft Teams"
          />
        </div>
        {/* Increased margin-top to move it down */}
        <PageHeaderDescription className="mt-8">
          Physical meeting? No problem, hit the record button and generated
          summary will be displayed on your dashboard in real-time, for better
          preformance, we encourage to set collaborators so you can identify
          every single details and share generated reports with your team
          members.
        </PageHeaderDescription>
        <AudioRecorderWithVisualizer className="mt-10 w-full max-w-full" />
      </div>
    </TooltipProvider>
  );
};

const ButtonWithImage: React.FC<{
  imageSrc: string;
  altText: string;
  buttonText: string;
}> = ({ imageSrc, altText, buttonText }) => {
  return (
    <button className="relative flex flex-col items-center p-4 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-700 dark:border-gray-600 dark:shadow-lg hover:scale-105 transform transition-transform duration-200 w-35 h-35">
      <img src={imageSrc} alt={altText} className="w-15 h-15 mb-2" />
      <span className="text-sm font-medium text-gray-700 dark:text-gray-300 mt-2">
        {buttonText}
      </span>
    </button>
  );
};

export default RecorderComponent;
