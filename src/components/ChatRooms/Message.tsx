"use-client";
import React, { useState, useEffect, useRef } from "react";
import { auth } from "../../firebaseAuth/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Reply, Forward, Copy, Trash, MoreVertical } from "lucide-react"; // Assuming you are using lucide-react for icons

interface MessageProps {
  message: {
    uid: string;
    avatar: string;
    name: string;
    text: string;
    createdAt?: { seconds: number; nanoseconds: number }; // Assuming date is part of the message object
  };
}

const Message: React.FC<MessageProps> = ({ message }) => {
  const [user] = useAuthState(auth);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  if (!user) {
    return null; // or some fallback UI
  }

  const formatDate = (timestamp?: { seconds: number; nanoseconds: number }) => {
    if (!timestamp) return "";
    const date = new Date(
      timestamp.seconds * 1000 + timestamp.nanoseconds / 1000000
    );
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  return (
    <div
      className={`flex items-start gap-2.5 mb-10 transition-transform transform hover:scale-105 ${
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
            className="w-4 h-4 text-green-500 -mr-3"
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
          {message.createdAt && (
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
          )}
          <span className="text-xs text-gray-500 dark:text-gray-400 ml-1">
            Delivered{" "}
            {message.createdAt ? `at ${formatDate(message.createdAt)}` : ""}
          </span>
        </div>
        <div
          className="absolute -top-4 right-0 mt-2 mr-2 z-20"
          ref={dropdownRef}
        >
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <MoreVertical className="w-4 h-4" />
          </button>
          {dropdownOpen && (
            <div className="absolute right-0  w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg z-50">
              <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700">
                <Reply className="w-4 h-4 inline mr-2" /> Reply
              </button>
              <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700">
                <Forward className="w-4 h-4 inline mr-2" /> Forward
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
