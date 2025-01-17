// filepath: /Users/mo/frontend-meetio/src/components/ChatRooms/SendMessage.tsx
"use-client";
import React, { useState } from "react";
import { auth, db } from "./firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { Send, Smile } from "lucide-react"; // Import the Send icon from Lucide
import EmojiPicker from "emoji-picker-react";

interface SendMessageProps {
  scroll: React.RefObject<HTMLSpanElement>;
}

const SendMessage: React.FC<SendMessageProps> = ({ scroll }) => {
  const [message, setMessage] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const sendMessage = async (event: React.FormEvent) => {
    event.preventDefault();
    if (message.trim() === "") {
      alert("Enter a valid message");
      return;
    }

    const user = auth.currentUser;
    if (!user) {
      alert("User not authenticated");
      return;
    }
    const { uid, displayName, photoURL } = user;
    await addDoc(collection(db, "messages"), {
      text: message,
      name: displayName,
      avatar: photoURL,
      createdAt: serverTimestamp(),
      uid,
    });
    setMessage("");
    if (scroll.current) {
      scroll.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleEmojiClick = (emojiObject: any) => {
    setMessage((prevMessage) => prevMessage + emojiObject.emoji);
    setShowEmojiPicker(false);
  };

  return (
    <form
      onSubmit={sendMessage}
      className="w-full p-4 bg-white dark:bg-gray-800 flex shadow-md rounded-b-[10px]"
    >
      <label htmlFor="messageInput" hidden>
        Enter Message
      </label>
      <button
        type="button"
        onClick={() => setShowEmojiPicker((prev) => !prev)}
        className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 mr-2"
      >
        <Smile className="w-6 h-6" />
      </button>
      {showEmojiPicker && (
        <div className="absolute bottom-16">
          <EmojiPicker onEmojiClick={handleEmojiClick} />
        </div>
      )}
      <input
        id="messageInput"
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message..."
        autoComplete="off"
        className=" flex-grow h-12 p-4 rounded-l-lg border border-gray-300 bg-gray-100 dark:bg-gray-700  transition duration-200 shadow-sm"
      />
      <button
        type="submit"
        className="w-20 h-12 p-4 rounded-r-lg bg-blue-500 text-white font-semibold hover:bg-blue-600 transition-colors duration-200 flex items-center justify-center shadow-sm focus:outline-none"
      >
        <Send className="h-5 w-5" />
      </button>
    </form>
  );
};

export default SendMessage;
