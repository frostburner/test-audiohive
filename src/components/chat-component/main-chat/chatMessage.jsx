import React from 'react';
import './message.css'
export default function ChatMessage({ content, sender, timestamp }) {
  return (
    <div className="messageContainer">
      <div className="sender">{sender}</div>
      <div className="content">{content}</div>
      <p className="timestamp">{timestamp}</p>
    </div>
  );
}