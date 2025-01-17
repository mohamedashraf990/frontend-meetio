"use client";
import React from "react";
import ChatBox from "@/components/ChatRooms/ChatBox";
import DefaultLayout from "@/components/Layouts/DefaultLaout";

const TeamChats = () => {
  return (
    <>
      <DefaultLayout>
        <ChatBox />
      </DefaultLayout>
    </>
  );
};

export default TeamChats;
