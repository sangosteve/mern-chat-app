import React from "react";
import "./ChatItem.css";

export default function ChatItem({ item }) {
  return (
    <div className={`chat_item ${item.type}`}>
      <div className="user_image_wrapper">
        <img src={item.userImg} className="user_image" />
      </div>
      <div className="user_message_wrapper">
        <div className="user_message_text_wrapper">
          <p>{item.msg}</p>
        </div>
        <div className="user_message_moment_wrapper">
          <small>{item.msgTime}</small>
          <small>{item.lastSeen}</small>
        </div>
      </div>
    </div>
  );
}
