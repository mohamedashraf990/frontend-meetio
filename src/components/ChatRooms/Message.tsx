// filepath: /Users/mo/frontend-meetio/src/components/ChatRooms/Message.tsx
"use-client";
import React from "react";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";

interface MessageProps {
  message: {
    uid: string;
    avatar: string;
    name: string;
    text: string;
  };
}

const Message: React.FC<MessageProps> = ({ message }) => {
  const [user] = useAuthState(auth);

  if (!user) {
    return null; // or some fallback UI
  }

  return (
    <div
      className={`flex items-start mb-4 max-w-[40%] ${
        message.uid === user.uid
          ? "ml-auto bg-blue-500 text-white"
          : "bg-gray-300 text-black"
      } rounded-2xl p-4 shadow-md`}
    >
      <img
        className="w-10 h-10 rounded-full mr-3"
        src={message.avatar}
        alt="user avatar"
      />
      <div>
        <p className="font-bold mb-1 text-sm">{message.name}</p>
        <p className="break-words">{message.text}</p>
      </div>
    </div>
  );
};

export default Message;
