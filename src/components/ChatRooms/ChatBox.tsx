"use-client";
import React, { useEffect, useState, useRef } from "react";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { db } from "./firebase";
import Message from "./Message";
import SendMessage from "./SendMessage";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { ScrollArea } from "../Dashboard/ui/scroll-area";

interface MessageType {
  id: string;
  uid: string;
  avatar: string;
  name: string;
  text: string;
  createdAt: any;
}

const ChatBox: React.FC = () => {
  const [messages, setMessages] = useState<MessageType[]>([]);
  const scroll = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("createdAt"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const fetchedMessages: MessageType[] = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as MessageType[];
      const sortedMessages = fetchedMessages.sort(
        (a, b) => a.createdAt - b.createdAt
      );
      setMessages(sortedMessages);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="rounded-[10px] bg-white px-7.5 pb-4 pt-7.5 shadow-1 dark:bg-gray-dark dark:shadow-card">
      <div className="flex justify-between items-center mb-5">
        <h4 className="mb-5.5 text-body-2xlg font-bold text-dark dark:text-white">
          Recent Chats
        </h4>
        <div className="flex items-center">
          <ArrowLeft className="mr-2" size={20} />
          <ArrowRight size={20} />
        </div>
      </div>
      <ScrollArea className="h-[475px]">
        <div className="flex-1 overflow-y-auto p-8 mb-4 bg-gray-50 rounded-lg shadow-inner">
          {messages?.map((message) => (
            <Message key={message.id} message={message} />
          ))}
        </div>
      </ScrollArea>

      <SendMessage scroll={scroll} />
    </div>
  );
};

export default ChatBox;
