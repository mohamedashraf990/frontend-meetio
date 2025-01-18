"use-client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ScrollArea } from "../Dashboard/ui/scroll-area";

const previousChats = [
  {
    active: true,
    avatar: "/images/user/user-01.png",
    name: "Devid Heilo",
    text: "Hello, how are you?",
    time: "12 min",
    textCount: 3,
    route: "chatrooms/1",
  },
  {
    active: true,
    avatar: "/images/user/user-02.png",
    name: "Henry Fisher",
    text: "I am waiting for you",
    time: "5:54 PM",
    textCount: 0,
    route: "chatrooms/2",
  },
  {
    active: null,
    avatar: "/images/user/user-04.png",
    name: "Wilium Smith",
    text: "Where are you now?",
    time: "10:12 PM",
    textCount: 0,
    route: "chatrooms/3",
  },
  {
    active: true,
    seen: true,
    avatar: "/images/user/user-05.png",
    name: "Henry Deco",
    text: "Thank you so much!",
    time: "Sun",
    textCount: 2,
    route: "chatrooms/4",
  },
  {
    active: false,
    avatar: "/images/user/user-06.png",
    name: "Jubin Jack",
    text: "Hello, how are you?",
    time: "Oct 23",
    textCount: 0,
    route: "chatrooms/5",
  },
  {
    active: false,
    avatar: "/images/user/user-06.png",
    name: "Hana Saeed",
    text: "Hello, how are you?",
    time: "Oct 23",
    textCount: 0,
    route: "chatrooms/6",
  },
  {
    active: false,
    avatar: "/images/user/user-06.png",
    name: "Hana Saeed",
    text: "Hello, how are you?",
    time: "Oct 23",
    textCount: 0,
    route: "chatrooms/7",
  },
  {
    active: false,
    avatar: "/images/user/user-06.png",
    name: "Hana Saeed",
    text: "Hello, how are you?",
    time: "Oct 23",
    textCount: 0,
    route: "chatrooms/8",
  },
  {
    active: false,
    avatar: "/images/user/user-06.png",
    name: "Hana Saeed",
    text: "Hello, how are you?",
    time: "Oct 23",
    textCount: 0,
    route: "chatrooms/8",
  },
  {
    active: false,
    avatar: "/images/user/user-06.png",
    name: "Hana Saeed",
    text: "Hello, how are you?",
    time: "Oct 23",
    textCount: 0,
    route: "chatrooms/8",
  },
  {
    active: false,
    avatar: "/images/user/user-06.png",
    name: "Hana Saeed",
    text: "Hello, how are you?",
    time: "Oct 23",
    textCount: 0,
    route: "chatrooms/8",
  },
];

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const PreviousChatsSidebar: React.FC<SidebarProps> = ({
  sidebarOpen,
  setSidebarOpen,
}) => {
  return (
    <aside
      className={`absolute left-0 top-0 flex h-100% w-85 flex-col overflow-y-hidden border-r border-stroke bg-white dark:border-stroke-dark dark:bg-gray-dark lg:static lg:translate-x-0 ${
        sidebarOpen
          ? "translate-x-0 duration-300 ease-linear"
          : "-translate-x-full"
      }`}
    >
      {/* <!-- SIDEBAR HEADER --> */}
      <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-4 xl:py-4">
        <h4 className="mb-5.5 text-body-2xlg font-bold text-dark dark:text-white">
          Chats
        </h4>
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="block lg:hidden"
        >
          <svg
            className="fill-current"
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
              fill=""
            />
          </svg>
        </button>
      </div>
      {/* <!-- SIDEBAR HEADER --> */}

      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        {/* <!-- Sidebar Menu --> */}
        <nav className="mt-1 px-4 lg:px-6">
          <ScrollArea className="h-[860px]">
            {previousChats.map((chat, index) => (
              <Link
                href={chat.route}
                className="flex items-center gap-4.5 px-7.5 py-3 hover:bg-gray-1 dark:hover:bg-dark-2"
                key={index}
              >
                <div className="relative h-14 w-14 rounded-full">
                  <Image
                    width={56}
                    height={56}
                    src={chat.avatar}
                    alt="User"
                    style={{
                      width: "auto",
                      height: "auto",
                    }}
                  />
                  <span
                    className={`absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-white dark:border-dark-2 ${
                      chat.active === true
                        ? "bg-green"
                        : chat.active === false
                          ? `bg-red-light`
                          : "bg-orange-light"
                    }`}
                  ></span>
                </div>

                <div className="flex flex-1 items-center justify-between">
                  <div>
                    <p className="font-xs text-dark text-body-sm dark:text-white">
                      {chat.name}
                    </p>
                    <p>
                      <span
                        className={`mb-px text-body-xs font-xs ${
                          chat.seen
                            ? "dark:text-dark-3"
                            : "text-dark-3 dark:text-dark-6"
                        }`}
                      >
                        {chat.text}
                      </span>
                      <span className="text-xs"> . {chat.time}</span>
                    </p>
                  </div>
                  {chat.textCount !== 0 && (
                    <div className="flex items-center justify-center rounded-full bg-primary px-1.5 ml-2">
                      <span className="text-xs font-medium text-white">
                        {chat.textCount}
                      </span>
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </ScrollArea>
        </nav>
        {/* <!-- Sidebar Menu --> */}
      </div>
    </aside>
  );
};

export default PreviousChatsSidebar;
