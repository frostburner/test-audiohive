import React, { useState, useRef, useEffect } from "react";
import "./chatbox.css";
import "./message.css";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import ImageIcon from "@mui/icons-material/Image";
import SendIcon from "@mui/icons-material/Send";
import ChatMessage from "./chatMessage";

export default function Chatbox() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const messageListRef = useRef(null);

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSendMessage = () => {
    if (message.trim() === "") {
      return; // Prevent sending empty messages
    }

    // Create a new message object
    const newMessage = {
      content: message,
      sender: "You",
      timestamp: new Date().toLocaleTimeString(),
    };

    // Update the messages array with the new message added at the bottom
    setMessages((prevMessages) => [...prevMessages.reverse(), newMessage].reverse());

    // Clear the message input field
    setMessage("");
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault(); // Prevent new line from being added

      handleSendMessage();
    }
  };

  useEffect(() => {
    // Scroll to the bottom of the message list when a new message is added
    messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
  }, [messages]);

  return (
    <div className="chatBoxContainer">
      <div className="messageList" ref={messageListRef}>
        {messages.map((message, index) => (
          <ChatMessage
            key={index}
            content={message.content}
            sender={message.sender}
            timestamp={message.timestamp}
          />
        ))}
      </div>
      <div className="chatBox">
        <textarea
          className="chatBoxReal"
          value={message}
          onChange={handleMessageChange}
          onKeyDown={handleKeyDown}
        />

        <MusicNoteIcon style={{ color: "#000" }} />
        <AttachFileIcon style={{ color: "#000" }} />
        <ImageIcon style={{ color: "#000" }} />

        <div className="sendContainer">
          <SendIcon
            fontSize="large"
            style={{ color: "#000" }}
            onClick={handleSendMessage}
          />
        </div>
      </div>
    </div>
  );
}