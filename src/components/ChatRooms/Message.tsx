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
      className={`flex items-start mb-4 max-w-[50%] transition-transform transform hover:scale-105 ${
        message.uid === user.uid
          ? "ml-auto bg-blue-500 text-white hover:bg-blue-600"
          : "bg-gray-300 text-black hover:bg-gray-400"
      } rounded-xl p-3 shadow-sm`}
    >
      <img
        className="w-8 h-8 rounded-full mr-2"
        src={message.avatar}
        alt="user avatar"
      />
      <div>
        <p className="font-semibold mb-1 text-xs">{message.name}</p>
        <p className="break-words text-sm">{message.text}</p>
      </div>
    </div>
  );
};

export default Message;
