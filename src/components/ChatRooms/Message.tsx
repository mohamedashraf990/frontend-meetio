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
      className={`flex items-start gap-2.5 mb-4 transition-transform transform hover:scale-105 ${
        message.uid === user.uid ? "ml-auto" : ""
      }`}
    >
      <img
        className="w-8 h-8 rounded-full"
        src={message.avatar}
        alt="user avatar"
      />
      <div className="flex flex-col gap-1 w-full max-w-[320px]">
        <div className="flex items-center space-x-2 rtl:space-x-reverse">
          <span className="text-sm font-semibold text-gray-900 dark:text-white">
            {message.name}
          </span>
        </div>
        <div
          className={`flex flex-col leading-1.5 p-4 transition-colors ${
            message.uid === user.uid
              ? "bg-blue-500 text-white rounded-e-xl rounded-es-xl hover:bg-blue-600"
              : "bg-gray-100 text-gray-900 rounded-s-xl rounded-se-xl dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
          }`}
        >
          <p className="text-sm font-normal">{message.text}</p>
        </div>
        <div className="flex items-center mt-1">
          <svg
            className="w-4 h-4 text-green-500 -mr-2.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
          <svg
            className="w-4 h-4 text-green-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
          <span className="text-xs text-gray-500 dark:text-gray-400 ml-1">
            Delivered
          </span>
        </div>
      </div>
    </div>
  );
};

export default Message;
