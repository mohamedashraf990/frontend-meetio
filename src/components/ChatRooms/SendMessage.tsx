import React, { useState, useRef } from "react";
import EmojiPicker from "emoji-picker-react";
import { Send, Smile } from "lucide-react"; // Assuming you are using lucide-react for icons

interface SendMessageProps {
  scroll: React.RefObject<HTMLSpanElement>;
}

const SendMessage: React.FC<SendMessageProps> = ({ scroll }) => {
  const [message, setMessage] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const handleEmojiClick = (emojiObject: any) => {
    setMessage((prevMessage) => prevMessage + emojiObject.emoji);
    setShowEmojiPicker(false);
  };

  const sendMessage = () => {
    // Your send message logic here
    if (scroll.current) {
      scroll.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => setShowEmojiPicker((prev) => !prev)}
        className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
      >
        <Smile className="w-6 h-6" />
      </button>
      {showEmojiPicker && (
        <div className="absolute bottom-12">
          <EmojiPicker onEmojiClick={handleEmojiClick} />
        </div>
      )}
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="flex-1 p-2 border rounded-md"
        placeholder="Type a message"
      />
      <button
        onClick={sendMessage}
        className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
      >
        <Send className="w-6 h-6" />
      </button>
    </div>
  );
};

export default SendMessage;
