"use-client";
import React, { useState } from "react";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Reply, Forward, Copy, Trash, MoreVertical } from "lucide-react"; // Assuming you are using lucide-react for icons

interface MessageProps {
  message: {
    uid: string;
    avatar: string;
    name: string;
    text: string;
    date: string; // Assuming date is part of the message object
  };
}

const Message: React.FC<MessageProps> = ({ message }) => {
  const [user] = useAuthState(auth);
  const [dropdownOpen, setDropdownOpen] = useState(false);

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
      <div className="flex flex-col gap-1 w-full max-w-[320px] relative">
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
          <span className="text-xs text-gray-500 dark:text-gray-400 ml-1 relative group">
            Delivered
            <span className="absolute left-0 bottom-full mb-1 hidden text-xs text-gray-500 dark:text-gray-400 group-hover:block">
              {message.date}
            </span>
          </span>
        </div>
        <div className="absolute -top-4 right-0 mt-2 mr-2 z-20">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <MoreVertical className="w-4 h-4" />
          </button>
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg z-50">
              <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700">
                <Reply className="w-4 h-4 inline mr-2" /> Reply
              </button>
              <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700">
                <Forward className="w-4 h-4 inline mr-2" /> Forward
              </button>
              <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700">
                <Copy className="w-4 h-4 inline mr-2" /> Copy
              </button>
              <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700">
                <Trash className="w-4 h-4 inline mr-2" /> Delete
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Message;
