"use-client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { UserPlus } from "lucide-react";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const previousChats = [
  {
    name: "Chat Room 1",
    route: "/chatrooms/1",
  },
  {
    name: "Chat Room 2",
    route: "/chatrooms/2",
  },
  {
    name: "Chat Room 3",
    route: "/chatrooms/3",
  },
  // Add more chat rooms as needed
];

const PreviousChatsSidebar: React.FC<SidebarProps> = ({
  sidebarOpen,
  setSidebarOpen,
}) => {
  const pathname = usePathname();

  return (
    <aside
      className={`absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden border-r border-stroke bg-white dark:border-stroke-dark dark:bg-gray-dark lg:static lg:translate-x-0 ${
        sidebarOpen
          ? "translate-x-0 duration-300 ease-linear"
          : "-translate-x-full"
      }`}
    >
      {/* <!-- SIDEBAR HEADER --> */}
      <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-4 xl:py-8">
        <Link href="/">
          <div className="flex items-center gap-2">
            <Image
              width={50}
              height={32}
              src={"/images/logo/meetup.png"}
              alt="Logo"
              priority
              className="dark:hidden"
              style={{ width: "auto", height: "auto" }}
            />
            <Image
              width={50}
              height={32}
              src={"/images/logo/meetup.png"}
              alt="Logo"
              priority
              className="hidden dark:block"
              style={{ width: "auto", height: "auto" }}
            />
            <span
              className="text-lg font-semibold mt-5"
              style={{ color: "#ff4f4f" }}
            >
              Meet.io
            </span>
          </div>
          <span
            className="text-xs mt-2 block font-semibold"
            style={{ color: "#8a8a8a" }}
          >
            Next-gen AI meetings notes with one Click
          </span>
        </Link>

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
          <h3 className="mb-5 text-sm font-medium text-dark-4 dark:text-dark-6">
            Previous Team Chats
          </h3>
          <ul className="mb-6 flex flex-col gap-2">
            {previousChats.map((chat, index) => (
              <li key={index}>
                <Link href={chat.route}>
                  <div
                    className={`flex items-center p-2 rounded-lg transition-colors duration-200 hover:bg-gray-200 dark:hover:bg-gray-700 ${
                      pathname === chat.route
                        ? "bg-gray-200 dark:bg-gray-700"
                        : ""
                    }`}
                  >
                    <span className="ml-2 text-sm font-medium text-gray-800 dark:text-white">
                      {chat.name}
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        {/* <!-- Sidebar Menu --> */}
      </div>
    </aside>
  );
};

export default PreviousChatsSidebar;
